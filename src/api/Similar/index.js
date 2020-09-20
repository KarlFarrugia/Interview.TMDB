/*
 * Similar - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return a set of movies which are similar to the specified movie with id specified in the
 *  movie_id parameter. This function uses axios to return the latest movie according to a locale and then stores the result in a cookie for
 *  a long period of time as specified by the config file. Subsequent requests will make use of the stored cookie to retrieve the content of 
 *  similar movies as long as the cookie is still active, otherwise a new call is sent to the TMDB site.
 *
 * -------------------------------------------------------------------------------------------------------------------------------
 */

import axios from 'axios';
import { config, LONG_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../Helpers';
import * as Sentry from "@sentry/react";

//Global Declarations
let axiosSimilarRequest;
const COOKIE_PREFIX = "similar_";

/**
 * This function checks if the movie specified by the movie_id parameter is present in the cookie otherwise it proceeds to get similar movies
 * to the specified id from TMDB Web API. The retrieved object is the return as is to the calling function.
 * 
 * @param {String} movie_id the id of the movie to be retrieved
 * @param {String} locale the locale from which to retrieve the latest movie
 * @param {Int16Array} genre THIS DOESNT WORK BUT LEFT HERE FOR FUTURE PROOFING
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @returns {Object} the set of movie objects which are similar to the movie_id
 */
export default async function Similar (movie_id, locale, genre = 0, adult = false) {
  try{    
    //Default genre to empty such that when the query is executed it will not specify the genre query. A 0 or -1 will cause the query to return an empty list.
    if (genre <= 0)
      genre = "";

    //Retrieve values from cookie
    const cookie_name = `${COOKIE_PREFIX}${movie_id}_${locale}_${genre}_${adult}`;
    const cookie_value = GetFromCookie(cookie_name);

    // If cookie is not empty or undefined
    if (cookie_value === "" || cookie_value === undefined) {
      // Cancel previous request
      if (axiosSimilarRequest) 
          axiosSimilarRequest.cancel();
          
      // Creates a new token for upcomming ajax (overwrite the previous one)
      axiosSimilarRequest = axios.CancelToken.source();  
      
      // Use Axios to get the similar movies by id
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/similar`, {
        params: {
            page: 1,
            language: locale,
            with_genre: genre,
            include_adult: adult
        }
      });

      // Store the result in a cookie for subsequent requests for a long period set in the config file
      // Long period since actual movie details do not change as often.
      WriteToCookie(
        cookie_value,
        JSON.stringify(result.data.results),
        LONG_COOKIE_EXPIRY
      );

      // Return the movie related data
      return result.data.results;
    } 
    //otherwise return the content of the cookie
    else 
    {
      console.log(`Retrieved ${cookie_value} from storage`);
      // Return the movie related data
      return JSON.parse(cookie_value);
    }
  }catch (e){
    //Log exception to sentry
    Sentry.captureException(e, `An error was encountered while retrieving similar movies with the following parameters: movie id - ${movie_id}, locale - ${locale}, adult - ${adult}`);
  }
}
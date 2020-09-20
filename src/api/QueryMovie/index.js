/*
 * QueryMovie - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return the primary movie details as specified by the movie_id and locale parameters
 *  This function uses axios to return the latest movie according to a locale and then stores the result in a cookie for a long period of
 *  time as specified by th config file. Subsequent requests will make use of the stored cookie to retrieve the content of the latest movie
 *  as long as the cookie is still active, otherwise a new call is sent to the TMDB site.
 *
 * -------------------------------------------------------------------------------------------------------------------------------
 */

import axios from 'axios';
import { config, LONG_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../Helpers';
import * as Sentry from "@sentry/react";

//Global Declarations
let queryAxiosRequest;
const COOKIE_PREFIX = "query_";

/**
 * This function checks if the movie specified by the movie_id parameter is present in the cookie otherwise it proceeds to get it from TMDB 
 * Web API. The retrieved object is the return as is to the calling function.
 * 
 * @param {String} movie_id the id of the movie to be retrieved
 * @param {String} locale the locale from which to retrieve the latest movie
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @returns {Object} the movie data as a JavaScript Object
 */
export default async function Search (movie_id, locale = "de-DE", adult = false) {
  try{
    //Retrieve values from cookie
    const cookie_name = `${COOKIE_PREFIX}${movie_id}_${locale}`;
    const cookie_value = GetFromCookie(cookie_name);

    // If cookie is not empty or undefined
    if (cookie_value === "" || cookie_value === undefined) {
      
      // Cancel previous request
      if (queryAxiosRequest)
          queryAxiosRequest.cancel();

      // If no movie is returned passed as a parameter return an empty string
      if(movie_id.length === 0 || movie_id === "" || movie_id === undefined || movie_id === null)
        return "";

      // Creates a new token for upcomming ajax (overwrite the previous one)
      queryAxiosRequest = axios.CancelToken.source();  

      // Use Axios to get the movie by name
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}`, {
        params: {
            language: locale,
            include_adult: adult
        }
      });

      // Store the result in a cookie for subsequent requests for a long period set in the config file
      // Long period since actual movie details do not change as often.
      WriteToCookie(
        cookie_value,
        JSON.stringify(result.data),
        LONG_COOKIE_EXPIRY
      );

      // Return the movie related data
      return result.data;
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
    Sentry.captureException(e, `An error was encountered while retrieving the latest movies with the following parameters: movie id - ${movie_id}, locale - ${locale}, adult - ${adult}`);
  }
}
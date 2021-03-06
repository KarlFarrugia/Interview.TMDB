/*
 * Search - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return the primary movie details as specified by the moviename and locale parameters
 *  This function uses axios to search and return the movie according to the id and then stores the result in a cookie for a long period of
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
let searchAxiosRequest;

/**
 * This function checks if the movie specified by the moviename parameter is present in the cookie otherwise it proceeds to get it from TMDB 
 * Web API. The retrieved object is the return as is to the calling function.
 * 
 * @param {String} moviename the name of the movie to be retrieved
 * @param {String} locale the locale from which to retrieve the latest movie
 * @param {Int16Array} genre THIS DOESNT WORK BUT LEFT HERE FOR FUTURE PROOFING
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @param {Dispatch Function} error the dispatch function to trigger an error page rendering
 * @returns {Object} the movie data as a JavaScript Object
 */
export default async function Search (moviename, locale = "en", adult = false, error) {
  try{
    //Retrieve values from cookie
    const cookie_prefix = "search_";
    const cookie_name = `${cookie_prefix}${moviename}_${locale}_${adult}`;
    const cookie_value = GetFromCookie(cookie_name);

    // If cookie is not empty or undefined
    if (cookie_value === "" || cookie_value === undefined) {
      // Cancel previous request
      if (searchAxiosRequest)
        searchAxiosRequest.cancel();
      
      if(moviename.length === 0 || moviename === "" || moviename === undefined || moviename === null)
        return "";
        
      // Creates a new token for upcomming ajax (overwrite the previous one)
      searchAxiosRequest = axios.CancelToken.source();  
      
      // Use Axios to get the movie by name
      const { data } = await axios.get(`${config.TMDB.API_ROOT_URL}/search/movie`, {
        params: {
            page: 1,
            language: locale,
            query: moviename,
            include_adult: adult
        }
      });

      // Store the result in a cookie for subsequent requests for a long period set in the config file
      // Long period since actual movie details do not change as often.
      WriteToCookie(
        cookie_name,
        JSON.stringify(data.results),
        LONG_COOKIE_EXPIRY
      );

      return data.results;
    }
    //otherwise return the content of the cookie
    else 
    {
      console.log(`Retrieved ${cookie_value} from storage`);
      // Return the movie related data
      return JSON.parse(cookie_value);
    }
  } catch (e) {
    //Log exception to sentry
    Sentry.captureException(e, `An error was encountered while retrieving similar movies with the following parameters: movie name - ${moviename}, locale - ${locale}, adult - ${adult}`);
    error();
  }
}
/*
 * Keywords - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return the keywords of movie as specified by an parametised id. This function 
 *  uses axios to return the latest movie according to a locale and then stores the result in a cookie for a lpng period of time 
 *  as specified within the config file. Subsequent requests will make use of the stored cookie to retrieve the content of the latest 
 *  movie as long as the cookie is still active, otherwise a new call is sent to the TMDB site
 * 
 * -------------------------------------------------------------------------------------------------------------------------------
 */

//#region Imports

import axios from 'axios';
import { config, LONG_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../Helpers';
import * as Sentry from "@sentry/react";

//#endregion
 
//Global Declarations
let axiosKeywordsRequest;

/**
 * This function checks if the keywords related to a movie are present in the cookie otherwise it proceeds to get them from TMDB Web API.
 * 
 * @name Keywords
 * @function
 * @param {String} movie_id the id of the movie whose keywords needs to be retrieved
 * @param {Dispatch Function} error the dispatch function to trigger an error page rendering
 * @returns {Object} the keywords of the retrieved movie
 */
export default async function Keywords (movie_id, error) {
  try{
    //Retrieve values from cookie
    const cookie_prefix = "keywords_";
    const cookie_name = `${cookie_prefix}${movie_id}`;
    const cookie_value = GetFromCookie(cookie_name);
    
    // If cookie is not empty or undefined
    if (cookie_value === "") {
      // Cancel previous request
      if (axiosKeywordsRequest)
        axiosKeywordsRequest.cancel();

      // Creates a new token for upcomming ajax (overwrite the previous one)
      axiosKeywordsRequest = axios.CancelToken.source();  
      
      // Use Axios to get keywords related to the movie
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/keywords`);

      // Store the result in a cookie for subsequent requests for a long period set in the config file
      // Long period since keywords related to a movie should not change often.
      WriteToCookie(
        cookie_name,
        JSON.stringify(result.data.keywords),
        LONG_COOKIE_EXPIRY
      );

      // Return the movie related data
      return result.data.keywords;
    }
    //otherwise return the content of the cookie
    else
    {
      console.log(`Retrieved ${cookie_name} from storage`);
      // Return the movie related data
      return JSON.parse(cookie_value);
    }    
  }catch (e){
    //Log exception to sentry
    Sentry.captureException(e, `An error was encountered while retrieving the keywords of movie with id ${movie_id}`);
    error();
  }
}
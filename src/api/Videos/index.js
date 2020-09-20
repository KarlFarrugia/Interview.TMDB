/*
 * Videos - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return a set of videos from youtube and vimeo which are related to the movie with the id 
 *  specified in the movie_id parameter. This function uses axios to return the videos and then stores the result in a cookie for a long
 *  period of time as specified by the config file. Subsequent requests will make use of the stored cookie to retrieve the content of 
 *  movie videos as long as the cookie is still active, otherwise a new call is sent to the TMDB site.
 *
 * -------------------------------------------------------------------------------------------------------------------------------
 */

import axios from 'axios';
import { config, LONG_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../Helpers';
import * as Sentry from "@sentry/react";

//Global Declarations
let axiosVideosRequest;
const COOKIE_PREFIX = "videos_";

/**
 * This function checks if the movie specified by the movie_id parameter is present in the cookie otherwise it proceeds to get associated videos
 * to the specified id from TMDB Web API. The retrieved object is the return as is to the calling function.
 * 
 * @param {String} movie_id the id of the movie to be retrieved
 * @param {String} locale the locale from which to retrieve the movie
 * @returns {Object} the set of movie objects which are similar to the movie_id
 */
export default async function Videos (movie_id, locale="en") {
  try{
    //Retrieve values from cookie
    const cookie_name = `${COOKIE_PREFIX}${movie_id}_${locale}`;
    const cookie_value = GetFromCookie(cookie_name);

    // If cookie is not empty or undefined
    if (cookie_value === "" || cookie_value === undefined) {
      // Cancel previous request
      if (axiosVideosRequest)
        axiosVideosRequest.cancel();
      
      // creates a new token for upcomming ajax (overwrite the previous one)
      axiosVideosRequest = axios.CancelToken.source();  
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/videos`, {
        params: {
            language: locale
        }
      });
      
      // Store the result in a cookie for subsequent requests for a long period set in the config file
      // Long period since actual movie details do not change as often.
      WriteToCookie(
        cookie_value,
        JSON.stringify(result.data.results),
        LONG_COOKIE_EXPIRY
      );

      return result.data.results;
    }
    // Otherwise return the content of the cookie
    else 
    {
      console.log(`Retrieved ${cookie_value} from storage`);
      // Return the movie related data
      return JSON.parse(cookie_value);
    }
  }catch (e){
    //Log exception to sentry
    Sentry.captureException(e, `An error was encountered while retrieving the videos for the movie with the following parameters: movie id - ${movie_id}, locale - ${locale}`);
  }
}
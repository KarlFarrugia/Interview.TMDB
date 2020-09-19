/*
 * Latest - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return the latest movie. This function uses axios to return the latest movie and 
 *  then stores the result in a cookie for a short period of time as specified within the config file. Subsequent requests will make 
 *  use of the stored cookie to retrieve the content of the latest movie as long as the cookie is still active, otherwise a new call 
 *  is sent to the TMDB site.
 * 
 * -------------------------------------------------------------------------------------------------------------------------------
 */

import axios from 'axios';
import { config, SHORT_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../helpers';
import * as Sentry from "@sentry/react";

let latestAxiosRequest;
const COOKIE_PREFIX = "latest_id";

/**
 * This function checks if the latest movie is present in the cookie otherwise it proceeds to get it from TMDB Web API.
 * 
 * @returns {String} the id of the retrieved movie
 */
export default async function Latest () {
  try{
    //Retrieve values from cookie
    const cookie_name = COOKIE_PREFIX;
    const cookie_value = GetFromCookie(cookie_name);
    
    // If cookie is not empty or undefined
    if (cookie_value === "") {
      // Cancel previous request
      if (latestAxiosRequest)
          latestAxiosRequest.cancel();
          
      // Creates a new token for upcomming ajax (overwrite the previous one)
      latestAxiosRequest = axios.CancelToken.source();  

      // Use Axios to get the latest movie
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/latest`);

      // Store the result in a cookie for subsequent requests for a short period set in the config file.
      // Short period since latest movies change often.
      WriteToCookie(
        cookie_name,
        result.data.id,
        SHORT_COOKIE_EXPIRY
      );

      // Return the movie related data
      return result.data.id;
    }
    //otherwise return the content of the cookie
    else
    {
      console.log(`Retrieved ${cookie_name} from storage`);
      // Return the movie related data
      return cookie_value;
    }    
  }catch (e){
    //Log exception to sentry
    Sentry.captureException(e, `An error was encountered while retrieving the latest movie`);
  }
}
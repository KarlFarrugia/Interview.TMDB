/*
 * Common - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file returns a single default function to return a set of the latest 20 movie objects as required by the page page, locale 
 *  and genre parameters. This function uses axios to return the latest movie according to a locale and then stores the result in a
 *  cookie for a day as specified. Subsequent requests will make use of the stored cookie to retrieve the content of the latest movie
 *  as long as the cookie is still active, otherwise a new call is sent to the TMDB site.
 *
 * -------------------------------------------------------------------------------------------------------------------------------
 */

import axios from 'axios';
import { config } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../Helpers';
import * as Sentry from "@sentry/react";

/**
 * This function checks if the latest movie set is present in the cookie otherwise it proceeds to get it from TMDB Web API and dispatch it
 * to update the store. Since the movies themselves are dispatched to the store we do not need to return them. However, we do return the max
 * number of pages which can be used to query the latest movies. This is done since the first call that will retrieve the now playing movies
 * will update the respective pagination variable.
 * 
 * @param {Dispatch Function} action the dispatch action to update the movies to be rendered to the dom
 * @param {String} page the current page number
 * @param {String} locale the locale from which to retrieve the most popular movie
 * @param {String} region the region from which to retrieve the most popular movie
 * @param {Int16Array} genre the genres of the movies to be retrieved
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @returns {Int16Array} the maximum number of pages that can be retrieved
 */
export default async function Common_Api (cookie_name, api_endpoint, axios_request, action, COOKIE_EXPIRY, page, locale, region = "EN", genre = 0, adult) {
  try{
    //Default genre to empty such that when the query is executed it will not specify the genre query. A 0 or -1 will cause the query to return an empty list.
    if (genre <= 0)
      genre = "";

    //Retrieve values from cookie
    const cookie_value = GetFromCookie(cookie_name);
    if (cookie_value === "") {
      // Cancel previous request
      if (axios_request)
        axios_request.cancel();
          
      // Creates a new token for upcomming ajax (overwrite the previous one)
      axios_request = axios.CancelToken.source();  

      // Use Axios to get the latest movie
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}${api_endpoint}`, {
          params: {
              page: page,
              language: locale,
              region: region,
              with_genres: genre,
              include_adult: adult
          }
      });
      
      // Store the result in a cookie for subsequent requests for a day.
      // Assuming now playing movies are updated daily.
      WriteToCookie(
        cookie_name,
        JSON.stringify(result.data),
        COOKIE_EXPIRY
      );
      
      // Dispatch the results to be stored within the store
      action(result.data.results);
      // Return the total pages
      return result.data.total_pages;
    }
    //otherwise return the content of the cookie
    else
    {
      //Logging
      Sentry.captureMessage(`Now Playing Cookie Content ${cookie_value}`);
      console.log(`Retrieved ${cookie_name} from storage`);
      // Parse the object retrieved from the cookie
      const parsed_cookie = JSON.parse(cookie_value);
      // Dispatch the results to be stored within the store
      action(parsed_cookie.results);
      // Return the total pages
      return parsed_cookie.total_pages;
    }    
  }catch (e){
    //Log exception to sentry
    Sentry.captureException(e, `An error was encountered while retrieving the movies from ${api_endpoint} with the following parameters: page - ${page}, locale - ${locale}, region - ${region} & genre - ${genre}`);
  }
}
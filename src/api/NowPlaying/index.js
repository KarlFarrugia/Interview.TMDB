/*
 * NowPlaying - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file uses the common api function to return a single default function which returns a set of the latest 20 movie objects as 
 *  required by the page, locale, genre and adult parameters. 
 *
 * -------------------------------------------------------------------------------------------------------------------------------
 */

//#region Imports

import { DAY_COOKIE_EXPIRY } from '../../config';
import Common_Api from '../Common';

//#endregion

//Global Declaration
let nowPlayingAxiosRequest;

/**
 * This function is a proxy to the common api. However, it adds the specific api endpoint route and cookie related configurations to 
 * get the most current movies from the common api.
 * 
 * @name NowPlaying
 * @function
 * @param {Dispatch Function} action the dispatch action to update the movies to be rendered to the dom
 * @param {String} page the current page number
 * @param {String} locale the locale from which to retrieve the movies that are now playing
 * @param {String} region the region from which to retrieve the movies that are now playing
 * @param {Int16Array} genre the genres of the movies to be retrieved
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @param {Dispatch Function} error the dispatch function to trigger an error page rendering
 * @returns {Int16Array} the maximum number of pages that can be retrieved
 */
export default async function NowPlaying (action, page, locale, region, genre = 0, adult, error) {
  return Common_Api("/movie/now_playing", nowPlayingAxiosRequest, action, DAY_COOKIE_EXPIRY, page, locale, region, genre, adult, error);
}
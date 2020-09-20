/*
 * Popular - index.js
 * Author: Karl Farrugia
 * -------------------------------------------------------------------------------------------------------------------------------
 * 
 *  This file uses the common api function to return a single default function which returns a set of the 20 most popular movie objects 
 *  as required by the page, locale, genre and adult parameters. 
 *
 * -------------------------------------------------------------------------------------------------------------------------------
 */

import { DAY_COOKIE_EXPIRY } from '../../config';
import Common_Api from '../Common';

//Global Declarations
let nowPlayingAxiosRequest;

/**
 * This function is a proxy to the common api. However, it adds the specific api endpoint route and cookie related configurations to 
 * get the most popular movies from the common api.
 * 
 * @name Popular
 * @function
 * @param {Dispatch Function} action the dispatch action to update the movies to be rendered to the dom
 * @param {String} page the current page number
 * @param {String} locale the locale from which to retrieve the most popular movie
 * @param {String} region the region from which to retrieve the most popular movie
 * @param {Int16Array} genre the genres of the movies to be retrieved
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @param {Dispatch Function} error the dispatch function to trigger an error page rendering
 * @returns {Int16Array} the maximum number of pages that can be retrieved
 */
export default async function Popular (action, page, locale, region = "EN", genre = 0, adult, error) {
  return Common_Api("/movie/popular", nowPlayingAxiosRequest, action, DAY_COOKIE_EXPIRY, page, locale, region, genre, adult, error);
}
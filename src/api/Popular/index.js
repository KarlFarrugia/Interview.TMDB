/*
 * Popular - index.js
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
import { config, DAY_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../Helpers';
import * as Sentry from "@sentry/react";
import Common_Api from '../Common';

//Global Declarations
let nowPlayingAxiosRequest;
const COOKIE_PREFIX = "now_playing_";

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
export default async function Popular (action, page, locale, region = "EN", genre = 0, adult) {
  return Common_Api(COOKIE_PREFIX, "/movie/popular", nowPlayingAxiosRequest, action, DAY_COOKIE_EXPIRY, page, locale, region, genre, adult);
}
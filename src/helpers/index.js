//#region Imports

// Import logging components
import * as Sentry from "@sentry/react";

// Import custom configurations
import { GENRES } from "../config";
 
//#endregion

/**
 * Retrieves the genre using an id and the genre list in the config file
 * 
 * @param {Int16Array} id the id of the genre to have its name retrieved
 */
export function genreRetriever (id) {
    try{
        return GENRES.find(genre => genre.id === id).name;
    }catch(e){
        Sentry.captureException(e, `An error was encountered while retrieving the genre with id ${id}`);
        return "";
    }
}

/**
 * Returns the year part of a date
 * 
 * @param {String} date returns the year part of the TMDB date property. If there is no date an empty string is returned instead
 */
export function dateExtractor (date){
    try{
        return date.substring(0,4)
    }catch(e){
        Sentry.captureException(e, `An error was encountered while extracting the date from ${date}`);
        return "";
    }
}

/**
 * Returns a cleaned url from the provided parameter
 * 
 * @param {String} url the url to be cleansed. If no url is provided an empty string is returned.
 */
export function urlCleaner (url){
    try{
        if(url){
            if(url.slice(url.length - 1) === '/')       
                url = url.slice(0, -1);
            return url.replace(/(^\w+:|^)\/\//, '');
        }
        return "";
    }catch(e){
        Sentry.captureException(e, `An error while cleaning the following url: ${url}`);
        return "";
    }
}

/**
 * Returns a localised number with commas every 3 digits and a euro sign in from
 * 
 * @param {Int16Array} number the number to be localised.
 */
export function numberLocalisation (number){
    try{
        if(number > 0){
            return `€${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        } else{
            return "N/A";
        }
    }catch(e){
        Sentry.captureException(e, `An error was encountered while localising the following number: ${number}`);
        return number;
    }
}

/**
 * Writes a global cookie in the browser
 * 
 * @param {String} key the key to identify the cookie
 * @param {String} value the value the cookie is to store
 * @param {Int8Array} cookie_expiry_in_days the days when the cookie is set to expire
 */
export function WriteToCookie (key, value, cookie_expiry_in_days) {
    let expiry_date = new Date();
    expiry_date.setDate(expiry_date.getDate() + cookie_expiry_in_days);
    document.cookie = key + "=" + value + ";expires=" + expiry_date + ";path=/";
}

/**
 * This function returns the value associated with a cookie
 * 
 * @param {String} key the key of the cookie
 * @returns {String} the value of the cookie
 */
export function GetFromCookie (key) {
    try{
        const value = "; " + document.cookie;
        const parts = value.split("; " + key + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
        return "";
    } catch (e) {
        return "";
    }
}

/**
 * Deletes the provided cookie from storage by setting it as expired
 * 
 * @param {String} key the key of the cookie to be deleted
 */
export function DeleteCookie (key) {
    document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

/**
 * Writes a global session in the browser
 * 
 * @param {String} key the key to identify the session
 * @param {String} value the value the session is to store
 * @param {Int8Array} session_expiry_in_days the days when the session is set to expire
 */
export function WriteToSession (key, value, session_expiry_in_days) {
    let expiry_date = new Date();
    expiry_date.setDate(expiry_date.getDate() + session_expiry_in_days);
    let newValue = {
        value: value,
        expirationDate: expiry_date.toISOString()
    }
    window.sessionStorage.setItem(key, JSON.stringify(newValue))
}

/**
 * This function returns the value associated with a session
 * 
 * @param {String} key the key of the session
 * @returns {String} the value of the session
 */
export function GetFromSession (key) {
    try{
        let stringValue = window.sessionStorage.getItem(key)
        if (stringValue !== null) {
        let value = JSON.parse(stringValue)
            let expirationDate = new Date(value.expirationDate)
            if (expirationDate > new Date()) {
                return value.value
            } else {
                window.sessionStorage.removeItem(key)
            }
        }
        return "";
    } catch (e) {
        return "";
    }
}

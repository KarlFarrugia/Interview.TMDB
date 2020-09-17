import {GENRES} from "../config";

export function genreRetriever (id) {
    try{
        return GENRES.find(genre => genre.id === id).name;
    }catch(e){
        return "";
    }
}

export function dateExtractor (date){
    try{
        return date.substring(0,4)
    }catch(e){
        return "";
    }
}

export function urlCleaner (url){
    try{
        if(url){
            if(url.slice(url.length - 1) === '/')       
                url = url.slice(0, -1);
            return url.replace(/(^\w+:|^)\/\//, '');
        }
        return "";
    }catch(e){
        return "";
    }
}

export function numberLocalisation (number){
    try{
        if(number > 0){
            return `€${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        } else{
            return "Data Not Available";
        }
    }catch(e){
        return number;
    }
}

/**
 * Writes a global cookie in the browser
 * 
 * @param {String} name the name to identify the cookie
 * @param {String} value the value the cookie is to store
 * @param {Int8Array} cookie_expiry_in_days the days when the cookie is set to expire
 */
export function WriteToCookie (name, value, cookie_expiry_in_days) {
    let expiry_date = new Date();
    expiry_date.setDate(expiry_date.getDate() + cookie_expiry_in_days);
    document.cookie = name + "=" + value + ";expires=" + expiry_date + ";path=/";
}

/**
 * This function returns the value associated with a cookie
 * 
 * @param {String} name the name of the cookie
 * @returns {String} the value of the cookie
 */
export function GetFromCookie (name) {
    try{
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
        return "";
    } catch (e) {
        return "";
    }
}

/**
 * Deletes the provided cookie from storage by setting it as expired
 * 
 * @param {String} name the name of the cookie to be deleted
 */
export function DeleteCookie (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
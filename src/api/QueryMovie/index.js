import React from 'react';
import axios from 'axios';
import { config } from '../../config';
import Card from '../../components/Card/Card';

let queryAxiosRequest;

export default async function Search (moviename, locale) {
  try{
    // Cancel previous request
    if (queryAxiosRequest) {
        queryAxiosRequest.cancel();
    }
    if(moviename.length === 0 || moviename === "" || moviename === undefined || moviename === null){
      return "";
    }else{
     // creates a new token for upcomming ajax (overwrite the previous one)
     queryAxiosRequest = axios.CancelToken.source();  
     const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${moviename}`, {
      params: {
          language: locale
      }
    });
    return result.data;
    }
  }catch (e){}
}
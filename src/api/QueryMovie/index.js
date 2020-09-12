import React from 'react';
import axios from 'axios';
import config from '../../config';
import Card from '../../components/Card/Card';

let queryAxiosRequest;

export default async function Search (setState, moviename, locale) {
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
     const result = await axios.get(`${config.TMDB.API_ROOT_URL}/search/movie?api_key=${config.TMDB.API_KEY}&query=${moviename}&page=1&language=${locale}`);
     setState(result.data.results.map((prop, key) => <Card props={prop}/>));
    }
  }catch (e){}
}
import axios from 'axios';
import { config } from '../../config';

let axiosRequest;

export default async function Search (moviename, locale, adult = false) {
  try{
    // Cancel previous request
    if (axiosRequest) {
       axiosRequest.cancel();
    }
    if(moviename.length === 0 || moviename === "" || moviename === undefined || moviename === null){
      return "";
    }else{
     // creates a new token for upcomming ajax (overwrite the previous one)
     axiosRequest = axios.CancelToken.source();  
     const { data } = await axios.get(`${config.TMDB.API_ROOT_URL}/search/movie`, {
      params: {
          /*api_key: config.TMDB.API_KEY,*/
          page: 1,
          language: locale,
          query: moviename,
          include_adult: adult
      }
    });
     return data.results;
    }
  }catch (e){}
}
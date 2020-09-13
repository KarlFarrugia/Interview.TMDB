import axios from 'axios';
import { config } from '../../config';

let axiosSimilarRequest;

export default async function Similar (movie_id, locale) {
  try{
    // Cancel previous request
    if (axiosSimilarRequest) {
        axiosSimilarRequest.cancel();
    }
    // creates a new token for upcomming ajax (overwrite the previous one)
    axiosSimilarRequest = axios.CancelToken.source();  
    const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/similar`, {
      params: {
          /*api_key: config.TMDB.API_KEY,*/
          page: 1,
          language: locale
      }
    });
    return result.data.results;
  }catch (e){}
}
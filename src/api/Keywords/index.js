import axios from 'axios';
import { config } from '../../config';

let axiosKeywordsRequest;

export default async function Keywords (movie_id) {
  try{
    // Cancel previous request
    if (axiosKeywordsRequest) {
      axiosKeywordsRequest.cancel();
    }
    // creates a new token for upcomming ajax (overwrite the previous one)
    axiosKeywordsRequest = axios.CancelToken.source();  
    const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/keywords`, {
      params: {
          /*api_key: config.TMDB.API_KEY,*/
      }
    });
    return result.data.keywords;
  }catch (e){}
}
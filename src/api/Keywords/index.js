import axios from 'axios';
import { config, LONG_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../helpers';
 
let axiosKeywordsRequest;
const COOKIE_PREFIX = "keywords_";

export default async function Keywords (movie_id) {
  try{
    const cookie_value = GetFromCookie(`${COOKIE_PREFIX}${movie_id}`);
    if (cookie_value === "") {
      // Cancel previous request
      if (axiosKeywordsRequest) {
        axiosKeywordsRequest.cancel();
      }
      // creates a new token for upcomming ajax (overwrite the previous one)
      axiosKeywordsRequest = axios.CancelToken.source();  
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/keywords`);
      WriteToCookie((`${COOKIE_PREFIX}${movie_id}`),JSON.stringify(result.data.keywords),LONG_COOKIE_EXPIRY);
      return result.data.keywords;
    }else{
      console.log(`Retrieved ${COOKIE_PREFIX}${movie_id} from storage`);
      return JSON.parse(cookie_value);
    }    
  }catch (e){}
}
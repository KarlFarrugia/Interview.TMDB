import axios from 'axios';
import { config, DAY_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../helpers';

let nowPlayingAxiosRequest;
const COOKIE_PREFIX = "now_playing_";

export default async function Latest (action, page, locale, genre = "") {
  try{
    debugger;
    const cookie_value = GetFromCookie(`${COOKIE_PREFIX}${page}_${locale}_${genre}`);
    if (cookie_value === "") {
      // Cancel previous request
      if (nowPlayingAxiosRequest) {
          nowPlayingAxiosRequest.cancel();
      }
      // creates a new token for upcomming ajax (overwrite the previous one)
      nowPlayingAxiosRequest = axios.CancelToken.source();  
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/now_playing`, {
          params: {
              /*api_key: config.TMDB.API_KEY,*/
              page: page,
              language: locale,
              with_genres: genre
          }
      });
      WriteToCookie((`${COOKIE_PREFIX}${page}_${locale}_${genre}`),JSON.stringify(result.data.keywords),DAY_COOKIE_EXPIRY);
      action(result.data.results);
      return result.data.total_pages;
    }else{
      console.log(`Retrieved ${COOKIE_PREFIX}${page}_${locale}_${genre} from storage`);
      const parsed_cookie = JSON.parse(cookie_value);
      action(parsed_cookie.results);
      return parsed_cookie.total_pages;
    }    
  }catch (e){}
}
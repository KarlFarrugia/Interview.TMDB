import axios from 'axios';
import { config, MEDIUM_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../helpers';

let queryAxiosRequest;
const COOKIE_PREFIX = "query_";

export default async function Search (moviename, locale) {
  try{
    const cookie_value = GetFromCookie(`${COOKIE_PREFIX}${moviename}_${locale}`);
    if (cookie_value === "") {
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
      WriteToCookie((`${COOKIE_PREFIX}${moviename}_${locale}`),JSON.stringify(result.data),MEDIUM_COOKIE_EXPIRY);
      return result.data;
      }
    } else {
      console.log(`Retrieved ${COOKIE_PREFIX}${moviename}_${locale} from storage`);
      return JSON.parse(cookie_value);
    }
  }catch (e){}
}
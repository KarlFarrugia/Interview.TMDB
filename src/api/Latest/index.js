import axios from 'axios';
import { config, SHORT_COOKIE_EXPIRY } from '../../config';
import { WriteToCookie, GetFromCookie } from '../../helpers';

let latestAxiosRequest;
const COOKIE_PREFIX = "latest_id_";

export default async function Latest (locale) {
  try{
    const cookie_value = GetFromCookie(`${COOKIE_PREFIX}${locale}`);
    if (cookie_value === "") {
      // Cancel previous request
      if (latestAxiosRequest) {
          latestAxiosRequest.cancel();
      }
      // creates a new token for upcomming ajax (overwrite the previous one)
      latestAxiosRequest = axios.CancelToken.source();  
      const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/latest`, {
        params: {
            language: locale
        }
      });
      WriteToCookie((`${COOKIE_PREFIX}${locale}`),result.data.id,SHORT_COOKIE_EXPIRY);
      return result.data.id;
    }else{
      console.log(`Retrieved ${COOKIE_PREFIX}${locale} from storage`);
      return cookie_value;
    }    
  }catch (e){}
}
import axios from 'axios';
import { config } from '../../config';

let latestAxiosRequest;

export default async function Latest (locale) {
  try{
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
    return result.data.id;
  }catch (e){}
}
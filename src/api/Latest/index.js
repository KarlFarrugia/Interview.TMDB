import axios from 'axios';
import config from '../../config';

let latestAxiosRequest;

export default async function Latest (setState, locale) {
  try{
    // Cancel previous request
    if (latestAxiosRequest) {
        latestAxiosRequest.cancel();
    }
    // creates a new token for upcomming ajax (overwrite the previous one)
    latestAxiosRequest = axios.CancelToken.source();  
    const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/latest?api_key=${config.TMDB.API_KEY}&language=${locale}`);
    console.log(`${config.TMDB.API_ROOT_URL}/movie/latest?api_key=${config.TMDB.API_KEY}&language=${locale}`);
    setState(result.data);
  }catch (e){}
}
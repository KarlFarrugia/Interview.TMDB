import axios from 'axios';
import { config } from '../../config';

let axiosVideosRequest;

export default async function Keywords (movie_id) {
  try{
    // Cancel previous request
    if (axiosVideosRequest) {
      axiosVideosRequest.cancel();
    }
    // creates a new token for upcomming ajax (overwrite the previous one)
    axiosVideosRequest = axios.CancelToken.source();  
    const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/${movie_id}/videos`);
    return result.data.results;
  }catch (e){}
}
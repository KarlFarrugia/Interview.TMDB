import axios from 'axios';
import { config } from '../../config';

let nowPlayingAxiosRequest;

export default async function Latest (dispatch, action, page, locale, genre = "") {
  try{
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
    dispatch(action(result.data.results));
  }catch (e){}
}
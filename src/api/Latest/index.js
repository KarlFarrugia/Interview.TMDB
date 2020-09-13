import axios from 'axios';
import { config } from '../../config';
import keywords from '../Keywords';
import similar from '../Similar';

let latestAxiosRequest;

async function SetKeywords(movie_id, setKeywordsState){    
  setKeywordsState(await keywords(movie_id));
}

async function GetSimilarMovies(movie_id, dispatch, APPEND_MOVIES){
  dispatch(APPEND_MOVIES(await similar(movie_id)));
}

export default async function Latest (dispatch, APPEND_MOVIES, setMovieState, setKeywordsState, locale) {
  try{
    // Cancel previous request
    if (latestAxiosRequest) {
        latestAxiosRequest.cancel();
    }
    // creates a new token for upcomming ajax (overwrite the previous one)
    latestAxiosRequest = axios.CancelToken.source();  
    const result = await axios.get(`${config.TMDB.API_ROOT_URL}/movie/latest`, {
      params: {
          /*api_key: config.TMDB.API_KEY,*/
          language: locale
      }
    });
    SetKeywords(result.data.id, setKeywordsState);
    GetSimilarMovies(result.data.id, dispatch, APPEND_MOVIES)
    setMovieState(result.data);
  }catch (e){}
}
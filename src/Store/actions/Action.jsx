import {
  GET_MOVIE_SEARCH,
  ADD_MOVIES,
  REMOVE_MOVIES
} from "./Types";

export const MOVIE_SEARCH = (query) => {
  return{ 
    type: GET_MOVIE_SEARCH, 
    payload: query 
  };
};

export const APPEND_MOVIES = (movies) => {
  return {
      type: ADD_MOVIES,
      payload: movies 
  }
};

export const TRUNCATE_MOVIES = () => {
  return {
      type: REMOVE_MOVIES
  }
};
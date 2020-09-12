import {
  GET_MOVIE_SEARCH,
  ADD_MOVIES,
  REMOVE_MOVIES,
  GET_GENRES,
  SET_GENRE
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

export const RETRIEVE_GENRES = (genres) => {
  return {
      type: GET_GENRES,
      payload: genres 
  }
};

export const UPDATE_GENRE = (genre) => {
  return {
    type: SET_GENRE,
    payload: genre 
  }
}
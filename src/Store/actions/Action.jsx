import {
  GET_MOVIE_SEARCH,
  ADD_MOVIES,
  CLEAR_MOVIES,
  REMOVE_MOVIES,
  GET_GENRES,
  SET_GENRE,
  SET_LANGUAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE
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

export const CLEAR_ALL_MOVIES = () => {
  return {
      type: CLEAR_MOVIES
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
};

export const UPDATE_LANGUAGE = (lang) => {
  return {
      type: SET_LANGUAGE,
      payload: lang 
  }
};

export const INCREMENT_MOVIE_PAGE = () =>{
  return {
    type: INCREMENT_PAGE
  }
};

export const DECREMENT_MOVIE_PAGE = () =>{
  return {
    type: DECREMENT_PAGE
  }
};
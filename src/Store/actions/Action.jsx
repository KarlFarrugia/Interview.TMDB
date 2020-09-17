import {
  MOVIE_SEARCH,
  ADD_MOVIES,
  CLEAR_MOVIES,
  REMOVE_MOVIES,
  REPLACE_MOVIES,
  GET_GENRES,
  SET_GENRE,
  SET_LANGUAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  TOGGLE_ADULT,
  SET_PAGE,
  UPDATE_LOCALE
} from "./Types";

export const ACTION_MOVIE_SEARCH = (query) => async (dispatch)  => {
  dispatch({ 
    type: MOVIE_SEARCH, 
    payload: query 
  });
};

export const ACTION_TOGGLE_ADULT = () => {
  return{ 
    type: TOGGLE_ADULT
  };
};

export const APPEND_MOVIES = (movies) => {
  return {
      type: ADD_MOVIES,
      payload: movies 
  }
};

export const ACTION_APPEND_MOVIES = (movies) => async (dispatch)  => {
  dispatch({ 
    type: ADD_MOVIES, 
    payload: movies 
  });
};

export const ACTION_REPLACE_MOVIES = (movies) => {
  return {
      type: REPLACE_MOVIES,
      payload: movies 
  }
};
export const ACTION_CLEAR_ALL_MOVIES = () => async (dispatch)  => {
  dispatch({ 
    type: CLEAR_MOVIES
  });
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

export const ACTION_SET_PAGE = (page) => async (dispatch)  => {
  dispatch({
    type: SET_PAGE,
    payload: page
  });
};

export const ACTION_UPDATE_LOCALE = (locale) => {
  return{
    type: UPDATE_LOCALE,
    payload: locale
  }
};
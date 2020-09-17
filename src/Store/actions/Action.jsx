import {
  MOVIE_SEARCH,
  ADD_MOVIES,
  CLEAR_MOVIES,
  SET_GENRE,
  SET_LANGUAGE,
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

export const ACTION_APPEND_MOVIES = (movies) => async (dispatch)  => {
  dispatch({ 
    type: ADD_MOVIES, 
    payload: movies 
  });
};

export const ACTION_CLEAR_ALL_MOVIES = () => async (dispatch)  => {
  dispatch({ 
    type: CLEAR_MOVIES
  });
};

export const ACTION_SET_PAGE = (page) => async (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page
  });
};

export const ACTION_UPDATE_GENRE = (genre) => async (dispatch) => {
  dispatch({
    type: SET_GENRE,
    payload: genre 
  });
};

export const ACTION_UPDATE_LANGUAGE = (lang) => async (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: lang 
  });
};

export const ACTION_TOGGLE_ADULT = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_ADULT
  });
};

export const ACTION_UPDATE_LOCALE = (locale) => async (dispatch) => {
  dispatch({
    type: UPDATE_LOCALE,
    payload: locale
  });
};
import {
  GET_MOVIE_SEARCH,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR
} from "./Types";

export const MOVIE_SEARCH = (id, path) => async (dispatch) => {
  dispatch({ type: GET_MOVIE_SEARCH, payload: id });
};

export const MOVIE_SUCCESS = (id, path) => async (dispatch) => {
  dispatch({ type: GET_MOVIE_SUCCESS, payload: id });
};

export const MOVIE_ERROR = (id, path) => async (dispatch) => {
  dispatch({ type: GET_MOVIE_ERROR, payload: id });
};
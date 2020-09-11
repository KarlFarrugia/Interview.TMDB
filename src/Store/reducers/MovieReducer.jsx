import {
  GET_MOVIE_SEARCH,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
} from "../actions/Types";

const MOVIE_INITIAL_STATE = {
  movie: null,
  clickedMovieId: "",
  isError: false,
  isLoading: false
};

export default (state = MOVIE_INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_SEARCH:
      console.log("GET_MOVIE_SEARCH");
      return {
        ...state,
        isError: false,
        isLoading: true
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    default:
      return state;
  }
};
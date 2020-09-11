import {
  GET_MOVIE_SEARCH
} from "./Types";

export const MOVIE_SEARCH = (query) => {
  return{ 
    type: GET_MOVIE_SEARCH, 
    payload: query 
  };
};

import {MOVIE_SEARCH} from "../actions/Types";

export default (state = "", action) => {
  switch (action.type) {
    case MOVIE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
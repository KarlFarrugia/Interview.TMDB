import {MOVIE_SEARCH} from "../actions/Types";

export default (state = "", action) => {
  debugger;
  switch (action.type) {
    case MOVIE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
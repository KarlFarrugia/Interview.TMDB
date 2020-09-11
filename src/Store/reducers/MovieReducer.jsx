import {GET_MOVIE_SEARCH} from "../actions/Types";

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case GET_MOVIE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
import {SET_GENRE} from "../actions/Types";

export default (state = -1, action) => {
  switch (action.type) {
    case SET_GENRE:
      return action.payload;
    default:
      return state;
  }
};
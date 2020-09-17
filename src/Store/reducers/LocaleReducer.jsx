import {UPDATE_LOCALE} from "../actions/Types";

export default (state = "en-EN", action) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      return action.payload;
    default:
      return state;
  }
};
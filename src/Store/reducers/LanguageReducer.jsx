import {SET_LANGUAGE} from "../actions/Types";

export default (state = "en", action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
import {UPDATE_REGION} from "../actions/Types";

export default (state = "GB", action) => {
  switch (action.type) {
    case UPDATE_REGION:
      return action.payload;
    default:
      return state;
  }
};
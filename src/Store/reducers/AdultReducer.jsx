import {TOGGLE_ADULT} from "../actions/Types";

export default (state = true, action) => {
  switch (action.type) {
    case TOGGLE_ADULT:
      return !state;
    default:
      return state;
  }
};
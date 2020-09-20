import {SET_PAGE, RESET_PAGE} from "../actions/Types";

const INITIAL_STATE = 1

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    case RESET_PAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
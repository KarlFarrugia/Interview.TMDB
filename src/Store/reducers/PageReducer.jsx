import {INCREMENT_PAGE, DECREMENT_PAGE, CLEAR_MOVIES} from "../actions/Types";

const INITIAL_STATE = 1

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return state + 1;
    case DECREMENT_PAGE:
      return state - 1;
    case CLEAR_MOVIES:
        return INITIAL_STATE;
    default:
      return state;
  }
};
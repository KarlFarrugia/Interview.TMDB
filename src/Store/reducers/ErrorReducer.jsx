import {ERROR, RESOLVE} from "../actions/Types";

export default (state = true, action) => {
  switch (action.type) {
    case ERROR:
        return false;
    case RESOLVE:
        return true;
    default:
      return state;
  }
};
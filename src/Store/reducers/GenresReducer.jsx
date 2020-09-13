import {GET_GENRES} from "../actions/Types";
import {GENRES} from "../../config";

export default (state = GENRES, action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.payload;
    default:
      return state;
  }
};
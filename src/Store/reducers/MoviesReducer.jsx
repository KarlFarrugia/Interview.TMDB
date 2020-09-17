import {ADD_MOVIES, CLEAR_MOVIES} from "../actions/Types";

const moviesReducer = (state = [], action) => {
    switch(action.type){
        case ADD_MOVIES:
            return [...state, ...action.payload];
        case CLEAR_MOVIES:
            return [];
        default:
            return state;
    }
} 
export default moviesReducer;
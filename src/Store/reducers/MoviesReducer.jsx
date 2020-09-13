import {ADD_MOVIES, REMOVE_MOVIES, CLEAR_MOVIES, REPLACE_MOVIES} from "../actions/Types";

const moviesReducer = (state = [], action) => {
    switch(action.type){
        case ADD_MOVIES:
            return [...state, ...action.payload];
        case REMOVE_MOVIES:
            return state.splice(0,state.length-20);
        case CLEAR_MOVIES:
            return [];
        case REPLACE_MOVIES:
            return action.payload;
        default:
            return state;
    }
} 
export default moviesReducer;
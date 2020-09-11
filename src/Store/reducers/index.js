import { combineReducers } from 'redux';
import counterReducer from './counter';
import movieReducer from './MovieReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    movie: movieReducer
});

export default allReducers; 
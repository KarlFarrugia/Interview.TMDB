import { combineReducers } from 'redux';
import moviesReducer from './MoviesReducer.jsx';
import movieReducer from './MovieReducer';

const allReducers = combineReducers({
    movies: moviesReducer,
    movie: movieReducer
});

export default allReducers; 
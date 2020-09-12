import { combineReducers } from 'redux';
import genreReducer from './GenreReducer.jsx';
import currentGenreReducer from './CurrentGenreReducer.jsx';
import moviesReducer from './MoviesReducer.jsx';
import movieReducer from './MovieReducer';

const allReducers = combineReducers({
    genres: genreReducer,
    genre: currentGenreReducer,
    movies: moviesReducer,
    movie: movieReducer
});

export default allReducers; 
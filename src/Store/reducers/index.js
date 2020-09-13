import { combineReducers } from 'redux';
import genresReducer from './GenresReducer.jsx';
import genreReducer from './GenreReducer.jsx';
import moviesReducer from './MoviesReducer.jsx';
import movieReducer from './MovieReducer.jsx';
import languageReducer from './LanguageReducer.jsx';
import pageReducer from './PageReducer.jsx';
import adultReducer from './AdultReducer.jsx';

const allReducers = combineReducers({
    genres: genresReducer,
    genre: genreReducer,
    movies: moviesReducer,
    movie: movieReducer,
    language: languageReducer,
    page: pageReducer,
    adult: adultReducer,
});

export default allReducers; 
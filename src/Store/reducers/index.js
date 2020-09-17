import { combineReducers } from 'redux';
import genresReducer from './GenresReducer.jsx';
import genreReducer from './GenreReducer.jsx';
import moviesReducer from './MoviesReducer.jsx';
import searchReducer from './SearchReducer.jsx';
import languageReducer from './LanguageReducer.jsx';
import localeReducer from './LocaleReducer.jsx';
import pageReducer from './PageReducer.jsx';
import adultReducer from './AdultReducer.jsx';

const allReducers = combineReducers({
    genres: genresReducer,
    genre: genreReducer,
    movies: moviesReducer,
    search: searchReducer,
    language: languageReducer,
    locale: localeReducer,
    page: pageReducer,
    adult: adultReducer,
});

export default allReducers; 
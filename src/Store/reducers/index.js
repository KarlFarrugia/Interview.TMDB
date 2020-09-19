import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import genreReducer from './GenreReducer.jsx';
import moviesReducer from './MoviesReducer.jsx';
import searchReducer from './SearchReducer.jsx';
import languageReducer from './LanguageReducer.jsx';
import localeReducer from './LocaleReducer.jsx';
import pageReducer from './PageReducer.jsx';
import adultReducer from './AdultReducer.jsx';

const allReducers = combineReducers({
    genre: genreReducer,
    movies: moviesReducer,
    search: searchReducer,
    language: languageReducer,
    locale: localeReducer,
    page: pageReducer,
    adult: adultReducer,
    routing: routerReducer
});

export default allReducers; 
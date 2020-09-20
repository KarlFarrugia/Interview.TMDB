import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import genreReducer from './GenreReducer.jsx';
import moviesReducer from './MoviesReducer.jsx';
import searchReducer from './SearchReducer.jsx';
import languageReducer from './LanguageReducer.jsx';
import localeReducer from './LocaleReducer.jsx';
import errorReducer from './ErrorReducer.jsx';
import pageReducer from './PageReducer.jsx';
import adultReducer from './AdultReducer.jsx';
import regionReducer from './RegionReducer.jsx';

const allReducers = combineReducers({
    genre: genreReducer,
    movies: moviesReducer,
    search: searchReducer,
    language: languageReducer,
    locale: localeReducer,
    region: regionReducer,
    page: pageReducer,
    adult: adultReducer,
    render: errorReducer,
    routing: routerReducer
});

export default allReducers; 
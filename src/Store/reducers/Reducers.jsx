import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';

const Reducers = () => combineReducers({
  movie: MovieReducer,
});

export default Reducers; 
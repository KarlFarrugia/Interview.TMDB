import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import MovieId from '../components/MovieId';
import Error from './Error';
import {ACTION_CLEAR_ALL_MOVIES, ACTION_SET_ERROR} from '../Store/actions/Action'
import {connect} from 'react-redux';
import {Api_Latest} from '../api';

function LatesMovie({locale, render, clear_movies, error}) {
    const [moviesValue, setMoviesValue] = useState(0);

    useEffect(() => {
        const GetLatestMovie = async () => {
            const movie_id = await Api_Latest(locale, error);
            setMoviesValue(movie_id);
        }

        clear_movies();
        GetLatestMovie();
    },[])

    return (
        (render ? (moviesValue > 0 ? (<MovieId movieId={moviesValue}/>) : (<></>)) : (<Redirect to={"./Error"} />))
    );
}
  
const mapStateToProps =  state => {  
    return {
        locale: state.locale,
        render: state.render
    }
}
  
const mapDispatchToProps = dispatch => ({
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES()),
    error: () => dispatch(ACTION_SET_ERROR())
})

export default connect(mapStateToProps, mapDispatchToProps)(LatesMovie);

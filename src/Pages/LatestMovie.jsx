//#region Imports

// Import react components
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

// Import redux action
import {ACTION_CLEAR_ALL_MOVIES, ACTION_SET_ERROR} from '../Store/actions/Action'

// Import api function
import {Api_Latest} from '../api';

// Import custom component
import MovieId from '../components/MovieId';

//#endregion

/**
 * LatesMovie function
 *  
 * This function renders the latest movie by calling the latest api and then proceeding to render the movie using the MovieId component
 * 
 * @name LatestMovie
 * @function
 * @param {String} locale the locale from which to retrieve the latest movie
 * @param {String} language the language from which to retrieve the latest movie
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @param {Boolean} render a flag to indicate whether an error was encountered
 * @param {Dispatch} clear_movies the dispatch action to clear all the movies from the grid
 * @param {Dispatch} error The dispatch action to set the render state to false and cause the screen to default to the error screen
 * @returns {Component} the movieId component rendering the latest movie or redirects to the error screen
 */
function LatesMovie({locale, language, adult, render, clear_movies, error}) {
    //store the movie id of the latest movie in a useState
    const [moviesValue, setMoviesValue] = useState(0);

    //Carry out the get latest movie on page load
    useEffect(() => {
        const GetLatestMovie = async () => {
            const movie_id = await Api_Latest(locale, error);
            setMoviesValue(movie_id);
        }

        clear_movies();
        GetLatestMovie();
    },[])

    return (
        (render ? (moviesValue > 0 ? (<MovieId movieId={moviesValue} language={language} adult={adult} error={error}/>) : (<></>)) : (<Redirect to={"./Error"} />))
    );
}
  
// states to be retrieved from the redux store
const mapStateToProps =  state => {  
    return {
        locale: state.locale,
        language: state.language,
        adult: state.adult,
        render: state.render
    }
}
  
// actions to be retrieved from the reducers
const mapDispatchToProps = dispatch => ({
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES()),
    error: () => dispatch(ACTION_SET_ERROR())
})

export default connect(mapStateToProps, mapDispatchToProps)(LatesMovie);

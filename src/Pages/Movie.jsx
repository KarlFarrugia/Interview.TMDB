//#region Imports

// Import react components
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Import redux action
import {ACTION_SET_ERROR} from '../Store/actions/Action'

// Import custom components
import MovieId from '../components/MovieId';

/**
 * LatesMovie function
 *  
 * This function renders the searched for movie by reading the id from the url and then proceeding to render the movie using the MovieId component
 * 
 * @name MoviePage
 * @function
 * @param {String} language the language by which to retrieve the movie
 * @param {String} genre the gernres by which to retrieve the movie || THIS IS NOT BEING USED
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @param {Boolean} render a flag to indicate whether an error was encountered
 * @param {Dispatch} error The dispatch action to set the render state to false and cause the screen to default to the error screen
 * @returns {Component} the movieId component rendering the latest movie or redirects to the error screen
 */
function MoviePage({language, adult, genre, render, error}) {
    return (
        (render ? (<MovieId movieId={parseInt(window.location.pathname.split("/")[3])} language={language} adult={adult} genre={genre} error={error}/>) : (<Redirect to={"./Error"} />))
    );
}

// states to be retrieved from the redux store
const mapStateToProps =  state => {  
    return {
        language: state.language,
        adult: state.adult,
        genre: state.genre,
        render: state.render
    }
}
 
// actions to be retrieved from the reducers 
const mapDispatchToProps = dispatch => ({
    error: () => dispatch(ACTION_SET_ERROR())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
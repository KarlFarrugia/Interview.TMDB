//#region Imports

// Import react components
import React, {useEffect, useState} from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// Import redux actions
import { ACTION_APPEND_MOVIES, ACTION_SET_PAGE, ACTION_CLEAR_ALL_MOVIES, ACTION_SET_ERROR } from '../Store/actions/Action'

// Import api function
import { Api_Upcoming } from '../api'

// Import custom components
import MoviesListings from '../components/MoviesListings';
import Paging from '../components/Paging'

// Import custom styled components
import { App, Section } from '../assets/StyledComponents/App'

//#endregion

/**
 * Upcoming function
 *  
 * This function renders upcoming movies by calling the upcoming api and then proceeding to render the movies using the MoviesListings component
 * 
 * @name TopRated
 * @function
 * @param {Int16Array} page the current page to be rendered
 * @param {String} language the language by which to retrieve the upcoming movies
 * @param {String} region the region from which to retrieve the upcoming movies
 * @param {String} genre the genre by which to retrieve the latest movie
 * @param {Boolean} adult a flag to indicate whether adult movies should be rendered as well
 * @param {Array} movies the list of movies to be rendered
 * @param {Boolean} render a flag to indicate whether an error was encountered
 * @param {Dispatch} append_movies the dispatch action to add an array to the upcoming movie state
 * @param {Dispatch} set_page the dispatch action to set the new page number in the pagination
 * @param {Dispatch} clear_movies the dispatch action to clear all the movies from the grid
 * @param {Dispatch} error The dispatch action to set the render state to false and cause the screen to default to the error screen
 * @returns {Component} the movieId component rendering the latest movie or redirects to the error screen
 */
function Upcoming({page, language, region, genre, adult, movies, render, append_movies, set_page, clear_movies, error}) {
    const [currentPage, setCurrentPage] = useState(-1);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [currentGenre, setCurrentGenre] = useState(0);
    const [currentAdult, setCurrentAdult] = useState(false);
    const [maxPage, SetMaxPage] = useState(1);

    useEffect(() => {
        async function GetMovies() {
            SetMaxPage(await Api_Upcoming(append_movies, page, language, region, genre, adult, error));
        }

        // If current Movie Selection (the one that is rendered on screen) is different from the passed parameters then update the current movie selection
        // Otherwise do nothing. This condition safeguards against an infinite update loop
        if(currentPage !== page || currentLanguage !== language || currentGenre !== genre || currentAdult !== adult){
            setCurrentLanguage(language);
            setCurrentGenre(genre);
            setCurrentAdult(adult);
            setCurrentPage(page);
            clear_movies();
            GetMovies();
        }
    },[currentPage, page, currentLanguage, language, currentGenre, genre, currentAdult, adult, append_movies, region, error, clear_movies]);

    return (
        render ? (
            <App>
                <Section>
                    {<MoviesListings props={movies} />}
                </Section>
                <Section>
                    <Paging maxPage={maxPage} page={page} set_page={set_page}/>
                </Section>
            </App>
        ) : (
            <Redirect to={"./Error"} />
        ) 
        
    );
}

// states to be retrieved from the redux store
const mapStateToProps =  state => {  
    return {
        page: state.page,
        language: state.language,
        region: state.region,
        genre: state.genre,
        adult: state.adult,
        movies: state.movies,
        render: state.render
    }
}

// actions to be retrieved from the reducers
const mapDispatchToProps = dispatch => ({
    append_movies: query => dispatch(ACTION_APPEND_MOVIES(query)),
    set_page: page => dispatch(ACTION_SET_PAGE(page)),
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES()),
    error: () => dispatch(ACTION_SET_ERROR())
})

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
  
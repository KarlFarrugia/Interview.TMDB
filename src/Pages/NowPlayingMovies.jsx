import React, {useEffect, useState} from 'react';
import { Redirect } from "react-router-dom";
import MoviesListings from '../components/MoviesListings';
import Error from './Error';
import Paging from '../components/Paging'
import { connect } from 'react-redux';
import { ACTION_APPEND_MOVIES, ACTION_SET_PAGE, ACTION_CLEAR_ALL_MOVIES } from '../Store/actions/Action'
import {Api_Search, Api_NowPlaying} from '../api'
import { App, Section } from '../assets/StyledComponents/App'

function NowPlaying({page, language, genre, adult, movies, render, append_movies, set_page, clear_movies}) {
    const [currentPage, setCurrentPage] = useState(-1);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [currentGenre, setCurrentGenre] = useState(0);
    const [currentAdult, setCurrentAdult] = useState(false);
    const [maxPage, SetMaxPage] = useState(1);

    useEffect(() => {
        async function GetMovies() {
            SetMaxPage(await Api_NowPlaying(append_movies, page, language, genre, adult));
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
    });

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
            <Redirect to={Error} />
        ) 
        
    );
}

const mapStateToProps =  state => {  
    debugger;
    return {
        page: state.page,
        language: state.language,
        genre: state.genre,
        adult: state.adult,
        movies: state.movies,
        render: state.render
    }
}

const mapDispatchToProps = dispatch => ({
    append_movies: query => dispatch(ACTION_APPEND_MOVIES(query)),
    set_page: page => dispatch(ACTION_SET_PAGE(page)),
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
  
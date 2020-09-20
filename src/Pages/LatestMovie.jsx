import React, { useEffect, useState } from 'react';
import MovieId from '../components/MovieId';
import {ACTION_CLEAR_ALL_MOVIES} from '../Store/actions/Action'
import {connect} from 'react-redux';
import {Api_Latest} from '../api';

// multilanguage component
import { useTranslation } from "react-i18next";

function LatesMovie({locale, genre, clear_movies}) {
    const [moviesValue, setMoviesValue] = useState(0);
    const { t } = useTranslation("");

    useEffect(() => {
        const GetLatestMovie = async () => {
            const movie_id = await Api_Latest(locale);
            setMoviesValue(movie_id);
        }

        clear_movies();
        GetLatestMovie();
    },[])

    return (
        moviesValue > 0 ? (<MovieId movieId={moviesValue}/>) : (<></>)
    );
}
  
const mapStateToProps =  state => {  
    return {
        locale: state.locale,
        genre: state.genre
    }
}
  
const mapDispatchToProps = dispatch => ({
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES())
})

export default connect(mapStateToProps, mapDispatchToProps)(LatesMovie);

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MoviesListings from '../components/MoviesListings'
import MovieId from '../components/MovieId';
import {CLEAR_ALL_MOVIES, APPEND_MOVIES} from '../Store/actions/Action'
import {useSelector, useDispatch} from 'react-redux';
import {Api_Latest} from '../api';

// multilanguage component
import { useTranslation } from "react-i18next";

function LatesMovie() {
    const [moviesValue, setMoviesValue] = useState(0);
    const { t } = useTranslation("");
    const dispatch = useDispatch();

    const GetLatestMovie = async () => {
        const movie_id = await Api_Latest(t("common:locale"));
        setMoviesValue(movie_id);
    }

    useEffect(() => {
        dispatch(CLEAR_ALL_MOVIES());
        GetLatestMovie();
    },[])

    return (
        moviesValue > 0 ? (<MovieId movieId={moviesValue}/>) : (<></>)
    );
}

export default LatesMovie;

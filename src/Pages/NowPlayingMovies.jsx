import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MoviesListings from '../components/MoviesListings';
import {useSelector, useDispatch} from 'react-redux';
import {APPEND_MOVIES, TRUNCATE_MOVIES, INCREMENT_MOVIE_PAGE, DECREMENT_MOVIE_PAGE} from '../Store/actions/Action'
import {Api_NowPlaying} from '../api'

// multilanguage component
import { useTranslation } from "react-i18next";

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

function NowPlaying() {
    let page = useSelector(state => state.page);
    const { t } = useTranslation("");
    const dispatch = useDispatch();

    const GetMovies = async () => Api_NowPlaying(dispatch,APPEND_MOVIES,page,t("common:locale"));
    
    const FetchMore = () => {
        dispatch(INCREMENT_MOVIE_PAGE());
        GetMovies();
    }

    const Remove = () => {
        if(useSelector(state => state.page) > 1){
            dispatch(TRUNCATE_MOVIES());
            dispatch(DECREMENT_MOVIE_PAGE());
        }
    }

    useEffect(() => {FetchMore()},[])

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <section className="Results">
                {/* Movie Refiner by Genre Drop Down */}
                <div>
                    {<MoviesListings props={useSelector(state => state.movies)} />}
                </div>
            </section>
            <section className="FetchMore">
                <Button onClick={() => Remove()}>
                 See Less
                </Button>
                <Button onClick={() => FetchMore()}>
                 See More
                </Button>
            </section>
        </div>
    );
}

export default NowPlaying;

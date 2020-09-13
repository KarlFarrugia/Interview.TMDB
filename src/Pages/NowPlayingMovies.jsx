import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import SecondaryNavbar from '../components/Navbar/SecondaryNavbar';
import MoviesListings from '../components/MoviesListings';
import Paging from '../components/Paging'
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
    useEffect(() => {Api_NowPlaying(dispatch,APPEND_MOVIES,page,t("common:locale"))},[])

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <SecondaryNavbar />
            </header>
            <section className="Results">
                {/* Movie Refiner by Genre Drop Down */}
                <div>
                    {<MoviesListings props={useSelector(state => state.movies)} />}
                </div>
            </section>
            <section className="Paging">
                <Paging max_page={52}/>
            </section>
        </div>
    );
}

export default NowPlaying;

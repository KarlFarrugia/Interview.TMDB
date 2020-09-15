import React, { useEffect, useState } from 'react';
import MoviesListings from '../components/MoviesListings';
import Paging from '../components/Paging'
import {useSelector, useDispatch} from 'react-redux';
import {APPEND_MOVIES, TRUNCATE_MOVIES, INCREMENT_MOVIE_PAGE, DECREMENT_MOVIE_PAGE} from '../Store/actions/Action'
import {Api_NowPlaying} from '../api'

// multilanguage component
import { useTranslation } from "react-i18next";

function NowPlaying() {
    const [maxPage, SetMaxPage] = useState(1);
    const { t } = useTranslation("");
    const dispatch = useDispatch();

    async function GetMovies(){
        SetMaxPage(await Api_NowPlaying(dispatch,APPEND_MOVIES,1,t("common:locale")));
    }

    useEffect(() => {
        GetMovies();
    },[])

    return (
        <div className="App">
            <section className="Results">
                {/* Movie Refiner by Genre Drop Down */}
                <div>
                    {<MoviesListings props={useSelector(state => state.movies)} />}
                </div>
            </section>
            <section className="Paging">
                <Paging max_page={maxPage}/>
            </section>
        </div>
    );
}

export default NowPlaying;

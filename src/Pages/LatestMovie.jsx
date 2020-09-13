import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MoviesListings from '../components/MoviesListings'
import {CLEAR_ALL_MOVIES, APPEND_MOVIES} from '../Store/actions/Action'
import {useSelector, useDispatch} from 'react-redux';
import {Api_Latest} from '../api'
import Card from '../components/Card/Card'

// multilanguage component
import { useTranslation } from "react-i18next";

function LatesMovie() {
    const [moviesValue, setMoviesValue] = useState("");
    const [keywordsValue, setKeywordsValue] = useState([]);
    const { t } = useTranslation("");
    const dispatch = useDispatch();

    const GetMovies = async () => {
        Api_Latest(dispatch, APPEND_MOVIES, setMoviesValue, setKeywordsValue, t("common:locale"));
    }

    useEffect(() => {
        dispatch(CLEAR_ALL_MOVIES());
        GetMovies();
    },[])

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <section className="Results">
                <div>
                    {keywordsValue.map((props) => {
                        return(
                            <span>{props.name}</span>
                        );
                      })}
                </div>
                <div>
                    <Card props={moviesValue}/>
                </div>
            </section>
            <section className="Similar">
                <div>
                    {<MoviesListings props={useSelector(state => state.movies)}/>}
                </div>
            </section>
            {/* Get Similar Movies */}
        </div>
    );
}

export default LatesMovie;

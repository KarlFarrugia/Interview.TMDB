import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../Search/SearchBox';
import {Api_Search} from '../../api/'
import {useSelector, useDispatch} from 'react-redux';
import Card from '../Card/MovieSearchCard'

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function Navbar (){
    const [moviesValue, setMoviesValue] = useState("");
    const [currentMovie, setCurrentMovie] = useState("");
    const { t } = useTranslation("");

    function FetchMovies(movieName){
        if(movieName !== currentMovie){
            GetMovies(Api_Search(movieName, t("common:locale")));
            setCurrentMovie(movieName);
        }
    }

    async function GetMovies(movie_list) {
        movie_list.
        then(movies => {
            if (movies !== ""){
                setMoviesValue(movies.map((prop, key) => <Card props={prop} key={key}/>));
            }else{
                setMoviesValue("");
            }
        });
    }

    return (
        <GridContainer direction="row" alignItems="baseline" className="header">
            <GridItem xs={2}>
                <div className="greeting">
                    {t("common:hello")}
                </div>
            </GridItem>
            <GridItem xs={4}>
                <div className="title">
                    <Link to={"/"}>
                        <span>TMDB</span>
                    </Link>
                </div>
            </GridItem>
            <GridItem xs={6}>
                <div className="Search">
                    <SearchBox />
                </div>
            </GridItem>
            <GridItem xs={12}>
                {FetchMovies(useSelector(state => state.movie)),moviesValue}
                {/*<div className="Search-Box">
                    <div className="Search-Box-item">
                        item
                    </div>
                    <div className="Search-Box-item">
                        item
                    </div>
                </div>*/}
            </GridItem>
        </GridContainer >
    );
}

export default Navbar;
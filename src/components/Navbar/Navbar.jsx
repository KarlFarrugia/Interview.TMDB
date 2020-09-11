import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../Search/SearchBox';
import Search from '../../api/Search'
import {useSelector, useDispatch} from 'react-redux';
import config from '../../config';
import Card from '../Card/MovieSearchCard'
import axios from 'axios';

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function Navbar (){
    const [moviesValue, setMoviesValue] = useState("");
    const [currentMovie, setCurrentMovie] = useState("");

    function FetchMovies(movieName){
        if(movieName !== currentMovie){
            GetMovies(Search(movieName));
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
            <GridItem xs={6} md={6} lg={6}>
                <div className="title">
                    <Link to={"/"}>
                        <span>TMDB</span>
                    </Link>
                </div>
            </GridItem>
            <GridItem xs={6} md={6} lg={6}>
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
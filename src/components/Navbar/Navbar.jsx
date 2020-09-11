import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../Search/SearchBox';
import { Col, Row, Container  } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import config from '../../config';
import Card from '../Card/Card'
import axios from 'axios';

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function Navbar (){
    const [moviesValue, setMoviesValue] = useState("");

    async function GetMovies(moviename) {
        await axios.get(`${config.TMDB.API_ROOT_URL}/search/movie?api_key=${config.TMDB.API_KEY}&query=${moviename}&page=1`)
        .then(res => {
            let movies = res.data.results;
            console.log(movies);
            setMoviesValue(movies.map((prop, key) => <Card props={prop}/>));
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
                {GetMovies(useSelector(state => state.movie)),moviesValue}
                <div className="Search-Box">
                    <div className="Search-Box-item">
                        item
                    </div>
                    <div className="Search-Box-item">
                        item
                    </div>
                </div>
            </GridItem>
        </GridContainer >
    );
}

export default Navbar;
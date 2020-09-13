import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import {Api_Search, Api_NowPlaying} from '../../api/'
import {useSelector, useDispatch} from 'react-redux';
import {UPDATE_LANGUAGE, CLEAR_ALL_MOVIES, APPEND_MOVIES, ACTION_TOGGLE_ADULT, MOVIE_SEARCH} from '../../Store/actions/Action'
import Card from '../Card/MovieSearchCard'

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function SecondaryNavbar (){
    const [moviesValue, setMoviesValue] = useState([]);
    const [currentMovie, setCurrentMovie] = useState("");
    const { t, i18n } = useTranslation("");
    let page = useSelector(state => state.page);
    const dispatch = useDispatch();

    return (
        <GridContainer direction="row" alignItems="center" className="header">
            <GridItem xs={2}>
                <div className="title">
                    <Link to={"/Latest"}>
                        <span>Latest</span>
                    </Link>
                </div>
            </GridItem>
            <GridItem xs={2}>
                <div className="title">
                    <Link to={"/NowPlaying"}>
                        <span>Now Playing</span>
                    </Link>
                </div>
            </GridItem>
            <GridItem xs={2}>
                <div className="title">
                    <Link to={"/Upcoming"}>
                        <span>Upcoming</span>
                    </Link>
                </div>
            </GridItem>
            <GridItem xs={2}>
                <div className="title">
                    <Link to={"/TopRated"}>
                        <span>Top Rated</span>
                    </Link>
                </div>
            </GridItem>
        </GridContainer >
    );
}

export default SecondaryNavbar;
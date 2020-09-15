import React, { useEffect, useState } from 'react';
import {Api_QueryMovie} from '../../api';
import {MovieContainer, MovieTitle, MovieVideo, MovieSubTitle, MovieOverview} from '../../assets/StyledComponents/Movie';
import styled from 'styled-components';
import {config} from '../../config';
import ReactPlayer from 'react-player';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStar, faRunning, faHandHoldingUsd, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

// multilanguage component
import { useTranslation } from "react-i18next";
// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function Movie({...props}) {
    console.log(props);
    const dispatch = useDispatch();
    const { t } = useTranslation("");

    useEffect(() => 
        dispatch(MOVIE_SEARCH(""))
    ,[]);

    return (
        <GridContainer>
            <GridItem xs={12}>
                <MovieTitle>
                    {props.movie.original_title}
                </MovieTitle>
                <MovieSubTitle>
                    {props.movie.tagline}
                </MovieSubTitle>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6} xl={6}>
                <MovieOverview>
                    {props.movie.overview}
                </MovieOverview>
                <div>
                    <FontAwesomeIcon icon={faFileInvoice} color="red" /> Budget: {props.movie.budget}
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {props.movie.release_date}
                </div>
                <div>
                    <FontAwesomeIcon icon={faHandHoldingUsd} color="lightgreen" /> Revenue: {props.movie.revenue}
                </div>
                <div>
                    <FontAwesomeIcon icon={faRunning} /> Runtime: {props.movie.runtime}
                </div>
                <div>
                    <FontAwesomeIcon icon={faStar} /> Rating: {props.movie.vote_average}/10 - {props.movie.vote_count}
                </div>
                {/* Get Related Videos */}
                <MovieVideo>
                    <h1>Videos</h1>
                    {props.video && props.video.site === 'YouTube' && (
                        <ReactPlayer 
                            url={`https://www.youtube.com/embed/${props.video.key}`} 
                            playing={true}
                            width="100%" 
                            controls={true} 
                        />
                    )}
                </MovieVideo> 
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6} xl={6}>
                <img src={`${config.TMDB.POSTER_ROOT_W780}/${props.movie.poster_path}`} />
            </GridItem>
        </GridContainer>
    );
}

export default Movie;

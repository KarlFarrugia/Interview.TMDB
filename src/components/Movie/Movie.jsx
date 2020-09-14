import React, { useEffect, useState } from 'react';
import {Api_QueryMovie} from '../../api';
import {MovieContainer, MovieTitle} from '../../assets/StyledComponents/Movie';
import styled from 'styled-components';
import {config} from '../../config';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action'

// multilanguage component
import { useTranslation } from "react-i18next";

function Movie(props) {
    console.log(props);
    const dispatch = useDispatch();

    useEffect(() => 
        dispatch(MOVIE_SEARCH(""))
    ,[]);

    console.log(props);
    return (
        <div>
            <MovieTitle>
                {props.movie.original_title}
            </MovieTitle>
            <div>
                Tagline: {props.movie.tagline}
            </div>
            <div>
                Budget: {props.movie.budget}
            </div>
            <div>
                Overview: {props.movie.overview}
            </div>
            <div>
                Release Date: {props.movie.release_date}
            </div>
            <div>
                Revenue: {props.movie.revenue}
            </div>
            <div>
                Runtime: {props.movie.runtime}
            </div>
            <div>
                Rating: {props.movie.vote_average}/10 - {props.movie.vote_count}
            </div>
            <div>
               {props.movie.genres ? (props.movie.genres.map( props => props.name)) : (<></>)}
            </div>
            <img src={`${config.TMDB.POSTER_ROOT}/${props.movie.poster_path}`} />
        </div>
    );
}

export default Movie;

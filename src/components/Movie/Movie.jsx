import React, { useEffect, useState } from 'react';
import {Api_QueryMovie} from '../../api';
import {MoviePoster, MovieTitle, MovieVideo, MovieSubTitle, MovieOverview, MovieInformation, MovieTitleInformation, MovieNumberInformation, MovieHomepage, MovieHeader, MovieGenre, MovieSectionHeader} from '../../assets/StyledComponents/Movie';
import styled from 'styled-components';
import {config} from '../../config';
import {urlCleaner, numberLocalisation} from '../../helpers'
import ReactPlayer from 'react-player';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStar, faStopwatch, faHandHoldingUsd, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

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
        <GridContainer
        direction="row"
        justify="center"
        alignItems="flex-start">
            <GridItem xs={12} sm={12} md={4}>
                <MoviePoster src={`${config.TMDB.POSTER_ROOT_W780}/${props.movie.poster_path}`} />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
                <GridContainer
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <GridItem sm={12} md={6}>
                        <MovieTitle>
                            {props.movie.original_title}
                        </MovieTitle>
                    </GridItem>
                    <GridItem sm={12} md={6}>
                        <MovieTitleInformation>
                            <FontAwesomeIcon icon={faStar}  color="darkgoldenrod" /> {props.movie.vote_average}/10 <span className="small">{props.movie.vote_count} {t("movie:voters")}</span>
                        </MovieTitleInformation>
                        <MovieTitleInformation>
                            <FontAwesomeIcon icon={faStopwatch} color="white"/> {props.movie.runtime} <span className="small">{t("movie:minutes")}</span>
                        </MovieTitleInformation>
                    </GridItem>
                    <GridItem xs={12}>
                    {(props.movie.tagline !== "") ?
                        (
                            <MovieSubTitle>
                                {props.movie.tagline}
                            </MovieSubTitle>
                        ) : (<></>)
                    }
                    </GridItem>
                    <GridItem xs={12}>
                        <MovieHomepage href={`${props.movie.homepage}`}>
                            {urlCleaner(props.movie.homepage)}
                        </MovieHomepage>
                    </GridItem>
                    <GridItem xs={12}>
                        <MovieOverview>
                            {props.movie.overview}
                        </MovieOverview>
                    </GridItem>
                    <GridItem xs={12}>
                        <MovieSectionHeader>{t("movie:release")}</MovieSectionHeader>
                        <MovieInformation>
                            <FontAwesomeIcon icon={faCalendarAlt} color="white" /> {props.movie.release_date}
                        </MovieInformation>
                    </GridItem>
                    <GridItem xs={12}>
                        <MovieSectionHeader>{t("movie:numbers")}</MovieSectionHeader>
                            <MovieNumberInformation>
                                <FontAwesomeIcon icon={faFileInvoice} color="red" /> {t("movie:budget")} €{numberLocalisation(props.movie.budget)}
                            </MovieNumberInformation>
                            <MovieNumberInformation>
                                <FontAwesomeIcon icon={faHandHoldingUsd} color="lightgreen" /> {t("movie:revenue")} €{numberLocalisation(props.movie.revenue)}
                            </MovieNumberInformation>
                    </GridItem>
                    <GridItem xs={12}>
                        <MovieSectionHeader>{t("genres:title")}</MovieSectionHeader>
                        {(props.movie.genres ? (props.movie.genres.map(genre => <MovieGenre>{t(`genres:${genre.name.toLowerCase()}`)}</MovieGenre>)) : (<></>))}
                    </GridItem>
                </GridContainer>
            </GridItem>
            <GridItem xs={12} md={6}>
                {/* Get Related Videos */}
                <MovieVideo>
                    <MovieHeader>{t("movie:trailer")}</MovieHeader>
                    {props.video && props.video.site === 'YouTube' && (
                        <ReactPlayer 
                            url={`https://www.youtube.com/embed/${props.video.key}`} 
                            playing={true}
                            width="100%" 
                            height="450px"
                            controls={true} 
                        />
                    )}
                </MovieVideo> 
            </GridItem>
        </GridContainer>
    );
}

export default Movie;

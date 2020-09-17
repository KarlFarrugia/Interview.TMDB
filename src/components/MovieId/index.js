import React, { useEffect, useState, useCallback } from 'react';
import MoviesListings from '../../components/MoviesListings';
import {Api_QueryMovie, Api_Similar, Api_Keywords, Api_Videos} from '../../api';
import {MovieContainer, MovieBody, MovieHeader} from '../../assets/StyledComponents/Movie';
import styled from 'styled-components';
import {config} from '../../config';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action';
import Movie from '../../components/Movie/Movie';

// multilanguage component
import { useTranslation } from "react-i18next";

import GridContainer from '../../assets/GridContainer';
import GridItem from '../../assets/GridItem';

function MoviePage({...props}) {
    console.log(props);
    debugger;
    const [moviesValue, setMoviesValue] = useState("");
    const [similarMovies, setSimilarMovies] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [videos, setVideos] = useState([]);
    const { t } = useTranslation("");
    const dispatch = useDispatch();

    const MovieBackgroundElement = styled.div`    
        background: url(${config.TMDB.BACKDROP_ROOT}/${moviesValue.backdrop_path}) center center / cover no-repeat fixed;
        position: fixed;
        top: 0px;
        filter: saturate(0.5) opacity(0.3);
        width: 100%;
        max-width: 100%;
        height: 100%;
        z-index: -1;
    `

    const GetMovies = async () => {
        setMoviesValue(await Api_QueryMovie(props.movieId, t("common:locale")));     
        setSimilarMovies(await Api_Similar(props.movieId, t("common:locale")));  
        setKeywords(await Api_Keywords(props.movieId));  
        const videos = await Api_Videos(props.movieId);
        setVideos(...videos);  
    }

    useEffect(() => {
        GetMovies();
    }, [])

    return (
        <MovieContainer>
            {(moviesValue.backdrop_path) ? (
                <MovieBackgroundElement />
            ): (<></>)}
            <GridContainer
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                <GridItem xs={12}>
                    <MovieBody>
                        <section className="Results">
                            <Movie movie={moviesValue} video={videos}/>
                        </section>
                    </MovieBody> 
                </GridItem>  
                <GridItem xs={12}>     
                </GridItem>{/*   
                <GridItem xs={12}>
                Get Keywords Movies 
                <section className="Keyword">
                    <h1>Keywords</h1>
                    {keywords.map((props) => <div key={props.id}>{props.name}</div>)}
                </section>
                </GridItem>*/}
                <GridItem xs={12}>
                    {/* Get Similar Movies */}
                    {(similarMovies.length > 0) ? (<MovieHeader>{t("movie:similar").replace("{MOVIE}",moviesValue.title)}</MovieHeader>) : (<></>)}                   
                    <MoviesListings props={similarMovies} />
                </GridItem>
            </GridContainer>
        </MovieContainer>
    );
}

export default MoviePage;
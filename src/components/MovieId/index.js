import React, { useEffect, useState } from 'react';
import MoviesListings from '../../components/MoviesListings';
import {Api_QueryMovie, Api_Similar, Api_Keywords, Api_Videos} from '../../api';
import {MovieContainer, MovieBody, MovieHeader} from '../../assets/StyledComponents/Movie';
import styled from 'styled-components';
import {config} from '../../config';
import Movie from '../../components/Movie/Movie';

// multilanguage component
import { useTranslation } from "react-i18next";

import GridContainer from '../../assets/GridContainer';
import GridItem from '../../assets/GridItem';

function MoviePage({movieId}) {
    const [moviesValue, setMoviesValue] = useState("");
    const [similarMovies, setSimilarMovies] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [videos, setVideos] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(-1);
    const { t } = useTranslation("");

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

    useEffect(() => {
        const GetMovies = async () => {
            setMoviesValue(await Api_QueryMovie(movieId, t("common:locale")));     
            setSimilarMovies(await Api_Similar(movieId, t("common:locale")));  
            setKeywords(await Api_Keywords(movieId));  
            const videos = await Api_Videos(movieId);
            setVideos(...videos);  
        }

        // If current Movie (the one that is rendered on screen) is different from the passed parameter movieId then update the current movie
        // Otherwise do nothing. This condition safeguards against an infinite update loop
        if(currentMovie !== movieId){
            setCurrentMovie(movieId);
            GetMovies();
        }
        console.log(movieId);
    })

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
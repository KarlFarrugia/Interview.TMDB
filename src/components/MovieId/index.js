import React, { useEffect, useState, useCallback } from 'react';
import MoviesListings from '../../components/MoviesListings';
import {Api_QueryMovie, Api_Similar, Api_Keywords, Api_Videos} from '../../api';
import {MovieContainer} from '../../assets/StyledComponents/Movie';
import styled from 'styled-components';
import {config} from '../../config';
import ReactPlayer from 'react-player';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action';
import Movie from '../../components/Movie/Movie';

// multilanguage component
import { useTranslation } from "react-i18next";

function MoviePage(props) {
    const [moviesValue, setMoviesValue] = useState("");
    const [similarMovies, setSimilarMovies] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [videos, setVideos] = useState([]);
    const { t } = useTranslation("");
    const dispatch = useDispatch();

    let MovieBackgroundElement = styled.div`    
        background: url(${config.TMDB.BACKDROP_ROOT}/${moviesValue.backdrop_path}) center center / cover no-repeat fixed;
        position: fixed;
        top: 0px;
        filter: saturate(0.5) opacity(0.6);
        width: 100%;
        max-width: 100%;
        height: 100%;
        z-index: -1;
    `

    function translateGenre(genre){
        return t(`genres:${genre}`);
    }

    const GetMovies = async () => {
        debugger;
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
            <MovieBackgroundElement />
            <div class="App">
                <section className="Results">
                    <Movie movie={moviesValue}/>
                </section>
            </div>
            {/* Get Related Videos */}
            <section className="Videos">
                <h1>Videos</h1>
                <div>
                    {videos && videos.site === 'YouTube' && (
                        <ReactPlayer 
                            url={`https://www.youtube.com/embed/${videos.key}`} 
                            playing={true}
                            width="20%" 
                            controls={true} 
                        />
                    )}
                </div>
            </section>            
            {/* Get Keywords Movies */}
            <section className="Keyword">
                <h1>Keywords</h1>
                {keywords.map((props) => <div key={props.id}>{props.name}</div>)}
            </section>
            {/* Get Similar Movies */}
            <section className="Similar">
                <h1>People also saw</h1>
                {<MoviesListings props={similarMovies} />}
            </section>
        </MovieContainer>
    );
}

export default MoviePage;

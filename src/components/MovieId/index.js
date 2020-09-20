//#region Imports

// Import react components
import React, { useEffect, useState } from 'react';

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

// Import custom components
import Movie from '../../components/Movie';
import LoaderSpinner from '../../components/LoaderSpinner';
import MoviesListings from '../../components/MoviesListings';

// Import api functions
import {Api_QueryMovie, Api_Similar, Api_Videos} from '../../api';

// Import custom configurations functions
import {config} from '../../config';

// Import styled components and the styled component from react as it is needed for the backdrop
import styled from 'styled-components';
import {MovieContainer, MovieBody, MovieHeader} from '../../assets/StyledComponents/Movie';

//#endregion

/**
 * MovieId function
 *  
 * This function takes three parametes; movieId, language and genre, to carry out api requests and then render all the movie. Using styled components and other custom components 
 * such as Movie
 * 
 * @name MovieId
 * @function
 * @param {Int16Array} movieId the id of the movie to get from TMDB
 * @param {String} language the language of the movie object to be retrieved from TMDB
 * @param {String} genre the genre of the similar movies to be retrieved from TMDB
 * @returns {StyledComponent} A styled component movie container which will have all the movie components within it.
 */
export default function MovieId({movieId, language, genre}) {
    // Current rendered movie useStates
    const [moviesValue, setMoviesValue] = useState("");
    const [similarMovies, setSimilarMovies] = useState("");
    const [videos, setVideos] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(-1);
    const [currentGenre, setCurrentGenre] = useState(-1);
    const [currentLanguage, setCurrentLanguage] = useState('en');

    // Get the translation component to be used to switch between different languages
    const { t } = useTranslation("");

    // Create a styled component with the backdrop related to the movie object
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

    // On every page update check if the page parameters have changed.
    useEffect(() => {
        const GetMovies = async () => {
            setMoviesValue(await Api_QueryMovie(movieId, language));     
            setSimilarMovies(await Api_Similar(movieId, language, genre));  
            const videos = await Api_Videos(movieId,language);
            //Otherwise this causes an error
            if(videos.length > 0)
                setVideos(...videos);  
            else    
                setVideos([]);
        }

        // If current Movie (the one that is rendered on screen) is different from the passed movieId and language parameters then update the current movie
        // Otherwise do nothing. This condition safeguards against an infinite update loop
        if(currentMovie !== movieId || currentLanguage !== language || currentGenre !== genre){
            setCurrentMovie(movieId);
            setCurrentLanguage(language);
            setCurrentGenre(genre)
            GetMovies();
        }
    })

    return (
        <MovieContainer>
            {/* The backdrop element to be used as a canvas */}
            {(moviesValue.backdrop_path) ? (
                <MovieBackgroundElement />
            ): (<></>)}
            {/* The grid container whose children will display the movie (using the Movie custom component) and a grid of similar movies */}
            <GridContainer
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                {/* The movie details. A spinner will be shown while the movie is loading */}
                <GridItem xs={12}>
                    <MovieBody>
                        <section className="Results">
                            {moviesValue && videos ? (<Movie movie={moviesValue} video={videos}/>) : (<LoaderSpinner />)}
                        </section>
                    </MovieBody> 
                </GridItem>  
                {/* The similar movies grid. A spinner will be shown while the movie grid is loading */}
                <GridItem xs={12}>
                    {/* Get Similar Movies */}
                    {(similarMovies.length > 0) ? (<MovieHeader>{t("movie:similar").replace("{MOVIE}",moviesValue.title)}</MovieHeader>) : (<LoaderSpinner />)}                   
                    <MoviesListings props={similarMovies} />
                </GridItem>
            </GridContainer>
        </MovieContainer>
    );
}
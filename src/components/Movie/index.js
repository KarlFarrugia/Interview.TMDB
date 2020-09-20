//#region Imports

// Import react components
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStar, faStopwatch, faHandHoldingUsd, faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import styled components
import {MoviePoster, MovieTitle, MovieVideo, MovieSubTitle, MovieOverview, MovieInformation, MovieTitleInformation, MovieSmallText, MovieNumberInformation, MovieHomepage, MovieHeader, MovieGenre, MovieSectionHeader} from '../../assets/StyledComponents/Movie';

// Import images
import unavailable_poster_image from "../../assets/images/unavailable_movie_poster.jpg"

// Import Redux actions
import {ACTION_MOVIE_SEARCH} from '../../Store/actions/Action'

// Import custom helper functions
import {urlCleaner, numberLocalisation} from '../../Helpers'

// Import custom configurations functions
import {config} from '../../config';

//#endregion 

/**
 * Movie function
 *  
 * This function takes two parametes; movie and video, to style and render all the details related to a movie. The backdrop and the similar movies are still handled by the 
 * MovieId file.
 * 
 * @name Movie
 * @function
 * @param {Object} movie the movie object as returned from TMDB
 * @param {Object} video the video object as returned from TMDB
 * @returns {GridContainer} A GridContainer containing several different GridItems all containing different styled aspects of a movie.
 */
export default function Movie({movie, video}) {
    // Get the translation component to be used to switch between different languages
    const { t } = useTranslation("");

    //Remove the current search as the user would have just searched for something
    useEffect(() => {
        ACTION_MOVIE_SEARCH("")
    },[]);
    
    return (
        <GridContainer
        direction="row"
        justify="center"
        alignItems="flex-start">
            {/* The movie poster to be rendered on the left. In the case that no movie poster is returned the custom unavailable_poster_image image is used */}
            <GridItem xs={12} sm={12} md={4}>
                {(movie.poster_path !== "" && movie.poster_path !== null) ?
                    (
                        <MoviePoster src={`${config.TMDB.POSTER_ROOT_W780}/${movie.poster_path}`} />
                    ) : 
                    (
                        <MoviePoster src={unavailable_poster_image} />
                    )
                }
            </GridItem>
            {/* The movie details to be shown on the right hand side of the poster. These are further contained within another nested GridContainer */}
            <GridItem xs={12} sm={12} md={8}>
                <GridContainer
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    {/* Movie Title */}
                    <GridItem sm={12} md={6}>
                        <MovieTitle>
                            {movie.title}
                        </MovieTitle>
                    </GridItem>
                    {/* Movie Rating and Runtime */}
                    <GridItem sm={12} md={6}>
                        <MovieTitleInformation>
                            <FontAwesomeIcon icon={faStar}  color="darkgoldenrod" /> {movie.vote_average}/10 <MovieSmallText>{movie.vote_count} {t("movie:voters")}</MovieSmallText>
                        </MovieTitleInformation>
                        <MovieTitleInformation>
                            <FontAwesomeIcon icon={faStopwatch} color="white"/> {movie.runtime} <MovieSmallText>{t("movie:minutes")}</MovieSmallText>
                        </MovieTitleInformation>
                    </GridItem>
                    {/* Movie Tagline which will have inverted commas inserted through css by the MovieSubTitle styled component */}
                    <GridItem xs={12}>
                    {(movie.tagline !== "") ?
                        (
                            <MovieSubTitle>
                                {movie.tagline}
                            </MovieSubTitle>
                        ) : (<></>)
                    }
                    </GridItem>
                    {/* Movie HomePage */}
                    <GridItem xs={12}>
                        <MovieHomepage href={`${movie.homepage}`}>
                            {/* The url cleaner is used to remove the prefix http/s protocols and any trailing '/' */}
                            {urlCleaner(movie.homepage)}
                        </MovieHomepage>
                    </GridItem>
                    {/* Movie OverView */}
                    <GridItem xs={12}>
                        <MovieOverview>
                            {movie.overview}
                        </MovieOverview>
                    </GridItem>
                    {/* Movie Release Date */}
                    <GridItem xs={12}>
                        {(movie.release_date !== "") ?
                            (
                                <>
                                    <MovieSectionHeader>{t("movie:release")}</MovieSectionHeader>
                                    <MovieInformation>
                                        <FontAwesomeIcon icon={faCalendarAlt} color="white" /> {movie.release_date}
                                    </MovieInformation>
                                </>
                            ) 
                            : 
                            (<></>)
                        }
                    </GridItem>
                    {/* Movie Budget and Revenue */}
                    <GridItem xs={12}>
                        <MovieSectionHeader>{t("movie:numbers")}</MovieSectionHeader>
                            <MovieNumberInformation>
                                <FontAwesomeIcon icon={faFileInvoice} color="red" /> {t("movie:budget")} {numberLocalisation(movie.budget)}
                            </MovieNumberInformation>
                            <MovieNumberInformation>
                                <FontAwesomeIcon icon={faHandHoldingUsd} color="lightgreen" /> {t("movie:revenue")} {numberLocalisation(movie.revenue)}
                            </MovieNumberInformation>
                    </GridItem>
                    {/* Movie Genres */}
                    <GridItem xs={12}>
                        <MovieSectionHeader>{t("genres:title")}</MovieSectionHeader>
                        {(movie.genres ? (movie.genres.map((genre, key) => <MovieGenre key={key}>{t(`genres:${genre.name.toLowerCase()}`)}</MovieGenre>)) : (<></>))}
                    </GridItem>
                </GridContainer>
            </GridItem>
            <GridItem xs={12} md={6}>
                {/* Get Related Videos. For simplicity's sake only 1 youtube video is shown*/}
                {video && video.site === 'YouTube' && (
                    <MovieVideo>
                        <MovieHeader>{t("movie:trailer")}</MovieHeader>
                        <ReactPlayer 
                            url={`https://www.youtube.com/embed/${video.key}`} 
                            playing={true}
                            width="100%" 
                            height="450px"
                            controls={true} 
                        />
                    </MovieVideo> 
                )}
            </GridItem>
        </GridContainer>
    );
}
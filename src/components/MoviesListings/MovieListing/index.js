//#region Imports

// Import react components
import React from 'react';
import { Link } from "react-router-dom";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import image
import unavailable_poster_image from "../../../assets/images/unavailable_movie_poster.jpg"

// Import grid components
import GridItem from "../../Grid/GridItem.jsx";

// Import custom configurations functions
import {config} from '../../../config';

// Import custom helper functions
import {genreRetriever} from '../../../Helpers'

// Import styled components
import {MovieCardPoster, MovieCardTitle, MovieCardItem, MovieRating, MovieCardElement, MovieCardGenre, MovieCardGenres} from "../../../assets/StyledComponents/MovieCard";

//#endregion

/**
 * MovieListing function
 *  
 * This function takes a single movie object as a parameter and then uses Grid Items to style it. The parent component which will request this file will have a wrapping
 * GridContainer component.
 * 
 * @name MovieListing
 * @function
 * @param {Object} movie the movie object to create the card
 * @returns {Componet} A styled component from the passed movie object. The returned component will be wrapped around a link component to the movie. The link will then take the
 * user to the movie search page.
 */
export default function MovieListing(movie){
  // A let is used to declare the movie rating due to a looping error when using use state
  let movieRatingClass = "Average";
  //The movie poster to be rendered on the left. In the case that no movie poster is returned the custom unavailable_poster_image image is used
  const imageSource = movie.movie.poster_path === null ? unavailable_poster_image : config.TMDB.POSTER_ROOT_W342+movie.movie.poster_path;
  // Get the translation component to be used to switch between different languages
  const { t } = useTranslation("");

  //set the movie rating for the red, grey, green colours.
  switch (true){
    case (movie.movie.vote_average <= 4): movieRatingClass = "Bad"; break;
    case (movie.movie.vote_average < 7): movieRatingClass = "Average"; break;
    case (movie.movie.vote_average >= 7): movieRatingClass = "Good"; break;
    default: break;
  }

  return(
    //Wrap the movie card with a link to the same move
    <Link to={`/Movie/${movie.movie.id}`}>
        <MovieCardItem>
          <GridItem xs={12}>
            {/*Movie Title*/}
            <MovieCardTitle>{movie.movie.title}</MovieCardTitle>
            {/*Movie Card and Rating Element*/}
            <MovieCardElement>
              <MovieRating>
                <div className={movieRatingClass}>{movie.movie.vote_average}/10</div>
              </MovieRating>
              <MovieCardPoster src={imageSource}></MovieCardPoster>
            </MovieCardElement>
            <br />
          </GridItem>
          {/*Movie Genres*/}
          <GridItem xs={12}>
            <MovieCardGenres>{movie.movie.genre_ids.map((genre, key) => <MovieCardGenre key={key}><i>{t(`genres:${genreRetriever(genre).toLowerCase()}`)}</i></MovieCardGenre>)}</MovieCardGenres>
          </GridItem>
        </MovieCardItem>
    </Link>
  );
}
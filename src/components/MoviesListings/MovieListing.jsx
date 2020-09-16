import React from 'react';
import { Link } from "react-router-dom";
import {config} from '../../config';
import {genreRetriever} from '../../helpers'

// multilanguage component
import { useTranslation } from "react-i18next";

import {MovieCardPoster, MovieCardTitle, MovieCardItem, MovieRating, MovieCardElement, MovieCardGenre, MovieCardGenres} from "../../assets/StyledComponents/MovieCard";

import unavailable_poster_image from "../../assets/images/unavailable_movie_poster.jpg"

// core components
import GridItem from "../../assets/GridItem.jsx";

function MovieListing(movie){
  let MovieRatingClass = "Average";
  const ImageSource = movie.movie.poster_path === null ? unavailable_poster_image : config.TMDB.POSTER_ROOT_W342+movie.movie.poster_path;
  const { t } = useTranslation("");
  switch (true){
    case (movie.movie.vote_average <= 4): MovieRatingClass = "Bad"; break;
    case (movie.movie.vote_average < 7): MovieRatingClass = "Average"; break;
    case (movie.movie.vote_average >= 7): MovieRatingClass = "Good"; break;
    default: break;
  }
  return(
    <Link to={`/Movie/${movie.movie.id}`}>
        <MovieCardItem>
          <GridItem xs={12}>
          <MovieCardTitle>{movie.movie.original_title}</MovieCardTitle>
          <MovieCardElement>
            <MovieRating>
              <div className={MovieRatingClass}>{movie.movie.vote_average}/10</div>
            </MovieRating>
            <MovieCardPoster src={ImageSource}></MovieCardPoster>
          </MovieCardElement>
          <br />
          </GridItem>
          <GridItem xs={12}>
            <MovieCardGenres>{movie.movie.genre_ids.map((genre, key) => <MovieCardGenre key={key}><i>{t(`genres:${genreRetriever(genre).toLowerCase()}`)}</i></MovieCardGenre>)}</MovieCardGenres>
          </GridItem>
        </MovieCardItem>
    </Link>
  );
}

export default MovieListing;
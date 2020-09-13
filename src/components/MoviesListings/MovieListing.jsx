import React from 'react';
import { Link } from "react-router-dom";
import {config} from '../../config';

import {MovieCardPoster, MovieCardTitle, MovieCardItem, MovieRating} from "../../assets/StyledComponents/MovieCard";

import unavailable_poster_image from "../../assets/images/unavailable_movie_poster.jpg"

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function MovieListing(movie){
  console.log(movie);
  let MovieRatingClass = "Average";
  const ImageSource = movie.movie.poster_path === null ? unavailable_poster_image : config.TMDB.POSTER_ROOT+movie.movie.poster_path;
  switch (true){
    case (movie.movie.vote_average <= 4): MovieRatingClass = "Bad"; break;
    case (movie.movie.vote_average < 7): MovieRatingClass = "Average"; break;
    case (movie.movie.vote_average >= 7): MovieRatingClass = "Good"; break;
    default: break;
  }
  return(
    <Link to={`/Movie/${movie.movie.id}`}>
      <GridContainer direction="row">
          <GridItem xs={12}>
              <MovieCardItem>
                <MovieCardTitle>{movie.movie.original_title}</MovieCardTitle>
                <div>
                  <MovieRating>
                    <div className={MovieRatingClass}>{movie.movie.vote_average}/10</div>
                  </MovieRating>
                  <MovieCardPoster src={ImageSource}></MovieCardPoster>
                </div>
                <span className="overview">{movie.movie.overview}</span>
            
                <div className="additional-details">
                <GridContainer direction="row" alignItems="baseline">
                    <GridItem xs={12}>
                    <span className="genre-list">genre</span>
                    </GridItem>
                </GridContainer >
                </div>
              </MovieCardItem>
          </GridItem>
      </GridContainer >
    </Link>
  );
}

export default MovieListing;
import React from 'react';
import MovieListing from './MovieListing/MovieListing';
import {MovieCardContainer} from "../../assets/StyledComponents/MovieCard";
import LoaderSpinner from '../../components/Loader/LoaderSpinner'

// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

function MoviesListings(movie_props){
  return(
    movie_props.props ? (
      <MovieCardContainer>
        <GridContainer 
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
            {movie_props.props.map((prop, key) => {
              return(
                <GridItem key={key} xs={12} sm={12} md={6} lg={4} xl={3}>
                  <MovieListing movie={prop} />
                </GridItem>
              );
            })}
        </GridContainer >
      </MovieCardContainer>
    ): (<LoaderSpinner />)
  );
}

export default MoviesListings;
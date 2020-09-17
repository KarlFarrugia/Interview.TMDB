import React from 'react';
import MovieListing from './MovieListing';
import {MovieCardContainer} from "../../assets/StyledComponents/MovieCard";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

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
    ): (<div>Empty</div>)
  );
}

export default MoviesListings;
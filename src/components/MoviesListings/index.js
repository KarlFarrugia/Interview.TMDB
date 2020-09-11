import React from 'react';
import MovieListing from './MovieListing';

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function RenderMovieListing(){
  
}

function MoviesListings(movies){
  return(
    movies.props ? (
      <div>
        <GridContainer direction="row" className="header">
            {movies.props.map((prop, key) => {
              return(
                <GridItem xs={12} md={4} lg={3}>
                  <MovieListing movie={prop} />
                </GridItem>
              );
            })}
        </GridContainer >
      </div>
    ): (<div>Empty</div>)
  );
}

export default MoviesListings;
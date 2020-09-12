import React from 'react';

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function MovieListing(movie){
  //console.log(movie);
  return(
    <GridContainer direction="row" className="header">
        <GridItem xs={12}>
            <h1>{movie.movie.title}</h1>
            <span className="overview">{movie.movie.overview}</span>
            <p>overview</p>
            <div className="additional-details">
            <GridContainer direction="row" alignItems="baseline" className="header">
                <GridItem xs={12}>
                <span className="genre-list">genre</span>
                </GridItem>
                <GridItem xs={12}>
                <span className="production-list">products</span>
                </GridItem>
                <GridItem xs={6}>
                Original Release: <span className="meta-data">{movie.movie.original_title}</span>
                </GridItem>
                <GridItem xs={6}>
                Running Time: <span className="meta-data">123 mins</span> 
                </GridItem>
                <GridItem xs={6}>
                Box Office: <span className="meta-data">$123456</span>
                </GridItem>
                <GridItem xs={6}>
                Vote Average: <span className="meta-data">{movie.movie.vote_average}/10</span>
                </GridItem>
            </GridContainer >
            </div>
        </GridItem>
    </GridContainer >
  );
}

export default MovieListing;
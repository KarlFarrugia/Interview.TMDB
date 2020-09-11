import React from 'react';

// core components
import GridItem from "../../../assets/GridItem.jsx";
import GridContainer from "../../../assets/GridContainer.jsx";


function Card(movie, key){
  return(
    movie.props ? (
      <div>
        <GridContainer direction="row">
            <GridItem xs={12} md={8} lg={7}>
              <h1>{movie.props.title}</h1>
              <span className="overview">{movie.props.overview}</span>
              <p>overview</p>
              <div className="additional-details">
                <GridContainer direction="row" alignItems="baseline">
                  <GridItem xs={12}>
                    <span className="genre-list">genre</span>
                  </GridItem>
                  <GridItem xs={12}>
                    <span className="production-list">products</span>
                  </GridItem>
                  <GridItem xs={6}>
                    Original Release: <span className="meta-data">{movie.props.original_title}</span>
                  </GridItem>
                  <GridItem xs={6}>
                    Running Time: <span className="meta-data">123 mins</span> 
                  </GridItem>
                  <GridItem xs={6}>
                    Box Office: <span className="meta-data">$123456</span>
                  </GridItem>
                  <GridItem xs={6}>
                  Vote Average: <span className="meta-data">{movie.props.vote_average}/10</span>
                  </GridItem>
                </GridContainer >
              </div>
            </GridItem>
        </GridContainer >
      </div>
    ): (<div>Empty</div>)
  );
}

export default Card;
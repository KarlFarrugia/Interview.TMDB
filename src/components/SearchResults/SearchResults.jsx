import React from 'react';
import { Link } from "react-router-dom";
import SearchStyle from "../../assets/SearchStyle";
import {SearchBoxContainer, SearchBoxItem, SearchBoxImg, SearchItemTitle, SearchItemDate, SearchItemGenre, SearchItemOverview} from "../../assets/StyledComponents/Search";
import {dateExtractor} from "../../helpers"

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

import { config } from "../../config";
import {genreRetriever} from "../../helpers";
import unavailable_poster_image from "../../assets/images/unavailable_movie_poster.jpg"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

function SearchBox({ movieList, clear_search }) {
  let isEmpty = false;
  movieList === "" ? movieList = [] : isEmpty = movieList.length < 1;
  return (
    isEmpty ? 
    (
      <></>
    ) : 
    (
      <SearchBoxContainer>
          {movieList.map((movie_props,key) => {
            return(
              <Link key={key} onClick={() => clear_search()}to={`/Movie/${movie_props.id}`}>
                <SearchBoxItem>
                  <GridContainer direction="row" alignItems="flex-start" className="header">
                    <GridItem xs={1}>
                      {movie_props.poster_path !== null ?
                        (<SearchBoxImg src={`${config.TMDB.POSTER_ROOT_W342}${movie_props.poster_path}`} />):
                        (<SearchBoxImg src={unavailable_poster_image} />)                  
                      }                  
                    </GridItem>
                    <GridItem xs={11}>
                      <span>
                        <SearchItemTitle>{movie_props.original_title}</SearchItemTitle><SearchItemDate> {dateExtractor(movie_props.release_date)}</SearchItemDate>
                        <br />
                        {movie_props.genre_ids.map((genre, key) => <SearchItemGenre key={key}><i>{genreRetriever(genre)}</i></SearchItemGenre>)}
                        <br />
                        <SearchItemOverview>{movie_props.overview}</SearchItemOverview>                        
                      </span>
                    </GridItem>
                  </GridContainer>
                </SearchBoxItem>
              </Link>
            );
          })}
      </SearchBoxContainer>
    )
  );
}

export default (withStyles(SearchStyle), SearchBox);
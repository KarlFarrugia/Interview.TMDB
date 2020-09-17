import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import SearchStyle from "../../assets/SearchStyle";
import {SearchBoxContainer, SearchBoxItem, SearchBoxImg, SearchError, SearchItemTitle, SearchItemDate, SearchItemGenre, SearchItemOverview} from "../../assets/StyledComponents/search";
import {dateExtractor} from "../../helpers"

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

import { config } from "../../config";
import {genreRetriever} from "../../helpers";
import unavailable_poster_image from "../../assets/images/unavailable_movie_poster.jpg"

// multilanguage component
import { useTranslation } from "react-i18next";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

function SearchBox({...props}) {
  let { movieList, ...rest } = props;
  const { t } = useTranslation("");
  let isEmpty = false;
  if(movieList === ""){
    movieList = [];
  }else{
    isEmpty = movieList.length < 1;
  }
  return (
    isEmpty ? 
    (
      <></>
    ) : 
    (
      <SearchBoxContainer>
          {movieList.map((prop,key) => {
            let movie_props = prop;
            return(
              <Link to={`/Interview.TMDB/Movie/${movie_props.id}`}>
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
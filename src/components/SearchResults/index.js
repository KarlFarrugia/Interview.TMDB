//#region Imports

// Import react components
import React from 'react';
import { Link } from "react-router-dom";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import custom configurations functions
import { config } from "../../config";

// Import custom helper functions
import {genreRetriever, dateExtractor} from "../../Helpers";

// Import image
import unavailable_poster_image from "../../assets/images/unavailable_movie_poster.jpg"

// Import styled components
import {SearchResultContainer, SearchBoxItem, SearchBoxImg, SearchItemTitle, SearchItemDate, SearchItemGenre, SearchItemOverview} from "../../assets/StyledComponents/Search";

//#endregion

/**
 * SearchBox function
 *  
 * This function renders the results of the search box query
 * 
 * @name SearchBox
 * @function
 * @param {Int16Array} movieList The search movie list to be rendered
 * @param {Dispatch} clear_search The dispatch action to clear the search box
 * @returns {StyledComponent} A styled search container containing search cards of the returned search query 
 */
function SearchBox({ movieList, clear_search }) {
  // Get the translation component to be used to switch between different languages
  let isEmpty = false;
  movieList === "" ? movieList = [] : isEmpty = movieList.length < 1;
  return (
    isEmpty ? 
    (
      <></>
    ) : 
    (
      //The Search Results Container
      <SearchResultContainer>
        {(movieList.map((movie_props,key) => {
            return(
              // The link of the current search item
              <Link key={key} onClick={() => clear_search()}to={`/Movie/${movie_props.id}`}>
                {/* Style the current search result item*/}
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
        }))}
      </SearchResultContainer>
    )
  );
}

export default SearchBox;
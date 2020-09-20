//#region Imports

// Import react components
import React from 'react';

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import custom components
import MovieListing from './MovieListing';
import LoaderSpinner from '../../components/LoaderSpinner'

// Import styled components
import {MovieCardContainer, MovieHeader} from "../../assets/StyledComponents/MovieCard";

//#endregion

/**
 * MovieListing function
 *  
 * This function takes a list of movie objects as a parameter and then uses a Grid Container and the MovieListing components to render a grid of movie cards.
 * 
 * @name MoviesListings
 * @function
 * @param {Object} movie_props a list of movie object to create cards for
 * @returns {StyledComponent} A styled component from the passed movie object. The returned component will be wrapped around a link component to the movie. The link will then take the
 * user to the movie search page.
 */
export default function MoviesListings(movie_props){
  // Get the translation component to be used to switch between different languages
  const { t } = useTranslation("");
  const path = window.location.pathname.split("/")[2];

  return(
    //Render the movie grid. While the movie grid is being built a spinner is shown
    movie_props.props ? (
      <MovieCardContainer>
        <GridContainer 
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {(movie_props.props.length > 0)
            ? (movie_props.props.map((prop, key) => {
              return(
                <GridItem key={key} xs={12} sm={12} md={6} lg={4} xl={3}>
                  <MovieListing movie={prop} />
                </GridItem>
              );
            })
            ):(
              //if path is in movie do not show this message as that is part of the similar movies
              path && path.toLocaleLowerCase() !== "movie" &&  path.toLocaleLowerCase() !== "latest" ? <MovieHeader>{t("common:no_results")}</MovieHeader> : <></>
            )}
        </GridContainer >
      </MovieCardContainer>
    ): (<LoaderSpinner />)
  );
}
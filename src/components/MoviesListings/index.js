import React, {useEffect, useState} from 'react';
import MovieListing from './MovieListing';
import {UPDATE_GENRE, APPEND_MOVIES} from '../../Store/actions/Action'
import {useSelector, useDispatch} from 'react-redux';
import {Api_NowPlaying} from "../../api";
import {MovieCardContainer} from "../../assets/StyledComponents/MovieCard";

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function MoviesListings(movie_props){
  const [genresValue, setGenresValue] = useState(useSelector(state => state.genres));
  const [currentGenreReducer, setCurrentGenreReducer] = useState(useSelector(state => state.genre));
  const renderGenrePicker = !window.location.pathname.toLowerCase().includes("latest");
  const { t, i18n } = useTranslation("");
  const dispatch = useDispatch();

  function UpdateMovies(){
    Api_NowPlaying(dispatch,APPEND_MOVIES,1,t("common:locale"),currentGenreReducer);
  };

  function change(event){
    dispatch(UPDATE_GENRE(event.target.value));
    UpdateMovies();
    setCurrentGenreReducer(event.target.value);
  };

  useEffect(() => {
    UpdateMovies();
  },[]);

  return(
    movie_props.props ? (
      <MovieCardContainer>
        <GridContainer 
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
            {/*
              renderGenrePicker ? (
                <GridItem xs={12}>
                  <FormControl>
                    <Select
                      MenuProps={{}}
                      value={currentGenreReducer}
                      inputProps={{
                        name: "genre",
                        id: "genre",
                        onChange: event => change(event)
                      }}
                    >
                      <MenuItem
                        disabled
                      >
                        <span className="menu_item">
                          Genre
                        </span>
                      </MenuItem>
                      {genresValue.map((props) => {
                        return(
                          <MenuItem
                            value={props.id}
                          >
                            <span>{t(`genres:${props.name.toLowerCase()}`)}</span>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </GridItem>
              ) : (<> </>)
            */}            
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
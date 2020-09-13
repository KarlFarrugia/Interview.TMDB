import React, {useEffect, useState} from 'react';
import MovieListing from './MovieListing';
import {UPDATE_GENRE} from '../../Store/actions/Action'
import {useSelector, useDispatch} from 'react-redux';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function MoviesListings(movie_props){
  const [genresValue, setGenresValue] = useState(useSelector(state => state.genres));
  const [currentGenreReducer, setCurrentGenreReducer] = useState(useSelector(state => state.genre));
  const dispatch = useDispatch();
  const renderGenrePicker = !window.location.pathname.toLowerCase().includes("latest");
  function change(event){
    dispatch(UPDATE_GENRE(event.target.value));
    setCurrentGenreReducer(event.target.value);
  };

  return(
    movie_props.props ? (
      <div>
        <GridContainer direction="row" className="header">
            {
              renderGenrePicker ? (
                <GridItem xs={12}>
                  <FormControl>
                    {/* The drop down list section */}
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
                            <span>{props.name}</span>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </GridItem>
              ) : (<> </>)
            }            
            {movie_props.props.map((prop, key) => {
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
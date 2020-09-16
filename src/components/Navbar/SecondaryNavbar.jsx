import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import {Api_Search, Api_NowPlaying} from '../../api/'
import {useSelector, useDispatch} from 'react-redux';
import {UPDATE_LANGUAGE, CLEAR_ALL_MOVIES, APPEND_MOVIES, UPDATE_GENRE, MOVIE_SEARCH} from '../../Store/actions/Action'
import Card from '../Card/MovieSearchCard'
import {LogoImg} from '../../assets/StyledComponents/MovieCard'
import site_logo from "../../assets/images/site_logo.png"
import { SecondNavigationItem } from '../../assets/StyledComponents/Navigation';
import { LANGUAGES } from '../../config';
import styled from 'styled-components';

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from "@material-ui/core/InputLabel";
import Switch from '@material-ui/core/Switch';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

function SecondaryNavbar (){
    const [moviesValue, setMoviesValue] = useState([]);
    const [currentMovie, setCurrentMovie] = useState("");
    const [currentGenreReducer, setCurrentGenreReducer] = useState(useSelector(state => state.genre));
    const [genresValue, setGenresValue] = useState(useSelector(state => state.genres));
    const { t, i18n } = useTranslation("");
    let page = useSelector(state => state.page);
    const dispatch = useDispatch();

    const StyledSelect = styled(Select)`
        .MuiSelect-root,
        .Mui-focused,
        input#genre,
        label.MuiFormLabel-root{
            color: white !important;
        }
    `;

    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#fff',
          },
          secondary: {
            main: '#fff',
          },
        },
      });

    function change(event){
      dispatch(UPDATE_GENRE(event.target.value));
      dispatch(CLEAR_ALL_MOVIES());
      UpdateMovies();
      setCurrentGenreReducer(event.target.value);
    };
    
    async function GetMovies(movie_list) {
        movie_list.
        then(movies => {
            if (movies === ""){
                setMoviesValue([]);
            }else{
                setMoviesValue(movies);
            }
        });
    }

    function UpdateMovies(search){
        dispatch(CLEAR_ALL_MOVIES());
        // from 'http://localhost:3000/NowPlaying/additionalStrings' get nowplaying
        const path = window.location.pathname.split("/")[1].toLowerCase();
        dispatch(MOVIE_SEARCH(""));
        switch(path){
            case 'nowplaying':
                for (let index = 1; index <= page; index++) {
                    Api_NowPlaying(dispatch,APPEND_MOVIES,index,t("common:locale"));
                }
            default:
                return;
        }
    }

    
    function FetchMovies(movieName, adult){
        if(movieName !== currentMovie){
            GetMovies(Api_Search(movieName, t("common:locale"), adult));
            setCurrentMovie(movieName);
        }
    }
    function UpdateLanguage(event) {
        dispatch(UPDATE_LANGUAGE(event.target.value));
        i18n.changeLanguage(event.target.value);
        UpdateMovies();
    }

    return (
        <GridContainer 
            direction="row" 
            justify="flex-end"
            alignItems="flex-end"
        >
            <br />
            <GridItem xs={3} sm={4} md={2}>
                <SecondNavigationItem>
                    <SearchBox />
                </SecondNavigationItem>
            </GridItem>
            <GridItem xs={3} sm={2} md={1}>
                <SecondNavigationItem>
                    <ThemeProvider theme={theme}>
                        <FormControl>
                            {/* The drop down list section */}
                            <StyledSelect
                            id="customSelect"
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
                            </StyledSelect>
                        </FormControl>
                    </ ThemeProvider>
                </SecondNavigationItem>
            </GridItem>
            <GridItem xs={3} sm={2} md={1}>
                <SecondNavigationItem>
                    <ThemeProvider theme={theme}>
                        <FormControl>
                                {/* The drop down list section */}
                                <StyledSelect
                                MenuProps={{}}
                                value={useSelector(state => state.language)}
                                inputProps={{
                                    name: "language",
                                    id: "language",
                                    onChange: event => UpdateLanguage(event)
                                }}
                                >
                                <MenuItem
                                    disabled
                                >
                                    <span className="menu_item">
                                        {t("language:title")}
                                    </span>
                                </MenuItem>
                                {LANGUAGES.map((props) => {
                                    return(
                                    <MenuItem
                                        value={props.id}
                                    >
                                        <span>{props.name}</span>
                                    </MenuItem>
                                    );
                                })}
                                </StyledSelect>
                        </FormControl>
                    </ThemeProvider>
                </SecondNavigationItem>
            </GridItem>
            <GridItem xs={3} sm={2} md={1}>
                <SecondNavigationItem>
                    <ThemeProvider theme={theme}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label={t("common:adult")}
                            labelPlacement="start"
                        />
                    </ThemeProvider>
                </SecondNavigationItem>
            </GridItem>
            <GridItem xs={12}>
                {FetchMovies(useSelector(state => state.movie), useSelector(state => state.adult))}
                <SearchResults movieList={moviesValue} />
            </GridItem>
        </GridContainer >
    );
}

export default SecondaryNavbar;
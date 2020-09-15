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
import { NavigationItem, NavigationLine } from '../../assets/StyledComponents/Navigation';
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
    const LANGUAGES = [
        {id: "en", name: "English"},
        {id: "it", name: "Italiano"},
        {id: "de", name: "Deutsch"}
    ];

    const NavbarContainer = styled.div`
        margin-top: 10px;
    `

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
        <>
            <GridContainer 
                direction="row-reverse" 
                justify="flex-start"
                alignItems="flex-end"
            >
                <br />
                <GridItem xs={6} md={3} lg={2}>
                    <div className="Search">
                        <SearchBox />
                    </div>
                </GridItem>
                <GridItem xs={6} md={3} lg={2}>
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
                                <span>{t(`genres:${props.name.toLowerCase()}`)}</span>
                            </MenuItem>
                            );
                        })}
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem xs={6} md={3} lg={2}>
                    <ThemeProvider theme={theme}>
                        <FormControl>
                                {/* The drop down list section */}
                                <Select
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
                                </Select>
                        </FormControl>
                    </ThemeProvider>
                </GridItem>
                <GridItem xs={6} md={3} lg={2}>
                    <ThemeProvider theme={theme}>
                        <FormControlLabel
                            value="start"
                            control={<Checkbox />}
                            label={t("common:adult")}
                            labelPlacement="start"
                        />
                    </ThemeProvider>
                </GridItem>
                <GridItem xs={12}>
                    {FetchMovies(useSelector(state => state.movie), useSelector(state => state.adult))}
                    {console.log(moviesValue)}
                    <SearchResults movieList={moviesValue} />
                </GridItem>
            </GridContainer >
            <br />
            <NavigationLine />
        </>
    );
}

export default SecondaryNavbar;
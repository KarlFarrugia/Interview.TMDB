import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import {Api_Search, Api_NowPlaying} from '../../api/'
import {useSelector, useDispatch} from 'react-redux';
import {UPDATE_LANGUAGE, CLEAR_ALL_MOVIES, APPEND_MOVIES, ACTION_TOGGLE_ADULT, MOVIE_SEARCH} from '../../Store/actions/Action'
import Card from '../Card/MovieSearchCard'
import {LogoImg} from '../../assets/StyledComponents/MovieCard'
import site_logo from "../../assets/images/site_logo.png"

// multilanguage component
import { useTranslation } from "react-i18next";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from '@material-ui/core/Switch';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function Navbar (){
    const [moviesValue, setMoviesValue] = useState([]);
    const [currentMovie, setCurrentMovie] = useState("");
    const { t, i18n } = useTranslation("");
    let page = useSelector(state => state.page);
    const LANGUAGES = [
        {id: "en", name: "English"},
        {id: "it", name: "Italiano"},
        {id: "de", name: "Deutsch"}
    ];
    const dispatch = useDispatch();

    function FetchMovies(movieName, adult){
        if(movieName !== currentMovie){
            GetMovies(Api_Search(movieName, t("common:locale"), adult));
            setCurrentMovie(movieName);
        }
    }

    async function GetMovies(movie_list) {
        movie_list.
        then(movies => {
            if (movies !== ""){
                setMoviesValue(movies.map((prop, key) => <Card props={prop} key={key}/>));
            }else{
                setMoviesValue("");
            }
        });
    }

    function UpdateLanguage(event) {
        dispatch(UPDATE_LANGUAGE(event.target.value));
        i18n.changeLanguage(event.target.value);
        UpdateMovies();
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

    return (
        <GridContainer direction="row" alignItems="baseline" className="header">
            <GridItem xs={3}>
                <Link to={"/"}>
                    <LogoImg src={site_logo}/> Movie Library
                </Link>
            </GridItem>
            <GridItem xs={3}>
                <div className="Search">
                    <SearchBox />
                </div>
            </GridItem>
            <GridItem xs={2}>
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
                            Language
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
            </GridItem>
            <GridItem xs={2}>
                {t("common:adult")}
                <Switch
                    checked={useSelector(state => state.adult)}
                    onChange={() => dispatch(ACTION_TOGGLE_ADULT())}
                    name="Adults"
                    inputProps={
                        { 'aria-label': 'primary checkbox' }
                    }
                />
            </GridItem>
            <GridItem xs={12}>
                {FetchMovies(useSelector(state => state.movie), useSelector(state => state.adult))}
                <SearchResults movieList={moviesValue} />
            </GridItem>
        </GridContainer >
    );
}

export default Navbar;
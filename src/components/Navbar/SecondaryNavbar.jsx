import React, {useState} from 'react';
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import {Api_Search, Api_NowPlaying} from '../../api/'
import {connect} from 'react-redux';
import {ACTION_UPDATE_LANGUAGE, ACTION_UPDATE_LOCALE, ACTION_CLEAR_ALL_MOVIES, ACTION_APPEND_MOVIES, ACTION_UPDATE_GENRE, ACTION_MOVIE_SEARCH, ACTION_TOGGLE_ADULT} from '../../Store/actions/Action'
import { SecondNavigationItem, StyledSelect, StyledFormControlLabel, } from '../../assets/StyledComponents/Navigation';
import { GENRES, LANGUAGES } from '../../config';

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from "@material-ui/core/MenuItem";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function SecondaryNavbar ({page, genre, language, adult, search, clear_movies, clear_search, append_movies, update_genre, update_language, update_locale, toggle_adult}){
    const [moviesValue, setMoviesValue] = useState([]);
    const [currentMovie, setCurrentMovie] = useState("");
    const { t, i18n } = useTranslation("");
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
      update_genre(event.target.value);
      clear_movies();
      UpdateMovies();
    };
    
    async function GetMovies(movie_list) {
        await movie_list.then(
            movies => {
                if (movies === ""){
                    setMoviesValue([]);
                }else{
                    setMoviesValue(movies);
                }
            }
        );
    }

    function UpdateMovies(){
        clear_movies();
        // from 'http://localhost:3000/NowPlaying/additionalStrings' get nowplaying
        const path = window.location.pathname.split("/")[1].toLowerCase();
        switch(path){
            case 'nowplaying':
                for (let index = 1; index <= page; index++) {
                    Api_NowPlaying(append_movies,index,t("common:locale"));
                }
                break;
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
        update_language(event.target.value);
        i18n.changeLanguage(event.target.value);
        update_locale(t(`common:locale`));
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
                            value={genre}
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
                                    {t("genres:title")}
                                </span>
                            </MenuItem>
                            {GENRES.map((props, key) => {
                                return(
                                <MenuItem
                                    key={key}
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
                                value={language}
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
                                {LANGUAGES.map((props, key) => {
                                    return(
                                    <MenuItem
                                        key={key}
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
                        <StyledFormControlLabel
                            control={<Checkbox 
                                value={adult}
                                onChange={() => toggle_adult()}
                            />}
                            label={t("common:adult")}
                            labelPlacement="start"
                        />
                    </ThemeProvider>
                </SecondNavigationItem>
            </GridItem>
            <GridItem xs={12}>
                {FetchMovies(search, adult)}
                <SearchResults movieList={moviesValue} clear_search={clear_search} />
            </GridItem>
        </GridContainer >
    );
}

const mapStateToProps =  state => {  
    return {
        page: state.page,
        genre: state.genre,
        language: state.language,
        adult: state.adult,
        search: state.search
    }
}

const mapDispatchToProps = dispatch => ({
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES()),
    clear_search: () => dispatch(ACTION_MOVIE_SEARCH("")),
    append_movies: query => dispatch(ACTION_APPEND_MOVIES(query)),
    update_genre: genre => dispatch(ACTION_UPDATE_GENRE(genre)),
    update_language: lang => dispatch(ACTION_UPDATE_LANGUAGE(lang)),
    update_locale: locale => dispatch(ACTION_UPDATE_LOCALE(locale)),
    toggle_adult: () => dispatch(ACTION_TOGGLE_ADULT())
})

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryNavbar);
//#region Imports

// Import react components
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

// Import redux actions
import {ACTION_UPDATE_LANGUAGE, ACTION_UPDATE_LOCALE, ACTION_UPDATE_REGION, ACTION_UPDATE_GENRE, ACTION_MOVIE_SEARCH, ACTION_TOGGLE_ADULT} from '../../Store/actions/Action'

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import api functions
import {Api_Search} from '../../api/'

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import material-ui core components
import FormControl from "@material-ui/core/FormControl";
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from "@material-ui/core/MenuItem";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Import custom components
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';

// Import custom configurations functions
import { GENRES, LANGUAGES } from '../../config';

// Import styled components
import { SecondNavigationItem, StyledSelect, StyledFormControlLabel, AdultCheckbox } from '../../assets/StyledComponents/Navigation';

//#endregion

/**
 * SecondaryNavbar function
 *  
 * This function uses a grid container to returns the secondary navbar which contains the refiners to be used throughout the site. The refiners are then connected to 
 * the redux store to be able to refine all site selections
 * 
 * @name SecondaryNavbar
 * @function
 * @returns {Component} A styled component which uses grid container to render the site logo and navigation bar
 */
function SecondaryNavbar ({genre, language, adult, search, clear_search, update_genre, update_language, update_locale, update_region, toggle_adult}){
    // Current searched for movie and refiners useStates
    const [moviesValue, setMoviesValue] = useState([]);
    const [currentMovie, setCurrentMovie] = useState("");
    const [currentAdult, setCurrentAdult] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [currentGenre, setCurrentGenre] = useState(0);

    // Get the translation and language switching components
    const { t, i18n } = useTranslation("");

    // Create a custom theme for the material ui inputs
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

    // On every page update check if the page parameters have changed.
    useEffect(() => {
        // If the passed parameters are different from the useStates then update them to match
        // Otherwise do nothing. This condition safeguards against an infinite update loop
        if(currentAdult !== adult || currentLanguage !== language || currentGenre !== genre){
            setCurrentAdult(adult);
            setCurrentLanguage(language);
            setCurrentGenre(genre);
            GetMovies(Api_Search(currentMovie, language, adult));
            setCurrentMovie(currentMovie);
        }
    });

    // This function awaits the result of the search results and then updates the setMovies useState which renders the search results component
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

    // This function gets triggered when the user searches or toggles the adult checkbox. The function updates the setMovies useState which renders the search results component
    function FetchMovies(movieName, adult){
        if(movieName !== currentMovie){
            GetMovies(Api_Search(movieName, language, adult));
            setCurrentMovie(movieName);
        }
    }

    // This function gets triggered when the user changes the language from the drop down. The function then updates language, locale and region store items. The locale and region
    // can only be changed after the language has been switched as their values are set within the translations files.
    function UpdateLanguage(event) {
        update_language(event.target.value);
        i18n.changeLanguage(event.target.value);
        //Locale is retrieved from the i18n translations therefore dispatch the update after changing the language
        update_locale(t(`common:locale`));
        update_region(t(`common:region`));
    }

    return (
        <GridContainer 
            direction="row" 
            justify="flex-end"
            alignItems="flex-end"
        >
            <br />
            <GridItem xs={4} sm={4} md={2}>
                {/* Search Box Component */}
                <SecondNavigationItem>
                    <SearchBox />
                </SecondNavigationItem>
            </GridItem>
            <GridItem xs={2} sm={2} md={1}>
                {/* Genre Drop Down Component */}
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
                                onChange: event => update_genre(event.target.value)
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
                {/* Language Drop Down Component */}
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
            <GridItem xs={2} sm={2} md={1}>
                {/* Adult Checkbox Component */}
                <AdultCheckbox>
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
                </AdultCheckbox>
            </GridItem>
            <GridItem xs={12}>
                {/* Search Results */}
                {FetchMovies(search, adult)}
                <SearchResults movieList={moviesValue} clear_search={clear_search} />
            </GridItem>
        </GridContainer >
    );
}

// states to be retrieved from the redux store
const mapStateToProps =  state => {  
    return {
        genre: state.genre,
        language: state.language,
        adult: state.adult,
        search: state.search
    }
}

// actions to be retrieved from the reducers
const mapDispatchToProps = dispatch => ({
    clear_search: () => dispatch(ACTION_MOVIE_SEARCH("")),
    update_genre: genre => dispatch(ACTION_UPDATE_GENRE(genre)),
    update_language: lang => dispatch(ACTION_UPDATE_LANGUAGE(lang)),
    update_locale: locale => dispatch(ACTION_UPDATE_LOCALE(locale)),
    update_region: region => dispatch(ACTION_UPDATE_REGION(region)),
    toggle_adult: () => dispatch(ACTION_TOGGLE_ADULT())
})

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryNavbar);
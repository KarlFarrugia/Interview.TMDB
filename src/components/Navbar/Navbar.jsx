//#region Imports

// Import react components
import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

// Import redux actions
import { ACTION_RESET_PAGE } from '../../Store/actions/Action.jsx';

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import image
import site_logo from "../../assets/images/site_logo.png"

// Import styled components
import {LogoImg} from '../../assets/StyledComponents/MovieCard'
import {NavbarTitle, NavbarPosition, NavigationSpacer, NavigationLinkText} from '../../assets/StyledComponents/Navigation';

//#endregion

/**
 * Navbar component
 *  
 * This component uses a grid container to returns the top navbar with the site logo and the respective 5 navigation links
 * 
 * @name Navbar
 * @constant
 * @param {Dispatch} reset_page The dispatch action to reset the page number to the initial state
 * @returns {StyledComponent} A styled component which uses grid container to render the site logo and navigation bar
 */
function Navbar ({reset_page}){
    // Get the translation component to be used to switch between different languages
    const { t } = useTranslation("");

    return (
        <NavbarPosition>
            <GridContainer 
                direction="row"
                justify="flex-end"          
                alignItems="flex-end"
            >
                {/* Site Logo */}
                <GridItem xs={12} sm={4} lg={7}>
                    <NavigationSpacer>
                        <Link onClick={() => reset_page()} to={"/"}>
                            <LogoImg src={site_logo}/> <NavbarTitle>{t("common:app_title")}</NavbarTitle>
                        </Link>
                    </NavigationSpacer>
                </GridItem>
                <GridItem xs={12} sm={8} lg={5}>
                    <GridContainer 
                        direction="row"
                        justify="space-between"          
                        alignItems="flex-end"
                    >
                        {/* Latest Movie */}
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link onClick={() => reset_page()} to={"/Latest"}>
                                    <NavigationLinkText>{t("navigation:latest")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        {/* Now Playing Movies */}
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link onClick={() => reset_page()} to={"/NowPlaying"}>
                                    <NavigationLinkText>{t("navigation:now_playing")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        {/* Upcoming Movies */}
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link onClick={() => reset_page()} to={"/Upcoming"}>
                                    <NavigationLinkText>{t("navigation:upcoming")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        {/* Popular Movies */}
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link onClick={() => reset_page()} to={"/Popular"}>
                                    <NavigationLinkText>{t("navigation:popular")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        {/* Top Rated Movies */}
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link onClick={() => reset_page()} to={"/TopRated"}>
                                    <NavigationLinkText>{t("navigation:top_rated")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                    </GridContainer >
                </GridItem>
            </GridContainer >
        </NavbarPosition>
    );
}

// actions to be retrieved from the reducers
const mapDispatchToProps = dispatch => ({
    reset_page: () => dispatch(ACTION_RESET_PAGE())
})

export default connect(null, mapDispatchToProps)(Navbar);
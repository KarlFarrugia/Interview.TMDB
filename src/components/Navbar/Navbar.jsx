import React from 'react';
import { Link } from "react-router-dom";
import {LogoImg} from '../../assets/StyledComponents/MovieCard'
import site_logo from "../../assets/images/site_logo.png"
import {NavbarTitle, NavbarPosition, NavigationSpacer, NavigationLinkText} from '../../assets/StyledComponents/Navigation';

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

function Navbar (){
    const { t } = useTranslation("");

    return (
        <NavbarPosition>
            <GridContainer 
                direction="row"
                justify="flex-end"          
                alignItems="flex-end"
            >
                <GridItem xs={12} sm={4} lg={7}>
                    <NavigationSpacer>
                        <Link to={"/"}>
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
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/Latest"}>
                                    <NavigationLinkText>{t("navigation:latest")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/NowPlaying"}>
                                    <NavigationLinkText>{t("navigation:now_playing")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/Upcoming"}>
                                    <NavigationLinkText>{t("navigation:upcoming")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/Popular"}>
                                    <NavigationLinkText>{t("navigation:popular")}</NavigationLinkText>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/TopRated"}>
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

export default Navbar;
import React, {Component, useState} from 'react';
import { Link } from "react-router-dom";
import {LogoImg} from '../../assets/StyledComponents/MovieCard'
import site_logo from "../../assets/images/site_logo.png"
import {NavbarTitle, NavbarPosition, NavigationSpacer} from '../../assets/StyledComponents/Navigation';

// multilanguage component
import { useTranslation } from "react-i18next";

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

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
                                    <span>{t("navigation:latest")}</span>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/NowPlaying"}>
                                    <span>{t("navigation:now_playing")}</span>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/Upcoming"}>
                                    <span>{t("navigation:upcoming")}</span>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link to={"/Popular"}>
                                    <span>{t("navigation:popular")}</span>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={2} sm={1} md={1} lg={1}>
                            <NavigationSpacer>
                                <Link onClick={() => window.location.href=`/TopRated`} to={"/TopRated"}>
                                    <span>{t("navigation:top_rated")}</span>
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
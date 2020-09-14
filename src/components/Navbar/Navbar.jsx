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
import styled from 'styled-components';

// multilanguage component
import { useTranslation } from "react-i18next";

// @material-ui/core components
import { createMuiTheme } from '@material-ui/core/styles';

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

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
 
function Navbar (){
    const { t } = useTranslation("");
    const NavbarTitle = styled.span`
        margin-left: 5%;
        font-size: larger;
    `
    return (
        <GridContainer 
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
        >
            <GridItem xs={12} md={5} lg={7}>
                <Link onClick={() => window.location.href=`/`} to={"/"}>
                    <LogoImg src={site_logo}/> <NavbarTitle>{t("common:app_title")}</NavbarTitle>
                </Link>
            </GridItem>
            <GridItem xs={12} md={7} lg={1}>
                <Link onClick={() => window.location.href=`/Latest`} to={"/Latest"}>
                    <span>{t("navigation:latest")}</span>
                </Link>
            </GridItem>
            <GridItem xs={12} md={7} lg={1}>
                <Link onClick={() => window.location.href=`/NowPlaying`} to={"/NowPlaying"}>
                    <span>{t("navigation:now_playing")}</span>
                </Link>
            </GridItem>
            <GridItem xs={12} md={7} lg={1}>
                <Link onClick={() => window.location.href=`/Upcoming`} to={"/Upcoming"}>
                    <span>{t("navigation:upcoming")}</span>
                </Link>
            </GridItem>
            <GridItem xs={12} md={7} lg={1}>
                <Link onClick={() => window.location.href=`/Popular`} to={"/Popular"}>
                    <span>{t("navigation:popular")}</span>
                </Link>
            </GridItem>
            <GridItem xs={12} md={7} lg={1}>
                <Link onClick={() => window.location.href=`/TopRated`} to={"/TopRated"}>
                    <span>{t("navigation:top_rated")}</span>
                </Link>
            </GridItem>
        </GridContainer >
    );
}

export default Navbar;
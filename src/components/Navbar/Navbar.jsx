import React, {Component} from 'react';
import { Link } from "react-router-dom";
import SearchBox from '../Search/SearchBox';
import { Col, Row, Container  } from 'react-bootstrap';

// core components
import GridItem from "../../assets/GridItem.jsx";
import GridContainer from "../../assets/GridContainer.jsx";

function Navbar (){
    return (
        <GridContainer direction="row" alignItems="baseline" className="header">
            <GridItem xs={6} md={6} lg={6}>
                <div className="title">
                    <Link to={"/"}>
                        <span>TMDB</span>
                    </Link>
                </div>
            </GridItem>
            <GridItem xs={6} md={6} lg={6}>
                <div className="Search">
                    <SearchBox />
                </div>
            </GridItem>
            <GridItem xs={12}>
                <div className="Search-Box">
                    <div className="Search-Box-item">
                        item
                    </div>
                    <div className="Search-Box-item">
                        item
                    </div>
                </div>
            </GridItem>
        </GridContainer >
    );
}

export default Navbar;
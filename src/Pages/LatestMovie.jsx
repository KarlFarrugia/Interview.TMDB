import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Api_Latest} from '../api'
import Card from '../components/Card/Card'

// multilanguage component
import { useTranslation } from "react-i18next";

function LatesMovie() {
    const [moviesValue, setMoviesValue] = useState("");
    const { t } = useTranslation("");

    const GetMovies = async () => {
        Api_Latest(setMoviesValue, t("common:locale"));
    }

    useEffect(() => {GetMovies()},[])

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <section className="Results">
                <div>
                    {moviesValue,
                    <Card props={moviesValue}/>}
                </div>
            </section>
            {/* Get Similar Movies */}
        </div>
    );
}

export default LatesMovie;

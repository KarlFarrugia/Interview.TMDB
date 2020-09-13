import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Api_QueryMovie} from '../api';

// multilanguage component
import { useTranslation } from "react-i18next";

function MoviePage(props) {
    const [moviesValue, setMoviesValue] = useState("");
    const { t } = useTranslation("");

    const GetMovies = async () => {
        let moviename = props.match.params.moviename;
        Api_QueryMovie(setMoviesValue, moviename, t("common:locale"));        
    }

    useEffect(() => {GetMovies()},[])

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <section className="Results">
                <div>
                    {moviesValue}
                </div>
            </section>
            {/* Get Keywords Movies */}
            {/* Get Similar Movies */}
        </div>
    );
}

export default MoviePage;

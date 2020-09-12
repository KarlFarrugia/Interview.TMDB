import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card'
import {MOVIE_SEARCH} from "../Store/actions/Action"

function MoviePage(props) {
    const [moviesValue, setMoviesValue] = useState("");

    const GetMovies = async () => {
        console.log(props.match.params.moviename);
        let moviename = props.match.params.moviename;
        await axios.get(`${config.TMDB.API_ROOT_URL}/search/movie?api_key=${config.TMDB.API_KEY}&query=${moviename}&page=1`)
        .then(res => {
            let movies = res.data.results;
            console.log(movies);
            setMoviesValue(movies.map((prop, key) => <Card props={prop}/>));
        });
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

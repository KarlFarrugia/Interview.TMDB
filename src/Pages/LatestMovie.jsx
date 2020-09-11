import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card'

function LatesMovie() {
    const [moviesValue, setMoviesValue] = useState("");

    const GetMovies = async () => {
        await axios.get(`${config.TMDB.API_ROOT_URL}/movie/latest?api_key=${config.TMDB.API_KEY}`)
        .then(res => {
            setMoviesValue(res.data);
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
                    {<Card props={moviesValue}/>}
                </div>
            </section>
            {/* Get Similar Movies */}
        </div>
    );
}

export default LatesMovie;

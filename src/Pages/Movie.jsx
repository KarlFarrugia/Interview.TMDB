import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Api_QueryMovie} from '../api';

function MoviePage(props) {
    const [moviesValue, setMoviesValue] = useState("");

    const GetMovies = async () => {
        let moviename = props.match.params.moviename;
        Api_QueryMovie(setMoviesValue, moviename, "en-EN");        
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

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Api_Latest} from '../api'
import Card from '../components/Card/Card'

function LatesMovie() {
    const [moviesValue, setMoviesValue] = useState("");

    const GetMovies = async () => {
        Api_Latest(setMoviesValue, "en-EN");
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

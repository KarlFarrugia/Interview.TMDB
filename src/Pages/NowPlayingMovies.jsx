import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card'
import {useSelector, useDispatch} from 'react-redux';
import {APPEND_MOVIES, TRUNCATE_MOVIES} from '../Store/actions/Action'

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

function NowPlaying() {
    const [moviesValue, setMoviesValue] = useState("");
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const GetMovies = async () => {
        await axios.get(`${config.TMDB.API_ROOT_URL}/movie/now_playing?api_key=${config.TMDB.API_KEY}&page=${page}`)
        .then(res => {
            dispatch(APPEND_MOVIES(res.data.results));
        });
    }
    
    const FetchMore = () => {
        setPage(page + 1);
        GetMovies();
    }

    const Remove = () => {
        if(page > 1){
            setPage(page - 1);
            dispatch(TRUNCATE_MOVIES());
        }
    }

    useEffect(() => {FetchMore()},[])

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <section className="Results">
                {/* Movie Refiner by Genre Drop Down */}
                <div>
                    {<Card props={moviesValue}/>}
                </div>
            </section>
            <section className="FetchMore">
                <Button onClick={() => Remove()}>
                 See Less
                </Button>
                <Button onClick={() => FetchMore()}>
                 See More
                </Button>
            </section>
        </div>
    );
}

export default NowPlaying;

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MoviesListings from '../components/MoviesListings'
import {useSelector, useDispatch} from 'react-redux';
import {APPEND_MOVIES, TRUNCATE_MOVIES} from '../Store/actions/Action'
import {Api_NowPlaying} from '../api'

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

function NowPlaying() {
    const [moviesValue, setMoviesValue] = useState("");
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const GetMovies = async () => Api_NowPlaying(dispatch,APPEND_MOVIES,page,"en-EN");
    
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
                    {<MoviesListings props={useSelector(state => state.movies)}/>}
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

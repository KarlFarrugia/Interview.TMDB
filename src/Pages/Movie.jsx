import React from 'react';
import MovieId from '../components/MovieId';


function MoviePage(props) {
    return (
        <MovieId movieId={props.match.params.movieid}/>
    );
}

export default MoviePage;

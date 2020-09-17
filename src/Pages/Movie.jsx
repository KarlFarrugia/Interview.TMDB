import React from 'react';
import {Api_QueryMovie, Api_Similar, Api_Keywords, Api_Videos} from '../api';
import { connect } from 'react-redux';
import MovieId from '../components/MovieId';

function MoviePage(props) {
    return (
        <MovieId movieId={parseInt(props.movieId)}/>
    );
}

const mapStateToProps =  state => {  
    console.log(state);
    return {
        movieId: window.location.pathname.split("/")[2]
    }
}
  
/*const mapDispatchToProps = dispatch => ({
    reducer: () => dispatch(action())
})*/

export default connect(mapStateToProps, null)(MoviePage);
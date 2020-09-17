import React from 'react';
import { connect } from 'react-redux';
import MovieId from '../components/MovieId';

function MoviePage() {
    return (
        <MovieId movieId={parseInt(window.location.pathname.split("/")[3])}/>
    );
}

const mapStateToProps =  state => {  
    return {
        movieId: window.location.pathname.split("/")[3]
    }
}
  
/*const mapDispatchToProps = dispatch => ({
    reducer: () => dispatch(action())
})*/

export default connect(mapStateToProps, null)(MoviePage);
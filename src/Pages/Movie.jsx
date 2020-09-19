import React from 'react';
import { connect } from 'react-redux';
import MovieId from '../components/MovieId';

function MoviePage({language}) {
    return (
        <MovieId movieId={parseInt(window.location.pathname.split("/")[3])} language={language}/>
    );
}

const mapStateToProps =  state => {  
    return {
        language: state.language
    }
}
  
/*const mapDispatchToProps = dispatch => ({
    reducer: () => dispatch(action())
})*/

export default connect(mapStateToProps, null)(MoviePage);
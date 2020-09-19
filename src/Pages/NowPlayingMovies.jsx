import React from 'react';
import MoviesListings from '../components/MoviesListings';
import Paging from '../components/Paging'
import { connect } from 'react-redux';
import {ACTION_APPEND_MOVIES, ACTION_SET_PAGE, ACTION_CLEAR_ALL_MOVIES} from '../Store/actions/Action'
import {App, Section} from '../assets/StyledComponents/App'

function NowPlaying({page, movies, append_movies, set_page, clear_movies}) {
    return (
        <App>
            <Section>
                {<MoviesListings props={movies} />}
            </Section>
            <Section>
                <Paging page={page} append_movies={append_movies} set_page={set_page} clear_movies={clear_movies}/>
            </Section>
        </App>
    );
}

const mapStateToProps =  state => {  
    return {
        page: state.page,
        movies: state.movies,
    }
}

const mapDispatchToProps = dispatch => ({
    append_movies: query => dispatch(ACTION_APPEND_MOVIES(query)),
    set_page: page => dispatch(ACTION_SET_PAGE(page)),
    clear_movies: () => dispatch(ACTION_CLEAR_ALL_MOVIES()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
  
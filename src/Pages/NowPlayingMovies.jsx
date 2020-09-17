import React from 'react';
import MoviesListings from '../components/MoviesListings';
import Paging from '../components/Paging'
import { connect } from 'react-redux';
import {ACTION_APPEND_MOVIES, ACTION_SET_PAGE} from '../Store/actions/Action'
import {App, Section} from '../assets/StyledComponents/App'

function NowPlaying({page, movies, append_movies, set_page}) {
    return (
        <App>
            <Section>
                {<MoviesListings props={movies} />}
            </Section>
            <Section>
                <Paging page={page} append_movies={append_movies} set_page={set_page}/>
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
    set_page: page => dispatch(ACTION_SET_PAGE(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
  
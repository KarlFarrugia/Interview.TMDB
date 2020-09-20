//#region Imports

// Import react components
import React from 'react';
import {connect} from 'react-redux';

// Import redux actions
import {ACTION_MOVIE_SEARCH} from '../../Store/actions/Action'

// Import material ui components
import FormControl from "@material-ui/core/FormControl";

// Import styled components
import {StyledTextField} from '../../assets/StyledComponents/SearchBox'

//#endregion

/**
 * SearchBox constant
 *  
 * This constant renders the search box and updates the redux store when the user starts searching for a movie
 * 
 * @name SearchBox
 * @constant
 * @param {String} search The search query that is the value of the search text field
 * @param {Dispatch} movie_search The dispatch action to update the movie search within the redux stor
 * @returns {Component} A search input box
 */
const SearchBox = ({search, movie_search}) => {
  const handleChange = event => {
    movie_search(event.target.value);
  }
  
  return (
    <FormControl>
      <StyledTextField autoFocus value={search} label="Search" id="search-input" onChange={handleChange} />
    </FormControl>
  );
}

// states to be retrieved from the redux store
const mapStateToProps =  state => {  
  return {
      search: state.search
  }
}

// actions to be retrieved from the reducers
const mapDispatchToProps = dispatch => ({
  movie_search: query => dispatch(ACTION_MOVIE_SEARCH(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

//#region Imports

// Import react components
import React, {useState} from 'react';
import {connect} from 'react-redux';

// Import redux actions
import {ACTION_MOVIE_SEARCH} from '../../Store/actions/Action'

// Import material ui components
import FormControl from "@material-ui/core/FormControl";

// Import styled components
import {StyledTextField} from '../../assets/StyledComponents/SearchBox'

// Import debounce for delaying search from loadsh
import { debounce } from 'lodash';

//#endregion

/**
 * SearchBox constant
 *  
 * This constant renders the search box and updates the redux store using debounce half a second after the user searches for a movie
 * 
 * @name SearchBox
 * @constant
 * @param {String} search The search query that is the value of the search text field
 * @param {Dispatch} movie_search The dispatch action to update the movie search within the redux stor
 * @returns {Component} A search input box
 */
const SearchBox = ({search, movie_search}) => {
  // Store a local version of the search value using useState
  const [searchValue, SetSearchValue] = useState(search);

  // Debounce the search for half a second and then update the redux store using the movie_search action
  const delayedHandleChange = debounce(eventData => movie_search(eventData.target.value), 500);

  const handleChange = event => {
    let eventData = { id: event.id, target: event.target };
    SetSearchValue(eventData.target.value);
    delayedHandleChange(eventData);
  }
  
  return (
    <FormControl>
      <StyledTextField 
        autoFocus 
        value={searchValue} 
        label="Search" 
        id="search-input" 
        onChange={handleChange} 
      />
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

import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import {StyledTextField} from '../../assets/StyledComponents/SearchBox'
import {ACTION_MOVIE_SEARCH} from '../../Store/actions/Action'
import {connect} from 'react-redux';

const SearchBox = ({search, movie_search}) => {
  const handleChange = event => {
    debugger;
    movie_search(event.target.value);
  }
  
  return (
    <FormControl>
      <StyledTextField autoFocus value={search} label="Search" id="search-input" onChange={handleChange} />
    </FormControl>
  );
}

const mapStateToProps =  state => {  
  return {
      search: state.search
  }
}

const mapDispatchToProps = dispatch => ({
  movie_search: query => dispatch(ACTION_MOVIE_SEARCH(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

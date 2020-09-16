import React, { useState } from 'react';
import InputStyle from "../../assets/InputStyle";

// multilanguage component
import { useTranslation } from "react-i18next";

// @material-ui/core components
import {
  ThemeProvider,
  withStyles
} from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action'
import styled from 'styled-components';

function SearchBox(props) {
  const [searchValue, setSearchValue] = useState(useSelector(state => state.movie));
  const dispatch = useDispatch();
  const { t } = useTranslation("");

  const handleChange = event => {
    dispatch(MOVIE_SEARCH(event.target.value));
    setSearchValue(event.target.value);
  }

  const StyledTextField = styled(TextField)`
    #search-input,  
    MuiFormControl-root,
    label.MuiFormLabel-root{
      color: white !important;
    }
  `;
  
  return (
    <FormControl>
      <StyledTextField autoFocus value={searchValue} label="Search" id="search-input" onChange={handleChange} />
    </FormControl>
  );
}

export default (withStyles(InputStyle), SearchBox);
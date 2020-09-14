import React, { useState } from 'react';
import InputStyle from "../../assets/InputStyle";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action'

// multilanguage component
import { useTranslation } from "react-i18next";

function SearchBox() {
  const [searchValue, setSearchValue] = useState(useSelector(state => state.movie));
  const dispatch = useDispatch();
  const { t } = useTranslation("");

  const handleChange = event => {
    dispatch(MOVIE_SEARCH(event.target.value));
    setSearchValue(event.target.value);
  }

  return (
        <FormControl>
        <InputLabel>
            {t(`search:title`)}
        </InputLabel>
        <Input 
            autoFocus
            value={searchValue}
            onChange={handleChange}
        />
        </FormControl>
  );
}

export default (withStyles(InputStyle), SearchBox);
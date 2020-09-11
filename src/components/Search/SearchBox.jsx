import React, { useState } from 'react';
import InputStyle from "../../assets/InputStyle";
import {connect} from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { Col, Row } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {MOVIE_SEARCH} from '../../Store/actions/Action'
import {increment} from '../../Store/actions/increment'

function Search() {
  const [searchValue, setSearchValue] = useState(useSelector(state => state.movie));
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(MOVIE_SEARCH(event.target.value));
    setSearchValue(event.target.value);
  }

  return (
      <Row>
        <Col xs={12}>
          <FormControl>
            <InputLabel>
              Search
            </InputLabel>
            <Input 
              autoFocus
              value={searchValue}
              onChange={handleChange}
            />
          </FormControl>
        </Col>
      </Row>
  );
}

export default (withStyles(InputStyle), Search);
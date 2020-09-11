import React, { useState } from 'react';
import InputStyle from "../../assets/InputStyle";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { Col, Row } from 'react-bootstrap';

function Search({ ...props }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
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

export default withStyles(InputStyle)(Search);
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";

export const StyledTextField = styled(TextField)`
  #search-input,  
  MuiFormControl-root,
  label.MuiFormLabel-root{
    color: white !important;
  }

  @media (max-width: 425px) {
    label.MuiFormLabel-root{
      font-size: 12px !important;
    }

    input#search-input {
      font-size: 12px !important;
    }
  }
`;
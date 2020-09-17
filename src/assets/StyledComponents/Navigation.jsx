import styled from 'styled-components';
import Select from "@material-ui/core/Select";

export const NavbarPosition = styled.div`
    z-index: 99999;
    display: contents;
`

export const NavbarTitle = styled.div`
    display: table-caption;
    width: max-content;
    margin-left: 5%;
    margin-bottom: 10px;
    font-size: larger;
`

export const NavigationItem = styled.span`    
    margin-right: 50px;
`;

export const NavigationLine = styled.div`    
    border: 1px solid white;
    width: 98%
`;

export const NavigationSpacer = styled.div`
    margin-bottom: 10px;
`;

export const SecondNavigationItem = styled.div`
    float: right;
`;

export const StyledSelect = styled(Select)`
    .MuiSelect-root,
    .Mui-focused,
    input#genre,
    label.MuiFormLabel-root{
        color: white !important;
    }
`;
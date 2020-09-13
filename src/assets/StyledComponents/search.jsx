import styled from 'styled-components';

export const SearchError = styled.div`
    text-align: center;
    margin-top: 15px;
`
export const SearchItemTitle = styled.span`
    font-weight: bold;
`

export const SearchItemDate = styled.span`
    font-size: 10px;
`

export const SearchItemGenre = styled.span`
    color: 324967;
    font-size: 16px;
    margin-right: 25px;
`

export const SearchItemOverview = styled.span`
    font-size: 14px;
`

export const SearchBoxItem = styled.div`
    margin: 2px;
    background-color: #bbbbbb;
    color: #324967;

    :hover {
        cursor: pointer;
        transform: scale(1.01);
        background-color: #5f5f5f;
        color: white;
        border: 1px solid black;
    }
`
export const SearchBoxContainer = styled.div`    
    border: 1px solid #000000;
    position: absolute;
    background-color: #324967;
    min-height: 6vh;
    width: 98.5%;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: calc(10px + 1vmin);
    color: white;
    text-align: left;
`
export const SearchBoxImg = styled.img`    
    vertical-align: -webkit-baseline-middle;
    margin: 5px 0;
    width: 75px;
    height: 125px;
`
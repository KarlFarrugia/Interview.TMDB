import styled from 'styled-components';

export const LogoImg = styled.img`    
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
`

export const MovieCardTitle = styled.h1`    
    color: white;
    text-align: center;
    z-index: 1;
    height: 65px;
`

export const MovieCardElement = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height: 530px;
    width: 350px;
`

export const MovieCardContainer = styled.div`    
    width: 100%;
    color: white;
    text-align: center;
    z-index: 1;
`

export const MovieCardItem = styled.div`  
    :hover {
        cursor: pointer;
        background: #55585d; 
        z-index: 2;
        border-radius: 25px;
    }
`

export const MovieCardPoster = styled.img`    
    border-radius: 25px;
    display: block;
    height: 100%;
    width: 100%;
`

export const MovieRating = styled.div`    
    position: absolute;
    float: left;
    font-size: 20px;
    color: white;
    z-index: 4;

    div.Good{
        background-color: green;
        border-radius: 5px;
        width: 60px;
        height: 30px;
        margin: 20px 0 0 5px;
    }
    div.Average{
        background-color: grey;
        border-radius: 5px;
        width: 60px;
        height: 30px;
        margin: 20px 0 0 5px;
    }
    div.Bad{
        background-color: red;
        border-radius: 5px;
        width: 60px;
        height: 30px;
        margin: 20px 0 0 5px;
    }
`

export const MovieCardGenres = styled.span`
    margin-left: -25px;
`

export const MovieCardGenre = styled.span`
    color: white;
    font-size: 12px;
    padding-left: 25px;
`

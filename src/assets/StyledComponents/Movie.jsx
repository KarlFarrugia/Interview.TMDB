import styled from 'styled-components';

export const MovieContainer = styled.div` 
    margin-bottom: 50px;
`;

export const MovieTitle = styled.div`
    font: Europa;
    color: white;
    font-size: 50px;
    float: left;
`;

export const MovieSubTitle = styled.p`
    color: white;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: initial;

    :before {        
        content: open-quote;
    }

    :after {        
        content: close-quote;
    }
`;

export const MovieHomepage = styled.a`
    color: #93c9ff !important;
    float: left;
`;

export const MovieInformation = styled.div`  
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: initial;

    svg {
        margin-right: 10px;
    }
`

export const MovieTitleInformation = styled.span`  
    color: white;
    font-size: 18px;
    margin-bottom: 20px;
    margin-left: 20px;
    text-align: initial;

    svg {
        margin-right: 10px;
    }

    .small {
        font-size: 12px;
    }
`

export const MovieNumberInformation = styled.div`
    display: inline-block;
    color: white;
    font-size: 18px;
    margin-bottom: 20px;
    margin-right: 20px;
    float: left;

    svg {
        margin-right: 10px;
    }

    .small {
        font-size: 12px;
    }
`

export const MovieInformationContainer = styled.div`  
    margin: 20px 0;
`

export const MovieHeader = styled.h1`
    color: white;
    text-align: center;
    margin: 25px;
    font-weight: 400;
`;

export const MovieSectionHeader = styled.h1`
    color: white;
    text-align: initial;
    font-weight: 400;
`;

export const MovieOverview = styled.p`
    color: white;
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
`;

export const MovieBody = styled.div`
    text-align: center;
    width: auto;
    margin-top: 125px;
`;

export const MovieVideo = styled.div`
    position: relative;
    width: auto;
    margin: 25px auto 60px auto;
`;

export const MoviePoster = styled.img`
    width: 70%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const MovieGenre = styled.div`
    width: auto;
    color: white;
    margin-right: 15px;
    border-radius: 10px;
    border: solid 1px;
    padding: 0.25em;
    display: inline-block;
    float: left;
    margin-bottom: 10px;

`;

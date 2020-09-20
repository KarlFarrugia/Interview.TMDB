import React from 'react';
import { LoaderContainer } from '../../assets/StyledComponents/Loader'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function LoaderSpinner (){
    return (
        <LoaderContainer>
            <Loader
                type="Puff"
                color="#fff"
                height={100}
                width={100}
            />
        </LoaderContainer>
    );
}

export default LoaderSpinner;
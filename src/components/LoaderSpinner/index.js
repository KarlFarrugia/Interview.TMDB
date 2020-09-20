//#region Imports

// Import react components
import React from 'react';
import Loader from 'react-loader-spinner'

// Import styled components
import { LoaderContainer } from '../../assets/StyledComponents/Loader'

// Load css related to the spinner loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

//#endregion 

/**
 * LoaderSpinner function
 *  
 * This function uses styled component from the assets folder to wrap a loading spinner within it and then returns it as a styled component
 * 
 * @name LoaderSpinner
 * @function
 * @returns {StyledComponent} A styled spinner component to be used for loading 
 */
export default function LoaderSpinner (){
    return (
        <LoaderContainer>
            <Loader
                type="Puff"
                color="#fff"
                height={100}
                width={100}
                timeout={5000}
            />
        </LoaderContainer>
    );
}
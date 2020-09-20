//#region Imports

// Import react components
import React from 'react';

// Import styled components
import {FooterContainer, FooterLink, FooterImg} from '../../assets/StyledComponents/Footer';

// Import images
import TMDBLogo from '../../assets/images/TMDBLogo.svg'
import KFLogo from "../../assets/images/KFLogo.png"
import GithubLogo from "../../assets/images/GitHubLogo.png"

//#endregion 

/**
 * Footer function
 *  
 * This function uses styled component from the assets folder to wrap 3 logos within it and then returns it as a styled component
 * 
 * @name Footer
 * @function
 * @returns {StyledComponent} A styled footer component to be used to render logos at the bottom of the page
 */
export default function Footer (){
    return (
        <FooterContainer>
            <FooterLink href="https://www.themoviedb.org/"><FooterImg src={TMDBLogo} alt="TMDB Logo" width={40} /></FooterLink>
            <FooterLink href="https://karlfarrugia.com/"><FooterImg src={KFLogo} alt="Github Logo" width={30} /></FooterLink>
            <FooterLink href="https://github.com/KarlFarrugia"><FooterImg src={GithubLogo} alt="Github Logo" width={30} /></FooterLink>
        </FooterContainer>
    );
}
import React from 'react';
import TMDBLogo from '../../assets/images/TMDBLogo.svg'
import KFLogo from "../../assets/images/KFLogo.png"
import GithubLogo from "../../assets/images/GitHubLogo.png"
import {FooterContainer, FooterLink, FooterImg} from '../../assets/StyledComponents/Footer';

function Footer (){
    return (
        <FooterContainer>
            <FooterLink href="https://www.themoviedb.org/"><FooterImg src={TMDBLogo} alt="TMDB Logo" width={40} /></FooterLink>
            <FooterLink href="https://karlfarrugia.com/"><FooterImg src={KFLogo} alt="Github Logo" width={30} /></FooterLink>
            <FooterLink href="https://github.com/KarlFarrugia"><FooterImg src={GithubLogo} alt="Github Logo" width={30} /></FooterLink>
        </FooterContainer>
    );
}

export default Footer;
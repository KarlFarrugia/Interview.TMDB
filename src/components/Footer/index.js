import React from 'react';
import TMDBLogo from '../../assets/images/TMDBLogo.svg'
import KFLogo from "../../assets/images/KFLogo.png"
import GithubLogo from "../../assets/images/GitHubLogo.png"
import {Footer, FooterText, FooterLink, FooterImg} from '../../assets/StyledComponents/Footer';

// multilanguage component
import { useTranslation } from "react-i18next";

function Navbar (){
    const { t } = useTranslation("");

    return (
        <Footer><i class="fa-github" />
            <FooterLink href="https://www.themoviedb.org/"><FooterImg src={TMDBLogo} alt="TMDB Logo" width={40} /></FooterLink>
            <FooterLink href="https://karlfarrugia.com/"><FooterImg src={KFLogo} alt="Github Logo" width={30} /></FooterLink>
            <FooterLink href="https://github.com/KarlFarrugia"><FooterImg src={GithubLogo} alt="Github Logo" width={30} /></FooterLink>
        </Footer>
    );
}

export default Navbar;
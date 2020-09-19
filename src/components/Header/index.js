import React from 'react';
import { NavigationLine } from '../../assets/StyledComponents/Navigation';
import { HeaderContainer } from '../../assets/StyledComponents/Header'
import Navbar from '../Navbar/Navbar';
import SecondaryNavbar from '../Navbar/SecondaryNavbar';

function Header (){
    return (
        <HeaderContainer>
          <Navbar />
          <SecondaryNavbar />
          <br />
          <NavigationLine />
        </HeaderContainer>
    );
}

export default Header;
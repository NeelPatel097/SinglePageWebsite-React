import React from 'react';
import {FaBars} from 'react-icons/fa'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink 
     } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' >Valuefintech</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                         <NavItem>
                            <NavLinks to='solutions'>Solutions</NavLinks>
                        </NavItem>
                         <NavItem>
                            <NavLinks to='founder'>Founder</NavLinks>
                        </NavItem>
                         <NavItem>
                            <NavLinks to='career'>Career</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/contact'>Get in touch</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar

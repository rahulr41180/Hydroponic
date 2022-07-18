
import { Container } from "../styles/Navbar.component.style"

import logo from "../Assets/AcmeFreshLogo.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from "react"; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const NavbarComponent = () => {
    return (
        <Container>
            <div className="left__box">
                <Link className="logo__link" to="/">
    
                    <img src={logo} alt="" />
                </Link>
                <div className="Infrastructure__box">
                    <button>Inrastructure <KeyboardArrowDownIcon /></button>
                    <div className="drop__down">
                        <Link className="drop__down__content" to="/">Outdoor Hydroponics Farm Setup</Link>
                        <Link className="drop__down__content" to="/indoorfarmsetup">Indoor Hydroponics Farm Setup</Link>
                    </div>
                </div>
                <div className="Automatic__box">
                    <Link className="automatic__content" to="/">AutomatingFarm</Link>
                </div>
                <div className="product__box">
                    <Link className="product__content" to="/">Product</Link>
                </div>
            </div>
            <div className="right__box"></div>
        </Container>
    )

}
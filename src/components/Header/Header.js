import React from 'react';
import logo from '../../images/icon.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" loading="lazy" />
                         <b>Google Keep</b>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
import React, { useState } from 'react';
import './Header.scss';

function Header() {
    const [navIsShowClassName, setNavIsShowClassName] = useState('nav__menu');
    return (
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#logo" className="nav__logo">Yannick</a>
                <div className={navIsShowClassName} id="nav-menu">
                    <ul 
                        className="nav__list grid" 
                        onClick={() => {
                            setNavIsShowClassName('nav__menu');
                        }}
                    >
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i> Accueil
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> Profil
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#project" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Projet
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                            </li>
                        </ul>
                    <i 
                        className="uil uil-times nav__close" 
                        id="nav-close"
                        onClick={() => {
                            setNavIsShowClassName('nav__menu');
                        }}
                    ></i>
                    </div>

                    <div className="nav__button">
                        <div
                            className="nav__toggle" 
                            id="nav-toggle" 
                            onClick={() => {
                                setNavIsShowClassName('nav__menu show-menu');
                            }}
                        >
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
    );
}

export default Header;

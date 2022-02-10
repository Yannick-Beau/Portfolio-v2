import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './Header.scss';
import YLogo from '../../../assets/YB.svg'

function Header({ navIsShowClassName, setNavIsShowClassName }) {
    return (
            <header className="header" id="header">
                <nav className="nav container">
                    <NavLink
                      to="/"
                      exact="true"
                    >
                      <img src={YLogo} alt="Yannick Beau logo" className="nav__logo" />
                    </NavLink>
                <div className={navIsShowClassName} id="nav-menu">
                    <ul 
                        className="nav__list grid" 
                        onClick={() => {
                            setNavIsShowClassName('nav__menu');
                        }}
                    >
                            <li className="nav__item">
                                <NavLink
                                  to="/"
                                  className="nav__link"
                                  activeclassname="active"
                                  exact="true"
                                >
                                    <i className="uil uil-estate nav__icon"></i> Accueil
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                  to="/about"
                                  className="nav__link"
                                  activeclassname="active"
                                  exact="true"
                                >
                                   <i className="uil uil-user nav__icon"></i> Profil
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                  to="/skills"
                                  className="nav__link"
                                  activeclassname="active"
                                  exact="true"
                                >
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink
                                  to="/projects"
                                  className="nav__link"
                                  activeclassname="active"
                                  exact="true"
                                >
                                    <i className="uil uil-scenery nav__icon"></i> Projet
                                </NavLink>
                            </li>
                            <li className="nav__item">                               
                                <NavLink
                                  to="/contact"
                                  className="nav__link"
                                  activeclassname="active"
                                  exact="true"
                                >
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </NavLink>
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

                    <div className="nav__buttons">
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
};

Header.propTypes = {
  navIsShowClassName: PropTypes.string.isRequired,
  setNavIsShowClassName: PropTypes.func.isRequired,
};

export default Header;

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Footer.scss';

function Footer({ linkGitHub, linkLinkedin }) {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h2 className="footer__title">Yannick Beau</h2>
            <span className="footer__subtitle">Développeur Web</span>
          </div>
          <div className="footer__content">
            <ul className="footer__links">
              <li>
                <Link
                  to="/projects"
                  className="footer__link"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="footer__link"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <ul className="footer__socialnetworks">
              <li>
                <a href={linkLinkedin} target="_blank" rel="noreferrer" className="footer__socialnetwork">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </li>
              <li>
                <a href={linkGitHub} target="_blank" rel="noreferrer" className="footer__socialnetwork">
                  <i className="uil uil-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  linkLinkedin: PropTypes.string.isRequired,
  linkGitHub: PropTypes.string.isRequired,
};

export default Footer;

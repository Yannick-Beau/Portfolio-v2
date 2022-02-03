import './Footer.scss';

function Footer() {
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
                <a href="#projects" className="footer__link">Projets</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">Contact</a>
              </li>
            </ul>
            
            <ul className="footer__socialnetworks">
              <li>
                <a href="https://www.linkedin.com/in/yannick-beau/" target="_blank" rel="noreferrer" className="footer__socialnetwork">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Yannick-Beau" target="_blank" rel="noreferrer" className="footer__socialnetwork">
                  <i className="uil uil-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

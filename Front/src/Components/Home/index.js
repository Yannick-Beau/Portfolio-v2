import React from 'react';

import './Home.scss';
import CustomAvatar from './CustomAvatar';
import SocialIcon from './SocialIcon';

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__socialnetworks">
                        <SocialIcon SocialLink={"https://www.linkedin.com/in/yannick-beau/"} IconClass={"uil uil-linkedin-alt"} />
                        <SocialIcon SocialLink={"https://github.com/Yannick-Beau"} IconClass={"uil uil-github-alt"} />
                    </div>
                    <div className="home__img">
                        <CustomAvatar />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Bienvenu sur le portfolio de Yannick Beau</h1>
                        <h3 className="home__subtitle">Développeur Web Symfony/React</h3>
                        <p className="home__description">Mon objectif est de me reconvertir dans le développement, de faire de ma passion pour l'informatique et les technologies mon futur métier. Je suis motivé et mobile pour atteindre mon but.</p>
                        <a href="#contact" className="button button--flex">
                            Contacter moi <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Défiler vers le bas</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;

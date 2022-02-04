import './About.scss';

import cv from '../../assets/CV_2022-01-08_Yannick_Beau.pdf';
import banner from '../../assets/banner.png';

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="about__title">A propos de moi</h2>
            <span className="about__subtitle">Introduction</span>

            <div className="about__container container grid">
                <img src={banner} alt="image de montagne avec les compétences : Analyser pour solutionner, échanger et partager, soif d'apprendre et polyvalent" className="about__img"/>
                <div className="about__data">
                    <p className="about__description">
                        sections 1.10.32 et 1.10.33 de "de Finibus Bonorum et Malorum" de Cicéron sont également reproduites dans leur forme originale exacte, accompagnées des versions anglaises de la traduction de 1914 par H. Rackham.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">0</span>
                            <span className="about__info-name">Completed <br /> project</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download="" href={cv} className="button button--flex">
                            Télécharger mon CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

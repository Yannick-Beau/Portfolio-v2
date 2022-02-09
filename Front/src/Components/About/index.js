import React, { useEffect } from 'react';

import './About.scss';
import cv from '../../assets/CV_2022-01-08_Yannick_Beau.pdf';
import banner from '../../assets/banner.png';

function About({ about, fetchAllAPi }) {
  useEffect(() => {
    if (about === '') {
      fetchAllAPi();
    }
  }, []);
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Profil</h2>
            <span className="section__subtitle">A propos de moi</span>

            <div className="about__container container grid">
                <img src={banner} alt="image de montagne avec les compétences : Analyser pour solutionner, échanger et partager, soif d'apprendre et polyvalent" className="about__img"/>
                <div className="about__data">
                    <p className="about__description">
                        {about}
                    </p>
                    {/* <div className="about__info">
                        <div>
                            <span className="about__info-title">0</span>
                            <span className="about__info-name">Completed <br /> project</span>
                        </div>
                    </div> */}

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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Home.scss';
import CustomAvatar from './CustomAvatar';
import SocialIcon from './SocialIcon';
import url from '../../data';

function Home() {
  const [linkedin, setLinkedin] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [picture, setPicture] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] =useState('');

  useEffect(() => {
    axios.get(`${url}api/users/1`)
      .then((response) => {
        console.log(response);
      });
  }, []); 
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
                        <Link
                          to="/contact"
                          className="button button--flex"
                        >
                            Contacter moi <i className="uil uil-message button__icon"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

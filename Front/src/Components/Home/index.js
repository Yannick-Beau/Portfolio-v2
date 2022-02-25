import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Home.scss';
import CustomAvatar from './CustomAvatar';
import SocialIcon from './SocialIcon';

function Home({ 
  fetchAllAPi, 
  firstname, 
  lastname,
  description,
  linkGitHub,
  linkLinkedin,
  subTitle,
  isLoading,
  setIsLoading,
 }) { 
  useEffect(() => {
    if(firstname === ''){
      fetchAllAPi();
    }
  }, []);
  useEffect(() => {
    if (firstname !== '') {
      setIsLoading(false);
    }
  }, [firstname]);
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__socialnetworks">
                        <SocialIcon SocialLink={linkLinkedin} IconClass={"uil uil-linkedin-alt"} />
                        <SocialIcon SocialLink={linkGitHub} IconClass={"uil uil-github-alt"} />
                    </div>
                    <div className="home__img">
                        <CustomAvatar />
                    </div>
                    <div className="home__data">
                      {isLoading
                        &&
                        <div className="lds-dual-ring"></div>
                      }
                      {!isLoading
                        &&
                        <>
                          <h1 className="home__title">Bienvenue sur le portfolio de {lastname} {firstname}</h1>
                          <h3 className="home__subtitle">{subTitle}</h3>
                          <p className="home__description">{description}</p>
                          
                        </>
                      }
                      <Link
                        to="/contact"
                        className="button button--flex"
                      >
                        Contactez moi <i className="uil uil-message button__icon"></i>
                      </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

Home.propTypes = {
  fetchAllAPi: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkGitHub: PropTypes.string.isRequired,
  linkLinkedin: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Home;

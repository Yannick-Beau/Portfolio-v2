import Project from './Project';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Projects.scss';
import projectLogo from '../../assets/logo_hungrytruck.svg';

function Projects() {
  return (
    <section className="projects section" id="project">
      <h2 className="section__title">Projets</h2>
      <span className="section__subtitle">Mes réalisations</span>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper projects__container container"
      >
        <SwiperSlide>
          <Project 
            projectLogo={projectLogo} 
            projectName={'HungryTruck'} 
            projectDescription={'Projet de fin de formation en condition professionnelle, en équipe de 3. Développement un site permettant aux foods trucks de pouvoir avoir une visibilité sur la toile. Ainsi, ces professionnels seront en mesure de partager leur position, types de mets proposés et permettre aux utilisateurs de trouver les foods trucks à proximité.'} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            projectLogo={projectLogo}
            projectName={'HungryTruck'}
            projectDescription={'Projet de fin de formation en condition professionnelle, en équipe de 3. Développement un site permettant aux foods trucks de pouvoir avoir une visibilité sur la toile. Ainsi, ces professionnels seront en mesure de partager leur position, types de mets proposés et permettre aux utilisateurs de trouver les foods trucks à proximité.'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            projectLogo={projectLogo}
            projectName={'HungryTruck'}
            projectDescription={'Projet de fin de formation en condition professionnelle, en équipe de 3. Développement un site permettant aux foods trucks de pouvoir avoir une visibilité sur la toile. Ainsi, ces professionnels seront en mesure de partager leur position, types de mets proposés et permettre aux utilisateurs de trouver les foods trucks à proximité.'}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Projects;

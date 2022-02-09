import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Project from './Project';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Projects.scss';
import projectLogo from '../../assets/logo_hungrytruck.svg';

function Projects({ fetchAllAPi, projects }) {
  useEffect(() => {
    if (projects.length === 0) {
      fetchAllAPi();
    }
  }, []);
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
        className="mySwiper projects__container container grid"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Project
              projectLogo={project.picture}
              projectName={project.name}
              projectDescription={project.overview}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;

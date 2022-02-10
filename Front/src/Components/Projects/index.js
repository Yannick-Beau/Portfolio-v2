import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Project from './Project';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Projects.scss';

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
              logo={project.picture}
              name={project.name}
              description={project.overview}
              slug={project.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

Projects.propTypes = {
  fetchAllAPi: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkUrl: PropTypes.string,
      linkGithub: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Projects;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import sortSkills from '../../functions/sortSkills';
import './ProjectDetail.scss';
import Skill from '../Skills/Skill';

function ProjectDetail({ 
  fetchAllAPi, 
  projects,
  showLinkWebSite, 
  setShowLinkWebSite,
  isLoading,
  setIsLoading,
  projectSkillsBackend,
  projectSkillsFrontend,
  projectSkillsDivers,
  saveSortedSkills, 
}) {
  // const projectSkillsBackend = [];
  // const projectSkillsFrontend = [];
  // const projectSkillsDivers = [];
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(project => project.slug === slug);
  
  useEffect(() =>{
    if (project === undefined && projects.length > 0) {
      return navigate('/notfound');
    }
  });
  useEffect(() => {
    if (projects.length === 0) {
      fetchAllAPi();
    }
  }, []);
  useEffect(() => {
    if (projects.length > 0) {
      setIsLoading(false);
    }
    if (project !== undefined){
      console.log('on va tier');
      // sortSkills return an objects array, so we put our objects in our arrays
      // sortSkills(project.skills, 'back').map((skill) => {
      //   projectSkillsBackend.push({ ...skill });
      // });
      // sortSkills(project.skills, 'front').map((skill) => {
      //   projectSkillsFrontend.push({ ...skill });
      // });
      // sortSkills(project.skills, 'other').map((skill) => {
      //   projectSkillsDivers.push({ ...skill });
      // });
      saveSortedSkills(sortSkills(project.skills, 'back'), 'back');
      saveSortedSkills(sortSkills(project.skills, 'front'), 'front');
      saveSortedSkills(sortSkills(project.skills, 'other'), 'other');
      console.log('on a tier skills backend:', projectSkillsBackend);
      if (project.linkUrl === null) {
        setShowLinkWebSite(false);
      }
      else {
        setShowLinkWebSite(true);
      }
    }
  }, [projects]);
  console.log('on a tier skills backend 2:', projectSkillsBackend);
  return (
    <section className="project-detail section" id="project">
      {isLoading
        &&
        <div className="lds-dual-ring"></div>
      }
      {!isLoading
        &&
        <>
          <h2 className="section__title">{project.name}</h2>
          <div className="project-detail__container container grid">
            <img src={project.picture} alt={project.name} className="project-detail__img"></img>
            <p className="project-detail__description">{project.description}</p>
            <div className="project-detail__technologie container grid">
              <div>
                {/* SKill back */}
                <Skill skillsSorted={projectSkillsBackend} skillName={'Technologies Backend'} skillIcon={'uil uil-server-network'} />
              </div>

              <div>
                {/* SKill Front */}
                <Skill skillsSorted={projectSkillsFrontend} skillName={'Technologies Frontend'} skillIcon={'uil uil-brackets-curly'} />
              </div>

              <div>
                {/* SKill Environnement */}
                <Skill skillsSorted={projectSkillsDivers} skillName={'Technologies Diverse'} skillIcon={'uil uil-ruler'} />
              </div>
            </div>
            <div className="project-detail__buttons grid">
              {showLinkWebSite
                &&
                <a href={project.linkUrl} target="_blank" rel="noreferrer" className="project-detail__link button">
                  Lien du site
                  <i className="uil uil-browser button__icon"></i>
                </a>
              }
              
              <a href={project.linkGithub} target="_blank" rel="noreferrer" className="project-detail__link button">
                Lien GitHub
                <i className="uil uil-github-alt button__icon"></i>
              </a>
              <Link
                to="/projects"
                className="project-detail__link button button--flex button--small"
              >
                <i className="uil uil-arrow-left button__icon"></i>
                Retour aux projets
              </Link>
            </div>
          </div>
        </>
      }
      
    </section>
  );
};

ProjectDetail.propTypes = {
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
  showLinkWebSite: PropTypes.bool.isRequired,
  setShowLinkWebSite: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default ProjectDetail;

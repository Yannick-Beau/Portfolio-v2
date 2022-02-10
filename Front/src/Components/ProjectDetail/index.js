import React, { useEffect } from 'react';
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
}) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(project => project.slug === slug);
  const projectSkillsBackend = [];
  const projectSkillsFrontend = [];
  const projectSkillsDivers = [];
  
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
      if (project.linkUrl === null) {
        setShowLinkWebSite(false);
      }
      else {
        setShowLinkWebSite(true);
      }
      // sortSkills return an objects array, so we put our objects in our arrays
      sortSkills(project.skills, 'back').map((skill) => {
        projectSkillsBackend.push({ ...skill });
      });
      sortSkills(project.skills, 'front').map((skill) => {
        projectSkillsFrontend.push({ ...skill });
      });
      sortSkills(project.skills, 'other').map((skill) => {
        projectSkillsDivers.push({ ...skill });
      });
    }
  }, [project]);
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
}

export default ProjectDetail;

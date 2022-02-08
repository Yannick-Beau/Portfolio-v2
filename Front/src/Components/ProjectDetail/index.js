import './ProjectDetail.scss';
import projectLogo from '../../assets/logo_hungrytruck.svg';
import Skill from '../Skills/Skill';
import { Link } from 'react-router-dom';

function ProjectDetail() {
  return (
    <section className="project-detail section" id="project">
      <h2 className="section__title">HungryTruck</h2>
      <div className="project-detail__container container grid">
        <img src={projectLogo} alt="hungrutruck" className="project-detail__img"></img>
        <p className="project-detail__description">Projet de fin de formation en condition professionnelle, en équipe de 3. Développement un site permettant aux foods trucks de pouvoir avoir une visibilité sur la toile. Ainsi, ces professionnels seront en mesure de partager leur position, types de mets proposés et permettre aux utilisateurs de trouver les foods trucks à proximité.</p>
        <div className="project-detail__technologie container grid">
          <div>
            {/* SKill back */}
            <Skill skillName={'Technologies Backend'} skillIcon={'uil uil-server-network'} />
          </div>

          <div>
            {/* SKill Front */}
            <Skill skillName={'Technologies Frontend'} skillIcon={'uil uil-brackets-curly'} />
          </div>

          <div>
            {/* SKill Environnement */}
            <Skill skillName={'Technologies Diverse'} skillIcon={'uil uil-ruler'} />
          </div>
        </div>
        <div className="project-detail__buttons grid">
          <a href="https://hungrytruck.surge.sh/" target="_blank" rel="noreferrer" className="project-detail__link button">
            Lien du site
            <i class="uil uil-browser button__icon"></i>
          </a>
          <a href="https://github.com/orgs/O-clock-Trinity/teams/projet-hungrytruck" target="_blank" rel="noreferrer" className="project-detail__link button">
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
    </section>
  );
}

export default ProjectDetail;

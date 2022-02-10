import { Link } from 'react-router-dom';
import './Project.scss';

function Project({logo, name, description, slug}) {
  return (
    <div className="projects__content grid">
      <img src={logo} alt={name} className="project__img"></img>

      <div className="project__data">
        <h3 className="project__title">{name}</h3>
        <p className="project__description">{description}</p>
        <Link
          to={`/project-detail/${slug}`}
          className="button button--flex button--small project__button"
        >
          Plus de détails
          <i className="uil uil-arrow-right button__icon"></i>
        </Link>
      </div>
    </div>
  );
}

export default Project;

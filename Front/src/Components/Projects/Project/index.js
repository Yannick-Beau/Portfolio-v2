import './Project.scss';

function Project({projectLogo, projectName, projectDescription}) {
  return (
    <div className="projects__content grid">
      <img src={projectLogo} alt={projectName} className="project__img"></img>

      <div className="project__data">
        <h3 className="project__title">{projectName}</h3>
        <p className="project__description">{projectDescription}</p>
        <a href="https://hungrytruck.surge.sh/" className="button button--flex button--small project__button">
          Plus de détails
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;

import './SocialIcon.scss';

function SocialIcon({SocialLink, IconClass}) {
    return (
      <a href={SocialLink} target="_blank" rel="noreferrer" className="home__socialnetwork">
            <i className={IconClass}></i>
        </a>
    );
}

export default SocialIcon;

import React from 'react';
import { Link } from "react-router-dom";

import './NotFound.scss';

function NotFound() {
  return (
    <section className="not-found section" id="not-found">
      <h1 className="section__title">Error : 404 </h1>
      <span className="section__subtitle">Page non trouvé</span>
      <div className="not-found__container container grid">
        <Link
          to="/"
          className="not-found__button button"
        >
          Reprendre la navigation
          <i className="uil uil-estate button__icon"></i>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

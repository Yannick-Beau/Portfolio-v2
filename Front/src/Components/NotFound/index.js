import React from 'react';
import { Link } from "react-router-dom";

import './NotFound.scss';

function NotFound() {
  return (
    <section className="not-found section" id="not-found">
      <div className="not-found__container container grid">
        <h1 className="not-found__title">Error : 404 </h1>
        <h3 className="not-found__subtitle">Page non trouvé</h3>
        <Link
          to="/"
        >
          <button className="not-found__button">Reprendre la navigation</button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

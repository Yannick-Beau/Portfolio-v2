import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
// Import components
import Header from './Components/Layout/Header';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import ProjectDetail from './containers/ProjectDetail';
import Contact from './containers/Contact';
import NotFound from './Components/NotFound';
import Footer from './containers/Layout/Footer';
import reportWebVitals from './reportWebVitals';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/project-detail/:slug"
            element={<ProjectDetail />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

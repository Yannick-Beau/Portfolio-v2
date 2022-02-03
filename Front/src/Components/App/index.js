import './App.scss';
import Header from '../Layout/Header';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;

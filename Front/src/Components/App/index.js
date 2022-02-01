import './App.scss';
import Header from '../Layout/Header';
import Home from '../Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import headshot from './assets/FINALheadshotJuly2023.jpg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path ="/" exact component={Home}/>
        </Routes>
      </Router>

      <h1>Alana Zinkin</h1>
      <img src={headshot} alt='img unavailable at this time'/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/PersonalWebsite" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/FINALresume.pdf" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;

import './styles/theme.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';


function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navbar/>
      <main className="main-content">
        <Home />
        <About />
        <Experiences />
        <Projects />
      </main>
      <Footer/>
      <BackToTop />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';
import logo from '../assets/alanazinkinlogo.png';
import resumePdf from '../assets/Alana_Zinkin_Resume.pdf';

const SECTION_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'projects', label: 'Projects' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const closeNavbar = () => setIsOpen(false);

  useEffect(() => {
    const sections = SECTION_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={closeNavbar}>
          <img src={logo} alt="Alana Zinkin logo" />
        </a>

        <div className="navbar-right">
          <button
            className="navbar-toggle"
            onClick={toggleNavbar}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <ReorderIcon />}
          </button>

          <nav className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
            <ul>
              {SECTION_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={closeNavbar}
                    className={activeSection === link.id ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

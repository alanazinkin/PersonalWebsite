import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubLogo from "../assets/github_logo.png";

function Footer() {
  const emailAddress = 'alana.zinkin@duke.edu';
  const year = new Date().getFullYear();

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <h3>Let's Connect</h3>
        <div className='socialMedia'>
          <a href='https://www.linkedin.com/in/alana-zinkin-3245b01b1/' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon/>
          </a>

          <button className="icon-button" onClick={handleEmailClick} aria-label="Email">
            <MailOutlineIcon />
          </button>

          <a href="https://github.com/alanazinkin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img className="GitHubLogoFooter" src={GitHubLogo} alt="GitHub logo"/>
          </a>
        </div>

        <p>&copy; {year} Alana Zinkin</p>
      </div>
    </footer>
  )
}

export default Footer

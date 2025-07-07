import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubLogo from "../assets/github_logo.png";

function Footer() {
  const emailAddress = 'alana.zinkin@duke.edu';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className='footer'>
        <h3>Let's Connect</h3>
        <div className = 'socialMedia'>
        <a href= 'https://www.linkedin.com/in/alana-zinkin-3245b01b1/' target='_blank' rel="noopener noreferrer"> 
            <LinkedInIcon/>
        </a>

        <span onClick={handleEmailClick}>
          <MailOutlineIcon />
        </span>

          <a href="https://github.com/alanazinkin"
             target="_blank" rel="noopener noreferrer">
            <img className="GitHubLogoFooter" src={GitHubLogo} alt="GitHub logo"/>
          </a>
        
        <p>&copy; 2023 alanazinkin.github.io/PersonalWebsite/</p>
        </div>
    </div>
  )
}

export default Footer
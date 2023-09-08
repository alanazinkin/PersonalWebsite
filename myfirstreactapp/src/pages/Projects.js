import React from 'react'
import '../styles/Projects.css';
import Logo from '../assets/mindovermatterlogo.png';
import Portfolio from '../assets/photoportfolioimg.png';
import PortfolioPDF from '../assets/APPortfolio.pdf';
function Projects() {
  return (
    <div>
        <h4>Projects</h4>
        <div className='proj1'>
            <div className="rectangle1">
                <div className='columnStack'>
                <p className="text1">MindOverMatter. Mobile Application</p>
                <p className='paragraph1'>Alana worked alongside her mother, Dr. Heather Zinkin,
                to develop a free app that allows users to learn various strategies
                to take control of their health. Users can optimize their nutrition,
                mindfulness, sleep, exercise and manage stress with evidence-based data.
                They may also post questions to a public forum to be answered by
                medical professionals. She is currently in the process of translating the mobile app into a website.
                </p>
                </div>
                <a href='https://apps.apple.com/us/app/mind-over-matter/id1567325435' target="_blank" rel="noopener noreferrer">
                    <img className='proj1image' src={Logo} alt='unavailable'/>
                </a> 
            </div>
        </div>

        <div className='proj3'>
            <div className="rectangle3">
                <div className='columnStack3'>
                <p className="text3">Alana's Personal Website</p>
                <p className='paragraph3'>
                Using React.js and javascript, I built and designed this website from scratch,
                 teaching myself as she went. I applied the knowledge that I acquired during
                  my time in Silicon Valley, California, to prototype the website in Figma, and 
                  realize my design by learning the React framework. I opted for a simple design,
                  allowing the information on the site to pop. I am regularly updating my website, and continuing to learn new React and javascript techniques.
                </p>
                </div>
            </div>
        </div>

        <div className='proj2'>
            <div className="rectangle2">
                <div className='columnStack2'>
                <p className="text2">AP 2-D Portfolio</p>
                <p className='paragraph2'>I worked throughout my senior year of high school 
                conducting a sustained 2-D photography-based investigation guided primarily 
                by the question: "Why do humans feel trapped and how can they escape emotional,
                 physical, and spiritual confinement?" The portfolio was awarded a score of 5.</p>
                 <p className='paragraph21'>Additionally, my portfolio analyzes, "What is the 
                difference between physical confinement and mental imprisonment?" Feeling trapped
                in an environment, relationship, or situation can be overwhelming and isolating, but
                I also investigated the various strategies used to escape confinement.</p>
                </div>
                <a href={PortfolioPDF} target="_blank" rel="noopener noreferrer">
                <img className='portfolioimg' src={Portfolio} alt='unavailable'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects
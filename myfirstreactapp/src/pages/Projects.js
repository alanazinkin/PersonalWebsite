import React from 'react'
import '../styles/Projects.css';
import Logo from '../assets/mindovermatterlogo.png';
import Portfolio from '../assets/photoportfolioimg.png';
import PortfolioPDF from '../assets/APPortfolio.pdf';
import SalesforceLogo from '../assets/salesforce.png';
import GitHubLogo from '../assets/github_logo.png';

function Projects() {
  return (
      <div>
        <h4>Projects</h4>

        <div className='proj6'>
          <div className="rectangle6">
            <div className='columnStack6'>
              <p className="text6">Scrolling-Platform Game Engine + Editor</p>
              <p className='paragraph6'>In CS308: Advanced Software Design and
                Implementation, I worked alongside seven other engineers to
                build a
                scrolling-platform game engine and editor. Users can play a
                variety of games, including Geometry Dash, Doodle Jump, Celeste,
                and Super Mario Bros. However, if they are not satisfied with
                the game options, they can build their own using our custom
                editor. The editor even has a sprite importer, so all game
                elements can look unique, allowing for complete customizability.
                My team spent 4 weeks designing and implementing this project,
                and it was immensely challenging, but also incredibly fun and
                rewarding. I enjoyed also working as the PM for the team, making
                and assigning git issues, organizing and leading team meetings,
                and diving into different parts of the project to connect
                disjoint components. The course taught me how to design software
                systems that scale and how to write clean code so that other
                developers can easily build on top of the existing codebase.
              </p>
            </div>
            <a href="https://github.com/alanazinkin"
               target="_blank" rel="noopener noreferrer">
              <img className="GitHubLogo" src={GitHubLogo} alt="GitHub logo"/>
            </a>
          </div>
        </div>

        <div className='proj7'>
          <div className="rectangle7">
            <div className='columnStack7'>
              <p className="text7">Cellular Automata</p>
              <p className='paragraph7'>In addition to my game engine and
                editor, I built a cellular automata engine that loads any
                simulation configuration defined in XML. Users can run a variety
                of automata scenarios defined by different grid rules and can
                customize their view of the running simulation. I was
                responsible for building the front-end of the simulator as part
                of a
                team of three. This project taught me the importance of using
                design
                patterns, model-view separation, and testing code.
              </p>
            </div>
          </div>
        </div>


        <div className='proj8'>
          <div className="rectangle8">
            <div className='columnStack8'>
              <p className="text8">Breakout Game</p>
              <p className='paragraph8'>I created a version of the classic
                "Breakout" Game with multiple levels and power-ups. This game
                was created in two weeks and served as my first project in
                CS308. It was my first time coding completely from scratch, but
                taught me the importance of spending extra time designing,
                rather than coding. I also learned about inheritance and
                abstraction through building this game!
              </p>
            </div>
          </div>
        </div>

        <div className='proj4'>
          <div className="rectangle4">
            <div className='columnStack4'>
              <p className="text4">Salesforce Analytics Dashboards</p>
              <p className='paragraph4'>This past summer, I had the incredible
                opportunity to work as a consultant for a Department of
                Defense agency. I designed Salesforce Analytics dashboards using
                Tableau based on user stories to highlight key operations
                metrics for military officials, enabling informed, data-driven
                decisions. I learned agile/scrum frameworks and am fortunate to
                have worked alongside an incredible team who taught me both
                technical and collaboration skills.
              </p>
            </div>
            <img className='SalesforceLogo' src={SalesforceLogo}
                 alt='unavailable'/>
          </div>
        </div>

        <div className='proj5'>
          <div className="rectangle5">
            <div className='columnStack5'>
              <p className="text5">"Amazon" Storefront</p>
              <p className='paragraph5'>During my favorite Duke CS course,
                Introduction to Database Systems,
                I worked alongside 4 other students to build an "Amazon"-like
                storefront where users can buy and sell products.
                I was considered the "Users Guru," tasked with developing the
                user-based features such as managing accounts and purchases.
                Not only did our team deliver an outstanding project, but we all
                became friends in the process. I learned how to build a
                full-stack
                web application and utilize a database system to query
                information while also learning to trust my team and value
                different skill-sets.
              </p>
            </div>
          </div>
        </div>
        <div className='proj1'>
          <div className="rectangle1">
            <div className='columnStack'>
              <p className="text1">MindOverMatter. Mobile Application</p>
              <p className='paragraph1'>I worked alongside my mother, Dr.
                Heather Zinkin,
                to develop a free app that allows users to learn various
                strategies
                to take control of their health. Users can optimize their
                nutrition,
                mindfulness, sleep, exercise and manage stress with
                evidence-based data.
                They may also post questions to a public forum to be answered by
                medical professionals. I am currently in the process of
                translating the mobile app into a website.
              </p>
            </div>
            <a href='https://apps.apple.com/us/app/mind-over-matter/id1567325435'
               target="_blank" rel="noopener noreferrer">
              <img className='proj1image' src={Logo} alt='unavailable'/>
            </a>
          </div>
        </div>

        <div className='proj3'>
          <div className="rectangle3">
            <div className='columnStack3'>
              <p className="text3">Alana's Personal Website</p>
              <p className='paragraph3'>
                Using React.js and javascript, I built and designed this website
                from scratch,
                teaching myself as I went. I applied the knowledge that I
                acquired during
                my time in Silicon Valley, California, to prototype the website
                in Figma, and
                realize my design by learning the react.js framework. I opted
                for a simple design,
                allowing the information on the site to pop. I am regularly
                updating my website,
                and continuing to learn new react, CSS, and javascript
                techniques.
              </p>
            </div>
          </div>
        </div>

        <div className='proj2'>
          <div className="rectangle2">
            <div className='columnStack2'>
              <p className="text2">AP 2-D Portfolio</p>
              <p className='paragraph2'>Throughout my senior year of high
                school, I
                conducted a sustained 2-D photography-based investigation guided
                by the question: "Why do humans feel trapped and how can they
                escape emotional,
                physical, and spiritual confinement?" The portfolio was awarded
                a score of 5.</p>
              <p className='paragraph21'>Both digital and film photography rank
                among my top favorite hobbies.
                This skill has translated into a love of design that I am always
                eager to leverage both in and out of work.</p>
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
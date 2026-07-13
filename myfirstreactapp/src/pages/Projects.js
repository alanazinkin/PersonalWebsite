import React from 'react'
import '../styles/Projects.css';
import Logo from '../assets/mindovermatterlogo.png';
import Portfolio from '../assets/photoportfolioimg.png';
import PortfolioPDF from '../assets/APPortfolio.pdf';
import SalesforceLogo from '../assets/salesforce.png';
import GitHubLogo from '../assets/github_logo.png';

const PROJECTS = [
  {
    title: 'SpotiSearch',
    paragraphs: [
      `SpotiSearch is a web app I co-built with a friend during our applied machine learning class. We wanted to tackle a common frustration: searching for music by "vibes" rather than just static genres or artists. Using semantic search and natural language processing, we built a tool that maps natural language descriptions directly to Spotify songs and albums. It was the perfect way to blend machine learning with a shared love for music. Feel free to try it out and find your next soundtrack or album!`,
    ],
    emoji: '🎧',
    emojiAlt: 'Headphones',
    link: 'https://spotisearch.streamlit.app/',
  },
  {
    title: 'Scrolling Platform Game Engine + Editor',
    paragraphs: [
      `In CS308: Advanced Software Design and Implementation, I worked alongside seven other engineers to build a scrolling-platform game engine and editor. Users can play a variety of games, including Geometry Dash, Doodle Jump, Celeste, and Super Mario Bros. However, if they are not satisfied with the game options, they can build their own using our custom editor. The editor even has a sprite importer, so all game elements can look unique, allowing for complete customizability. My team spent 4 weeks designing and implementing this project, and it was immensely challenging, but also incredibly fun and rewarding. I enjoyed also working as the PM for the team, making and assigning git issues, organizing and leading team meetings, and diving into different parts of the project to connect disjoint components. The course taught me how to design software systems that scale and how to write clean code so that other developers can easily build on top of the existing codebase.`,
    ],
    image: GitHubLogo,
    imageAlt: 'GitHub logo',
    link: 'https://github.com/alanazinkin',
    imageIsIcon: true,
    imageClassName: 'project-image--github',
  },
  {
    title: 'Cellular Automata',
    paragraphs: [
      `In addition to my game engine and editor, I built a cellular automata engine that loads any simulation configuration defined in XML. Users can run a variety of automata scenarios defined by different grid rules and can customize their view of the running simulation. I was responsible for building the front-end of the simulator as part of a team of three. This project taught me the importance of using design patterns, model-view separation, and testing code.`,
    ],
  },
  {
    title: 'Breakout Game',
    paragraphs: [
      `I created a version of the classic "Breakout" Game with multiple levels and power-ups. This game was created in two weeks and served as my first project in CS308. It was my first time coding completely from scratch, but taught me the importance of spending extra time designing, rather than coding. I also learned about inheritance and abstraction through building this game!`,
    ],
  },
  {
    title: 'Salesforce Analytics Dashboards',
    paragraphs: [
      `During my internship at Deloitte, I had the incredible opportunity to work as a consultant for a Department of Defense agency. I designed Salesforce Analytics dashboards using Tableau based on user stories to highlight key operations metrics for military officials, enabling informed, data-driven decisions. I learned agile/scrum frameworks and am fortunate to have worked alongside an incredible team who taught me both technical and collaboration skills.`,
    ],
    image: SalesforceLogo,
    imageAlt: 'Salesforce logo',
    imageIsIcon: true,
  },
  {
    title: '"Amazon" Storefront',
    paragraphs: [
      `During my favorite Duke CS course, Introduction to Database Systems, I worked alongside 4 other students to build an "Amazon"-like storefront where users can buy and sell products. I was considered the "Users Guru," tasked with developing the user-based features such as managing accounts and purchases. Not only did our team deliver an outstanding project, but we all became friends in the process. I learned how to build a full-stack web application and utilize a database system to query information while also learning to trust my team and value different skill-sets.`,
    ],
  },
  {
    title: 'MindOverMatter. Mobile Application',
    paragraphs: [
      `I worked alongside my mother, Dr. Heather Zinkin, to develop a free app that allows users to learn various strategies to take control of their health. Users can optimize their nutrition, mindfulness, sleep, exercise and manage stress with evidence-based data. They may also post questions to a public forum to be answered by medical professionals. I am currently in the process of translating the mobile app into a website.`,
    ],
    image: Logo,
    imageAlt: 'MindOverMatter logo',
    link: 'https://apps.apple.com/us/app/mind-over-matter/id1567325435',
  },
  {
    title: "Alana's Personal Website",
    paragraphs: [
      `Using React.js and JavaScript, I built and designed this website from scratch, teaching myself as I went. I applied the knowledge that I acquired during my time in Silicon Valley, California, to prototype the website in Figma, and realize my design by learning the React.js framework. I opted for a simple design, allowing the information on the site to pop. I am regularly updating my website, and continuing to learn new React, CSS, and JavaScript techniques.`,
    ],
  },
  {
    title: 'AP 2-D Portfolio',
    paragraphs: [
      `Throughout my senior year of high school, I conducted a sustained 2-D photography-based investigation guided by the question: "Why do humans feel trapped and how can they escape emotional, physical, and spiritual confinement?" The portfolio was awarded a score of 5.`,
      `Both digital and film photography rank among my top favorite hobbies. This skill has translated into a love of design that I am always eager to leverage both in and out of work.`,
    ],
    image: Portfolio,
    imageAlt: 'AP Photography Portfolio cover',
    link: PortfolioPDF,
  },
];

function ProjectCard({ project }) {
  const { title, paragraphs, image, imageAlt, link, imageIsIcon, imageClassName, emoji, emojiAlt } = project;

  const media = image ? (
    <img
      className={[
        'project-image',
        imageIsIcon && 'project-image--icon',
        imageClassName,
      ].filter(Boolean).join(' ')}
      src={image}
      alt={imageAlt}
    />
  ) : emoji ? (
    <span className="project-emoji" role="img" aria-label={emojiAlt || title}>
      {emoji}
    </span>
  ) : null;

  return (
    <article className="project-card">
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        {paragraphs.map((text, i) => (
          <p className="project-description" key={i}>{text}</p>
        ))}
      </div>
      {media && (
        <div className="project-media">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {media}
            </a>
          ) : (
            media
          )}
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <span className="section-eyebrow">Portfolio</span>
        <h2 className="projects-title">Projects</h2>

        <div className="project-list">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

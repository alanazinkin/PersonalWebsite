import '../styles/Experiences.css';
import DSVLOGO from '../assets/DukeIE_DSV_NewColors2023_transparent.png';
import DukeCSLogo from '../assets/dukeCSLogo.png';
import DeloitteLogo from '../assets/Deloitte_Logo.jpg';
import PalantirLogo from '../assets/PalantirLogo.png';
import CapitalOneLogo from '../assets/CapitalOne.png';

const EXPERIENCES = [
  {
    title: 'Product Manager at Capital One',
    logo: CapitalOneLogo,
    alt: 'Capital One logo',
    description: `Last summer, I worked as a Product Manager on Capital One's Identity Team, redesigning the UX for a new two-factor authentication flow to boost verification success for millions of customers. I led user research, ran concept tests with 30+ customers, and guided design, research, and engineering teams to build a more intuitive UI.`,
  },
  {
    title: 'Government & Public Services Solutions Engineer at Deloitte',
    logo: DeloitteLogo,
    alt: 'Deloitte logo',
    description: `In the summer of 2024, I worked as a Solutions Engineer in Deloitte's Discovery II program, building Salesforce Analytics dashboards in Tableau for a Department of Defense agency. I also led a cross-business case simulation team, presenting a brand and strategy overhaul to the founders of a social media startup.`,
  },
  {
    title: "Palantir Spring Launch Program",
    logo: PalantirLogo,
    alt: 'Palantir logo',
    description: `In March 2024, I was selected for Palantir's Spring Launch Program in Washington, D.C., learning to build on Palantir's Foundry and AIP platforms through hands-on workshops. I led a team of Launchers to develop a Foundry application for pandemic preparedness, tracking vaccine development and distribution.`,
  },
  {
    title: 'Computer Science Teaching Assistant',
    logo: DukeCSLogo,
    alt: 'Duke CS logo',
    description: `I served as a Teaching Assistant for Duke's Computer Science department: four semesters for CS201: Data Structures and Algorithms, and a semester as an Applied Machine Learning TA for CS372. Across both courses, I led discussion and review sessions, held office hours, and graded exams and assignments.`,
  },
  {
    title: 'Student Consultant at Duke in Silicon Valley',
    logo: DSVLOGO,
    alt: 'Duke in Silicon Valley logo',
    description: `During the summer after my freshman year of college, I spent four weeks in California's Silicon Valley engaging in the Harvard-adapted course, "Building and Sustaining an Enterprise," learning from industry professionals about design thinking, product design, competitive strategies, value-based negotiation, venture financing, and ethics in entrepreneurship. I then applied my new skills and knowledge as a student consultant for the startup Allergood.`,
  },
];

function Experiences() {
  return (
    <div className="experiences" id="experiences">
      <div className="container">
        <span className="section-eyebrow">Career</span>
        <h2 className="experiences-title">Experiences</h2>

        <div className="experience-list">
          {EXPERIENCES.map((exp) => (
            <article className="experience-card" key={exp.title}>
              <img className="experience-logo" src={exp.logo} alt={exp.alt} />
              <div className="experience-body">
                <h3 className="experience-role">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences

import React from 'react'
import '../styles/Experiences.css';
import DSVLOGO from '../assets/DukeIE_DSV_NewColors2023_transparent.png';
import DukeCSLogo from '../assets/dukeCSLogo.png';
import DeloitteLogo from '../assets/Deloitte_Logo.jpg';
import PalantirLogo from '../assets/PalantirLogo.png';

function Experiences() {
  return (
    <div className='experienceHeader'>
      <div className='experience3'>
        <p className='Deloitte'>Government & Public Services Solutions Engineer at Deloitte</p>
        <p className='description3'>This past summer, I participated in Deloitte's Discovery II intern program within the govnerment and public services consulting business.
        During my internship, I had the opportunity to work as a Solutions Engineer for a department of defense agency. I designed Salesforce Analytics dashboards using 
        Tableau based on user stories to highlight key metrics for DOD military officials,
        enabling informed, data-driven decisions. Additionally, I streamlined the team's Salesforce data model, ensuring smooth future development. Aside from my client project,
        I participated in a two-week cross-business case simulation with a team of 9 interns. During this case simulation, I consulted for a social media company post-merger by analyzing 
        client pain points, product goals, target customers, and financial issues. Our team eventually presented our recommendations, including a brand refresh,
        new marketing campaign, improved company communication channels, and enhanced cybersecurity measures to the
         founders based on client feedback. Througout the simulation, I had the opportunity to lead daily stand-up meetings 
         to set goals, delegate tasks, and motivate the cross-functional intern team.</p>
             <img className='DeloitteLogo' src={DeloitteLogo} alt='unavailable'/>
      </div>

      <div className='experience4'>
        <p className='Palantir'>Palantir Spring Launch Program</p>
        <p className='description4'>This past March, I was selected to participate in Palantir's Spring Launch Program. I traveled to Washington, D.C. where I
        spent the week shadowing Palantir professionals and learning how to leverage Palantir’s Foundry platform and Artificial Intelligence Platform (AIP) 
        through interactive, hands-on workshops. I also lead a team of Launchers to develop a Foundry application for pandemic preparedness by tracking 
        vaccine development & distribution with a focus on user experience. It was incredibly exciting to learn about Palantir's company values and culture, 
        and to engage with numerous Palantirians. I gained an immense amount of knowledge in just one week and made lasting friendships with my fellow Launchers! </p>
             <img className='PalantirLogo' src={PalantirLogo} alt='unavailable'/>
      </div>

      <div className='experience1'>
        <p className='teachingAssistant'>Computer Science 201 Teaching Assistant</p>
        <p className='description1'>I serve as an undergraduate CS201: 
        Data Structures and Algorithms Teaching Assistant.
         I work alongside my co-TAs to lead discussion sections every 
         Friday, host evening office hours sessions, and proctor and grade exams. 
         Data Structures and Algorithms was my first Duke CS class, making the 
         opportunity to work as a UTA incredibly meaningful.</p>
         <img className='TALogo' src={DukeCSLogo} alt='unavailable'/>
         
      </div>

      <div className='experience2'>
        <p className='studentConsultant'>Student Consultant at Duke in Silicon Valley</p>
        <p className='description2'>During the summer after my freshman year, I spent four weeks in California's Silicon Valley engaging 
          in the Harvard-adapted course, "Building and Sustaining an Enterprise," learning
           from industry professionals about design thinking, product design,
            competitive strategies, value-based negotiation, venture financing, and ethics
             in entrepreneurship. I then applied my new skills and knowledge as a student consultant for the startup Allergood.</p>
             <img className='DSVimage' src={DSVLOGO} alt='unavailable'/>
      </div>

    </div>
  )
}

export default Experiences
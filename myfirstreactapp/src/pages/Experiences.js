import React from 'react'
import '../styles/Experiences.css';
import DSVLOGO from '../assets/DukeIE_DSV_NewColors2023_transparent.png';
import DukeCSLogo from '../assets/dukeCSLogo.png';
function Experiences() {
  return (
    <div className='experienceHeader'>
      <div className='experience1'>
        <p className='teachingAssistant'>Computer Science 201 Teaching Assistant</p>
        <p className='description1'>This upcoming fall semester, I will be working 
        as an undergraduate CS201: Data Structures and Algorithms Teaching Assistant.
         I will be working alongside my co-TAs to lead discussion sections every 
         Friday, host evening office hours sessions, and proctor and grade exams. 
         Data Structures and Algorithms was my first Duke CS class, making the 
         opportunity to work as a UTA incredibly meaningful.</p>
         <img className='TALogo' src={DukeCSLogo} alt='unavailable'/>
         
      </div>

      <div className='experience2'>
        <p className='studentConsultant'>Student Consultant at Duke in Silicon Valley</p>
        <p className='description2'>This past summer, I spent four weeks in California's Silicon Valley engaging 
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
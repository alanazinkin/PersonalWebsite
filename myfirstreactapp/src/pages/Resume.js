import React from 'react'
import resume from '../assets/ResumeUpdated 9_5.pdf';
import '../styles/Resume.css';

function Resume() {
  return (
    <div>
        <embed src={resume}  width="100%" height="600px" alt='resume unavailable at this time'/>
    </div>
  )
}

export default Resume
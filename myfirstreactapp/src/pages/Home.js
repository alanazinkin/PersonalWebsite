import React from 'react'
import headshot from '../assets/headshotCROPPED.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      
        <div className = 'headerContainer'>
          <img className='headshot' src={headshot} alt='img unavailable at this time'/>
          <div className='box2'>
          <h1>Hey there! I’m Alana Zinkin, a rising junior at Duke University
             exploring computer science, innovation, and entrepreneurship.</h1>
       
          <h2>I actually built this website myself using React.js and Javascript!</h2>
          </div>

            <p className='p1'>I’m passionate about designing elegant solutions to complex problems, with an emphasis on creating an enjoyable user experience. This summer, I am working as a Solutions Engineer at
             Deloitte, consulting for a Department of Defense Agency. </p>
            <p className='p2'> At Duke, I serve as the Vice President of DTech’s Interest Group, where I coordinate our leaders to organize and host events for our 
            members. Additionally, I work as an undergraduate teaching assistant for Duke's largest CS course, Data Structures and Algorithms. I enjoy simplifying complex 
            concepts during weekly office hours and discussion sessions and collaborating with other TAs to create engaging lesson plans. This fall, I will be studying 
            abroad in Florence, Italy. Even with the time zone difference, please feel free to reach out to me anytime!






</p>
            
        </div>
        
    </div>
  )
}

export default Home
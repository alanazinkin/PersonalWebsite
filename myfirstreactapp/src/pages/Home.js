import React from 'react'
import headshot from '../assets/FINALheadshotJuly2023.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      
        <div className = 'headerContainer'>
          <img className='headshot' src={headshot} alt='img unavailable at this time'/>
          <div className='box2'>
          <h1>Hey there! I’m Alana Zinkin, a sophomore at Duke University
             with a passion for computer science and innovation and entrepreneurship.</h1>
       
          <h2>I actually built this website myself using React.js and Javascript!</h2>
          </div>
          

            <p className='p1'>I’m passionate about improving access to efficient and high-quality healthcare
             for everyone through advancements in medical technology. At Duke, I serve as DTech’s HealthTech
              Leader organizing and hosting events for members of the organization to attend. </p>
            
        </div>
        
    </div>
  )
}

export default Home
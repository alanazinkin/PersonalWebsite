import React from 'react'
import '../styles/About.css';

function About() {
  return (
      <div>
        <div className='aboutmetext'>
          <h5>Hi, I'm Alana!</h5>
          <p className='aboutmep1'>I started learning computer science
            right before my freshman year through the Codecademy “Learn Java”
            course. I fell in love with the experience of using code to solve
            problems and build applications, so I enrolled in Duke's CS201: Data
            Structures and Algorithms.</p>
          <p className='aboutmep2'>I have continued exploring various CS courses
            ever since. Last semester, I worked on 3 team-based projects in
            Duke's CS308: Advanced Software Design and Implementation. Head over
            to my{'\u00A0'}
            <a href="https://github.com/alanazinkin" target="_blank"
               rel="noopener noreferrer">
              GitHub
            </a>
            {'\u00A0'}to check them out! Next semester, I will be focused on
            learning about machine learning.</p>
          <p className='aboutmep3'>However, coding is just one tool in my
            toolkit. After participating in Duke's Silicon Valley Program, I
            discovered my passion for innovation and entrepreneurship. During
            the program, I enjoyed learning about product development, user
            experience, and design principles. This summer, I am living in
            Washington, D.C., and interning as a Product Manager at Capital One.
            This opportunity has allowed me to apply the concepts I’ve learned
            in my classes to solve real customer pain points.</p>
          <p className='aboutmep4'>I will always call Long Island, New York my
            home, but enjoy exploring new cities such as D.C. In my free time, I
            enjoy working as a tennis instructor, digital photography, traveling
            (I studied abroad in Florence!), hiking, attending concerts
            (especially outdoors), and trying new restaurants with family and
            friends.
          </p>
        </div>
      </div>
  )
}

export default About
import React from 'react'
import '../styles/About.css';

function About() {
  return (
    <div className="about" id="about">
      <div className="container about-inner">
        <span className="section-eyebrow">About</span>
        <h2 className="about-title">Hi, I'm Alana!</h2>

        <div className="about-text">
          <p>I'm a Deployment Strategist at Palantir Technologies, where I
            work directly with clients to turn complex operational challenges
            into practical, data-driven software solutions. I studied computer
            science at Duke University, where I discovered a passion for
            building technology that people actually use, not just ship.</p>

          <p>Before Palantir, I worked as a Product Manager at Capital One,
            redesigning a two-factor authentication experience for millions of
            customers, and as a Solutions Engineer at Deloitte, building
            Salesforce Analytics dashboards for a Department of Defense
            agency. I also spent four semesters as a Teaching Assistant for
            Duke's Data Structures and Algorithms course, and a semester
            teaching Applied Machine Learning — experiences that sharpened
            both my technical depth and my ability to translate complexity
            into something people can actually use.</p>

          <p>I grew up on Long Island and now call New York City home,
            though I previously interned in Washington, D.C., and love
            exploring new cities along the way. In my free time, I enjoy
            digital photography, traveling (I studied abroad in Florence!),
            hiking, attending concerts (especially outdoors), and trying new
            restaurants with family and friends. I'm always looking to meet
            new people, so please feel free to reach out anytime!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

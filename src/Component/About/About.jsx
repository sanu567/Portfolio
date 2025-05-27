import React from 'react'
import'./About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
           <hr/>
        </div>
      <div className="about-section">
        <div className="about-left">
            <img src="https://th.bing.com/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className="about-right">
            <div className="about-par">
                <p>"I am a detail-oriented frontend developer with expertise in HTML, CSS, and JavaScript, specializing in dynamic UI interactions and seamless user experiences. My proficiency in React.js allows me to build optimized and scalable applications, leveraging state management for efficient rendering. Beyond frontend development, I actively explore backend concepts like MySQL,Java, expanding my technical versatility. Known for my methodical problem-solving approach,I excel in debugging complex issues across multiple languages like C,C++,Java. I value clear, efficient solutions and continuously refine my skills to create intuitive and high-performance web applications."</p>
            </div>
            <div className="about-skills">
                <div className="about-skil"><p>HTML & CSS</p> <hr style={{width:"50%"}}></hr> </div>
                <div className="about-skil"><p>React Js</p> <hr style={{width:"70%"}}></hr> </div>
                <div className="about-skil"><p>JavaScript</p> <hr style={{width:"60%"}}></hr> </div>
                <div className="about-skil"><p>Java</p> <hr style={{width:"50%"}}></hr> </div>
                <div className="about-skil"><p>MySQL</p> <hr style={{width:"50%"}}></hr> </div>
            </div>
        </div>
      </div>
      <div className="about-achiv">
        <div className="about-achievement">
            <h1>Fresher</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>Just start</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About

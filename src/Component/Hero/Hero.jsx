import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const openResume = () => {
    window.open("/update CV.pdf", "_blank");
  };

  return (
    <div id='home' className='hero'>
      <img src="https://th.bing.com/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?rs=1&pid=ImgDetMain" alt="" />
      <h1><span>I'm Sanu Singh,</span> Frontend developer based in west bengal</h1>
      <p>I am frontend developer from kolkata,west bengal</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect with me</p></AnchorLink></div>
        <div className="hero-resume" onClick={openResume} style={{ cursor: "pointer" }}>My resume</div>
      </div>
    </div>
  )
}

export default Hero

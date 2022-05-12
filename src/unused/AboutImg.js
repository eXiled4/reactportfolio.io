import React from 'react'
import "./AboutImg.css"
import AboutPic from "../assets/about.jpg"

const AboutImg = () => {
  return (
    <div className='about'>
      <div className="about1">
        <img className="about-img" src={AboutPic} alt="aboutpic"/>
    </div>
</div>
  )
}

export default AboutImg
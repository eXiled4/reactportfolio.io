import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContent.css"
import reac from "../assets/reactjs.jpg"
import rails from "../assets/rails.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a fullstack developer who create responsive websites for clients.</p>
            <Link to="/contact">
                <button className='btn'>- CONTACT -</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={rails} className='img' alt='ReactImage'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={reac} className='img' alt='RailsImage'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
import "./BackImgStyles.css"
import React from 'react'
import BackPic from "../assets/background.jpg"
import { Link } from "react-router-dom"


const BackImg = () => {
  return (
    <div className="back">
        <div className="back1">
            <img className="back-img" src={BackPic} alt="background"/>
        </div>
        <div className="content">
            <p>HI THERE! I'M A NEWBIE SOFTWARE ENGINEER!</p>
            <h1>React/Ruby on Rails developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-lite">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default BackImg
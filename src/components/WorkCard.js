import "./WorkCard.css";
import React from 'react'
import trav from "../assets/Traveller.jpg"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={trav} alt="reactrailsproj" />
                <h2 className="project-title">Project Title</h2>
                <div className="project-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
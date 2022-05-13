import "./WorkCard.css";
import React from 'react'
import trav from "../assets/Traveller.jpg"
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={trav} alt="reactrailsproj" />
                <h4 className="project-title">Traveller (A React Rails Project)</h4>
                <div className="project-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="project-btns">
                            <NavLink to={{pathname: "https://github.com/eXiled4?tab=repositories"}} className="btn">View</NavLink>
                            <NavLink to="github.com/eXiled4?tab=repositories" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
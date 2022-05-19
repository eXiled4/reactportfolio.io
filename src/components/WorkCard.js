import "./WorkCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="reactrailsproj" />
    <h4 className="project-title">{props.title}</h4>
    <div className="project-details">
        <p>{props.text}</p>
            <div className="project-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="github.com/eXiled4?tab=repositories" className="btn">Source</NavLink>
            </div>
    </div>
</div>
  )
}

export default WorkCard
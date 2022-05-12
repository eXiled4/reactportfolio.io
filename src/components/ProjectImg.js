import React from 'react'
import "./ProjectImgStyles.css"
import ProjectPic from "../assets/mechatron.jpg"


const ProjectImg = () => {
  return (
    <div className='project'>
        <div className="project1">
            <img className="project-img" src={ProjectPic} alt="projects"/>
        </div>
    </div>
  )
}

export default ProjectImg
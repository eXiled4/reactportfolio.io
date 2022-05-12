import "./Footer.css"
import { FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                      <p>Homview, 4207, Queensland</p>
                      <p>Australia.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={25} style={{color: "white", marginRight: "2rem"}}/>
                  +61 468 550 898</h4>                  
                </div>

                <div className="email">
                  <h4><FaMailBulk size={25} style={{color: "white", marginRight: "2rem"}}/>
                  julian.teo59@yahoo.com</h4>                  
                </div>
            </div>
            <div className="right">
              <h4>About me</h4>
              <p>I am a recent career changer who has completed a full-stack software engineering immersive course at Academy XI.</p>
              <div className="social">
                <FaGithub size={35} style={{color: "white", marginRight: "2rem"}}/>
                <FaLinkedinIn size={35} style={{color: "white", marginRight: "2rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
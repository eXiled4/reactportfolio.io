import "./Footer.css"
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"
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
                      <p>Australia</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={25} style={{color: "white", marginRight: "2rem"}}/>
                  0468 550 898</h4>                  
                </div>

                <div className="email">
                  <h4><FaMailBulk size={25} style={{color: "white", marginRight: "2rem"}}/>
                  julian.teo59@yahoo.com</h4>                  
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import ContactPic from "../assets/contact.jpg"
import "./ContactImg.css"

const ContactImg = () => {
  return (
    <div className='contact'>
        <div className="contact1">
            <img className="contact-img" src={ContactPic} alt="contactmepic"/>
        </div>
    </div>
  )
}

export default ContactImg
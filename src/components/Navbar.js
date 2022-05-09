import React from 'react'
import { Link } from "react-router-dom"
import "./NavbarStyles.css"

const Navbar = () => {
  return (
    <div className='header'>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
    </div>
  )
}

export default Navbar
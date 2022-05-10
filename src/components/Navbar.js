import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='sidemenu'>
            <FaTimes size={20} style={{color: "whitesmoke"}}/>
            <FaBars size={20} style={{color: "whitesmoke"}}/>
        </div>
    </div>
  )
}

export default Navbar
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [colour, setColour] = useState(false);
    const changeColour = () => {
        if(window.scrollY >= 1){setColour(true)}
            else{setColour(false)}
    };

    window.addEventListener("scroll", changeColour)

  return (
    <div className={ colour ? 'header header-bg' : 'header' }>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* wont work if nav-menu.active */}
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='sidemenu' onClick={handleClick}>
            {click ? 
            (<FaTimes size={20} style={{color: "whitesmoke"}}/>) : 
            (<FaBars size={20} style={{color: "whitesmoke"}}/>) }
            
            
        </div>
    </div>
  )
}

export default Navbar
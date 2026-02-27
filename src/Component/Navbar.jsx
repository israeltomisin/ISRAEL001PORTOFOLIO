import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" /> 
        <h3>Israel Ogbon</h3>
      </div>
        <ul>
            <li><Link to="/" style={{color:"#fff", textDecoration:"none"}}>Home</Link></li>
            <li><Link to="/about" style={{color:"#fff", textDecoration:"none"}}>About</Link></li>
            <li><Link to="/services" style={{color:"#fff", textDecoration:"none"}}>Services</Link></li>
            <li><Link to="/contact" style={{color:"#fff", textDecoration:"none"}}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar

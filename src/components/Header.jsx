import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
        {/* Logo part  */}
    <div className="logo">
       <Link to="/"> <h1>Sarax Space</h1></Link>
    </div>
    {/* Menu Part Start  */}
    <ul className="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
    {/* Menu Button Part  */}
    <div className="menubutton">
        <Link to="/getstarted"> 
       <span id='menubtn'>Get Started</span>
        </Link>
    </div>
    
    </header>
  )
}

export default Header
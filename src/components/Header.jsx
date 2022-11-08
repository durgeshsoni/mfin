import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

import '../styles/header.css'
import Drawer from './Drawer';
import Backdrop from './Backdrop';

const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleOpenDrawerButton() {
    setDrawerOpen(!drawerOpen);
  }
  function handleBackdropClick() {
    setDrawerOpen(false);
  }
 
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
      <Drawer show={drawerOpen}/>
      {drawerOpen && <Backdrop closeDrawer={handleBackdropClick} />}
        <button className='drabtn' onClick={handleOpenDrawerButton}>Get Started</button>
    </div>
    
    </header>
  )
}

export default Header
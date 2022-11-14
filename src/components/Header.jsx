import React, {useEffect, useState} from 'react';
import {auth, provider } from './firebase'
import {signInWithPopup} from "firebase/auth";
import { Link } from 'react-router-dom'

import '../styles/header.css'


const LoggedIn= () =>{
  return(
    <button className='drabtn'>My Account</button>
  )
}


const Header = () => {

  const [value,setValue] = useState('')
  const handleClick =()=>{
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
      })
  }

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })

  
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
    {value? <LoggedIn/>:
        <button className='drabtn' onClick={handleClick}>Get Started</button>
  }
    </div>
    
    </header>
  )
}

export default Header
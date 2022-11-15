import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'
const Header = () => {
  return (
    <div className='dashHeader'>

            <Link className='dashMenu' to="/dashboard">Dashboard</Link>
            <Link className='dashMenu' to="/dashboard">Activity</Link>
            <Link className='dashMenu' to="/dashboard">Profile</Link>



    </div>
  )
}

export default Header
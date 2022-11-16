import React from 'react'
import Header from './Header'
import './styles/deposit.css'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'


 
const Deposit = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <div className="box_container Deposit">
        <Link to='/dashboard'>  <span id='arrow'> <BiArrowBack/> </span></Link> 
        <h1>Deposit on Your Account</h1>
        <label >Enter Amount</label> 
        <input type="text" name="amount" id="amount" placeholder='Enter amount' /> <br/>
        <button className='drabtn'> Deposit </button>
     

        
      </div>
      </div>   

    
    
    </>
  )
}

export default Deposit
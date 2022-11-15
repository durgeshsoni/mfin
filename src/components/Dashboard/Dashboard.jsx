import React from 'react'
import { Link } from 'react-router-dom'
import Deposit from './Deposit'
import Header from './Header'




const Dashboard = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <div className="box_container">
        <div className="DashText">  
        <p>Your Main Balance: <span>$24,00</span></p>
        
        </div>

        <div className="DashBTN"> 

        
        <Link id='deposit' to='/dashboard/deposit'> Deposit </Link>
        <Link id='withdrawal' to='/dashboard/deposit'> Withdrawal </Link>

       
        
        </div>

        <div className="recentActivity">
              <h3>Recent Activity</h3>
        <div className='recentHistory'> 
        
        
            <p>12.00$</p> 
            <p>15-11-2022</p>
            <p>Credited</p>

        
        
        </div>
      </div>
        
      </div>
      

      </div>   
      
    
    </>
  )
}

export default Dashboard
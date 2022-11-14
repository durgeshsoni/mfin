import React, {useEffect, useState} from 'react';
import {auth, provider } from './firebase'
import {signInWithPopup} from "firebase/auth";
import Number from './Number'


const Otp = () => {
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
    <>

    <h1 className="Drawerheading">Login Your Account!</h1>
    {value? <Number/>:
    <button onClick={handleClick}> Sign in With Google</button>
  }
    </>
  )
}

export default Otp

{/* <h1 className="Drawerheading">Login Your Account!</h1>
    <p>Enter your mobile number</p>
    
    <input type="text" name="mobile" id="number" placeholder="Mobile Number..."  />
    <button >Get OTP</button>
    <input type="number" name="otp" id="otp" placeholder="Enter OTP" />
    <button >Verify Now</button> */}
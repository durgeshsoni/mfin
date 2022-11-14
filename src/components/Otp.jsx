import React from 'react';
import "../styles/drawer.css";


const Otp = () => {
  
  return (
    <><h1 className="Drawerheading">Login Your Account!</h1>
    <p>Enter your mobile number</p>
    <div id="recaptcha-container"></div>
    <input type="text" name="mobile" id="number" placeholder="Mobile Number..."  />
    <button >Get OTP</button>
    <input type="number" name="otp" id="otp" placeholder="Enter OTP" />
    <button >Verify Now</button></>
  )
}

export default Otp
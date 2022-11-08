import React from "react";
import "../styles/drawer.css";
import Otp from "./Otp";



const Drawer = ({ show }) => {
   
    
    
    let drawerClasses = show ? "side-drawer open" : "side-drawer";
  return (
    <div className={drawerClasses}>
      <Otp/>
      



    </div>
  );
};

export default Drawer;

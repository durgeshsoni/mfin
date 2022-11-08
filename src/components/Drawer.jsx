import React from "react";
import "../styles/drawer.css";

const Drawer = ({ show }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <h1 className="Drawerheading">Login Your Account!</h1>
      <p>Enter your mobile number</p>
      <input type="text" name="numbber" id="number" placeholder="Mobile Number..." />
      <button>Verify Now</button>
    </div>
  );
};

export default Drawer;

import React from 'react'
import "../styles/backdrop.css"

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.closeDrawer}> </div>
  )
}

export default Backdrop
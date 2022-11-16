import React from 'react'
import '../styles/home.css'
import img1 from "../assets/img1.png"

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="left">
        <h1>Collectibles item loved by community & partners</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button>Learn More!</button>
      </div>
      <div className="right">
        <img src={img1} alt="hero" />
      </div>
    </div>
    </>
  )
}

export default Home
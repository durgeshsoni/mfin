import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard/Dashboard'
import Deposit from './components/Dashboard/Deposit'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Number from './components/Number'

const App = () => {
  return (
    <Router>

      <Header />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/number" element={<Number/>} />
        
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/deposit" element={<Deposit/>} />

      </Routes>
      <Footer/>
      </Router>
  )
}

export default App
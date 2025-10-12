import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
      <nav className='navbar'>
        <Link to="/" className='navlink'>Home</Link>
        <Link to="/about" className='navlink'>About Us</Link>
        <Link to="/contact" className='navlink'>Contact Us</Link>
      </nav>
  )
}

export default Navbar

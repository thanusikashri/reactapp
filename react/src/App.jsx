import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import video from './assets/video.mp4'

function App() {
  return (
    <Router>
      <video autoPlay loop muted playsInline className='video'>
        <source src={video} />
        Your browser does not support the video tag.
      </video>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Fly High With Us!"/>} />
          <Route path="/about" element={<About title="About Us"/>} />
          <Route path="/contact" element={<Contact title="Contact Us"/>} />
        </Routes>
        <Footer text="© 2025 TravelZ. All rights reserved." />
      </div>
    </Router>
  );
}

export default App

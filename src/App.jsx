import React from 'react'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import About from './Pages/about'
import Services from './Pages/services'
import Contact from './Pages/contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      easing: "ease-in-out",
      once: true,      // animate on every scroll
      mirror: true,     // animate when scrolling up
      offset: 120,
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
AOS.init();


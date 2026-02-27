import React from 'react'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import About from './Pages/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

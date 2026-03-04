import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <div className="footer-flex" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
            <div className="footer1" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
                <h5> @Israel~Ogbon</h5>
                <p>I write clean, efficient, and maintainable code that ensures long-term performance and scalability.</p>
            </div>
            <div className="footer2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
                <h5>Quick links</h5>
                <ul>
                    <li><Link to="/" style={{textDecoration:"none", color:"#fff", textAlign:"left"}}>Home</Link></li>
                    <li><Link to="/about" style={{textDecoration:"none", color:"#fff", textAlign:"left"}}>About</Link></li>
                    <li><Link to="/services" style={{textDecoration:"none", color:"#fff", textAlign:"left"}}>Services</Link></li>
                    <li><Link to="/contact" style={{textDecoration:"none", color:"#fff", textAlign:"left"}}>Contact</Link></li>
                </ul>
            </div>
            <div className="footer3" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
                <h5>Contact and follow</h5>
                <ul>
                    <li>Email:israeltomisin001@gmail.com</li>
                    <li>Phone: +234 9026744296, +234 7053359903</li>
                </ul>
            </div>
        </div>

    </footer>

  )
}

export default Footer

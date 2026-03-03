import React from 'react'

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
                    <li><a href="/" style={{color:"#fff", textDecoration:"none"}}>Home</a></li>
                    <li><a href="/about" style={{color:"#fff", textDecoration:"none"}}>About</a></li>
                    <li><a href="/services" style={{color:"#fff", textDecoration:"none"}}>Services</a></li>
                    <li><a href="/contact" style={{color:"#fff", textDecoration:"none"}}>Contact</a></li>
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

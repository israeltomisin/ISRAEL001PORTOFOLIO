import React from 'react'
import { useState, } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

const contact = () => {

 const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const backendUrl = 'https://israel001portofolio.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a backend or API)
    try {
      console.log("Form submitted:", { name, email, projectDetails });
      const req = await axios.post(`${backendUrl}/send-email`, {name, email, projectDetails});
      if (req.status >=200 && req.status < 400) {
        alert('Email Sent!')
        setFullName("");
        setEmail("");
        setProjectDetails("");
      } else {};
    } catch (error) {
      alert(error?.response?.data?.message || error?.message || 'An error occured!')
    }
  };

  return (
    <section className="contact-section">
        <div className="contact-content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
          <h3>Ready to Turn Your Idea Into Reality?</h3>
          <p>Every great product starts with a conversation. Share your vision, and let’s craft a digital experience that sets your brand apart and drives real results.</p>
          <Link to="/services" className="btn-primary">Work With Me</Link>
          <button className="btn-secondary" onClick={() => window.open('https://calendly.com/israeltomisin001/30min', '_blank')}>📞 Schedule a Call</button>
        </div>
    <div className="contact-flex" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <div className="form-container" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000"> 
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Israel Ogbon"
                        value={name}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailAddress">Email Address</label>
                        <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="israeltomisin001@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                </div>

                    <div className="form-group">
                        <label htmlFor="projectDetails">Project Details</label>
                        <textarea
                        id="projectDetails"
                        name="projectDetails"
                        placeholder="Tell us briefly about your project..."
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        rows="6"
                        required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                         Send Message
                    </button>
            </form>
        </div>
        <div className="get-in" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
            <h4>Get in Touch</h4>
            <p>Have a project in mind or need help bringing your ideas to life? I’d love to hear from you. Whether it’s a website, branding, or a custom digital solution, let’s discuss how we can work together.

            Fill out the form or reach out directly — I’ll get back to you as soon as possible.</p>
            <button className="btn-secondary" onClick={() => window.open('https://calendly.com/israeltomisin001/30min', '_blank')}>📞 Schedule a Call</button>
        </div>
    </div>
                 
                 {/* Map Container */}
                 {/* <div style={{ marginTop: '20px', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                    <MapContainer center={[6.4665, 3.4667]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[6.4665, 3.4667]}>
                            <Popup>
                                12,Apebi Street,Ijebu-ode, Ogun State, Nigeria
                            </Popup>
                        </Marker>
                    </MapContainer>
                    </div> */}
    </section>
  )
}

export default contact

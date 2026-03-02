import React from 'react'
import { useState, } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
        <div className="contact-content">
          <h3>Ready to Turn Your Idea Into Reality?</h3>
          <p>Every great product starts with a conversation. Share your vision, and let’s craft a digital experience that sets your brand apart and drives real results.</p>
          <button className="btn-primary">Work With Me</button>
          <button className="btn-secondary">Schedule a Call</button>
        </div>

    <div className="contact-flex">
        <div className="form-container"> 
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Israel Ogbon"
                        value={formData.fullName}
                        onChange={handleChange}
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
                        value={formData.emailAddress}
                        onChange={handleChange}
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
                        value={formData.projectDetails}
                        onChange={handleChange}
                        rows="6"
                        required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                         Send Message
                    </button>
            </form>
        </div>
        <div className="get-in">
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

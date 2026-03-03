import React from 'react'
import { Link } from 'react-router-dom'

const services = () => {
  return (
    <section className="services-section">
      <div className="services-background" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
        <div className="services-flex">
          <div className="services-content" data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="2000">
            <h1>We Build Smart Digital Solutions That Drive Results</h1>
            <p>I help businesses and brands turn ideas into powerful digital products. From modern        websites and web applications to branding and user-focused design, every solution is crafted for performance, growth, and real impact.</p>
            <Link to="/contact" className="btn-primary">🚀 Start a Project</Link>
            <Link to="/contact" className="btn-secondary">📞 Contact Us</Link>
          </div>
            <div className="services-img" data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="2000">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Software Development" />
            </div>
        </div>
      </div>

      <div className="Services">
        <div className="services" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
          <h3>Our Services</h3>
          <p>We deliver innovative digital solutions that help businesses grow, scale, and stay ahead in today’s competitive market. From idea to execution, we turn your vision into reality.</p>
        </div>
        <div className="services-flex">
          <div className="services-card" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
            <h4>💻 Web Development</h4>
            <p>We build fast, secure, and scalable websites and web applications tailored to your business goals.
            From corporate websites to custom web platforms, we ensure responsive design, high performance, and seamless user experience.</p>
          </div>
          <div className="services-card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
            <h4>📱 Mobile App Development</h4>
            <p>We create high-performance mobile applications for iOS and Android that combine functionality with beautiful design.
            Our apps are user-friendly, reliable, and built to meet modern business demands.</p>
          </div>
          <div className="services-card" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
            <h4>🎨 UI/UX Design</h4>
            <p>We design clean, modern, and intuitive interfaces that enhance user engagement and satisfaction.
            Our focus is on creating meaningful digital experiences that are both visually appealing and easy to use.</p>
          </div>
          <div className="services-card" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
            <h4>🎨 Graphics Design</h4>
            <p>I design visually compelling graphics that capture attention and communicate your message clearly. From logos and brand identity to social media creatives and marketing materials, every design is crafted to reflect your brand’s personality and leave a lasting impression.</p>
          </div>
        </div>
      </div>

      <div className="How" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <div className="how-content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
          <h3>How we work</h3>
          <p>Our process is structured to deliver clarity, creativity, and measurable results at every stage.</p>
        </div>
        <div className="how-flex" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
          <div className="how-card" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
            <h4>🔍 Discovery</h4>
            <p>We begin by understanding your vision, goals, and challenges. Through research and strategy sessions, we define a clear roadmap tailored to your business needs.</p>
          </div>
          <div className="how-card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
            <h4>🎨 Design</h4>
            <p>We create modern, user-focused designs that align with your brand identity. Every detail is crafted to ensure a seamless and engaging experience.</p>
          </div>
          <div className="how-card" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
            <h4>💻 Development</h4>
            <p>Using reliable and scalable technologies, we transform designs into high-performing digital solutions built for speed, security, and growth.</p>
          </div>
          <div className="how-card" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
            <h4>🚀 Launch & Support</h4>
            <p>We ensure a smooth launch and provide ongoing support, updates, and improvements to keep your digital product performing at its best.</p>
          </div>
        </div>
      </div>
      <div className="Ready" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <div className="ready" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
          <h3>Let’s Turn Your Idea Into Reality 🚀</h3>
          <p>Your next big project deserves expert execution. We design, build, and launch digital products that stand out and perform.</p>
          <button className="btn-primary">Contact Us</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )

}

export default services

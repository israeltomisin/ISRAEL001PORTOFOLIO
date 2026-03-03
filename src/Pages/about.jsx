import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-background" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
        <div className="about-content">
        <h1>About Me</h1>
        <p>I specialize in developing clean and functional websites using modern technologies, with a strong focus on performance, simplicity, and great user experience. I enjoy turning ideas into real, working solutions that help businesses grow and stand out online.</p>
      </div>
      </div>

        <div className="about-all">
          <div className="about-flex">
                <div className="mission" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
                  <h3>Purpose. Power. Progress.</h3>
                  <p>I build more than websites — I create digital solutions that drive impact. What started as curiosity has grown into a mission to deliver clean, modern, and high-performing experiences.

                  My focus is simple: combine smart strategy, bold design, and quality code to help brands grow, compete, and lead.</p>
                  <button className="btn-primary">Learn More</button>
                </div>
                <div className="mission-mage" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Software Development" />
                </div>
            </div>
        </div>
      <div className="team">
           <div className="meet" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
                <h3>Meet the Developer</h3>
              </div>
              <div className="meet-flex" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="2000">
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>👨 Israel~Ogbon</h4>
                  <p>Frontend Developer with expertise in React, JavaScript, and modern web technologies.</p>
                </div>
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>⚡ Daniel Adekunle</h4>
                  <p>Data Analyst with expertise in extracting insights from complex datasets and presenting them in a clear, actionable format.</p>
                </div>
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>🎨 David Ayodele</h4>
                  <p>UI/UX Designer with a focus on creating intuitive and engaging user experiences and a frontend developer.</p>
                </div>
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>🎨 Happiness</h4>
                  <p>Graphics Designer with a passion for creating visually stunning and impactful designs.</p>
                </div>
              </div>
       </div>

      <div className="Why" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <div className="why">
          <h3>Why Choose Us?</h3>
          <p>We don’t just build software — we build reliable digital solutions that help your business grow, scale, and succeed in a competitive world.</p>
        </div>
        <div className="why-flex" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
          <div className="why-card">
            <h4>👨‍💻 Expert Developers </h4>
            <p>I write clean, efficient, and maintainable code that ensures long-term performance and scalability.</p>
          </div>
          <div className="why-card">
            <h4>⚡ Agile & Fast Delivery</h4>
            <p>I follow agile methodologies to deliver projects quickly without sacrificing quality.
            Through continuous collaboration and feedback, we adapt to your needs and keep your project moving forward.</p>
          </div>
          <div className="why-card">
            <h4>📈 Scalable Architecture</h4>
            <p>Our solutions are designed to grow with your business, ensuring long-term success and adaptability.</p>
          </div>
          <div className="why-card">
            <h4>🔐 Secure & Reliable</h4>
            <p>Security and stability are at the core of everything I build.
            I implement best practices to ensure your application is safe, dependable, and built to perform consistently.</p>
          </div>
          <div className="why-card">
            <h4>🏆 Proven Results</h4>
            <p>We focus on delivering measurable results.
            From improved user experience to business growth, our solutions are designed to create real impact and long-term success.</p>
          </div>
        </div>
      </div>

      <div className="Ready" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <div className="ready">
          <h3>Let’s Turn Your Idea Into Reality 🚀</h3>
          <p>Your next big project deserves expert execution. We design, build, and launch digital products that stand out and perform.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
          <Link to="/services" className="btn-secondary">Learn More</Link>
        </div>
      </div>
    </section>
  )
}

export default About

import React from 'react'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-background">
        <div className="about-content">
        <h1>About Me</h1>
        <p>I specialize in developing clean and functional websites using modern technologies, with a strong focus on performance, simplicity, and great user experience. I enjoy turning ideas into real, working solutions that help businesses grow and stand out online.</p>
      </div>
      </div>

        <div className="about-all">
          <div className="about-flex">
                <div className="mission">
                  <h3>Purpose. Power. Progress.</h3>
                  <p>I build more than websites — I create digital solutions that drive impact. What started as curiosity has grown into a mission to deliver clean, modern, and high-performing experiences.

                  My focus is simple: combine smart strategy, bold design, and quality code to help brands grow, compete, and lead.</p>
                  <button className="btn-primary">Learn More</button>
                </div>
                <div className="mission-mage">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Software Development" />
                </div>
            </div>
        </div>
      <div className="team">
           <div className="meet">
                <h3>Meet the Developer</h3>
              </div>
              <div className="meet-flex">
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>👨‍💻 Passion for Code</h4>
                  <p>I write clean, efficient, and maintainable code that ensures long-term performance and scalability.</p>
                </div>
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>⚡ Agile & Fast Delivery</h4>
                  <p>I follow agile methodologies to deliver projects quickly without sacrificing quality.
                  Through continuous collaboration and feedback, we adapt to your needs and keep your project moving forward.</p>
                </div>
                <div className="meet-card">
                  {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Developer Profile" /> */}
                  <h4>🎨 Creative Problem Solver</h4>
                  <p>I approach every project with creativity and a focus on solving real problems.
                  By combining technical expertise with innovative thinking, I create solutions that are both functional and visually appealing.</p>
                </div>
              </div>
       </div>
    </section>
  )
}

export default About

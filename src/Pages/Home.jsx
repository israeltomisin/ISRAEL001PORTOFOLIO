import React from 'react'


const Home = () => {
  return (
    <section className="home-section">
      <div className="home-background">
        <div className="home-flex">
          <div className="home-content">
            <h1>Turning Your Ideas Into Powerful Software</h1>
            <p>From concept to launch, we build fast, secure, and scalable applications tailored to startups and growing businesses.</p>
            <div className="btn">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
            <div className="home-img">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Software Development" />
            </div>
        </div>
      </div>

      <div className="Services">
        <div className="services">
          <h3>Our Services</h3>
          <p>We deliver innovative digital solutions that help businesses grow, scale, and stay ahead in today’s competitive market. From idea to execution, we turn your vision into reality.</p>
        </div>
        <div className="services-flex">
          <div className="services-card">
            <h4>💻 Web Development</h4>
            <p>We build fast, secure, and scalable websites and web applications tailored to your business goals.
            From corporate websites to custom web platforms, we ensure responsive design, high performance, and seamless user experience.</p>
          </div>
          <div className="services-card">
            <h4>📱 Mobile App Development</h4>
            <p>We create high-performance mobile applications for iOS and Android that combine functionality with beautiful design.
            Our apps are user-friendly, reliable, and built to meet modern business demands.</p>
          </div>
          <div className="services-card">
            <h4>🎨 UI/UX Design</h4>
            <p>We design clean, modern, and intuitive interfaces that enhance user engagement and satisfaction.
            Our focus is on creating meaningful digital experiences that are both visually appealing and easy to use.</p>
          </div>
        </div>
      </div>

      <div className="Why">
        <div className="why">
          <h3>Why Choose Us?</h3>
          <p>We don’t just build software — we build reliable digital solutions that help your business grow, scale, and succeed in a competitive world.</p>
        </div>
        <div className="why-flex">
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

      <div className="Ready">
        <div className="ready">
          <h3>Let’s Turn Your Idea Into Reality 🚀</h3>
          <p>Your next big project deserves expert execution. We design, build, and launch digital products that stand out and perform.</p>
          <button className="btn-primary">Contact Us</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Home

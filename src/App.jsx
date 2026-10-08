import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">AP</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <Hero />

      {/* About */}
      <section className="section about-section" id="about">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>
          <h2>About Me</h2>

          <div className="about-box">
            <p>
              I am a passionate Web Developer interested in building
              clean, responsive and user-friendly web applications.
              I enjoy learning modern web technologies and turning
              ideas into functional websites.
            </p>

            <p>
              I have experience working with HTML, CSS, JavaScript,
              React and other technologies used in Full Stack Development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section" id="skills">
        <div className="section-container">
          <p className="section-label">WHAT I KNOW</p>
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>HTML • CSS • JavaScript • React</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js • Express.js</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git • GitHub • VS Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects-section" id="projects">
        <div className="section-container">
          <p className="section-label">MY WORK</p>
          <h2>Projects</h2>

          <div className="projects-grid">

            <div className="project-card">
              <div className="project-number">01</div>
              <h3>Counter App</h3>
              <p>
                A simple and responsive counter application built
                using React. It demonstrates state management and
                component-based development.
              </p>

              <a
                href="https://counter-app-gold-kappa.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>

            <div className="project-card">
              <div className="project-number">02</div>
              <h3>TO-DO App</h3>
              <p>
                A responsive task management application built with
                React where users can add, manage and remove tasks.
              </p>

              <a
                href="https://to-do-app-mauve-chi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>

            <div className="project-card">
              <div className="project-number">03</div>
              <h3>Portfolio Website</h3>
              <p>
                A personal developer portfolio created with React
                to showcase my skills, projects and experience.
              </p>

              <a href="#home">
                View Project →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="section-container contact-content">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Let's Work Together</h2>

          <p>
            I'm always interested in learning, building new projects
            and exploring opportunities in web development.
          </p>

          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=anshikapathak211@gmail.com"
            className="contact-button"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Anshika Pathak. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
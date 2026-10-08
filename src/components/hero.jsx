import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-small-text">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          I'm <span>Anshika Pathak</span>
        </h1>

        <h2>Web Developer</h2>

        <p className="hero-description">
          I build clean, responsive and user-friendly websites
          using modern web technologies.
        </p>

        <div className="hero-buttons">

          <a
            href="/Anshika_pathak_cv.pdf"
            download
            className="btn"
          >
            Download CV
            <FontAwesomeIcon icon={faDownload} />
          </a>

          <a href="#projects" className="btn">
            View My Work
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

          <a href="#contact" className="btn">
            Contact Me
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/anshikapathak211-jpg"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;
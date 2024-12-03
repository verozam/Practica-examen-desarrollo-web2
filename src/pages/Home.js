import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Home() {
  return (
    <section className="home">
      <div>
        <h1>Soy Veronica Abigail Zamora.</h1>
        <p>Soy una <strong>Developer Full Stack</strong> especializado en React.js</p>
        <div className="social-links">
          <a href="https://www.facebook.com/veronica.zamora.397948" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/veronica-abigail-zamora-portillo-377189260" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/verozam" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
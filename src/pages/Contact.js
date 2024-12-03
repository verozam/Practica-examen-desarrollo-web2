import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Contact() {
  return (
    <section className="contact">
      <h2>Contáctame</h2>
      <p>Puedes contactarme a través de mi correo electrónico:</p>
      <h3>veronicazdmartinez@gmail.com</h3>
      <p>Sígueme en mis redes sociales:</p>
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
    </section>
  );
}

export default Contact;
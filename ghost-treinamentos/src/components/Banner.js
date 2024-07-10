// Banner.js

import React from 'react';
import './Banner.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Sua solução para consultoria e treinamentos empresariais</h1>
        <p>Transformando desafios em oportunidades de sucesso</p>
        <div className="cta-buttons">
          <button className="button primary">Comece Agora</button>
          <button className="button secondary">Saiba Mais</button>
        </div>
      </div>
      <div className="social-icons-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/seu-facebook" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook className="icon" />
          </a>
          <a href="https://twitter.com/seu-twitter" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;

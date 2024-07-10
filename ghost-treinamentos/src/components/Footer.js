import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2024 Ghost Treinamentos. Todos os direitos reservados.</p>
      <ul>
        <li><a href="/privacy-policy">Política de Privacidade</a></li>
        <li><a href="/terms-of-service">Termos de Serviço</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">Ghost Treinamentos</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/services">Serviços</Link></li>
          <li><Link to="/gallery">Galeria</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

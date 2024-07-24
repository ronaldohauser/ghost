import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={toggleMenu}>Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={toggleMenu}>Galeria</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

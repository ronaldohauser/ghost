import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      {}
      <div className="menu-toggle">
        {menuOpen ? (
          <FaTimes className="menu-icon" onClick={toggleMenu} />
        ) : (
          <FaBars className="menu-icon" onClick={toggleMenu} />
        )}
      </div>

      {}
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Galeria</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

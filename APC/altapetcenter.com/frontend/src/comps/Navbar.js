import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';

import './Navbar.css';
import './HamburgerMenu.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav-cont-over'>
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src="/AltaLogo1.png" alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className='social-li'>
            <Socials primary="#000000" secondary="#ffffff" size="2.4rem" />
          </li>
        </ul>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
          <div className="nav-line"></div>
          <div className="nav-line"></div>
        </div>
        <nav className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
        <li>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={handleClick}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
        <li className=''>
            <Socials primary="#000000" secondary="#ffffff"/>
        </li>
      </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;

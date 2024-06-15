import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="home" smooth={true}>Home</Link></li>
          <li><Link to="social-media" smooth={true}>Social Media</Link></li>
          <li><Link to="about" smooth={true}>About</Link></li>
          <li><Link to="contact" smooth={true}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

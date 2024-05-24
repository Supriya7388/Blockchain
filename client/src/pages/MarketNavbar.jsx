// MarketNavbar.js

import React from 'react';

const MarketNavbar = () => {
  return (
    <nav style={navbarStyles}>
      <h1 style={logoStyles}>Blockchain News</h1>
      <ul style={navListStyles}>
        <li style={navItemStyles}><a href="/" style={navLinkStyles}>Home</a></li>
        <li style={navItemStyles}><a href="/market" style={navLinkStyles}>News</a></li>
        <li style={navItemStyles}><a href="/about" style={navLinkStyles}>About</a></li>
        <li style={navItemStyles}><a href="/contact" style={navLinkStyles}>Contact</a></li>
      </ul>
    </nav>
  );
};

// Navbar CSS styles
const navbarStyles = {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  animation: 'slideDown 0.5s ease-out',
};

const logoStyles = {
  fontSize: '24px',
  margin: 0,
};

const navListStyles = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
};

const navItemStyles = {
  marginLeft: '20px',
};

const navLinkStyles = {
  color: '#fff',
  textDecoration: 'none',
  position: 'relative',
  transition: 'color 0.3s',
};

navLinkStyles[':hover'] = {
  color: '#ff0',
};

export default MarketNavbar;

import '../styles/layout.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>

  );
}

export default Nav;

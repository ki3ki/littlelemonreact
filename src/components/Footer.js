import '../styles/layout.css';

import React from 'react';

function Footer() {
  return (
        <footer>
        <div className="container footer-container">
            <div className="footer-column">
            <h4>Doormat Navigation</h4>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </div>
            <div className="footer-column">
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
            </div>
            <div className="footer-column">
            <h4>Social Media Links</h4>
            <p>Facebook | Instagram | Twitter</p>
            </div>
        </div>
        </footer>

  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import fbIcon from '../assets/fb-icon.png'; 
import twitterIcon from '../assets/twitter-icon.jpg';
import instagramIcon from '../assets/instagram-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/donor-login">Donate</Link></li> 
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:contact@donatered.com">contact@donatered.com</a></p>
          <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
          <p>Address: 123 Blood Drive Ave, City, State, 12345</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DonateRed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

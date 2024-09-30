import React from 'react';
import '../footer/footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 Your Company. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../header/Header.scss'; // Assuming you have some CSS styles
import logo from "../header/recorder.jpg"; // Assuming you have some CSS styles

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">My Movies</h1>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;

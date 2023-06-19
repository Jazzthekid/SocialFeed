import React, { useState } from 'react';
import './NavBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item navbar-item-black">Social</div>
      <div className="navbar-item navbar-item-red">Feed</div>
    </nav>
  );
};


export default NavigationBar;
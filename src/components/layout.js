// src/components/Layout.js

import React from 'react';
import background from '../assets/images/background.jpg';  // Background image

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <img src={background} alt="Background" className="background-image" />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo'>MovieApp</div>
        <div className='nav-links'>
          <Navbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;

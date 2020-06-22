import React from 'react';
import gosa from '../../assets/gosa.jpg';
import './navbar.styles.scss';


const NavBar = () => (
  <nav className='nav-bar'>
    <div className='nav-bar-image-container'>
      <img src={ gosa } alt='homepage-img' className='nav-bar-image'/>
    </div>
    <h1 className='nav-bar-title'>Unity Gate</h1>
  </nav>
);

export default NavBar;
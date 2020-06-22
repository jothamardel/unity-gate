import React from 'react';
import CustomButton from '../../components/customButton/customButton.component';
import gosa from '../../assets/gosa.jpg';
import Particle from '../particles/particles.component';
import './homepage.styles.scss';


const Homepage = () => (
  <div className='home-page'>

    <Particle/>

    <div className='home-page-container'>

      <div className='homepage-image-container'>
        <img src={ gosa } alt='homepage-img' className='homepage-image'/>
      </div>

      <div className='homepage-desc'>
        <h1>UNITY GATE</h1>
        <p>search & connect...</p>
      </div>

      <CustomButton className='custom-button google-sign-in'>
        <i className='fa fa-facebook'></i> 
        Login with Facebook 
      </CustomButton>

      <CustomButton className='custom-button google-sign-in'>
        <i className='fa fa-google'></i>
        Login with Google
      </CustomButton>
      <p className='custom-link'>Create an account?</p>
    </div>
  </div>
);

export default Homepage;
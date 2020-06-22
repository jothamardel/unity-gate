import React from 'react';
import Particles from 'react-particles-js';
import CustomButton from '../../components/customButton/customButton.component';
import gosa from '../../assets/gosa.jpg';
import './homepage.styles.sass';


const particlesParameters = {
  particles: {
    number: {
      value: 45,
      density: {
        enable: true,
        value_area: 250
      }
    }    
  }
}



const Homepage = () => (
  <div className='home-page'>

    <Particles 
      params={ particlesParameters }
      className='particles'
    />

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
import React from 'react';
import Particles from 'react-particles-js';
import './particles.styles.sass';

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

const Particle = () => (
  <Particles 
    params={ particlesParameters }
    className='particles'
  />
);

export default Particle;
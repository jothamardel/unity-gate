import React from 'react';
import CustomButton from '../../components/customButton/customButton.component';
import gosa from '../../assets/gosa.jpg';
import Particle from '../particles/particles.component';
import {
  HomePage,
  HomePageContainer,
  HomePageDesc,
  HomePageDescHeading,
  HomePageImageContainer,
  HomePageImage,
  CustomLink, I
} from './homepage.styles';


const Homepage = () => (
  <HomePage>

    <Particle/>
    <HomePageContainer>

      <HomePageImageContainer>
        <HomePageImage src={ gosa } alt='homepage-img'/>
      </HomePageImageContainer>

      <HomePageDesc>
        <HomePageDescHeading>UNITY GATE</HomePageDescHeading>
        <HomePageDescHeading as='p'>search & connect...</HomePageDescHeading>
      </HomePageDesc>

      <CustomButton className='custom-button google-sign-in'>
        <I className='fa fa-facebook'></I>
        Login with Facebook 
      </CustomButton>

      <CustomButton className='custom-button google-sign-in'>
        <I className='fa fa-google'></I>
        Login with Google
      </CustomButton>
      <CustomLink>Create an account?</CustomLink>
      
    </HomePageContainer>
  </HomePage>
);

export default Homepage;
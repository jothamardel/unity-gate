import React from 'react';
import Particle from '../particles/particles.component';
import SearchBox from '../searchbox/searchbox.component';
import CustomButton from '../customButton/customButton.component';
import './bioUpdate.styles.scss';
import NavBar from '../navbar/navbar.component';



const BioUpdate = () => (
  <React.Fragment>
    <NavBar/>
    <Particle />
    <div className='update-bio'>
      <h1 className='update-bio-title'>Almost there...</h1>
      <form className='update-form'>
        <select className='update-bio-data' required>
          <option>House *</option>
          <option>Aggrey</option>
          <option>Curie</option>
          <option>Carver</option>
          <option>Keller</option>
          <option>Crowther</option>
          <option>Slessor</option>
          <option>Livingstone</option>
          <option>Nightingale</option>
        </select>
        <SearchBox 
          name='phoneNo'
          type='number'
          placeholder='Phone Number *'
          required
          className='update-bio-data'
        />
        <select className='update-bio-data' required>
          <option>Gender *</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className='update-bio-data' required>
          <option>Occupation *</option>
          <option>Agriculturist</option>
          <option>Artist</option>
          <option>Lawyer</option>
          <option>Politician</option>
          <option>Business owner</option>
          <option>Doctor</option>
          <option>Engineer</option>
          <option>Student</option>
          <option>Teacher</option>
          <option>Military Personnel</option>
          <option>Nurse</option>
          <option>Musician</option>
          <option>Others</option>
        </select>
        <CustomButton className='next-btn'>
          Finish
        </CustomButton>
      </form>
    </div>
  </React.Fragment>
);

export default BioUpdate;
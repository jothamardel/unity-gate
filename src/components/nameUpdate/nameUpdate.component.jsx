import React, { useState } from 'react';
import { Icon } from 'flwww';
import Particle from '../particles/particles.component';
import SearchBox from '../searchbox/searchbox.component';
import CustomButton from '../customButton/customButton.component';
import NavBar from '../navbar/navbar.component';
import { data } from '../../utils/utils';
import './nameUpdate.styles.scss';




const NameUpdate = () => {
  const [ value, setValue ] = useState('');
  const filteredStudents = data.filter((student) => student.name.toLowerCase().includes(value.toLowerCase()));
  return (
    <React.Fragment>
      <Particle />
      <NavBar/>
      <div className='name-update'>
        <h1 className='display-title'>Set '09</h1>
        <p className='display-desc'>Don't worry if you can't find your name.</p>
        <SearchBox 
          className='search-box'
          placeholder='search & select your name'
          onChange={ (event) => setValue(event.target.value)}
        />
        <div className='display-names'>
          {
            filteredStudents.map((student) => (
                <p
                  className='student-names'
                  key={ student.id }
                >
                <input
                  name='studentName'
                  type='radio'
                  value={`${student.name}`} 
                  key={student.id}
                />
                  { student.name }
                </p>
            ))
          }
        </div>
        <CustomButton className='next-btn'>
          Next
          <Icon type='arrowRight'/>
        </CustomButton>
      </div>
    </React.Fragment>
  );
}
export default NameUpdate;
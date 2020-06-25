import React, { useState } from 'react';
import { Icon } from 'flwww';
import './dashboard.styles.scss';
import NavBar from '../../components/navbar/navbar.component';
import SearchBox from '../../components/searchbox/searchbox.component';
import Card from '../../components/card/card.component';
import { data } from '../../utils/utils';

const Dashboard = () => {
  const [ value, setValue ] = useState('');
  const filteredStudents = data.filter((student) => student.name.toLowerCase().includes(value.toLowerCase()));
  return (
    <React.Fragment>
      <div className='dashboard'>
        <NavBar />
        ,<div className='dashboard-profile'>
          <h4>{`Welcome, John Doe`} <span>view profile</span></h4>
          
        </div>
        <SearchBox 
          className='search-box-dashboard'
          placeholder='search'
          onChange={ (event) => setValue(event.target.value)}
          />
          <div className='dashboard-card'>
            {
              filteredStudents.map((student) => (
                <Card 
                  key={student.id}
                  name={student.name}
                  email={student.email}
                  isActive={student.isActive}
                />
              ))
            }
          </div>
          <div className='dashboard-menu'>
            <Icon type="home" size="40px" color="#7F7F7F" className='icon'/>
            <Icon type="creditCard" size="40px" color="#7F7F7F" className='icon'/>
            <Icon type="globe" isSpinning size="40px" color="#AEBC30" className='icon'/>
            <Icon type="messageSquare" size="40px" color="#7F7F7F" className='icon'/>
            <Icon type="alignJustify" size="40px" color="#7F7F7F" className='icon'/>
          </div>
      </div>
    </React.Fragment>
  );
}
export default Dashboard;
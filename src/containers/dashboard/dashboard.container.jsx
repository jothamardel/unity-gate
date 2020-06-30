import React, { useState } from 'react';
import { Icon } from 'flwww';
import { data } from '../../utils/utils';
import { connect } from 'react-redux';
import { showStudentProfile, toggleMenu, togglePayment } from '../../redux/modal/modal.actions';
import './dashboard.styles.scss';
import NavBar from '../../components/navbar/navbar.component';
import SearchBox from '../../components/searchbox/searchbox.component';
import Card from '../../components/card/card.component';
import Modal from '../../components/modal/modal.component';
import SideBarMenu from '../../components/side-bar-menu/side-bar-menu.component';
import Payment from '../../components/payment/payment.component';

const Dashboard = ({ modal, showStudentProfile, toggleMenu, togglePayment }) => {
  const [ value, setValue ] = useState('');
  const filteredStudents = data.filter((student) => student.name.toLowerCase().includes(value.toLowerCase()));
  return (
    <React.Fragment>
      <div className='dashboard'>
        <NavBar />
        <div className='dashboard-profile'>
          <h4>{`Welcome, John Doe`} <span>view profile</span></h4>
          
        </div>
        <SearchBox 
          className='search-box-dashboard'
          placeholder='search'
          onChange={ (event) => setValue(event.target.value)}
          />
          <div className='dashboard-card'>
            {
              filteredStudents.map((student, index) => (
                <div key={student.id} onClick={() => showStudentProfile(index)} >
                  <Card 
                    key={student.id}
                    name={student.name}
                    email={student.email}
                    isActive={student.isActive}
                  />
                </div>
              ))
            }
          </div>
          <SideBarMenu />
          <div className='dashboard-menu'>
            <Icon type="home" size="40px" color="#7F7F7F" className='icon'/>
            <div onClick={ togglePayment }>
              <Icon type="creditCard" size="40px" color="#7F7F7F" className='icon'/>
            </div>
            <Icon type="globe" isSpinning size="40px" color="#AEBC30" className='icon'/>
            <Icon type="messageSquare" size="40px" color="#7F7F7F" className='icon'/>
            <div onClick={ toggleMenu }>
              <Icon type="alignJustify" size="40px" color="#7F7F7F" className='icon' />
            </div>
          </div>
      {
        modal.showStudentProfile ?
        <Modal 
          name={data[modal.index].name}
          email={data[modal.index].email}
          year={data[modal.index].year}
          phone={data[modal.index].phone}
          isActive={data[modal.index].isActive}
          house={data[modal.index].house}
          occupation={data[modal.index].occupation}
        /> : null
      }
      {
        modal.showPayment ?
        <Payment /> : null
      }
      </div>
    </React.Fragment>
  );
}

const mapDispatchToprops = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  showStudentProfile: (index) => dispatch(showStudentProfile(index)),
  toggleMenu: () => dispatch(toggleMenu()),
  togglePayment: () => dispatch(togglePayment())
});

export default connect(mapDispatchToprops, mapDispatchToProps)(Dashboard);

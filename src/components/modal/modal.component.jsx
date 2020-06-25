import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Badge, Icon } from 'flwww';
import { closeAllModals } from '../../redux/modal/modal.actions';
// import { data } from '../../utils/utils';
import './modal.styles.scss';
import NavBar from '../navbar/navbar.component';
import CustomButton from '../customButton/customButton.component';


const Modal = ({ name, year, email, house, occupation, phone, isActive, closeAllModals }) => {
  // const { index } = modal;
  return (
    <React.Fragment>
      <NavBar/>
      <div className='modal-underlay'>
        <div className='modal-card'>
          <div className='modal-close' onClick={closeAllModals}>
            <Icon type="close" color="#7F7F7F"/>
            <span>close</span>
          </div>
          <Badge 
            text="updated"
            style={{ size: "1px", backgroundColor: "#AEBC30"}}
          >
            <Avatar 
              src={`"https://robohash.org/set_set5/${ name }?size=200x200"`} 
              size="140px" 
              style={{ border: "0.7px solid #AEBC30" }}
            />
          </Badge>
          <div className='modal-info'>
            <p>{`Name: ${ name }`}</p>
            <p>{`Year: ${ year }`}</p>
            <p>{`House: ${ house }`}</p>
            <p>{`Email: ${ email }`}</p>
            <p>{`Is Active: ${ isActive }`}</p>
            <p>{`Occupation: ${ occupation }`}</p>
            <CustomButton className='next-btn modal-btn'>
              <Icon type="phone" size="25px"/>
              <div>
                <a href={`tel: ${ phone }`} >{`Call`}</a>
              </div>
            </CustomButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => dispatch(closeAllModals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
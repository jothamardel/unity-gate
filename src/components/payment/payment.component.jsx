import React from 'react';

import './payment.styles.scss';

import { Modal, Button } from "flwww";
import { connect } from 'react-redux';
import { togglePayment, closeAllModals } from '../../redux/modal/modal.actions';
 
const Payment = ({ togglePayment, modal, closeAllModals }) => {
  
  return (
    <div >

      <div className='payment'>

        <Modal
          className='payment'
          isVisible={ modal.showPayment }
          toggleModal={ closeAllModals }
          >

          <h3>Pay your dues?</h3>

          <Button  type="primary">Pay Now</Button>

        </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  togglePayment: () => dispatch(togglePayment()),
  closeAllModals: () => dispatch(closeAllModals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
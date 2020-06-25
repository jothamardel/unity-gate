import React from 'react';
import { connect } from 'react-redux';
import { Drawer, Icon, Avatar } from 'flwww';
import { toggleMenu } from '../../redux/modal/modal.actions';

import './side-bar-menu.styles.scss';

const SideBarMenu = ({ modal, toggleMenu }) => (
  <Drawer
    showDrawer={ modal.showMenu }
    toggleDrawer={ toggleMenu }
    position='right'
    style={{ width: "50vw"}}
    
  >
    <div className='side-menu'>

      <div className='side-menu-profile'>
        <Avatar src={`"https://robohash.org/set_set5/john?size=50x50"`} size="50px" />
        <p>John Doe</p>
        <p>johndoe@gmail.com</p>
        <p>See your profile here...</p>
      </div>
      <div className='menu' onClick={() => console.log('click')}>
        <Icon type='search'/>
        <span >I'm looking for...</span>
      </div>
      <div className='menu'>
        <Icon type="shoppingCart" />
        <span>Shop</span>
      </div>
      <div className='menu'>
        <Icon type="shield" />
        <span>About</span>
      </div>
      <div className='menu'>
        <Icon type="logout" />
        <span>Logout</span>
      </div>
      <div className='menu'>
        <Icon type="alertTriangle" />
        <span>Report a bug</span>
      </div>
    </div>
  </Drawer>
);

const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchaToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchaToProps)(SideBarMenu);
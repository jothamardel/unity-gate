import React from 'react';
import { Badge, Avatar } from 'flwww';
import CustomButton from '../customButton/customButton.component';
import './card.styles.scss';

const Card = ({ name, email }) => (
  <React.Fragment>
    <div className='card-container'>
      <Badge 
        // text="confirm"
        // style={{ size: "1px", backgroundColor: "green"}}
      >
        <Avatar src={`"https://robohash.org/set_set5/${name}?size=50x50"`} size="50px" />
      </Badge>
      <div className='card-info'>
        <h2 className='card-title'>{ name }</h2>
        <p className='card-email'>{ email }</p>
      </div>
      <CustomButton className='next-btn dashboard-btn'>
        view profile
      </CustomButton>
    </div>
  </React.Fragment>
);

export default Card;

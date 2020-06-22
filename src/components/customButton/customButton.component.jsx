import React from 'react';

import './customButton.styles.scss';


const CustomButton = ({ children, ...otherProps}) => (
  <button {...otherProps}>
    { children }
  </button>
);

export default CustomButton;
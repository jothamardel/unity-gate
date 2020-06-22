import React from 'react';

import './customButton.styles.sass';


const CustomButton = ({ children, ...otherProps}) => (
  <button {...otherProps}>
    { children }
  </button>
);

export default CustomButton;
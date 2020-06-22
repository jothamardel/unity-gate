import React from 'react';

import './searchbox.styles.sass';


const SearchBox = ({...otherProps}) => (
  <React.Fragment>
    <input {...otherProps} />
  </React.Fragment>
);

export default SearchBox;
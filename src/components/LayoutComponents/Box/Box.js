import React from 'react';

import './Box.css';

const Box = ({ children }) => {
  return(
    <div className="Box">
      {children ? {...children} : ''}
    </div>
  )
};

export default Box;
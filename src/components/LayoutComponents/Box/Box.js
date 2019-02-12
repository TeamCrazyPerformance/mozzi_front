import React from 'react';
import PropTypes from 'prop-types';

import './Box.css';

const Box = ({ display, children }) => {
  const boxClassNames = _changePropsToClassName({ display });

  return(
    <div className={boxClassNames}>
      {children ? children : ''}
    </div>
  )
};

const _changePropsToClassName = ({ display }) => {
  let classNames = 'box';

  // display
  classNames = classNames.concat(display ? ` box--display--${display}` : ' block');

  return classNames;
};

// Check prop types.
Box.propTypes = {
  display: PropTypes.oneOf([
    'block',
    'inline',
    'inline-block'
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
};

export default Box;
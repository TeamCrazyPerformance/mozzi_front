import React from 'react';
import PropTypes from 'prop-types';

import './FlexBox.css';

const FlexBox = ({ wrap='wrap', column='row', align='flex-start', justify='flex-start', children }) => {
  const flexBoxClassNames = _changePropsToClassName({ wrap, column, align, justify });

  return(
    <div className={flexBoxClassNames}>
      {children ? children : ''}
    </div>
  );
};

const _changePropsToClassName = ({ wrap, column, align, justify }) => {
  let classNames = 'flex-box';

  // flex-wrap
  classNames = classNames.concat(` flex-box--flex-wrap--${wrap}`);
  // flex-direction
  classNames = classNames.concat(` flex-box--flex-direction--${column}`);
  // align-items
  classNames = classNames.concat(` flex-box--align-items--${align}`);
  //jusitify-content
  classNames = classNames.concat(` flex-box--jusitify-content--${justify}`);

  return classNames;
};

// Check prop types.
FlexBox.propTypes = {
  wrap: PropTypes.oneOf([
    'wrap',
    'no-wrap',
    'wrap-reverse'
  ]),
  column: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse'
  ]),
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
};

export default FlexBox;
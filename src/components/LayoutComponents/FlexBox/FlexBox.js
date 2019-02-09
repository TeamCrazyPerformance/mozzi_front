import React from 'react';
// import classNames from 'classnames';

import './FlexBox.css';

const FlexBox = ({ wrap, column, align, justify, children }) => {
  const flexBoxclass = _changePropsToClass({ wrap, column, align, justify });

  return(
    // <div className={flexBoxclass}>
    <div className='flex-box a'>
      {children ? {...children} : ''}
    </div>
  );
};

const _changePropsToClass = ({ wrap, column, align, justify }) => {
  let className = 'flex-box';

  // flex-wrap
  className = className.concat(wrap ? ` flex-box--flex-wrap--${wrap}` : '');
  // flex-direction
  className = className.concat(column ? ` flex-box--flex-direction--${column}` : '');
  // align-items
  className = className.concat(align ? ` flex-box--align-items--${align}` : '');
  //jusitify-content
  className = className.concat(justify ? ` flex-box--jusitify-content--${justify}` : '');

  return className;
};

export default FlexBox;
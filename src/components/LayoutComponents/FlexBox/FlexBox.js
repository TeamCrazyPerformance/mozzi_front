import React from 'react';
// import classNames from 'classnames';

import './FlexBox.css';

const FlexBox = ({ wrap, column, order, align, justify, children }) => {
  let flexBoxclass = _changePropsToClass({ wrap, column, order, align, justify });

  return(
    <div className={flexBoxclass}>
      {children ? {...children} : ''}
    </div>
  );
};

const _changePropsToClass = ({ wrap, column, order, align, justify }) => {
  let className = 'flex-box';

  className = className.concat(wrap ? ` ${wrap}` : '');
  className = className.concat(column ? ` ${column}` : '');
  className = className.concat(order ? ` ${order}` : '');
  className = className.concat(align ? ` ${align}` : '');
  className = className.concat(justify ? ` ${justify}` : '');

  return className;
};

export default FlexBox;
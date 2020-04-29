import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

const Button = ({ children, className = '', style, ...props }) => {
  return (
    <button {...props} style={style} className={`button ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default React.memo(Button);

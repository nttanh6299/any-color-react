import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

const Button = ({
  children,
  prefix,
  suffix,
  className = '',
  style,
  ...props
}) => {
  return (
    <button {...props} style={style} className={`button ${className}`}>
      {prefix}
      {children}
      {suffix}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;

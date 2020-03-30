import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const Icon = ({ children, className = '' }) => {
  return <i className={`${className} material-icons`}>{children}</i>;
};

Icon.propTypes = propTypes;

export default React.memo(Icon);

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  children: PropTypes.node
};

const Background = ({ color, children }) => {
  return (
    <div style={{ background: color }} className="background">
      {children}
    </div>
  );
};

Background.propTypes = propTypes;

export default React.memo(Background);

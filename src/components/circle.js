import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  show: PropTypes.bool.isRequired,
  deg: PropTypes.number
};

const Circle = ({ show, deg }) => {
  if (!show || !deg) {
    return null;
  }

  return (
    <div className="circle">
      <div className="circle__cover"></div>
      <div
        style={{ transform: `rotate(-${deg}deg)` }}
        className="circle__handle"
      ></div>
    </div>
  );
};

Circle.propTypes = propTypes;

export default Circle;

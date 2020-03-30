import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { offset } from '../utils';

const propTypes = {
  deg: PropTypes.number.isRequired,
  changeGradientDirection: PropTypes.func.isRequired,
  switchEditAngle: PropTypes.func.isRequired
};

const Circle = ({ deg, changeGradientDirection, switchEditAngle }) => {
  const [centerCircleX, setCenterCircleX] = useState(0);
  const [centerCircleY, setCenterCircleY] = useState(0);
  const handleRef = useRef(null);

  useEffect(() => {
    const { current } = handleRef;
    setCenterCircleX(offset(current, 'left'));
    setCenterCircleY(offset(current, 'top'));

    return () => {
      handleRef.current.offsetParent.removeEventListener(
        'mousemove',
        onMouseMove
      );
    };
  }, []);

  //P1: center circle coords
  //P2: mouse coords
  // angle in radians: Math.atan2(p2.y - p1.y, p2.x - p1.x);
  // angle in degrees: Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
  const onMouseMove = e => {
    const { clientX, clientY } = e;
    const diffX = clientX - centerCircleX;
    const diffY = clientY - centerCircleY;
    let angle = Math.floor((Math.atan2(diffY, diffX) * 180) / Math.PI);
    angle = angle < 0 ? 360 + angle : angle;
    changeGradientDirection(angle);
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseUp={switchEditAngle}
      className="circle"
    >
      <div className="circle__cover"></div>
      <div
        ref={handleRef}
        style={{ transform: `rotate(${deg}deg)` }}
        className="circle__handle"
      ></div>
    </div>
  );
};

Circle.propTypes = propTypes;

export default React.memo(Circle);

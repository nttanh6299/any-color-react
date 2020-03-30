import React, { useMemo, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import { offset, preventClick } from '../utils';

const propTypes = {
  gradient: PropTypes.object,
  toggleEditColorOfGradient: PropTypes.func.isRequired,
  startUpdateColorStop: PropTypes.func.isRequired,
  updateColorStop: PropTypes.func.isRequired
};

const ColorRendered = ({
  gradient,
  toggleEditColorOfGradient,
  startUpdateColorStop,
  updateColorStop
}) => {
  const slider = useRef(null);
  console.log('color rendered');
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const onMouseDown = index => () => {
    const { showSlider } = gradient;
    if (showSlider) {
      startUpdateColorStop(index);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('mousemove', onMouseMove);
    }
  };

  const onMouseMove = e => {
    const { clientX } = e;
    const { current } = slider;
    const diff = clientX - offset(current, 'left');
    const percent = Math.min(Math.max(diff / current.offsetWidth, 0), 1);
    updateColorStop(Math.floor(percent * 100));
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const renderColor = useMemo(() => {
    if (!gradient) {
      return null;
    }

    const { colors, colorEditing, showSlider } = gradient;
    const { index: colorIndexEditing, showHub } = colorEditing;
    return colors.map(({ color, stop }, index) => {
      const active =
        colorIndexEditing === index && showHub ? 'button--active' : '';
      const leftStop = showSlider
        ? stop
        : Math.floor((index * 100) / colors.length);

      return (
        <Button
          key={index}
          className={`color-rendered__slider__handle ${active}`}
          onMouseDown={onMouseDown(index)}
          onClick={
            showSlider
              ? preventClick
              : toggleEditColorOfGradient.bind(this, index)
          }
          style={{
            background: color,
            top: 0,
            left: `${leftStop}%`
          }}
        />
      );
    });
  }, [gradient]);

  if (!gradient) {
    return null;
  }

  const { colors, showSlider } = gradient;
  const sliderWidth = showSlider ? 100 : colors.length * 25;
  const unit = showSlider ? '%' : 'px';
  const opacity = showSlider ? 1 : 0;

  return (
    <div className="color-rendered" ref={slider}>
      <div
        style={{ width: `${sliderWidth}${unit}` }}
        className="color-rendered__slider"
      >
        <div style={{ opacity }} className="color-rendered__slider__fill"></div>
        {renderColor}
      </div>
    </div>
  );
};

ColorRendered.propTypes = propTypes;

export default React.memo(ColorRendered);

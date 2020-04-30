import React, { useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import ColorPicker from './color-picker';
import { offset, preventClick } from '../utils';

const propTypes = {
  gradient: PropTypes.object,
  toggleEditColorOfGradient: PropTypes.func.isRequired,
  startUpdateColorStop: PropTypes.func.isRequired,
  updateColorStop: PropTypes.func.isRequired,
  editColorOfGradient: PropTypes.func.isRequired
};

const ColorRendered = ({
  gradient,
  toggleEditColorOfGradient,
  startUpdateColorStop,
  updateColorStop,
  editColorOfGradient
}) => {
  const slider = useRef(null);

  useEffect(() => {
    if (!showSlider) {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [showSlider]);

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
    const { colors, colorIndexEditing, showSlider, showHub } = gradient;
    return colors.map(({ color, stop }, index, { length }) => {
      const active =
        colorIndexEditing === index && showHub ? 'button--active' : '';
      const leftStop = showSlider ? stop : Math.floor((index * 100) / length);

      return (
        <div
          className="color-rendered__color-wrapper"
          key={index}
          style={{
            top: 0,
            left: `${leftStop}%`,
            zIndex: colorIndexEditing === index ? 2 : 1
          }}
        >
          <Button
            className={`color-rendered__color ${active}`}
            style={{ background: color }}
            title={color}
            onMouseDown={onMouseDown(index)}
            onClick={
              showSlider
                ? preventClick
                : toggleEditColorOfGradient.bind(this, index)
            }
          />
          <ColorPicker
            visible={!!active}
            color={color}
            editColorOfGradient={editColorOfGradient}
          />
        </div>
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
        <div style={{ opacity }} className="color-rendered__fill"></div>
        {renderColor}
      </div>
    </div>
  );
};

ColorRendered.propTypes = propTypes;
ColorRendered.defaultProps = { gradient: null };

export default React.memo(ColorRendered);

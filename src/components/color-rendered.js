import React, { useMemo, useCallback } from 'react';
import Button from './button';

const ColorRendered = ({ gradient, toggleEditColorOfGradient }) => {
  const onClick = useCallback(
    index => () => {
      toggleEditColorOfGradient(index);
    },
    []
  );

  const renderColor = useMemo(() => {
    if (!gradient) {
      return null;
    }

    const { colors, colorEditing, showSlider } = gradient;
    const { index: colorIndexEditing, showHub } = colorEditing;
    return colors.map(({ color, stop }, index) => {
      const active =
        colorIndexEditing === index && showHub ? 'button--active' : '';
      const rightStop = showSlider
        ? stop
        : Math.floor((index * 100) / colors.length);

      return (
        <Button
          key={index}
          className={`color-rendered__slider__handle ${active}`}
          onClick={onClick(index)}
          style={{
            background: color,
            top: 0,
            right: `${rightStop}%`
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
    <div className="color-rendered">
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

export default ColorRendered;

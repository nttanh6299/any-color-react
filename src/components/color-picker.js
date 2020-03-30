import React from 'react';
import PropTypes from 'prop-types';
import { HuePicker } from 'react-color';

const propTypes = {
  color: PropTypes.object,
  editColorOfGradient: PropTypes.func.isRequired
};

const ColorPicker = ({ color, editColorOfGradient }) => {
  if (!color || (color && !color.showHub)) {
    return null;
  }

  const handleChange = colorSelected => {
    const { hex } = colorSelected;
    const { stop } = color;
    editColorOfGradient(hex, stop);
  };

  return (
    <div className="color-picker">
      <HuePicker width="100%" color={color.color} onChange={handleChange} />
    </div>
  );
};

ColorPicker.propTypes = propTypes;

export default React.memo(ColorPicker);

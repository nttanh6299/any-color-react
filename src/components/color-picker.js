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

  const handleChange = color => {
    const { hex } = color;
    editColorOfGradient(hex);
  };

  return (
    <div className="color-picker">
      <HuePicker width="100%" color={color.color} onChange={handleChange} />
    </div>
  );
};

ColorPicker.propTypes = propTypes;

export default ColorPicker;

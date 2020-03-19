import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ visible, colorIndex }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="color-picker">
      <ChromePicker />
    </div>
  );
};

export default ColorPicker;

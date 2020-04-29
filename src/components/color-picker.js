import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

const propTypes = {
  color: PropTypes.object,
  editColorOfGradient: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

const ColorPicker = ({ color, editColorOfGradient, visible }) => {
  const handleChange = colorSelected => {
    const { hex } = colorSelected;
    const { stop } = color;
    editColorOfGradient(hex, stop);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="color-picker">
      <ChromePicker disableAlpha color={color.color} onChange={handleChange} />
    </div>
  );
};

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = {
  color: {},
  visible: false
};

export default React.memo(ColorPicker);

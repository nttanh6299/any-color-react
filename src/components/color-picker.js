import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

const propTypes = {
  color: PropTypes.string.isRequired,
  editColorOfGradient: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

const ColorPicker = ({ color, editColorOfGradient, visible }) => {
  const handleChange = colorSelected => {
    const { hex } = colorSelected;
    editColorOfGradient(hex);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="color-picker">
      <ChromePicker disableAlpha color={color} onChange={handleChange} />
    </div>
  );
};

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = {
  color: '#fff',
  visible: false
};

export default React.memo(ColorPicker);

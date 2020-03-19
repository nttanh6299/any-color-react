import React, { useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';
import Circle from './circle';
import Copy from './copy';
import Settings from './settings';
import ColorPicker from './color-picker';
import { setGradient } from '../utils';
import ColorRendered from './color-rendered';

const propTypes = {
  gradient: PropTypes.shape({
    colors: PropTypes.array,
    deg: PropTypes.number
  }),
  isCopied: PropTypes.bool.isRequired,
  onGenerateGradient: PropTypes.func.isRequired,
  prevGradient: PropTypes.func.isRequired,
  nextGradient: PropTypes.func.isRequired,
  generateGradientIfNeeded: PropTypes.func.isRequired,
  copyGradientToClipboard: PropTypes.func.isRequired,
  addNewColor: PropTypes.func.isRequired,
  editAngle: PropTypes.bool.isRequired,
  switchEditAngle: PropTypes.func.isRequired,
  changeGradientDirection: PropTypes.func.isRequired,
  prefix: PropTypes.bool.isRequired,
  fallback: PropTypes.bool.isRequired,
  togglePrefix: PropTypes.func.isRequired,
  toggleFallback: PropTypes.func.isRequired,
  toggleEditColorOfGradient: PropTypes.func.isRequired,
  editColorOfGradient: PropTypes.func.isRequired,
  toggleSlider: PropTypes.func.isRequired
};

const Gradients = ({
  gradient,
  isCopied,
  onGenerateGradient,
  prevGradient,
  nextGradient,
  generateGradientIfNeeded,
  copyGradientToClipboard,
  addNewColor,
  editAngle,
  switchEditAngle,
  changeGradientDirection,
  prefix,
  fallback,
  togglePrefix,
  toggleFallback,
  toggleEditColorOfGradient,
  editColorOfGradient,
  toggleSlider
}) => {
  useEffect(() => {
    generateGradientIfNeeded();
    document.title = 'AnyColorReact - Gradients';
  }, []);

  return (
    <div className="colors">
      <div className="inner">
        <Settings
          togglePrefix={togglePrefix}
          toggleFallback={toggleFallback}
          prefix={prefix}
          fallback={fallback}
        />
        <Background color={setGradient(gradient)}>
          {!editAngle ? (
            <Copy
              copyToClipboard={copyGradientToClipboard}
              isCopied={isCopied}
            />
          ) : (
            <Circle
              changeGradientDirection={changeGradientDirection}
              switchEditAngle={switchEditAngle}
              deg={gradient.deg}
            />
          )}
        </Background>
        <div className="colors__handle">
          <Button
            onClick={switchEditAngle}
            className={`colors__deg ${editAngle ? 'colors__deg--active' : ''}`}
            prefix={<i className="material-icons">rotate_right</i>}
          >
            {gradient && `${gradient.deg}°`}
          </Button>
          <ColorRendered
            gradient={gradient}
            toggleEditColorOfGradient={toggleEditColorOfGradient}
          />
          <Button
            onClick={addNewColor}
            style={{ background: 'transparent', marginRight: '6px' }}
            prefix={<i className="material-icons">add_circle_outline</i>}
          />
          <Button
            onClick={toggleSlider}
            style={{ background: 'transparent' }}
            prefix={<i className="material-icons">wrap_text</i>}
          />
        </div>
        <div className="colors__actions">
          <ColorPicker
            color={gradient && gradient.colorEditing}
            editColorOfGradient={editColorOfGradient}
          />
          <Button
            onClick={onGenerateGradient}
            className="colors__action colors__action--generate"
            prefix={<i className="icon material-icons">refresh</i>}
          >
            Generate
          </Button>
          <Button
            onClick={prevGradient}
            className="colors__action"
            prefix={<i className="icon material-icons">arrow_left</i>}
          >
            Back
          </Button>
          <Button
            onClick={nextGradient}
            className="colors__action"
            suffix={<i className="icon material-icons">arrow_right</i>}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

Gradients.propTypes = propTypes;

export default Gradients;

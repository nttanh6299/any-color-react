import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';
import Circle from './circle';
import Copy from './copy';
import Settings from './settings';
import ColorRendered from './color-rendered';
import Icon from './Icon';
import { setGradient } from '../utils';

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
  toggleSlider: PropTypes.func.isRequired,
  startUpdateColorStop: PropTypes.func.isRequired,
  updateColorStop: PropTypes.func.isRequired,
  deleteSelectedColor: PropTypes.func.isRequired
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
  toggleSlider,
  startUpdateColorStop,
  updateColorStop,
  deleteSelectedColor
}) => {
  useEffect(() => {
    generateGradientIfNeeded();
  }, []);

  if (!gradient) {
    return null;
  }

  const { deg, showHub, showSlider, colors } = gradient;
  const isDeleteColor = showHub && colors.length > 2;

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
              deg={deg}
            />
          )}
        </Background>
        <div className="colors__handle">
          <Button
            onClick={switchEditAngle}
            className={`colors__deg ${editAngle ? 'colors__deg--active' : ''}`}
          >
            <Icon>rotate_right</Icon>
            {`${deg}°`}
          </Button>
          <ColorRendered
            gradient={gradient}
            toggleEditColorOfGradient={toggleEditColorOfGradient}
            editColorOfGradient={editColorOfGradient}
            startUpdateColorStop={startUpdateColorStop}
            updateColorStop={updateColorStop}
          />
          <Button
            onClick={!isDeleteColor ? addNewColor : deleteSelectedColor}
            style={{ background: 'transparent', marginRight: '6px' }}
            title={!isDeleteColor ? 'Add' : 'Delete'}
          >
            <Icon>
              {!isDeleteColor ? 'add_circle_outline' : 'delete_outline'}
            </Icon>
          </Button>
          <Button
            onClick={toggleSlider}
            style={{ background: 'transparent' }}
            title={!showSlider ? 'Edit' : 'Exit'}
          >
            <Icon>{!showSlider ? 'wrap_text' : 'clear'}</Icon>
          </Button>
        </div>
        <div className="colors__actions">
          <Button
            onClick={onGenerateGradient}
            className="colors__action colors__action--generate awesome-hover"
          >
            <Icon className="icon">refresh</Icon> Generate
          </Button>
          <Button
            onClick={prevGradient}
            className="colors__action awesome-hover"
          >
            <Icon className="icon">arrow_left</Icon> Back
          </Button>
          <Button
            onClick={nextGradient}
            className="colors__action awesome-hover"
          >
            Next <Icon className="icon">arrow_right</Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

Gradients.propTypes = propTypes;
Gradients.defaultProps = {};

export default Gradients;

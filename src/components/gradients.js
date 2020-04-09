import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';
import Circle from './circle';
import Copy from './copy';
import Settings from './settings';
import ColorPicker from './color-picker';
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
  updateColorStop: PropTypes.func.isRequired
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
  updateColorStop
}) => {
  useEffect(() => {
    generateGradientIfNeeded();
    document.title = 'AnyColorReact - Gradients';
  }, []);

  const refreshIcon = useMemo(() => <Icon className="icon">refresh</Icon>, []);
  const arrowLeftIcon = useMemo(
    () => <Icon className="icon">arrow_left</Icon>,
    []
  );
  const arrowRightIcon = useMemo(
    () => <Icon className="icon">arrow_right</Icon>,
    []
  );
  const rotateRightIcon = useMemo(() => <Icon>rotate_right</Icon>, []);
  const addCircleOutlineIcon = useMemo(
    () => <Icon>add_circle_outline</Icon>,
    []
  );
  const wrapTextIcon = useMemo(() => <Icon>wrap_text</Icon>);

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
            prefix={rotateRightIcon}
          >
            {gradient && `${gradient.deg}°`}
          </Button>
          <ColorRendered
            gradient={gradient}
            toggleEditColorOfGradient={toggleEditColorOfGradient}
            editColorOfGradient={editColorOfGradient}
            startUpdateColorStop={startUpdateColorStop}
            updateColorStop={updateColorStop}
          />
          <Button
            onClick={addNewColor}
            style={{ background: 'transparent', marginRight: '6px' }}
            prefix={addCircleOutlineIcon}
          />
          <Button
            onClick={toggleSlider}
            style={{ background: 'transparent' }}
            prefix={wrapTextIcon}
          />
        </div>
        <div className="colors__actions">
          <ColorPicker
            color={gradient && gradient.colorEditing}
            editColorOfGradient={editColorOfGradient}
          />
          <Button
            onClick={onGenerateGradient}
            className="colors__action colors__action--generate awesome-hover"
            prefix={refreshIcon}
          >
            Generate
          </Button>
          <Button
            onClick={prevGradient}
            className="colors__action awesome-hover"
            prefix={arrowLeftIcon}
          >
            Back
          </Button>
          <Button
            onClick={nextGradient}
            className="colors__action awesome-hover"
            suffix={arrowRightIcon}
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

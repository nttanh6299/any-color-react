import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';
import Circle from './circle';
import { setGradient } from '../utils';

const propTypes = {
  gradient: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
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
  changeGradientDirection: PropTypes.func.isRequired
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
  changeGradientDirection
}) => {
  useEffect(() => {
    generateGradientIfNeeded();
  }, []);
  const renderColor = useMemo(() => {
    return (
      gradient &&
      gradient.colors.map((color, index) => (
        <Button
          key={index}
          style={{
            background: color,
            width: '20px',
            height: '20px',
            marginRight: '10px',
            padding: 0,
            borderRadius: '50%'
          }}
        />
      ))
    );
  }, [gradient]);

  return (
    <div className="colors">
      <div className="inner">
        <Background color={setGradient(gradient)}>
          {!editAngle && (
            <div onClick={copyGradientToClipboard} className="background__copy">
              <span className="background__text">
                <i className="icon material-icons">
                  {isCopied ? 'done' : 'code'}
                </i>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
              </span>
            </div>
          )}
          {editAngle && (
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
          {renderColor}
          <Button
            onClick={addNewColor}
            style={{ background: 'transparent' }}
            prefix={<i className="material-icons">add_circle_outline</i>}
          />
        </div>
        <div></div>
        <div className="colors__actions">
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

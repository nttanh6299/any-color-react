import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';
import Copy from './copy';
import Icon from './Icon';

const propTypes = {
  color: PropTypes.string,
  isCopied: PropTypes.bool.isRequired,
  onGenerateColor: PropTypes.func.isRequired,
  prevColor: PropTypes.func.isRequired,
  nextColor: PropTypes.func.isRequired,
  copyColorToClipboard: PropTypes.func.isRequired,
  generateColorIfNeeded: PropTypes.func.isRequired
};

const Colors = ({
  color,
  isCopied,
  onGenerateColor,
  prevColor,
  nextColor,
  copyColorToClipboard,
  generateColorIfNeeded
}) => {
  useEffect(() => {
    generateColorIfNeeded();
    document.title = 'AnyColorReact - Colors';
  }, []);

  return (
    <div className="colors">
      <div className="inner">
        <Background color={color}>
          {color && (
            <Copy copyToClipboard={copyColorToClipboard} isCopied={isCopied} />
          )}
        </Background>
        <div className="colors__value">{color}</div>
        <div className="colors__actions">
          <Button
            onClick={onGenerateColor}
            className="colors__action colors__action--generate awesome-hover"
          >
            <Icon className="icon">refresh</Icon> Generate
          </Button>
          <Button onClick={prevColor} className="colors__action awesome-hover">
            <Icon className="icon">arrow_left</Icon> Back
          </Button>
          <Button onClick={nextColor} className="colors__action awesome-hover">
            Next <Icon className="icon">arrow_right</Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

Colors.propTypes = propTypes;

export default Colors;

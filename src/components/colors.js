import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';

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
  }, []);

  return (
    <div className="colors">
      <div className="inner">
        <Background color={color}>
          {color && (
            <div onClick={copyColorToClipboard} className="background__copy">
              <span className="background__text">
                <i className="icon material-icons">
                  {isCopied ? 'done' : 'code'}
                </i>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
              </span>
            </div>
          )}
        </Background>
        <div className="colors__value">{color}</div>
        <div className="colors__actions">
          <Button
            onClick={onGenerateColor}
            className="colors__action colors__action--generate"
            prefix={<i className="icon material-icons">refresh</i>}
          >
            Generate
          </Button>
          <Button
            onClick={prevColor}
            className="colors__action"
            prefix={<i className="icon material-icons">arrow_left</i>}
          >
            Back
          </Button>
          <Button
            onClick={nextColor}
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

Colors.propTypes = propTypes;

export default Colors;

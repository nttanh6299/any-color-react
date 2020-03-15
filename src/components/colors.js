import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from './background';

const propTypes = {
  color: PropTypes.string,
  isCopied: PropTypes.bool.isRequired,
  onGenerate: PropTypes.func.isRequired,
  prevColor: PropTypes.func.isRequired,
  nextColor: PropTypes.func.isRequired,
  copyToClipboard: PropTypes.func.isRequired
};

const Colors = ({
  color,
  isCopied,
  onGenerate,
  prevColor,
  nextColor,
  copyToClipboard
}) => {
  useEffect(() => {
    onGenerate();
  }, []);

  return (
    <div className="colors">
      <div className="colors__inner">
        <Background
          color={color}
          copyToClipboard={copyToClipboard}
          isCopied={isCopied}
        />
        <div className="colors__value">{color}</div>
        <div className="colors__actions">
          <button
            onClick={onGenerate}
            className="colors__action colors__action--generate"
          >
            <i className="icon material-icons">refresh</i> Generate
          </button>
          <button onClick={prevColor} className="colors__action">
            <i className="icon material-icons">arrow_left</i> Back
          </button>
          <button onClick={nextColor} className="colors__action">
            Next <i className="icon material-icons">arrow_right</i>
          </button>
        </div>
      </div>
    </div>
  );
};

Colors.propTypes = propTypes;

export default Colors;

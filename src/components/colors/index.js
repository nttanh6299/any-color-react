import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './colors.scss';

const propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isCopied: PropTypes.bool.isRequired,
  onGenerate: PropTypes.func.isRequired,
  prevColor: PropTypes.func.isRequired,
  nextColor: PropTypes.func.isRequired,
  copyToClipboard: PropTypes.func.isRequired
};

const Colors = ({
  color,
  loading,
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
        <div
          className="colors__background"
          style={{ backgroundColor: loading ? '#000' : color }}
        >
          {color && (
            <div onClick={copyToClipboard} className="colors__background__copy">
              {isCopied ? 'Copied' : 'Copy'}
            </div>
          )}
        </div>
        <div className="colors__value">{color}</div>
        <div className="colors__actions">
          <button
            onClick={onGenerate}
            className="colors__action colors__action--generate"
          >
            Generate
          </button>
          <button onClick={prevColor} className="colors__action">
            Back
          </button>
          <button onClick={nextColor} className="colors__action">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

Colors.propTypes = propTypes;

export default Colors;

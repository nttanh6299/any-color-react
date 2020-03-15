import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  copyToClipboard: PropTypes.func.isRequired,
  isCopied: PropTypes.bool.isRequired,
  color: PropTypes.string
};

const Background = ({ color, copyToClipboard, isCopied }) => {
  const text = isCopied ? ['done', 'Copied!'] : ['code', 'Copy'];
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={copyToClipboard}
      className="background"
    >
      {color && (
        <div className="background__copy">
          <span className="background__text">
            <i className="icon material-icons">{text[0]}</i> {text[1]}
          </span>
        </div>
      )}
    </div>
  );
};

Background.propTypes = propTypes;

export default Background;

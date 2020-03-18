import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  copyToClipboard: PropTypes.func.isRequired,
  isCopied: PropTypes.bool.isRequired
};

const Copy = ({ copyToClipboard, isCopied }) => {
  return (
    <div onClick={copyToClipboard} className="copy">
      <span className="copy__text">
        <i className="icon material-icons">{isCopied ? 'done' : 'code'}</i>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </span>
    </div>
  );
};

Copy.propTypes = propTypes;

export default Copy;

import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const propTypes = {
  copyToClipboard: PropTypes.func.isRequired,
  isCopied: PropTypes.bool.isRequired
};

const Copy = ({ copyToClipboard, isCopied }) => {
  return (
    <div onClick={copyToClipboard} className="copy">
      <span className="copy__text">
        <Icon className="icon">{isCopied ? 'done' : 'code'}</Icon>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </span>
    </div>
  );
};

Copy.propTypes = propTypes;

export default React.memo(Copy);

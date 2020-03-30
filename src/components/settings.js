import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const propTypes = {
  prefix: PropTypes.bool.isRequired,
  fallback: PropTypes.bool.isRequired,
  togglePrefix: PropTypes.func.isRequired,
  toggleFallback: PropTypes.func.isRequired
};

const Settings = ({ prefix, fallback, togglePrefix, toggleFallback }) => {
  return (
    <div className="settings">
      <div onClick={togglePrefix} className="settings__section">
        <span>Prefixes</span>
        <Icon className="icon">
          {prefix ? 'check_box' : 'check_box_outline_blank'}
        </Icon>
      </div>
      <div onClick={toggleFallback} className="settings__section">
        <span>Fallback</span>
        <Icon className="icon">
          {fallback ? 'check_box' : 'check_box_outline_blank'}
        </Icon>
      </div>
    </div>
  );
};

Settings.propTypes = propTypes;

export default React.memo(Settings);

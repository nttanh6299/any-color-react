import React from 'react';
import PropTypes from 'prop-types';

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
        <i className="icon material-icons">
          {prefix ? 'check_box' : 'check_box_outline_blank'}
        </i>
      </div>
      <div onClick={toggleFallback} className="settings__section">
        <span>Fallback</span>
        <i className="icon material-icons">
          {fallback ? 'check_box' : 'check_box_outline_blank'}
        </i>
      </div>
    </div>
  );
};

Settings.propTypes = propTypes;

export default Settings;

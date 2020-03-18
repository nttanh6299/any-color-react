import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  prefix: PropTypes.bool.isRequired,
  togglePrefix: PropTypes.func.isRequired
};

const Settings = ({ prefix, togglePrefix }) => {
  return (
    <div className="settings">
      <div onClick={togglePrefix} className="settings__section">
        <span>Prefixes</span>
        <i className="icon material-icons">
          {prefix ? 'check_box' : 'check_box_outline_blank'}
        </i>
      </div>
      <div className="settings__section">
        <span>Fallback</span>
        <i className="icon material-icons">check_box_outline_blank</i>
      </div>
    </div>
  );
};

Settings.propTypes = propTypes;

export default Settings;

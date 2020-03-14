import React from 'react';

import './colors.scss';

const Colors = () => {
  return (
    <div className="colors">
      <div className="colors__inner">
        <div className="colors__background">
          <div className="colors__background__copy">Copy</div>
        </div>
        <div className="colors__value">#FFFFFF</div>
        <div className="colors__actions">
          <button className="colors__action colors__action--generate">
            Generate
          </button>
          <button className="colors__action">Back</button>
          <button className="colors__action">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Colors;

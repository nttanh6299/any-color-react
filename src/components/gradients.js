import React, { useEffect } from 'react';
import Background from './background';
import Button from './button';

const Gradients = ({ gradient, onGenerateGradient }) => {
  useEffect(() => {
    onGenerateGradient();
  }, []);

  const setGradient = (colors = [], deg = 0) => {
    return `linear-gradient(${deg}deg, ${colors})`;
  };

  if (!gradient) return null;

  return (
    <div className="gradients">
      <div className="inner">
        <Background color={setGradient(gradient.colors, gradient.deg)} />
        <div className="colors__value">sadasdas</div>
        <div className="colors__actions">
          <Button
            className="colors__action colors__action--generate"
            prefix={<i className="icon material-icons">refresh</i>}
          >
            Generate
          </Button>
          <Button
            className="colors__action"
            prefix={<i className="icon material-icons">arrow_left</i>}
          >
            Back
          </Button>
          <Button
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

export default Gradients;

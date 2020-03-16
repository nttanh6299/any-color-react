import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from './background';
import Button from './button';

const propTypes = {
  gradient: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
    deg: PropTypes.number
  }),
  isCopied: PropTypes.bool.isRequired,
  onGenerateGradient: PropTypes.func.isRequired,
  prevGradient: PropTypes.func.isRequired,
  nextGradient: PropTypes.func.isRequired
};

const Gradients = ({
  gradient,
  isCopied,
  onGenerateGradient,
  prevGradient,
  nextGradient
}) => {
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
        <Background
          color={setGradient(gradient.colors, gradient.deg)}
          isCopied={isCopied}
        />
        <div className="colors__value">sadasdas</div>
        <div className="colors__actions">
          <Button
            onClick={onGenerateGradient}
            className="colors__action colors__action--generate"
            prefix={<i className="icon material-icons">refresh</i>}
          >
            Generate
          </Button>
          <Button
            onClick={prevGradient}
            className="colors__action"
            prefix={<i className="icon material-icons">arrow_left</i>}
          >
            Back
          </Button>
          <Button
            onClick={nextGradient}
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

Gradients.propTypes = propTypes;

export default Gradients;

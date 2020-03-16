import React from 'react';
import { connect } from 'react-redux';
import { onGenerateGradient } from '../actions/index';
import Gradients from '../components/gradients';
import { gradientsSelector } from '../selectors/GradientsSelectors';

const GradientsContainer = props => <Gradients {...props} />;

const mapStateToProps = state => {
  return { ...gradientsSelector(state) };
};

export default connect(mapStateToProps, { onGenerateGradient })(
  GradientsContainer
);

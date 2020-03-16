import React from 'react';
import { connect } from 'react-redux';
import {
  onGenerateGradient,
  prevGradient,
  nextGradient,
  generateGradientIfNeeded
} from '../actions';
import Gradients from '../components/gradients';
import { gradientsSelector } from '../selectors/GradientsSelectors';

const GradientsContainer = props => <Gradients {...props} />;

const mapStateToProps = state => {
  return { ...gradientsSelector(state) };
};

export default connect(mapStateToProps, {
  onGenerateGradient,
  prevGradient,
  nextGradient,
  generateGradientIfNeeded
})(GradientsContainer);

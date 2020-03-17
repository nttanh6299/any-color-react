import React from 'react';
import { connect } from 'react-redux';
import {
  onGenerateGradient,
  prevGradient,
  nextGradient,
  generateGradientIfNeeded,
  copyGradientToClipboard,
  addNewColor,
  switchEditAngle,
  changeGradientDirection
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
  generateGradientIfNeeded,
  copyGradientToClipboard,
  addNewColor,
  switchEditAngle,
  changeGradientDirection
})(GradientsContainer);

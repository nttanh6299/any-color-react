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
  changeGradientDirection,
  togglePrefix,
  toggleFallback,
  toggleEditColorOfGradient,
  editColorOfGradient,
  toggleSlider
} from '../actions';
import Gradients from '../components/gradients';
import { gradientsSelector } from '../selectors/GradientsSelectors';
import { settingsSelector } from '../selectors/SettingsSelectors';

const GradientsContainer = props => <Gradients {...props} />;

const mapStateToProps = state => {
  return { ...gradientsSelector(state), ...settingsSelector(state) };
};

export default connect(mapStateToProps, {
  onGenerateGradient,
  prevGradient,
  nextGradient,
  generateGradientIfNeeded,
  copyGradientToClipboard,
  addNewColor,
  switchEditAngle,
  changeGradientDirection,
  togglePrefix,
  toggleFallback,
  toggleEditColorOfGradient,
  editColorOfGradient,
  toggleSlider
})(GradientsContainer);

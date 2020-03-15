import React from 'react';
import { connect } from 'react-redux';
import Colors from '../components/colors';
import { onGenerate, prevColor, nextColor, copyToClipboard } from '../actions';
import { colorsSelector } from '../selectors/ColorsSelectors';

const ColorsContainer = props => <Colors {...props} />;

const mapStateToProps = state => {
  return { ...colorsSelector(state) };
};

export default connect(mapStateToProps, {
  onGenerate,
  prevColor,
  nextColor,
  copyToClipboard
})(ColorsContainer);

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../components/colors';
import {
  onGenerateColor,
  prevColor,
  nextColor,
  copyColorToClipboard,
  generateColorIfNeeded
} from '../actions';
import { colorsSelector } from '../selectors/ColorsSelectors';

const ColorsContainer = () => {
  const colors = useSelector(colorsSelector);
  const dispatch = useDispatch();

  const OnGenerateColor = useCallback(() => dispatch(onGenerateColor()), [
    dispatch
  ]);
  const PrevColor = useCallback(() => dispatch(prevColor()), [dispatch]);
  const NextColor = useCallback(() => dispatch(nextColor()), [dispatch]);
  const CopyColorToClipboard = useCallback(
    () => dispatch(copyColorToClipboard()),
    [dispatch]
  );
  const GenerateColorIfNeeded = useCallback(
    () => dispatch(generateColorIfNeeded()),
    [dispatch]
  );

  return (
    <Colors
      {...colors}
      onGenerateColor={OnGenerateColor}
      prevColor={PrevColor}
      nextColor={NextColor}
      copyColorToClipboard={CopyColorToClipboard}
      generateColorIfNeeded={GenerateColorIfNeeded}
    />
  );
};

export default ColorsContainer;

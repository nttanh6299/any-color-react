import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  toggleSlider,
  startUpdateColorStop,
  updateColorStop,
  deleteSelectedColor
} from '../actions';
import Gradients from '../components/gradients';
import { gradientsSelector } from '../selectors/GradientsSelectors';
import { settingsSelector } from '../selectors/SettingsSelectors';

const GradientsContainer = () => {
  const gradients = useSelector(gradientsSelector);
  const settings = useSelector(settingsSelector);
  const dispatch = useDispatch();

  const OnGenerateGradient = useCallback(() => dispatch(onGenerateGradient()), [
    dispatch
  ]);
  const PrevGradient = useCallback(() => dispatch(prevGradient()), [dispatch]);
  const NextGradient = useCallback(() => dispatch(nextGradient()), [dispatch]);
  const GenerateGradientIfNeeded = useCallback(
    () => dispatch(generateGradientIfNeeded()),
    [dispatch]
  );
  const CopyGradientToClipboard = useCallback(
    () => dispatch(copyGradientToClipboard()),
    [dispatch]
  );
  const AddNewColor = useCallback(() => dispatch(addNewColor()), [dispatch]);
  const SwitchEditAngle = useCallback(() => dispatch(switchEditAngle()), [
    dispatch
  ]);
  const ChangeGradientDirection = useCallback(
    deg => dispatch(changeGradientDirection(deg)),
    [dispatch]
  );
  const TogglePrefix = useCallback(() => dispatch(togglePrefix()), [dispatch]);
  const ToggleFallback = useCallback(() => dispatch(toggleFallback()), [
    dispatch
  ]);
  const ToggleEditColorOfGradient = useCallback(
    colorIndex => dispatch(toggleEditColorOfGradient(colorIndex)),
    [dispatch]
  );
  const EditColorOfGradient = useCallback(
    (color, stop) => dispatch(editColorOfGradient(color, stop)),
    [dispatch]
  );
  const ToggleSlider = useCallback(() => dispatch(toggleSlider()), [dispatch]);
  const StartUpdateColorStop = useCallback(
    colorIndex => dispatch(startUpdateColorStop(colorIndex)),
    [dispatch]
  );
  const UpdateColorStop = useCallback(
    percent => dispatch(updateColorStop(percent)),
    [dispatch]
  );
  const DeleteSelectedColor = useCallback(
    () => dispatch(deleteSelectedColor()),
    [dispatch]
  );

  return (
    <Gradients
      {...gradients}
      {...settings}
      onGenerateGradient={OnGenerateGradient}
      prevGradient={PrevGradient}
      nextGradient={NextGradient}
      generateGradientIfNeeded={GenerateGradientIfNeeded}
      copyGradientToClipboard={CopyGradientToClipboard}
      addNewColor={AddNewColor}
      switchEditAngle={SwitchEditAngle}
      changeGradientDirection={ChangeGradientDirection}
      togglePrefix={TogglePrefix}
      toggleFallback={ToggleFallback}
      toggleEditColorOfGradient={ToggleEditColorOfGradient}
      editColorOfGradient={EditColorOfGradient}
      toggleSlider={ToggleSlider}
      startUpdateColorStop={StartUpdateColorStop}
      updateColorStop={UpdateColorStop}
      deleteSelectedColor={DeleteSelectedColor}
    />
  );
};

export default GradientsContainer;

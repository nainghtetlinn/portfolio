import { MotionValue, useTransform } from "motion/react";

export const useRolling = (progress: MotionValue<number>, delay = 0) => {
  const input = [0, 1 - delay];
  const outputScale = [0.7, 1];
  const outputY = [40, 0];
  const outputOpacity = [0.2, 1];

  return {
    scale: useTransform(progress, input, outputScale),
    y: useTransform(progress, input, outputY),
    opacity: useTransform(progress, input, outputOpacity),
  };
};

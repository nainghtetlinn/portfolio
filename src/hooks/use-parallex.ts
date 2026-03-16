import { MotionValue, useTransform } from "motion/react";

export const useParallex = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [0, distance]);
};

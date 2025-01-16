import { useState } from "react";

export const useSteps = (steps: number) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const nextStep = () => {
    setCurrentStepIdx((prev) => {
      if (prev === steps - 1) return prev;
      return prev + 1;
    });
  };
  const prevStep = () => {
    setCurrentStepIdx((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return { currentStepIdx, nextStep, prevStep };
};

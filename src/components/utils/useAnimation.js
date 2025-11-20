import { useState, useEffect } from 'react';


export const useAnimation = (initialState = false) => {
  const [isAnimating, setIsAnimating] = useState(initialState);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setHasAnimated(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setHasAnimated(false);
  };

  return {
    isAnimating,
    hasAnimated,
    startAnimation,
    stopAnimation,
    resetAnimation
  };
};

// Hook for sequenced animations
export const useSequenceAnimation = (steps, interval = 500) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, interval);

      return () => clearTimeout(timer);
    }
  }, [currentStep, steps, interval]);

  const resetSequence = () => {
    setCurrentStep(0);
  };

  return {
    currentStep,
    resetSequence,
    isComplete: currentStep >= steps
  };
};


export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  };

  return {
    isHovered,
    hoverProps
  };
};


export const useClickAnimation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return {
    isClicked,
    handleClick
  };
};

export const useLoadingAnimation = (duration = 2000) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), duration);
  };

  return {
    isLoading,
    startLoading
  };
};
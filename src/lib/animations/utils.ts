/**
 * Animation Utilities
 * Professional utility functions for animation management
 */

import { AnimationPreset, AnimationConfig } from './types';
import { getAnimationPreset } from './presets';

/**
 * Get animation styles based on current state
 */
export const getAnimationStyles = (
  preset: AnimationPreset,
  animationPhase: 'enter' | 'enterActive' | 'exit' | 'exitActive',
  duration?: number,
  delay?: number
): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    transition: duration ? preset.transition.replace(/\d+\.?\d*s/, `${duration}ms`) : preset.transition,
    transitionDelay: delay ? `${delay}ms` : '0ms'
  };

  switch (animationPhase) {
    case 'enter':
      return { ...baseStyles, ...preset.enter };
    case 'enterActive':
      return { ...baseStyles, ...preset.enterActive };
    case 'exit':
      return { ...baseStyles, ...preset.exit };
    case 'exitActive':
      return { ...baseStyles, ...preset.exitActive };
    default:
      return baseStyles;
  }
};

/**
 * Validate animation configuration
 */
export const validateAnimationConfig = (config: Partial<AnimationConfig>): AnimationConfig => {
  const preset = getAnimationPreset(config.type || 'fade');
  
  return {
    type: config.type || 'fade',
    duration: config.duration ?? preset.duration,
    delay: config.delay ?? 0,
    isVisible: config.isVisible ?? true,
    onEnter: config.onEnter,
    onEntered: config.onEntered,
    onExit: config.onExit,
    onExited: config.onExited
  };
};

/**
 * Create animation class names
 */
export const createAnimationClasses = (
  baseClass: string = '',
  animationType: string,
  isVisible: boolean,
  isAnimating: boolean
): string => {
  const classes = [
    'page-animation',
    `page-animation--${animationType}`,
    isVisible ? 'page-animation--visible' : 'page-animation--hidden',
    isAnimating ? 'page-animation--animating' : 'page-animation--static'
  ];

  if (baseClass) {
    classes.unshift(baseClass);
  }

  return classes.filter(Boolean).join(' ');
};

/**
 * Debounce animation state changes
 */
export const debounceAnimation = (
  callback: () => void,
  delay: number = 100
): (() => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

/**
 * Throttle animation updates
 */
export const throttleAnimation = (
  callback: () => void,
  limit: number = 16 // ~60fps
): (() => void) => {
  let inThrottle: boolean;
  
  return () => {
    if (!inThrottle) {
      callback();
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Animation Hooks
 * Professional React hooks for animation management
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { UseAnimationReturn, AnimationState } from './types';

/**
 * Custom hook for managing page animations
 */
export const usePageAnimation = (initialVisible: boolean = true): UseAnimationReturn => {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<AnimationState['animationPhase']>('enterActive');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback(() => {
    setIsVisible(true);
    setIsAnimating(true);
    setAnimationPhase('enter');
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Start enter animation
    timeoutRef.current = setTimeout(() => {
      setAnimationPhase('enterActive');
      setIsAnimating(false);
    }, 50);
  }, []);

  const hide = useCallback(() => {
    setIsAnimating(true);
    setAnimationPhase('exit');
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Start exit animation
    timeoutRef.current = setTimeout(() => {
      setAnimationPhase('exitActive');
      setIsVisible(false);
      setIsAnimating(false);
    }, 50);
  }, []);

  const toggle = useCallback(() => {
    if (isVisible) {
      hide();
    } else {
      show();
    }
  }, [isVisible, show, hide]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isVisible,
    isAnimating,
    show,
    hide,
    toggle,
    animationState: {
      isVisible,
      isAnimating,
      animationPhase
    }
  };
};

/**
 * Hook for animation timing control
 */
export const useAnimationTiming = (duration: number, delay: number = 0) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setIsReady(true), delay);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [delay]);

  return { isReady, duration };
};

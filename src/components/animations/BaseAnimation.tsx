"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getAnimationPreset } from '@/lib/animations/presets';
import { getAnimationStyles, validateAnimationConfig } from '@/lib/animations/utils';
import { AnimationConfig, AnimationState } from '@/lib/animations/types';

/**
 * Base Animation Component
 * Professional, reusable animation component with proper state management
 */

interface BaseAnimationProps extends Partial<AnimationConfig> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

export const BaseAnimation: React.FC<BaseAnimationProps> = ({
  children,
  type = 'fade',
  duration,
  delay = 0,
  isVisible = true,
  onEnter,
  onEntered,
  onExit,
  onExited,
  className = '',
  style = {},
  'data-testid': testId,
  ...props
}) => {
  const [animationState, setAnimationState] = useState<AnimationState['animationPhase']>('enter');
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isVisible);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  
  // Get animation preset
  const preset = getAnimationPreset(type);
  const animationDuration = duration ?? preset.duration;
  
  // Validate configuration
  const config = validateAnimationConfig({
    type,
    duration: animationDuration,
    delay,
    isVisible,
    onEnter,
    onEntered,
    onExit,
    onExited
  });

  // Handle animation state changes
  const handleAnimationChange = useCallback((newIsVisible: boolean) => {
    if (newIsVisible) {
      // Enter animation
      setShouldRender(true);
      setIsAnimating(true);
      setAnimationState('enter');
      
      onEnter?.();
      
      // Start enter animation after delay
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setAnimationState('enterActive');
        
        // Call onEntered after animation completes
        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          onEntered?.();
        }, animationDuration);
      }, delay);
    } else {
      // Exit animation
      setIsAnimating(true);
      setAnimationState('exit');
      
      onExit?.();
      
      // Start exit animation
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setAnimationState('exitActive');
        
        // Call onExited after animation completes
        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          setShouldRender(false);
          onExited?.();
        }, animationDuration);
      }, 0);
    }
  }, [isVisible, animationDuration, delay, onEnter, onEntered, onExit, onExited]);

  // Effect to handle visibility changes
  useEffect(() => {
    handleAnimationChange(isVisible);
  }, [isVisible, handleAnimationChange]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Get current animation styles
  const getCurrentStyles = (): React.CSSProperties => {
    const animationStyles = getAnimationStyles(preset, animationState, animationDuration, delay);
    
    return {
      ...animationStyles,
      ...style
    };
  };

  // Don't render if not visible and animation is complete
  if (!shouldRender && !isAnimating && animationState === 'exitActive') {
    return null;
  }

  return (
    <div
      ref={animationRef}
      className={`base-animation base-animation--${type} ${className}`}
      style={getCurrentStyles()}
      data-testid={testId}
      data-animation-state={animationState}
      data-is-visible={isVisible}
      data-is-animating={isAnimating}
      {...props}
    >
      {children}
    </div>
  );
};

export default BaseAnimation;

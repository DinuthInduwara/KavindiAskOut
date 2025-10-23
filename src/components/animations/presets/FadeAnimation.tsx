"use client";
import React from 'react';
import BaseAnimation from '../BaseAnimation';

/**
 * Fade Animation Component
 * Simple opacity transition
 */

interface FadeAnimationProps {
  children: React.ReactNode;
  isVisible?: boolean;
  duration?: number;
  delay?: number;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeAnimation: React.FC<FadeAnimationProps> = ({
  children,
  isVisible = true,
  duration = 1500,
  delay = 0,
  onEnter,
  onEntered,
  onExit,
  onExited,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <BaseAnimation
      type="fade"
      isVisible={isVisible}
      duration={duration}
      delay={delay}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      className={`fade-animation ${className}`}
      style={style}
      {...props}
    >
      {children}
    </BaseAnimation>
  );
};

export default FadeAnimation;

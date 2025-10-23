"use client";
import React from 'react';
import BaseAnimation from '../BaseAnimation';

/**
 * Slide Up Animation Component
 * Slides in from bottom
 */

interface SlideUpAnimationProps {
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

export const SlideUpAnimation: React.FC<SlideUpAnimationProps> = ({
  children,
  isVisible = true,
  duration = 600,
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
      type="slideUp"
      isVisible={isVisible}
      duration={duration}
      delay={delay}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      className={`slide-up-animation ${className}`}
      style={style}
      {...props}
    >
      {children}
    </BaseAnimation>
  );
};

export default SlideUpAnimation;

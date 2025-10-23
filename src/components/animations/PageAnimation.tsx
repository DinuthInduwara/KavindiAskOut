"use client";
import React from 'react';
import BaseAnimation from './BaseAnimation';
import { AnimationConfig } from '@/lib/animations/types';

/**
 * Page Animation Component
 * Simplified wrapper for easy page animations
 */

interface PageAnimationProps extends Partial<AnimationConfig> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PageAnimation: React.FC<PageAnimationProps> = ({
  children,
  type = 'fade',
  isVisible = true,
  duration,
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
      type={type}
      isVisible={isVisible}
      duration={duration}
      delay={delay}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      className={`page-animation ${className}`}
      style={style}
      {...props}
    >
      {children}
    </BaseAnimation>
  );
};

export default PageAnimation;

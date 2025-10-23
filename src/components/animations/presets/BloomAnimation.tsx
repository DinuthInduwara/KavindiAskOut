"use client";
import React from 'react';
import BaseAnimation from '../BaseAnimation';

/**
 * Bloom Animation Component
 * RESTORED ORIGINAL BLOOM EFFECT - Magical bloom with rotation and blur
 */

interface BloomAnimationProps {
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

export const BloomAnimation: React.FC<BloomAnimationProps> = ({
  children,
  isVisible = true,
  duration = 1500, // Original bloom duration
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
      type="bloom"
      isVisible={isVisible}
      duration={duration}
      delay={delay}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      className={`bloom-animation ${className}`}
      style={style}
      {...props}
    >
      {children}
    </BaseAnimation>
  );
};

export default BloomAnimation;

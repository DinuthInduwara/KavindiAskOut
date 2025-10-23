"use client";
import React from "react";
import UniversalPageTransition from "./UniversalPageTransition";
import { getAnimationPreset } from "@/config/animations";

/**
 * Simplified Page Animation Component
 * 
 * This is a simplified wrapper around UniversalPageTransition
 * for easier implementation in pages.
 * 
 * Usage:
 * <PageAnimation type="fade" isVisible={true}>
 *   <YourContent />
 * </PageAnimation>
 */

const PageAnimation = ({
  children,
  type = "fade",
  isVisible = true,
  duration,
  delay = 0,
  onEnter,
  onEntered,
  onExit,
  onExited,
  className = "",
  style = {},
  ...props
}) => {
  // Get animation preset for default duration
  const preset = getAnimationPreset(type);
  const animationDuration = duration !== undefined ? duration : preset.duration;

  return (
    <UniversalPageTransition
      animation={type}
      isVisible={isVisible}
      duration={animationDuration}
      delay={delay}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </UniversalPageTransition>
  );
};

// Export commonly used animation components
export const FadeAnimation = (props) => (
  <PageAnimation type="fade" {...props} />
);

export const SlideUpAnimation = (props) => (
  <PageAnimation type="slideUp" {...props} />
);

export const SlideDownAnimation = (props) => (
  <PageAnimation type="slideDown" {...props} />
);

export const SlideLeftAnimation = (props) => (
  <PageAnimation type="slideLeft" {...props} />
);

export const SlideRightAnimation = (props) => (
  <PageAnimation type="slideRight" {...props} />
);

export const ScaleAnimation = (props) => (
  <PageAnimation type="scale" {...props} />
);

export const BloomAnimation = (props) => (
  <PageAnimation type="bloom" {...props} />
);

export const BlurAnimation = (props) => (
  <PageAnimation type="blur" {...props} />
);

export const RotateAnimation = (props) => (
  <PageAnimation type="rotate" {...props} />
);

export const BounceAnimation = (props) => (
  <PageAnimation type="bounce" {...props} />
);

export const ElasticAnimation = (props) => (
  <PageAnimation type="elastic" {...props} />
);

export const ZoomInAnimation = (props) => (
  <PageAnimation type="zoomIn" {...props} />
);

export const ZoomOutAnimation = (props) => (
  <PageAnimation type="zoomOut" {...props} />
);

export const FlipXAnimation = (props) => (
  <PageAnimation type="flipX" {...props} />
);

export const FlipYAnimation = (props) => (
  <PageAnimation type="flipY" {...props} />
);

export default PageAnimation;

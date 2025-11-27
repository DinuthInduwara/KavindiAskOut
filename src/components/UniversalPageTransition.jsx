"use client";
import React, { useState, useEffect, useRef } from "react";

/**
 * Universal Page Transition Component
 * 
 * Features:
 * - Multiple animation presets (fade, slide, scale, etc.)
 * - Easy implementation for any page
 * - Proper enter/exit animations
 * - Customizable timing and easing
 * - Support for different directions
 * - Automatic cleanup and state management
 */

const ANIMATION_PRESETS = {
  // Basic animations
  fade: {
    enter: { opacity: 0 },
    enterActive: { opacity: 1 },
    exit: { opacity: 1 },
    exitActive: { opacity: 0 },
    transition: "opacity 0.5s ease-in-out"
  },
  
  slideUp: {
    enter: { opacity: 0, transform: "translateY(50px)" },
    enterActive: { opacity: 1, transform: "translateY(0)" },
    exit: { opacity: 1, transform: "translateY(0)" },
    exitActive: { opacity: 0, transform: "translateY(-50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  
  slideDown: {
    enter: { opacity: 0, transform: "translateY(-50px)" },
    enterActive: { opacity: 1, transform: "translateY(0)" },
    exit: { opacity: 1, transform: "translateY(0)" },
    exitActive: { opacity: 0, transform: "translateY(50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  
  slideLeft: {
    enter: { opacity: 0, transform: "translateX(50px)" },
    enterActive: { opacity: 1, transform: "translateX(0)" },
    exit: { opacity: 1, transform: "translateX(0)" },
    exitActive: { opacity: 0, transform: "translateX(-50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  
  slideRight: {
    enter: { opacity: 0, transform: "translateX(-50px)" },
    enterActive: { opacity: 1, transform: "translateX(0)" },
    exit: { opacity: 1, transform: "translateX(0)" },
    exitActive: { opacity: 0, transform: "translateX(50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  
  // Scale animations
  scale: {
    enter: { opacity: 0, transform: "scale(0.8)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(1.2)" },
    transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  
  scaleUp: {
    enter: { opacity: 0, transform: "scale(0.5)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(1.5)" },
    transition: "all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  
  // Rotation animations
  rotate: {
    enter: { opacity: 0, transform: "rotate(-180deg) scale(0.8)" },
    enterActive: { opacity: 1, transform: "rotate(0deg) scale(1)" },
    exit: { opacity: 1, transform: "rotate(0deg) scale(1)" },
    exitActive: { opacity: 0, transform: "rotate(180deg) scale(0.8)" },
    transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  
  // Blur animations
  blur: {
    enter: { opacity: 0, filter: "blur(10px)" },
    enterActive: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 1, filter: "blur(0px)" },
    exitActive: { opacity: 0, filter: "blur(10px)" },
    transition: "all 0.6s ease-out"
  },
  
  // Flip animations
  flipX: {
    enter: { opacity: 0, transform: "rotateX(-90deg)" },
    enterActive: { opacity: 1, transform: "rotateX(0deg)" },
    exit: { opacity: 1, transform: "rotateX(0deg)" },
    exitActive: { opacity: 0, transform: "rotateX(90deg)" },
    transition: "all 0.6s ease-in-out"
  },
  
  flipY: {
    enter: { opacity: 0, transform: "rotateY(-90deg)" },
    enterActive: { opacity: 1, transform: "rotateY(0deg)" },
    exit: { opacity: 1, transform: "rotateY(0deg)" },
    exitActive: { opacity: 0, transform: "rotateY(90deg)" },
    transition: "all 0.6s ease-in-out"
  },
  
  // Bounce animations
  bounce: {
    enter: { opacity: 0, transform: "scale(0.3)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(0.3)" },
    transition: "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  
  // Elastic animations
  elastic: {
    enter: { opacity: 0, transform: "scale(0.5) translateY(-100px)" },
    enterActive: { opacity: 1, transform: "scale(1) translateY(0)" },
    exit: { opacity: 1, transform: "scale(1) translateY(0)" },
    exitActive: { opacity: 0, transform: "scale(0.5) translateY(100px)" },
    transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  
  // Zoom animations
  zoomIn: {
    enter: { opacity: 0, transform: "scale(0.1)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(0.1)" },
    transition: "all 0.5s ease-out"
  },
  
  zoomOut: {
    enter: { opacity: 0, transform: "scale(1.5)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(1.5)" },
    transition: "all 0.5s ease-out"
  },
  
  // Special effects
  bloom: {
    enter: { opacity: 0, transform: "scale(0.8) rotate(0deg)", filter: "blur(10px)" },
    enterActive: { opacity: 1, transform: "scale(1) rotate(0deg)", filter: "blur(0px)" },
    exit: { opacity: 1, transform: "scale(1) rotate(0deg)", filter: "blur(0px)" },
    exitActive: { opacity: 0, transform: "scale(1.2) rotate(360deg)", filter: "blur(10px)" },
    transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  
  // No animation
  none: {
    enter: { opacity: 1 },
    enterActive: { opacity: 1 },
    exit: { opacity: 1 },
    exitActive: { opacity: 1 },
    transition: "none"
  }
};

const UniversalPageTransition = ({
  children,
  animation = "fade",
  duration = 500,
  delay = 0,
  isVisible = true,
  onEnter,
  onEntered,
  onExit,
  onExited,
  className = "",
  style = {},
  ...props
}) => {
  const [animationState, setAnimationState] = useState("enter");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const animationRef = useRef(null);

  // Get animation preset
  const preset = ANIMATION_PRESETS[animation] || ANIMATION_PRESETS.fade;
  
  // Custom duration and delay
  const customTransition = duration ? preset.transition.replace(/\d+\.?\d*s/, `${duration}ms`) : preset.transition;
  const customDelay = delay ? `${delay}ms` : "0ms";

  useEffect(() => {
    if (isVisible) {
      // Enter animation
      setAnimationState("enter");
      setIsAnimating(true);
      
      if (onEnter) onEnter();
      
      // Start enter animation after delay
      timeoutRef.current = setTimeout(() => {
        setAnimationState("enterActive");
        
        // Call onEntered after animation completes
        const animationDuration = duration || 500;
        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          if (onEntered) onEntered();
        }, animationDuration);
      }, delay);
    } else {
      // Exit animation
      setAnimationState("exit");
      setIsAnimating(true);
      
      if (onExit) onExit();
      
      // Start exit animation
      timeoutRef.current = setTimeout(() => {
        setAnimationState("exitActive");
        
        // Call onExited after animation completes
        const animationDuration = duration || 500;
        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          if (onExited) onExited();
        }, animationDuration);
      }, 0);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, duration, delay, onEnter, onEntered, onExit, onExited]);

  // Get current animation styles
  const getAnimationStyles = () => {
    const baseStyles = {
      transition: customTransition,
      transitionDelay: customDelay,
      ...style
    };

    switch (animationState) {
      case "enter":
        return { ...baseStyles, ...preset.enter };
      case "enterActive":
        return { ...baseStyles, ...preset.enterActive };
      case "exit":
        return { ...baseStyles, ...preset.exit };
      case "exitActive":
        return { ...baseStyles, ...preset.exitActive };
      default:
        return baseStyles;
    }
  };

  // Don't render if not visible and animation is complete
  if (!isVisible && !isAnimating && animationState === "exitActive") {
    return null;
  }

  return (
    <div
      ref={animationRef}
      className={`universal-page-transition ${className}`}
      style={getAnimationStyles()}
      {...props}
    >
      {children}
    </div>
  );
};

// Hook for easy animation control
export const usePageAnimation = (initialVisible = true) => {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [isAnimating, setIsAnimating] = useState(false);

  const show = () => {
    setIsVisible(true);
    setIsAnimating(true);
  };

  const hide = () => {
    setIsVisible(false);
    setIsAnimating(true);
  };

  const toggle = () => {
    if (isVisible) {
      hide();
    } else {
      show();
    }
  };

  return {
    isVisible,
    isAnimating,
    show,
    hide,
    toggle
  };
};

// Preset components for common use cases
export const FadeTransition = (props) => (
  <UniversalPageTransition animation="fade" {...props} />
);

export const SlideUpTransition = (props) => (
  <UniversalPageTransition animation="slideUp" {...props} />
);

export const SlideDownTransition = (props) => (
  <UniversalPageTransition animation="slideDown" {...props} />
);

export const ScaleTransition = (props) => (
  <UniversalPageTransition animation="scale" {...props} />
);

export const BloomTransition = (props) => (
  <UniversalPageTransition animation="bloom" {...props} />
);

export default UniversalPageTransition;

/**
 * Animation Presets
 * Professional animation configurations with proper bloom effect
 */

import { AnimationPreset } from './types';

export const ANIMATION_PRESETS: Record<string, AnimationPreset> = {
  fade: {
    name: "Fade",
    description: "Simple opacity transition",
    enter: { opacity: 0 },
    enterActive: { opacity: 1 },
    exit: { opacity: 1 },
    exitActive: { opacity: 0 },
    transition: "opacity 0.5s ease-in-out",
    duration: 500
  },
  
  slideUp: {
    name: "Slide Up",
    description: "Slide in from bottom",
    enter: { opacity: 0, transform: "translateY(50px)" },
    enterActive: { opacity: 1, transform: "translateY(0)" },
    exit: { opacity: 1, transform: "translateY(0)" },
    exitActive: { opacity: 0, transform: "translateY(-50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    duration: 600
  },
  
  slideDown: {
    name: "Slide Down",
    description: "Slide in from top",
    enter: { opacity: 0, transform: "translateY(-50px)" },
    enterActive: { opacity: 1, transform: "translateY(0)" },
    exit: { opacity: 1, transform: "translateY(0)" },
    exitActive: { opacity: 0, transform: "translateY(50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    duration: 600
  },
  
  slideLeft: {
    name: "Slide Left",
    description: "Slide in from right",
    enter: { opacity: 0, transform: "translateX(50px)" },
    enterActive: { opacity: 1, transform: "translateX(0)" },
    exit: { opacity: 1, transform: "translateX(0)" },
    exitActive: { opacity: 0, transform: "translateX(-50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    duration: 600
  },
  
  slideRight: {
    name: "Slide Right",
    description: "Slide in from left",
    enter: { opacity: 0, transform: "translateX(-50px)" },
    enterActive: { opacity: 1, transform: "translateX(0)" },
    exit: { opacity: 1, transform: "translateX(0)" },
    exitActive: { opacity: 0, transform: "translateX(50px)" },
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    duration: 600
  },
  
  scale: {
    name: "Scale",
    description: "Scale in/out with bounce",
    enter: { opacity: 0, transform: "scale(0.8)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(1.2)" },
    transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 500
  },
  
  scaleUp: {
    name: "Scale Up",
    description: "Dramatic scale in from small",
    enter: { opacity: 0, transform: "scale(0.5)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(1.5)" },
    transition: "all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 700
  },
  
  rotate: {
    name: "Rotate",
    description: "Rotate in with scale",
    enter: { opacity: 0, transform: "rotate(-180deg) scale(0.8)" },
    enterActive: { opacity: 1, transform: "rotate(0deg) scale(1)" },
    exit: { opacity: 1, transform: "rotate(0deg) scale(1)" },
    exitActive: { opacity: 0, transform: "rotate(180deg) scale(0.8)" },
    transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 800
  },
  
  blur: {
    name: "Blur",
    description: "Blur in/out effect",
    enter: { opacity: 0, filter: "blur(10px)" },
    enterActive: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 1, filter: "blur(0px)" },
    exitActive: { opacity: 0, filter: "blur(10px)" },
    transition: "all 0.6s ease-out",
    duration: 600
  },
  
  flipX: {
    name: "Flip X",
    description: "Flip around X axis",
    enter: { opacity: 0, transform: "rotateX(-90deg)" },
    enterActive: { opacity: 1, transform: "rotateX(0deg)" },
    exit: { opacity: 1, transform: "rotateX(0deg)" },
    exitActive: { opacity: 0, transform: "rotateX(90deg)" },
    transition: "all 0.6s ease-in-out",
    duration: 600
  },
  
  flipY: {
    name: "Flip Y",
    description: "Flip around Y axis",
    enter: { opacity: 0, transform: "rotateY(-90deg)" },
    enterActive: { opacity: 1, transform: "rotateY(0deg)" },
    exit: { opacity: 1, transform: "rotateY(0deg)" },
    exitActive: { opacity: 0, transform: "rotateY(90deg)" },
    transition: "all 0.6s ease-in-out",
    duration: 600
  },
  
  bounce: {
    name: "Bounce",
    description: "Bouncy scale effect",
    enter: { opacity: 0, transform: "scale(0.3)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(0.3)" },
    transition: "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 600
  },
  
  elastic: {
    name: "Elastic",
    description: "Elastic scale with translation",
    enter: { opacity: 0, transform: "scale(0.5) translateY(-100px)" },
    enterActive: { opacity: 1, transform: "scale(1) translateY(0)" },
    exit: { opacity: 1, transform: "scale(1) translateY(0)" },
    exitActive: { opacity: 0, transform: "scale(0.5) translateY(100px)" },
    transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 800
  },
  
  zoomIn: {
    name: "Zoom In",
    description: "Zoom in from very small",
    enter: { opacity: 0, transform: "scale(0.1)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(0.1)" },
    transition: "all 0.5s ease-out",
    duration: 500
  },
  
  zoomOut: {
    name: "Zoom Out",
    description: "Zoom in from large",
    enter: { opacity: 0, transform: "scale(1.5)" },
    enterActive: { opacity: 1, transform: "scale(1)" },
    exit: { opacity: 1, transform: "scale(1)" },
    exitActive: { opacity: 0, transform: "scale(1.5)" },
    transition: "all 0.5s ease-out",
    duration: 500
  },
  
  // BLOOM ANIMATION - EXACT STYLE AS REQUESTED
  bloom: {
    name: "Bloom",
    description: "Magical bloom effect with scale and blur",
    enter: { 
      opacity: 0, 
      transform: "scale(0.8)", 
      filter: "blur(10px)" 
    },
    enterActive: { 
      opacity: 1, 
      transform: "scale(1)", 
      filter: "blur(0px)" 
    },
    exit: { 
      opacity: 1, 
      transform: "scale(1)", 
      filter: "blur(0px)" 
    },
    exitActive: { 
      opacity: 0, 
      transform: "scale(0.8)", 
      filter: "blur(10px)" 
    },
    transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
    duration: 1500
  },
  
  none: {
    name: "None",
    description: "No animation",
    enter: { opacity: 1 },
    enterActive: { opacity: 1 },
    exit: { opacity: 1 },
    exitActive: { opacity: 1 },
    transition: "none",
    duration: 0
  }
};

export const getAnimationPreset = (type: string): AnimationPreset => {
  return ANIMATION_PRESETS[type] || ANIMATION_PRESETS.fade;
};

export const getAllAnimationTypes = (): string[] => {
  return Object.keys(ANIMATION_PRESETS);
};

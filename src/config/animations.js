/**
 * Animation Configuration
 * 
 * This file contains all animation presets, timing constants,
 * and configuration options for the universal page transition system.
 */

export const ANIMATION_PRESETS = {
  // Basic animations
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
  
  // Scale animations
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
  
  // Rotation animations
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
  
  // Blur animations
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
  
  // Flip animations
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
  
  // Bounce animations
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
  
  // Elastic animations
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
  
  // Zoom animations
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
  
  // Special effects
  bloom: {
    name: "Bloom",
    description: "Magical bloom effect with rotation and blur",
    enter: { opacity: 0, transform: "scale(0.8) rotate(0deg)", filter: "blur(10px)" },
    enterActive: { opacity: 1, transform: "scale(1) rotate(0deg)", filter: "blur(0px)" },
    exit: { opacity: 1, transform: "scale(1) rotate(0deg)", filter: "blur(0px)" },
    exitActive: { opacity: 0, transform: "scale(1.2) rotate(360deg)", filter: "blur(10px)" },
    transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
    duration: 1500
  },
  
  // No animation
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

// Animation categories for organization
export const ANIMATION_CATEGORIES = {
  basic: ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"],
  scale: ["scale", "scaleUp", "zoomIn", "zoomOut"],
  rotation: ["rotate", "flipX", "flipY"],
  effects: ["blur", "bounce", "elastic", "bloom"],
  none: ["none"]
};

// Default animation settings
export const DEFAULT_ANIMATION_SETTINGS = {
  animation: "fade",
  duration: 500,
  delay: 0,
  isVisible: true
};

// Animation timing presets
export const TIMING_PRESETS = {
  fast: 300,
  normal: 500,
  slow: 800,
  verySlow: 1200
};

// Easing functions
export const EASING_FUNCTIONS = {
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  linear: "linear",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
};

// Helper functions
export const getAnimationPreset = (name) => {
  return ANIMATION_PRESETS[name] || ANIMATION_PRESETS.fade;
};

export const getAnimationsByCategory = (category) => {
  return ANIMATION_CATEGORIES[category] || [];
};

export const getAllAnimations = () => {
  return Object.keys(ANIMATION_PRESETS);
};

export const getAnimationInfo = (name) => {
  const preset = getAnimationPreset(name);
  return {
    name: preset.name,
    description: preset.description,
    duration: preset.duration,
    category: Object.keys(ANIMATION_CATEGORIES).find(cat => 
      ANIMATION_CATEGORIES[cat].includes(name)
    )
  };
};

/**
 * Animation Types and Interfaces
 * Professional TypeScript definitions for the animation system
 */

export interface AnimationPreset {
  name: string;
  description: string;
  enter: React.CSSProperties;
  enterActive: React.CSSProperties;
  exit: React.CSSProperties;
  exitActive: React.CSSProperties;
  transition: string;
  duration: number;
}

export interface AnimationConfig {
  type: string;
  duration?: number;
  delay?: number;
  isVisible: boolean;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
}

export interface AnimationState {
  isVisible: boolean;
  isAnimating: boolean;
  animationPhase: 'enter' | 'enterActive' | 'exit' | 'exitActive';
}

export type AnimationType = 
  | 'fade'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'scaleUp'
  | 'rotate'
  | 'blur'
  | 'flipX'
  | 'flipY'
  | 'bounce'
  | 'elastic'
  | 'zoomIn'
  | 'zoomOut'
  | 'bloom'
  | 'none';

export interface UseAnimationReturn {
  isVisible: boolean;
  isAnimating: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
  animationState: AnimationState;
}

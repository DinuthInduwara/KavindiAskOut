/**
 * Animation Components Index
 * Professional exports for all animation components
 */

// Core components
export { default as BaseAnimation } from './BaseAnimation';
export { default as PageAnimation } from './PageAnimation';

// Preset animations
export { default as FadeAnimation } from './presets/FadeAnimation';
export { default as SlideUpAnimation } from './presets/SlideUpAnimation';
export { default as BloomAnimation } from './presets/BloomAnimation';

// Re-export types and hooks
export { usePageAnimation } from '@/lib/animations/hooks';
export { getAnimationPreset, getAllAnimationTypes } from '@/lib/animations/presets';
export type { AnimationConfig, AnimationState, UseAnimationReturn } from '@/lib/animations/types';

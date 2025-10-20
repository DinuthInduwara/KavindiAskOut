/**
 * Animation randomizer utilities
 * Provides consistent random value generation for animations
 */

export const randomizers = {
  position: (max: number = 100) => Math.random() * max,
  
  fontSize: (min: number, max: number) => min + Math.random() * (max - min),
  
  duration: (min: number, max: number) => min + Math.random() * (max - min),
  
  delay: (max: number) => Math.random() * max,
  
  arrayItem: <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)],
  
  opacity: (min: number = 0.5, max: number = 1) => min + Math.random() * (max - min),
};

export const generateAnimationStyles = (
  animation: string,
  durationRange: [number, number],
  delayRange: [number, number] = [0, 0]
) => ({
  animation: `${animation} ${randomizers.duration(...durationRange)}s linear infinite ${randomizers.delay(delayRange[1])}s`,
});

export const generatePositionStyles = () => ({
  left: `${randomizers.position()}%`,
  top: `${randomizers.position()}%`,
});

"use client";

import React from 'react';
import { EffectConfig, EffectElement } from '@/config/effects';
import { randomizers, generatePositionStyles } from '@/lib/animation/randomizers';

interface AnimatedOverlayProps {
  config: EffectConfig;
  zIndex?: number;
}

const AnimatedElement: React.FC<{
  element: EffectElement;
  index: number;
}> = ({ element, index }) => {
  const emoji = randomizers.arrayItem(Array.from(element.emojis));
  
  const basePosition = generatePositionStyles();
  const fontSize = element.fontSizeRange 
    ? randomizers.fontSize(...element.fontSizeRange)
    : 16;
  
  const duration = randomizers.duration(...element.durationRange);
  const delay = element.delayRange 
    ? randomizers.delay(element.delayRange[1])
    : 0;
  
  const styles: React.CSSProperties = {
    position: 'absolute',
    ...basePosition,
    fontSize: `${fontSize}px`,
    opacity: element.opacity ?? 1,
    animation: `${element.animation} ${duration}s linear infinite ${delay}s`,
    zIndex: element.zIndex,
    ...element.customStyles,
  };

  return (
    <div
      key={`${element.animation}-${index}`}
      style={styles}
      className={element.className}
    >
      {emoji}
    </div>
  );
};

export const AnimatedOverlay: React.FC<AnimatedOverlayProps> = ({ 
  config, 
  zIndex = 2 
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex,
      }}
    >
      {config.elements.map((element, groupIndex) => (
        <React.Fragment key={`group-${groupIndex}`}>
          {Array.from({ length: element.count }).map((_, index) => (
            <AnimatedElement
              key={`${groupIndex}-${index}`}
              element={element}
              index={index}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

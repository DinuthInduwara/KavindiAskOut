/**
 * Decorative effects configuration
 * Defines all animated overlay effects used throughout the app
 */

import React from 'react';
import {
  GARDEN_EMOJIS,
  WINTER_EMOJIS,
  WINTER_CRYSTALS,
  WINTER_ANIMALS,
  NIGHT_FLOWERS,
  CLOUDS,
  BUTTERFLIES,
  PETALS,
  SNOWFLAKES,
  LOVE_LETTERS,
} from '@/constants/emojis';
import { ANIMATION_COUNTS, ANIMATION_DURATIONS } from '@/constants/animations';

export interface EffectElement {
  emojis: readonly string[];
  count: number;
  animation: string;
  durationRange: readonly [number, number];
  delayRange?: readonly [number, number];
  fontSizeRange?: readonly [number, number];
  className?: string;
  zIndex?: number;
  opacity?: number;
  customStyles?: React.CSSProperties;
}

export interface EffectConfig {
  name: string;
  elements: EffectElement[];
  background?: string;
}

export const GARDEN_EFFECT: EffectConfig = {
  name: 'garden',
  elements: [
    {
      emojis: CLOUDS,
      count: ANIMATION_COUNTS.CLOUDS,
      animation: 'cloudMove',
      durationRange: ANIMATION_DURATIONS.CLOUD_MOVE,
      fontSizeRange: [40, 70],
      opacity: 0.7,
      customStyles: { left: '-20%' },
    },
    {
      emojis: BUTTERFLIES,
      count: ANIMATION_COUNTS.BUTTERFLIES,
      animation: 'butterflyTrail',
      durationRange: ANIMATION_DURATIONS.BUTTERFLY_TRAIL,
      fontSizeRange: [24, 24],
    },
    {
      emojis: PETALS,
      count: ANIMATION_COUNTS.PETALS,
      animation: 'petalFloat',
      durationRange: ANIMATION_DURATIONS.PETAL_FLOAT,
      fontSizeRange: [16, 16],
    },
  ],
};

export const WINTER_EFFECT: EffectConfig = {
  name: 'winter',
  elements: [
    {
      emojis: SNOWFLAKES,
      count: ANIMATION_COUNTS.SNOWFLAKES,
      animation: 'snowflakeDance',
      durationRange: ANIMATION_DURATIONS.SNOWFLAKE_DANCE,
      fontSizeRange: [12, 28],
      delayRange: [0, 3],
    },
    {
      emojis: WINTER_CRYSTALS,
      count: ANIMATION_COUNTS.CRYSTALS,
      animation: 'crystalFloat',
      durationRange: ANIMATION_DURATIONS.CRYSTAL_FLOAT,
      fontSizeRange: [20, 20],
      delayRange: [0, 3],
    },
    {
      emojis: ['✨'],
      count: ANIMATION_COUNTS.SPARKLES,
      animation: 'twinkle',
      durationRange: [1.5, 3.5],
      fontSizeRange: [8, 8],
      opacity: 0.8,
      delayRange: [0, 3],
    },
    {
      emojis: ['🌨️', '❄️', '🌬️', '❅'],
      count: ANIMATION_COUNTS.FROST,
      animation: 'frostFloat',
      durationRange: [10, 15],
      fontSizeRange: [18, 18],
      customStyles: { left: '-10%' },
    },
    {
      emojis: ['🧚‍♀️'],
      count: ANIMATION_COUNTS.FAIRIES,
      animation: 'fairyDance',
      durationRange: ANIMATION_DURATIONS.FAIRY_DANCE,
      fontSizeRange: [18, 18],
      delayRange: [0, 2],
    },
    {
      emojis: WINTER_ANIMALS,
      count: ANIMATION_COUNTS.ANIMALS,
      animation: 'animalFloat',
      durationRange: [6, 10],
      fontSizeRange: [22, 22],
      delayRange: [0, 3],
    },
  ],
};

export const NIGHT_EFFECT: EffectConfig = {
  name: 'night',
  elements: [
    {
      emojis: NIGHT_FLOWERS,
      count: ANIMATION_COUNTS.NIGHT_FLOWERS,
      animation: 'nightFloralDance',
      durationRange: ANIMATION_DURATIONS.NIGHT_FLOAT,
      fontSizeRange: [22, 22],
      delayRange: [0, 3],
      customStyles: {
        filter: 'drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))',
      },
    },
    {
      emojis: ['💕'],
      count: 8,
      animation: 'heartFloatCompact',
      durationRange: [6, 10],
      fontSizeRange: [18, 18],
      delayRange: [0, 3],
      customStyles: {
        color: '#ff7675',
        filter: 'drop-shadow(0 0 8px rgba(255, 118, 117, 0.4))',
      },
    },
  ],
};

export const SNOW_LOVE_EFFECT: EffectConfig = {
  name: 'snow-love',
  elements: [
    {
      emojis: SNOWFLAKES,
      count: 50,
      animation: 'snowFall',
      durationRange: [8, 14],
      fontSizeRange: [8, 20],
      delayRange: [0, 5],
      zIndex: 3,
      customStyles: {
        top: '-10px',
        color: 'rgba(255, 255, 255, 0.9)',
        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
      },
    },
    {
      emojis: LOVE_LETTERS,
      count: 15,
      animation: 'loveLetterFloat',
      durationRange: [6, 10],
      fontSizeRange: [18, 18],
      delayRange: [0, 3],
      customStyles: {
        filter: 'drop-shadow(0 0 15px rgba(255, 182, 193, 0.8))',
      },
    },
  ],
};

export const CLOUDLY_EFFECT: EffectConfig = {
  name: 'cloudy',
  elements: [
    {
      emojis: CLOUDS,
      count: 8,
      animation: 'cloudMove',
      durationRange: [8, 12],
      fontSizeRange: [40, 70],
      opacity: 0.7,
      customStyles: { left: '-20%' },
    },
    {
      emojis: BUTTERFLIES,
      count: 6,
      animation: 'butterflyTrail',
      durationRange: [4, 6],
      delayRange: [0, 2],
      fontSizeRange: [24, 24],
    },
    {
      emojis: PETALS,
      count: 10,
      animation: 'petalFloat',
      durationRange: [5, 8],
      delayRange: [0, 2],
      fontSizeRange: [16, 16],
    },
  ],
};

export const SUNRISE_EFFECT: EffectConfig = {
  name: 'sunrise',
  elements: [],
};

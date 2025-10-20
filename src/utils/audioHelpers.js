/**
 * Audio Utility Helpers
 * Reusable functions for audio manipulation and control
 */

import { AUDIO_CONFIG } from '../config/audioConfig';

/**
 * Smoothly fade audio volume in or out
 * @param {HTMLAudioElement} audioElement - The audio element to fade
 * @param {string} type - 'in' or 'out'
 * @param {Function} callback - Optional callback when fade completes
 * @returns {Promise<void>}
 */
export const fadeAudio = (audioElement, type = 'out', callback = () => {}) => {
  return new Promise((resolve) => {
    if (!audioElement) {
      callback();
      resolve();
      return;
    }

    const { FADE_STEP, FADE_DELAY } = AUDIO_CONFIG;
    let volume = audioElement.volume;

    const fade = () => {
      if (type === 'out' && volume > 0) {
        volume = Math.max(0, volume - FADE_STEP);
        audioElement.volume = volume;
        setTimeout(fade, FADE_DELAY);
      } else if (type === 'in' && volume < AUDIO_CONFIG.DEFAULT_VOLUME) {
        volume = Math.min(AUDIO_CONFIG.DEFAULT_VOLUME, volume + FADE_STEP);
        audioElement.volume = volume;
        setTimeout(fade, FADE_DELAY);
      } else {
        callback();
        resolve();
      }
    };

    fade();
  });
};

/**
 * Safely play audio with error handling
 * @param {HTMLAudioElement} audioElement
 * @returns {Promise<void>}
 */
export const safePlay = async (audioElement) => {
  if (!audioElement) return;

  try {
    await audioElement.play();
  } catch (error) {
    // Handle autoplay restrictions or other errors
    console.warn('Audio playback failed:', error.message);
    // Could emit event here for user notification
  }
};

/**
 * Safely pause audio
 * @param {HTMLAudioElement} audioElement
 */
export const safePause = (audioElement) => {
  if (!audioElement) return;

  try {
    audioElement.pause();
  } catch (error) {
    console.warn('Audio pause failed:', error.message);
  }
};

/**
 * Check if audio is buffered enough to play
 * @param {HTMLAudioElement} audioElement
 * @param {number} targetDuration - Target buffer duration in seconds
 * @returns {boolean}
 */
export const isBuffered = (audioElement, targetDuration = AUDIO_CONFIG.PRELOAD_BUFFER_DURATION) => {
  if (!audioElement || !audioElement.buffered.length) return false;

  const bufferedEnd = audioElement.buffered.end(audioElement.buffered.length - 1);
  return bufferedEnd >= targetDuration;
};

/**
 * Get buffered percentage
 * @param {HTMLAudioElement} audioElement
 * @returns {number} Percentage buffered (0-100)
 */
export const getBufferedPercentage = (audioElement) => {
  if (!audioElement || !audioElement.buffered.length || !audioElement.duration) {
    return 0;
  }

  const bufferedEnd = audioElement.buffered.end(audioElement.buffered.length - 1);
  return (bufferedEnd / audioElement.duration) * 100;
};

/**
 * Reset audio element to initial state
 * @param {HTMLAudioElement} audioElement
 */
export const resetAudio = (audioElement) => {
  if (!audioElement) return;

  safePause(audioElement);
  audioElement.currentTime = 0;
  audioElement.volume = AUDIO_CONFIG.DEFAULT_VOLUME;
};

/**
 * Format time in seconds to MM:SS
 * @param {number} seconds
 * @returns {string}
 */
export const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Check if browser supports audio format
 * @param {string} type - MIME type (e.g., 'audio/mpeg')
 * @returns {boolean}
 */
export const supportsAudioFormat = (type) => {
  const audio = document.createElement('audio');
  return audio.canPlayType(type) !== '';
};

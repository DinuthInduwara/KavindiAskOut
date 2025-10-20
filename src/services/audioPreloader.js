/**
 * Intelligent Audio Preloader Service
 * Manages preloading of audio tracks for smooth playback transitions
 */

import { AUDIO_CONFIG, AUDIO_EVENTS } from '../config/audioConfig';

class AudioPreloader {
  constructor() {
    this.preloadCache = new Map(); // Track URL -> Audio element
    this.currentPreload = null; // Currently preloading audio element
    this.preloadPromises = new Map(); // Track URL -> Promise
  }

  /**
   * Preload a track intelligently
   * Loads metadata and initial buffer for quick playback start
   * @param {string} src - Audio source URL
   * @returns {Promise<HTMLAudioElement>}
   */
  async preload(src) {
    // Return cached element if already preloaded
    if (this.preloadCache.has(src)) {
      return this.preloadCache.get(src);
    }

    // Return existing promise if already preloading
    if (this.preloadPromises.has(src)) {
      return this.preloadPromises.get(src);
    }

    // Create new preload promise
    const preloadPromise = this._createPreloadPromise(src);
    this.preloadPromises.set(src, preloadPromise);

    try {
      const audioElement = await preloadPromise;
      this.preloadCache.set(src, audioElement);
      return audioElement;
    } catch (error) {
      console.warn(`Failed to preload ${src}:`, error.message);
      this.preloadPromises.delete(src);
      throw error;
    }
  }

  /**
   * Create and configure a preloading audio element
   * @private
   */
  _createPreloadPromise(src) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.preload = 'metadata'; // Load metadata first
      audio.src = src;

      // Set timeout for network issues
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error('Preload timeout'));
      }, AUDIO_CONFIG.NETWORK_TIMEOUT);

      const cleanup = () => {
        clearTimeout(timeout);
        audio.removeEventListener(AUDIO_EVENTS.CAN_PLAY, onCanPlay);
        audio.removeEventListener(AUDIO_EVENTS.ERROR, onError);
        audio.removeEventListener(AUDIO_EVENTS.LOAD_METADATA, onMetadata);
      };

      const onMetadata = () => {
        // Metadata loaded, now buffer initial chunk
        audio.preload = 'auto';
      };

      const onCanPlay = () => {
        // Initial buffer loaded, ready to play
        cleanup();
        this.currentPreload = audio;
        resolve(audio);
      };

      const onError = () => {
        cleanup();
        reject(new Error(`Failed to load ${src}`));
      };

      audio.addEventListener(AUDIO_EVENTS.LOAD_METADATA, onMetadata);
      audio.addEventListener(AUDIO_EVENTS.CAN_PLAY, onCanPlay);
      audio.addEventListener(AUDIO_EVENTS.ERROR, onError);

      // Start loading
      audio.load();
    });
  }

  /**
   * Preload next track in sequence
   * @param {string} currentSrc - Current track
   * @param {string[]} playlist - Full playlist
   */
  preloadNext(currentSrc, playlist = AUDIO_CONFIG.AVAILABLE_TRACKS) {
    const currentIndex = playlist.indexOf(currentSrc);
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    const nextSrc = playlist[nextIndex];

    // Preload in background without blocking
    this.preload(nextSrc).catch(() => {
      // Silently fail, will try again on actual switch
    });
  }

  /**
   * Cancel current preload operation
   */
  cancelPreload() {
    if (this.currentPreload) {
      this.currentPreload.pause();
      this.currentPreload.src = '';
      this.currentPreload = null;
    }
  }

  /**
   * Get preloaded audio element or create new one
   * @param {string} src
   * @returns {HTMLAudioElement}
   */
  getOrCreate(src) {
    if (this.preloadCache.has(src)) {
      const cached = this.preloadCache.get(src);
      // Remove from cache as it will be used for playback
      this.preloadCache.delete(src);
      return cached;
    }

    // Not preloaded, create new audio element
    const audio = new Audio();
    audio.src = src;
    audio.preload = 'auto';
    return audio;
  }

  /**
   * Clear all preloaded tracks except specified
   * @param {string} keepSrc - Source to keep in cache
   */
  clearCache(keepSrc = null) {
    for (const [src, audio] of this.preloadCache.entries()) {
      if (src !== keepSrc) {
        audio.pause();
        audio.src = '';
        this.preloadCache.delete(src);
      }
    }
    this.preloadPromises.clear();
  }

  /**
   * Preload multiple tracks
   * @param {string[]} sources - Array of track URLs
   * @returns {Promise<void>}
   */
  async preloadMultiple(sources) {
    const promises = sources.map(src => 
      this.preload(src).catch(err => {
        console.warn(`Skipped preload for ${src}:`, err.message);
        return null;
      })
    );

    await Promise.all(promises);
  }
}

// Export singleton instance
export const audioPreloader = new AudioPreloader();

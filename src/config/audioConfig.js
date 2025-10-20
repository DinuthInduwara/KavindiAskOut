/**
 * Audio Player Configuration
 * Central configuration for music player settings and constants
 */

export const AUDIO_CONFIG = {
  // Preloading strategy
  PRELOAD_STRATEGY: 'metadata', // 'none' | 'metadata' | 'auto'
  PRELOAD_BUFFER_DURATION: 10, // seconds to buffer initially
  
  // Fade effects
  FADE_STEP: 0.05, // Volume increment per step
  FADE_DELAY: 50, // Milliseconds between fade steps
  
  // Playback settings
  DEFAULT_VOLUME: 1.0,
  LOOP_ENABLED: true,
  
  // Network handling
  NETWORK_TIMEOUT: 5000, // milliseconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // milliseconds
  
  // Supported formats
  SUPPORTED_FORMATS: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
  
  // Track list (can be extended)
  AVAILABLE_TRACKS: [
    '/music-1.mp3',
    '/music-2.mp3',
    '/music-3.mp3',
    '/music-4.mp3',
  ],
};

export const AUDIO_EVENTS = {
  // Loading events
  LOAD_START: 'loadstart',
  LOAD_METADATA: 'loadedmetadata',
  LOAD_DATA: 'loadeddata',
  CAN_PLAY: 'canplay',
  CAN_PLAY_THROUGH: 'canplaythrough',
  
  // Playback events
  PLAY: 'play',
  PLAYING: 'playing',
  PAUSE: 'pause',
  ENDED: 'ended',
  TIME_UPDATE: 'timeupdate',
  
  // Error events
  ERROR: 'error',
  STALLED: 'stalled',
  WAITING: 'waiting',
  
  // Network events
  PROGRESS: 'progress',
  SUSPEND: 'suspend',
};

export const AUDIO_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  BUFFERING: 'buffering',
  READY: 'ready',
  PLAYING: 'playing',
  PAUSED: 'paused',
  ERROR: 'error',
};

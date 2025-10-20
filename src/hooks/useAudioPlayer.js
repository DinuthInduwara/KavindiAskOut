/**
 * Custom Audio Player Hook
 * Manages audio playback state, controls, and event handling
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { AUDIO_CONFIG, AUDIO_EVENTS, AUDIO_STATES } from '../config/audioConfig';
import { fadeAudio, safePlay, safePause, isBuffered } from '../utils/audioHelpers';
import { audioPreloader } from '../services/audioPreloader';

export const useAudioPlayer = (initialSrc = '/music-1.mp3') => {
  // State management
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(initialSrc);
  const [playbackState, setPlaybackState] = useState(AUDIO_STATES.IDLE);
  const [bufferedPercentage, setBufferedPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Refs
  const audioRef = useRef(null);
  const isSwitchingRef = useRef(false);

  /**
   * Initialize audio element with event listeners
   */
  const initializeAudio = useCallback(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Metadata loaded
    const handleMetadata = () => {
      setDuration(audio.duration);
      setPlaybackState(AUDIO_STATES.READY);
    };

    // Buffering progress
    const handleProgress = () => {
      if (audio.buffered.length > 0) {
        const buffered = audio.buffered.end(audio.buffered.length - 1);
        const percentage = (buffered / audio.duration) * 100;
        setBufferedPercentage(percentage);
      }
    };

    // Can start playing
    const handleCanPlay = () => {
      if (isSwitchingRef.current) {
        setPlaybackState(AUDIO_STATES.READY);
      }
    };

    // Actually playing
    const handlePlaying = () => {
      setPlaybackState(AUDIO_STATES.PLAYING);
      setIsPlaying(true);
    };

    // Paused
    const handlePause = () => {
      if (!isSwitchingRef.current) {
        setPlaybackState(AUDIO_STATES.PAUSED);
        setIsPlaying(false);
      }
    };

    // Waiting/buffering
    const handleWaiting = () => {
      setPlaybackState(AUDIO_STATES.BUFFERING);
    };

    // Time update
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    // Error handling
    const handleError = (e) => {
      console.error('Audio playback error:', e);
      setPlaybackState(AUDIO_STATES.ERROR);
      setIsPlaying(false);
    };

    // Attach event listeners
    audio.addEventListener(AUDIO_EVENTS.LOAD_METADATA, handleMetadata);
    audio.addEventListener(AUDIO_EVENTS.PROGRESS, handleProgress);
    audio.addEventListener(AUDIO_EVENTS.CAN_PLAY, handleCanPlay);
    audio.addEventListener(AUDIO_EVENTS.PLAYING, handlePlaying);
    audio.addEventListener(AUDIO_EVENTS.PAUSE, handlePause);
    audio.addEventListener(AUDIO_EVENTS.WAITING, handleWaiting);
    audio.addEventListener(AUDIO_EVENTS.TIME_UPDATE, handleTimeUpdate);
    audio.addEventListener(AUDIO_EVENTS.ERROR, handleError);

    // Cleanup function
    return () => {
      audio.removeEventListener(AUDIO_EVENTS.LOAD_METADATA, handleMetadata);
      audio.removeEventListener(AUDIO_EVENTS.PROGRESS, handleProgress);
      audio.removeEventListener(AUDIO_EVENTS.CAN_PLAY, handleCanPlay);
      audio.removeEventListener(AUDIO_EVENTS.PLAYING, handlePlaying);
      audio.removeEventListener(AUDIO_EVENTS.PAUSE, handlePause);
      audio.removeEventListener(AUDIO_EVENTS.WAITING, handleWaiting);
      audio.removeEventListener(AUDIO_EVENTS.TIME_UPDATE, handleTimeUpdate);
      audio.removeEventListener(AUDIO_EVENTS.ERROR, handleError);
    };
  }, []);

  /**
   * Play audio
   */
  const play = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      await safePlay(audioRef.current);
      setIsPlaying(true);
    } catch (error) {
      console.error('Play failed:', error);
    }
  }, []);

  /**
   * Pause audio
   */
  const pause = useCallback(() => {
    if (!audioRef.current) return;

    safePause(audioRef.current);
    setIsPlaying(false);
  }, []);

  /**
   * Toggle play/pause
   */
  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  /**
   * Switch to a different track with smooth transition
   */
  const switchTrack = useCallback(async (newSrc) => {
    if (!audioRef.current || newSrc === currentSrc) return;

    isSwitchingRef.current = true;
    setPlaybackState(AUDIO_STATES.LOADING);

    try {
      // Fade out current track
      await fadeAudio(audioRef.current, 'out');
      
      // Pause current track
      safePause(audioRef.current);

      // Try to get preloaded audio or create new element
      const preloadedAudio = audioPreloader.getOrCreate(newSrc);
      
      // Update audio source
      audioRef.current.src = newSrc;
      audioRef.current.load();

      // Wait for audio to be ready
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Load timeout')), AUDIO_CONFIG.NETWORK_TIMEOUT);
        
        const onCanPlay = () => {
          clearTimeout(timeout);
          audioRef.current.removeEventListener(AUDIO_EVENTS.CAN_PLAY, onCanPlay);
          audioRef.current.removeEventListener(AUDIO_EVENTS.ERROR, onError);
          resolve();
        };
        
        const onError = () => {
          clearTimeout(timeout);
          audioRef.current.removeEventListener(AUDIO_EVENTS.CAN_PLAY, onCanPlay);
          audioRef.current.removeEventListener(AUDIO_EVENTS.ERROR, onError);
          reject(new Error('Load failed'));
        };

        audioRef.current.addEventListener(AUDIO_EVENTS.CAN_PLAY, onCanPlay);
        audioRef.current.addEventListener(AUDIO_EVENTS.ERROR, onError);
      });

      // Start playback with fade in
      audioRef.current.volume = 0;
      await safePlay(audioRef.current);
      
      setCurrentSrc(newSrc);
      setIsPlaying(true);
      
      await fadeAudio(audioRef.current, 'in');

      // Preload next track in background
      audioPreloader.preloadNext(newSrc);
      
    } catch (error) {
      console.error('Track switch failed:', error);
      setPlaybackState(AUDIO_STATES.ERROR);
    } finally {
      isSwitchingRef.current = false;
    }
  }, [currentSrc]);

  /**
   * Seek to specific time
   */
  const seek = useCallback((time) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
  }, []);

  /**
   * Set volume (0-1)
   */
  const setVolume = useCallback((volume) => {
    if (!audioRef.current) return;
    audioRef.current.volume = Math.max(0, Math.min(1, volume));
  }, []);

  // Initialize event listeners when audioRef is set
  useEffect(() => {
    const cleanup = initializeAudio();
    return cleanup;
  }, [initializeAudio]);

  // Return public API
  return {
    // State
    isPlaying,
    currentSrc,
    playbackState,
    bufferedPercentage,
    duration,
    currentTime,
    
    // Controls
    play,
    pause,
    toggle,
    switchTrack,
    seek,
    setVolume,
    
    // Ref
    audioRef,
  };
};

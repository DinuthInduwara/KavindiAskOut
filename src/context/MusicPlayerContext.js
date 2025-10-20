"use client";
/**
 * Music Player Context - Refactored
 * Provides global music player state with intelligent preloading and modular architecture
 */

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from "react";
import { AUDIO_CONFIG, AUDIO_EVENTS, AUDIO_STATES } from "../config/audioConfig";
import { fadeAudio, safePlay, safePause } from "../utils/audioHelpers";
import { audioPreloader } from "../services/audioPreloader";

const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
        // State management
        const [isPlaying, setIsPlaying] = useState(false);
        const [currentSrc, setCurrentSrc] = useState(AUDIO_CONFIG.AVAILABLE_TRACKS[0]);
        const [playbackState, setPlaybackState] = useState(AUDIO_STATES.IDLE);
        
        // Refs
        const audioRef = useRef(null);
        const isSwitchingRef = useRef(false);

        /**
         * Play audio
         */
        const play = useCallback(async () => {
                if (!audioRef.current) return;

                try {
                        await safePlay(audioRef.current);
                        setIsPlaying(true);
                        setPlaybackState(AUDIO_STATES.PLAYING);
                } catch (error) {
                        console.error('Play failed:', error);
                        setPlaybackState(AUDIO_STATES.ERROR);
                }
        }, []);

        /**
         * Pause audio
         */
        const pause = useCallback(() => {
                if (!audioRef.current) return;

                safePause(audioRef.current);
                setIsPlaying(false);
                setPlaybackState(AUDIO_STATES.PAUSED);
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
                        setPlaybackState(AUDIO_STATES.PLAYING);
                        
                        await fadeAudio(audioRef.current, 'in');

                        // Preload next track in background
                        audioPreloader.preloadNext(newSrc);
                        
                } catch (error) {
                        console.error('Track switch failed:', error);
                        setPlaybackState(AUDIO_STATES.ERROR);
                        setIsPlaying(false);
                } finally {
                        isSwitchingRef.current = false;
                }
        }, [currentSrc]);

        // Preload first track on mount
        useEffect(() => {
                // Preload the initial track for quick start
                audioPreloader.preload(currentSrc).catch(() => {
                        // Silently handle preload failure
                });

                // Cleanup on unmount
                return () => {
                        audioPreloader.clearCache();
                };
        }, [currentSrc]);

        return (
                <MusicPlayerContext.Provider
                        value={{
                                // State
                                isPlaying,
                                currentSrc,
                                playbackState,
                                
                                // Controls
                                play,
                                pause,
                                toggle,
                                switchTrack,
                                
                                // Ref
                                audioRef,
                        }}
                >
                        {children}
                </MusicPlayerContext.Provider>
        );
}

export function useMusicPlayer() {
        const context = useContext(MusicPlayerContext);
        
        if (!context) {
                throw new Error('useMusicPlayer must be used within MusicPlayerProvider');
        }
        
        return context;
}

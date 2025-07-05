"use client";
import React, {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from "react";

const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
	const [isPlaying, setIsPlaying] = useState(true); // default to true
	const audioRef = useRef(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 1.0; // set to max
			if (isPlaying) {
				audioRef.current.play().catch(() => {});
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	return (
		<MusicPlayerContext.Provider
			value={{ isPlaying, setIsPlaying, audioRef }}
		>
			{children}
		</MusicPlayerContext.Provider>
	);
}

export function useMusicPlayer() {
	return useContext(MusicPlayerContext);
}

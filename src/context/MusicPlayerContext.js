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
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSrc, setCurrentSrc] = useState("/music-1.mp3");
	const audioRef = useRef(null);

	// Smooth volume fade effect
	const fadeAudio = (type = "out", callback = () => {}) => {
		const step = 0.05;
		const delay = 50;
		let volume = audioRef.current.volume;

		const fade = () => {
			if (type === "out" && volume > 0) {
				volume = Math.max(0, volume - step);
				audioRef.current.volume = volume;
				setTimeout(fade, delay);
			} else if (type === "in" && volume < 1) {
				volume = Math.min(1, volume + step);
				audioRef.current.volume = volume;
				setTimeout(fade, delay);
			} else {
				callback();
			}
		};

		fade();
	};

	const switchTrack = (newSrc) => {
		if (audioRef.current) {
			fadeAudio("out", () => {
				audioRef.current.pause();
				audioRef.current.src = newSrc;
				audioRef.current.load();
				audioRef.current.oncanplay = () => {
					audioRef.current.play();
					audioRef.current.volume = 0;
					setCurrentSrc(newSrc);
					setIsPlaying(true);
					fadeAudio("in");
				};
			});
		}
	};

	useEffect(() => {
		if (audioRef.current && isPlaying) {
			audioRef.current.play().catch(() => {});
		}
	}, [isPlaying]);

	return (
		<MusicPlayerContext.Provider
			value={{
				isPlaying,
				setIsPlaying,
				audioRef,
				currentSrc,
				switchTrack,
			}}
		>
			{children}
		</MusicPlayerContext.Provider>
	);
}

export function useMusicPlayer() {
	return useContext(MusicPlayerContext);
}

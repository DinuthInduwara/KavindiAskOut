"use client";
import React from "react";
import { useMusicPlayer } from "../context/MusicPlayerContext";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalMusicPlayer() {
	const { isPlaying, setIsPlaying, audioRef, currentSrc } = useMusicPlayer();
	const toggleMusic = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<motion.div
			className="absolute z-50 flex items-center space-x-3 top-6 right-6 group"
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
		>
			{/* Tooltip with fade-in */}
			<AnimatePresence>
				<motion.div
					key={isPlaying ? "mute" : "play"}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="px-3 py-1 text-sm text-pink-100 transition-opacity duration-300 rounded-full shadow-lg opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur"
				>
					{isPlaying ? "Mute Music" : "Play Music"}
				</motion.div>
			</AnimatePresence>

			{/* Glowing Button with animations */}
			<motion.button
				whileHover={{ scale: 1.15, rotate: 2 }}
				whileTap={{ scale: 0.95, rotate: -2 }}
				onClick={toggleMusic}
				className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
          bg-white/10 border border-white/30 backdrop-blur-lg shadow-md
          ${
				isPlaying
					? "animate-pulse ring-2 ring-pink-300"
					: "hover:bg-white/20"
			}
        `}
			>
				<span className="text-2xl">{isPlaying ? "🎶" : "🔇"}</span>
			</motion.button>

			{/* Audio element */}
			<audio ref={audioRef} loop preload="auto">
				<source src={currentSrc} type="audio/wav" />
				<source src={currentSrc} type="audio/mpeg" />
			</audio>
		</motion.div>
	);
}

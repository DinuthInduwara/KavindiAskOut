"use client";
import React from "react";
import { useMusicPlayer } from "../context/MusicPlayerContext";

export default function GlobalMusicPlayer() {
	const { isPlaying, setIsPlaying, audioRef } = useMusicPlayer();
	return (
		<div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
			<audio ref={audioRef} loop preload="auto">
				<source
					src="/music.mp3"
					type="audio/wav"
				/>
				<source
					src="/music.mp3"
					type="audio/mpeg"
				/>
			</audio>
			{isPlaying && (
				<div
					style={{
						position: "absolute",
						top: -40,
						left: "50%",
						transform: "translateX(-50%)",
						pointerEvents: "none",
					}}
				>
					{[...Array.from({ length: 3 })].map((_, i) => (
						<div
							key={i}
							style={{
								position: "absolute",
								left: `${i * 15 - 15}px`,
								fontSize: 16,
								animation: `floatUp 2s ease-in-out infinite ${
									i * 0.5
								}s`,
							}}
						>
							💕
						</div>
					))}
				</div>
			)}
			{isPlaying && (
				<div
					style={{
						position: "absolute",
						top: -30,
						right: -20,
						pointerEvents: "none",
					}}
				>
					{["♪", "♫"].map((note, i) => (
						<div
							key={i}
							style={{
								position: "absolute",
								right: `${i * 20}px`,
								fontSize: 14,
								animation: `musicFloat 1.5s ease-in-out infinite ${
									i * 0.3
								}s`,
							}}
						>
							{note}
						</div>
					))}
				</div>
			)}
			<div
				onClick={() => setIsPlaying(!isPlaying)}
				style={{
					width: 75,
					height: 75,
					borderRadius: "50%",
					background: isPlaying
						? "linear-gradient(135deg, #ff69b4, #ff1493, #e91e63)"
						: "linear-gradient(135deg, #ffb6c1, #ff69b4, #f06292)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					boxShadow: isPlaying
						? "0 8px 25px rgba(255, 20, 147, 0.4), 0 0 20px rgba(255, 105, 180, 0.3)"
						: "0 6px 20px rgba(255, 105, 180, 0.3)",
					transition: "all 0.3s ease",
					border: "2px solid rgba(255, 255, 255, 0.3)",
					animation: isPlaying
						? "musicPulse 2s ease-in-out infinite"
						: "none",
				}}
				onMouseOver={(e) => {
					e.currentTarget.style.transform = "scale(1.1)";
				}}
				onMouseOut={(e) => {
					e.currentTarget.style.transform = "scale(1)";
				}}
			>
				<div
					style={{
						fontSize: 26,
						color: "white",
						textShadow: "0 2px 4px rgba(0,0,0,0.3)",
						transform: isPlaying ? "none" : "translateX(2px)",
					}}
				>
					{isPlaying ? "⏸️" : "▶️"}
				</div>
			</div>
			{isPlaying && (
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 95,
						height: 95,
						borderRadius: "50%",
						border: "2px solid rgba(255, 105, 180, 0.3)",
						animation: "musicRipple 2s ease-out infinite",
						pointerEvents: "none",
					}}
				/>
			)}
		</div>
	);
}

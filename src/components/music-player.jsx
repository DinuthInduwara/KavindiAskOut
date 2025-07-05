"use client";

import React from "react";

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const audioRef = React.useRef(null);

	React.useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.3;
			if (isPlaying) {
				audioRef.current.play().catch(console.error);
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	return (
		<div
			style={{
				position: "fixed",
				bottom: "20px",
				right: "20px",
				zIndex: 1000,
			}}
		>
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

			{/* Floating hearts when playing */}
			{isPlaying && (
				<div
					style={{
						position: "absolute",
						top: "-40px",
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
								fontSize: "16px",
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

			{/* Music notes animation */}
			{isPlaying && (
				<div
					style={{
						position: "absolute",
						top: "-30px",
						right: "-20px",
						pointerEvents: "none",
					}}
				>
					{["♪", "♫"].map((note, i) => (
						<div
							key={i}
							style={{
								position: "absolute",
								right: `${i * 20}px`,
								fontSize: "14px",
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

			{/* Main player button */}
			<div
				onClick={() => setIsPlaying(!isPlaying)}
				style={{
					width: "75px",
					height: "75px",
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
						fontSize: "26px",
						color: "white",
						textShadow: "0 2px 4px rgba(0,0,0,0.3)",
						transform: isPlaying ? "none" : "translateX(2px)",
					}}
				>
					{isPlaying ? "⏸️" : "▶️"}
				</div>
			</div>

			{/* Ripple effect when playing */}
			{isPlaying && (
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "95px",
						height: "95px",
						borderRadius: "50%",
						border: "2px solid rgba(255, 105, 180, 0.3)",
						animation: "musicRipple 2s ease-out infinite",
						pointerEvents: "none",
					}}
				/>
			)}
		</div>
	);
};

export default MusicPlayer;

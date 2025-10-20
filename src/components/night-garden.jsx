"use client";
import React from "react";
// Moonlit garden effects component
const MoonlitGardenEffects = () => (
	<div
		style={{
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			zIndex: 2,
		}}
	>
		{/* Full moon with glow */}
		<div
			style={{
				position: "absolute",
				top: "10%",
				right: "15%",
				width: "120px",
				height: "120px",
				borderRadius: "50%",
				background:
					"radial-gradient(circle, #fff9c4 0%, #f7dc6f 30%, #f4d03f 100%)",
				boxShadow:
					"0 0 60px rgba(255, 249, 196, 0.8), 0 0 120px rgba(255, 249, 196, 0.4)",
				animation: "moonGlow 4s ease-in-out infinite alternate",
				zIndex: 5,
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "20%",
					left: "25%",
					width: "15px",
					height: "15px",
					borderRadius: "50%",
					background: "rgba(0, 0, 0, 0.1)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "40%",
					right: "30%",
					width: "8px",
					height: "8px",
					borderRadius: "50%",
					background: "rgba(0, 0, 0, 0.08)",
				}}
			/>
		</div>

		{/* Moonbeams */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`moonbeam-${i}`}
				style={{
					position: "absolute",
					top: "15%",
					right: "20%",
					width: "2px",
					height: "200px",
					background:
						"linear-gradient(180deg, rgba(255, 249, 196, 0.6), transparent)",
					transform: `rotate(${i * 45}deg)`,
					transformOrigin: "50% 0%",
					animation: `moonbeamShine 6s ease-in-out infinite ${
						i * 0.3
					}s`,
				}}
			/>
		))}

		{/* Floating night flowers */}
		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={`night-flower-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "22px",
					animation: `nightFloralDance ${
						8 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
				}}
			>
				{
					["🌙", "⭐", "🌟", "💫", "🌸", "🌺"][
						Math.floor(Math.random() * 6)
					]
				}
			</div>
		))}

		{/* Twinkling stars */}
		{[...Array.from({ length: 30 })].map((_, i) => (
			<div
				key={`star-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 60}%`,
					fontSize: `${8 + Math.random() * 8}px`,
					animation: `starTwinkle ${
						2 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 4}s`,
					color: "#fff9c4",
				}}
			>
				✨
			</div>
		))}

		{/* Fireflies */}
		{[...Array.from({ length: 15 })].map((_, i) => (
			<div
				key={`firefly-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					width: "4px",
					height: "4px",
					borderRadius: "50%",
					background: "#f7dc6f",
					boxShadow: "0 0 10px #f7dc6f",
					animation: `fireflyDance ${
						4 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			/>
		))}

		{/* Night moths */}
		{[...Array.from({ length: 6 })].map((_, i) => (
			<div
				key={`moth-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "18px",
					animation: `mothFlight ${
						5 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
					filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
				}}
			>
				🦋
			</div>
		))}

		{/* Floating love hearts */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`heart-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "16px",
					animation: `loveFloat ${
						6 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					color: "#ff7675",
					filter: "drop-shadow(0 0 8px rgba(255, 118, 117, 0.4))",
				}}
			>
				💕
			</div>
		))}
	</div>
);

export default function MoonGardenTransition() {
	const nightGardenElements = [
		"🌙",
		"⭐",
		"🌟",
		"💫",
		"🌸",
		"🌺",
		"🦋",
		"💕",
		"🌿",
		"🍃",
		"🌱",
		"🌳",
	];

	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #0f1419 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					animation: "nightBreeze 10s ease-in-out infinite",
				}}
			>
				<MoonlitGardenEffects />

				{/* Night garden celebration elements */}
				{[...Array.from({ length: 15 })].map((_, i) => (
					<div
						key={i}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 25 + 15}px`,
							animation: `nightCelebration ${
								3 + Math.random() * 2
							}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
							zIndex: 1,
							filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
						}}
					>
						{
							nightGardenElements[
								Math.floor(
									Math.random() * nightGardenElements.length
								)
							]
						}
					</div>
				))}

				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.08)",
						borderRadius: "35px",
						padding: "50px",
						boxShadow:
							"0 25px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 249, 196, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
						border: "1px solid rgba(255, 249, 196, 0.2)",
						zIndex: 10,
						animation:
							"moonlitGlow 3s ease-in-out infinite alternate",
						backdropFilter: "blur(15px)",
						transform: "scale(1)",
						transition: "transform 0.3s ease",
					}}
				>
					<div
						style={{
							fontSize: "80px",
							marginBottom: "20px",
							animation: "romanticBounce 3s ease-in-out infinite",
						}}
					>
						🌙💕🌸
					</div>
					<h1
						style={{
							fontSize: "36px",
							background:
								"linear-gradient(45deg, #fff9c4, #f7dc6f, #ff7675, #74b9ff)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "25px",
							fontWeight: "bold",
							animation: "moonlitShimmer 4s ease-in-out infinite",
						}}
					>
						Under the Moonlight, My Love 🌙
					</h1>
					<p
						style={{
							fontSize: "20px",
							color: "#fff9c4",
							marginBottom: "15px",
							animation: "loveGlow 5s ease-in-out infinite",
							textShadow: "0 0 10px rgba(255, 249, 196, 0.5)",
						}}
					>
						In this enchanted garden where moonbeams dance,
					</p>
					<p
						style={{
							fontSize: "18px",
							color: "#f7dc6f",
							marginBottom: "15px",
							animation: "loveGlow 5s ease-in-out infinite 1s",
							textShadow: "0 0 8px rgba(247, 220, 111, 0.4)",
						}}
					>
						Every star whispers your name, my darling
					</p>
					<p
						style={{
							fontSize: "16px",
							color: "#ff7675",
							marginBottom: "25px",
							animation: "loveGlow 5s ease-in-out infinite 2s",
							textShadow: "0 0 8px rgba(255, 118, 117, 0.4)",
						}}
					>
						You are the moon to my night sky ✨
					</p>
					<div
						style={{
							fontSize: "24px",
							animation:
								"nightGardenDance 4s ease-in-out infinite",
							filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
						}}
					>
						🌙 💕 🌸 ⭐ 🌙
					</div>
				</div>

			</div>
		</>
	);
}

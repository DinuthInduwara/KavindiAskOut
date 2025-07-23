"use client";
import React from "react";

// Magical winter effects component
const MagicalWinterEffects = () => (
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
		{/* Floating snowflakes with sparkle trails */}
		{[...Array.from({ length: 35 })].map((_, i) => (
			<div
				key={`snowflake-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					animation: `snowflakeDance ${
						6 + Math.random() * 4
					}s linear infinite ${Math.random() * 3}s`,
				}}
			>
				<div
					style={{
						fontSize: `${12 + Math.random() * 16}px`,
						color: "rgba(255, 255, 255, 0.9)",
					}}
				>
					{
						["❄️", "❅", "❆", "✦", "✧", "🌨️"][
							Math.floor(Math.random() * 6)
						]
					}
				</div>
			</div>
		))}

		{/* Floating winter crystals */}
		{[...Array.from({ length: 15 })].map((_, i) => (
			<div
				key={`crystal-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "20px",
					animation: `crystalFloat ${
						8 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
				}}
			>
				{
					["💎", "🔮", "💠", "🌟", "⭐", "✨"][
						Math.floor(Math.random() * 6)
					]
				}
			</div>
		))}

		{/* Magical winter sparkles */}
		{[...Array.from({ length: 40 })].map((_, i) => (
			<div
				key={`sparkle-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "8px",
					color: "rgba(255, 255, 255, 0.8)",
					animation: `twinkle ${
						1.5 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 3}s`,
				}}
			>
				✨
			</div>
		))}

		{/* Gentle winter breeze with frost */}
		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={`frost-${i}`}
				style={{
					position: "absolute",
					left: "-10%",
					top: `${20 + Math.random() * 60}%`,
					fontSize: "18px",
					animation: `frostFloat ${
						10 + Math.random() * 5
					}s linear infinite ${i * 0.8}s`,
				}}
			>
				{["🌨️", "❄️", "🌬️", "❅"][Math.floor(Math.random() * 4)]}
			</div>
		))}

		{/* Dancing winter fairies */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`fairy-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "18px",
					animation: `fairyDance ${
						4 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				🧚‍♀️
			</div>
		))}

		{/* Winter animals */}
		{[...Array.from({ length: 6 })].map((_, i) => (
			<div
				key={`animal-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "22px",
					animation: `animalFloat ${
						6 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
				}}
			>
				{["🦢", "🐧", "🦌", "🐻‍❄️"][Math.floor(Math.random() * 4)]}
			</div>
		))}
	</div>
);

function MainComponent() {
	const handleEnterApp = () => {
		setTimeout(() => {
			// Navigate to main app - you can customize this
			window.location.href = "/main";
		}, 1000);
	};

	const winterElements = [
		"❄️",
		"❅",
		"❆",
		"🌨️",
		"⭐",
		"✨",
		"💎",
		"🔮",
		"💠",
		"🌟",
		"🧚‍♀️",
		"🦢",
		"🐧",
		"🦌",
	];

	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #e3f2fd 0%, #bbdefb 25%, #90caf9 50%, #64b5f6 75%, #42a5f5 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					animation: "winterBreeze 10s ease-in-out infinite",
				}}
			>
				<MagicalWinterEffects />

				{/* Winter celebration elements */}
				{[...Array.from({ length: 25 })].map((_, i) => (
					<div
						key={i}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 20 + 15}px`,
							animation: `winterCelebration ${
								3 + Math.random() * 2
							}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
							zIndex: 1,
						}}
					>
						{
							winterElements[
								Math.floor(
									Math.random() * winterElements.length
								)
							]
						}
					</div>
				))}

				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.15)",
						borderRadius: "25px",
						padding: "40px",
						boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
						border: "1px solid rgba(255, 255, 255, 0.2)",
						zIndex: 10,
						backdropFilter: "blur(10px)",
						transform: "scale(1)",
						transition: "transform 0.3s ease",
						maxWidth: "60%",
						width: "90%",
					}}
				>
					<div
						style={{
							fontSize: "60px",
							marginBottom: "20px",
							animation:
								"magicalBounce 2.5s ease-in-out infinite",
						}}
					>
						❄️✨🧚‍♀️
					</div>
					<h1
						style={{
							fontSize: "28px",
							background:
								"linear-gradient(45deg, #1e88e5, #42a5f5, #64b5f6, #90caf9)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "15px",
							fontWeight: "bold",
							animation: "textShimmer 4s ease-in-out infinite",
						}}
					>
						✨ Stepping into the Winter Wonderland... ❄️ Please hold
						tight as the snowflakes settle.
					</h1>
					<p
						style={{
							fontSize: "16px",
							color: "rgba(21, 101, 192, 0.8)",
							marginBottom: "20px",
							animation: "fadeInOut 5s ease-in-out infinite",
						}}
					>
						Where dreams freeze into beautiful memories... 🌨️
					</p>

					<div
						style={{
							fontSize: "20px",
							animation: "winterDance 5s ease-in-out infinite",
							marginBottom: "25px",
						}}
					>
						❄️ ✨ 🧚‍♀️ 💎 ❄️
					</div>

					{/* <button
						onClick={handleEnterApp}
						style={{
							background:
								"linear-gradient(135deg, #42a5f5 0%, #64b5f6 50%, #90caf9 100%)",
							border: "none",
							borderRadius: "20px",
							padding: "15px 30px",
							fontSize: "16px",
							fontWeight: "600",
							color: "white",
							cursor: "pointer",
							boxShadow: "0 8px 25px rgba(66, 165, 245, 0.4)",
							transition: "all 0.3s ease",
							zIndex: 20,
							position: "relative",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform =
								"translateY(-2px) scale(1.05)";
							e.currentTarget.style.boxShadow =
								"0 12px 35px rgba(66, 165, 245, 0.6)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform =
								"translateY(0) scale(1)";
							e.currentTarget.style.boxShadow =
								"0 8px 25px rgba(66, 165, 245, 0.4)";
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "8px",
							}}
						>
							<span style={{ fontSize: "14px" }}>❄️</span>
							<span>Enter Winter's Embrace</span>
							<span style={{ fontSize: "14px" }}>✨</span>
						</div>
					</button> */}
				</div>

				<style jsx global>{`
					@keyframes snowflakeDance {
						0% {
							transform: translateY(-100vh) rotate(0deg);
							opacity: 0;
						}
						10% {
							opacity: 1;
						}
						90% {
							opacity: 1;
						}
						100% {
							transform: translateY(100vh) rotate(360deg);
							opacity: 0;
						}
					}

					@keyframes crystalFloat {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg);
							opacity: 0.8;
						}
						25% {
							transform: translateY(-30px) rotate(90deg);
							opacity: 1;
						}
						50% {
							transform: translateY(-20px) rotate(180deg);
							opacity: 0.9;
						}
						75% {
							transform: translateY(-40px) rotate(270deg);
							opacity: 1;
						}
					}

					@keyframes twinkle {
						0%,
						100% {
							opacity: 0.2;
							transform: scale(0.6);
						}
						50% {
							opacity: 1;
							transform: scale(1.4);
						}
					}

					@keyframes frostFloat {
						0% {
							transform: translateX(-10%) rotate(0deg);
							opacity: 0;
						}
						10% {
							opacity: 1;
						}
						90% {
							opacity: 1;
						}
						100% {
							transform: translateX(110vw) rotate(360deg);
							opacity: 0;
						}
					}

					@keyframes fairyDance {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
						}
						25% {
							transform: translate(50px, -40px) rotate(20deg);
						}
						50% {
							transform: translate(-40px, -60px) rotate(-15deg);
						}
						75% {
							transform: translate(60px, -30px) rotate(25deg);
						}
					}

					@keyframes animalFloat {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg);
						}
						50% {
							transform: translateY(-20px) rotate(5deg);
						}
					}

					@keyframes winterCelebration {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg) scale(1);
							opacity: 0.7;
						}
						50% {
							transform: translateY(-25px) rotate(180deg)
								scale(1.2);
							opacity: 1;
						}
					}

					@keyframes magicalBounce {
						0%,
						100% {
							transform: translateY(0) scale(1);
						}
						25% {
							transform: translateY(-8px) scale(1.03);
						}
						50% {
							transform: translateY(-5px) scale(1.02);
						}
						75% {
							transform: translateY(-12px) scale(1.05);
						}
					}

					@keyframes textShimmer {
						0%,
						100% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
					}

					@keyframes fadeInOut {
						0%,
						100% {
							opacity: 0.7;
						}
						50% {
							opacity: 1;
						}
					}

					@keyframes winterDance {
						0%,
						100% {
							transform: scale(1) rotate(0deg);
						}
						50% {
							transform: scale(1.05) rotate(3deg);
						}
					}

					@keyframes winterBreeze {
						0%,
						100% {
							filter: brightness(1) hue-rotate(0deg);
						}
						50% {
							filter: brightness(1.05) hue-rotate(5deg);
						}
					}
				`}</style>
			</div>
		</>
	);
}

export default MainComponent;

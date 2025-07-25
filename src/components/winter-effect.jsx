"use client";
import React from "react";
import { Snowflake, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { sendMessageTelegram } from "../utilities/telegram-helpers";

// Snowy love letter effects component
const SnowyLoveEffects = () => (
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
		{/* Gentle snowflakes */}
		{[...Array.from({ length: 50 })].map((_, i) => (
			<div
				key={`snowflake-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `-10px`,
					fontSize: `${8 + Math.random() * 12}px`,
					color: "rgba(255, 255, 255, 0.8)",
					animation: `snowFall ${
						8 + Math.random() * 6
					}s linear infinite ${Math.random() * 5}s`,
					zIndex: 3,
				}}
			>
				{["❄️", "❅", "❆", "✻", "✼", "❋"][Math.floor(Math.random() * 6)]}
			</div>
		))}

		{/* Floating love letters */}
		{[...Array.from({ length: 15 })].map((_, i) => (
			<div
				key={`love-letter-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "18px",
					animation: `loveLetterFloat ${
						6 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					filter: "drop-shadow(0 0 8px rgba(255, 182, 193, 0.4))",
				}}
			>
				{
					["💌", "💕", "💖", "💝", "💗", "💘"][
						Math.floor(Math.random() * 6)
					]
				}
			</div>
		))}

		{/* Winter hearts */}
		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={`winter-heart-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "16px",
					animation: `winterHeartDance ${
						5 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
					color: "#ffb6c1",
					filter: "drop-shadow(0 0 6px rgba(255, 182, 193, 0.3))",
				}}
			>
				💕
			</div>
		))}

		{/* Gentle sparkles */}
		{[...Array.from({ length: 25 })].map((_, i) => (
			<div
				key={`sparkle-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: `${6 + Math.random() * 8}px`,
					animation: `gentleSparkle ${
						3 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 3}s`,
					color: "rgba(255, 255, 255, 0.9)",
				}}
			>
				✨
			</div>
		))}

		{/* Love birds in winter */}
		{[...Array.from({ length: 4 })].map((_, i) => (
			<div
				key={`love-bird-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 60}%`,
					fontSize: "20px",
					animation: `loveBirdFly ${
						8 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
				}}
			>
				🕊️
			</div>
		))}

		{/* Romantic winter flowers */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`winter-flower-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "22px",
					animation: `winterFlowerSway ${
						7 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
					filter: "drop-shadow(0 0 8px rgba(255, 182, 193, 0.3))",
				}}
			>
				{["🌹", "🌸", "🌺", "🌷"][Math.floor(Math.random() * 4)]}
			</div>
		))}
	</div>
);

export default function SnowyTransition() {
	const router = useRouter();
	const handleEnterApp = () => {
		setTimeout(() => {
			router.push("/lovely-quiz");
		}, 1000);
		sendMessageTelegram("Entering the Snowy Wonderland! ❄️✨");
	};
	const winterElements = [
		"❄️",
		"❅",
		"❆",
		"💌",
		"💕",
		"🌹",
		"🌸",
		"🕊️",
		"✨",
		"💖",
		"🔥",
		"☕",
	];

	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #e8f4f8 0%, #d6eaf8 25%, #aed6f1 50%, #85c1e9 75%, #5dade2 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					animation: "winterBreeze 12s ease-in-out infinite",
				}}
			>
				<SnowyLoveEffects />

				{/* Winter celebration elements */}
				{[...Array.from({ length: 15 })].map((_, i) => (
					<div
						key={i}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 25 + 15}px`,
							animation: `winterCelebration ${
								4 + Math.random() * 3
							}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
							zIndex: 1,
							filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
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
						padding: "35px",
						maxWidth: "50vw",
						width: "90%",
						boxShadow:
							"0 25px 50px rgba(0, 0, 0, 0.1), 0 0 40px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
						border: "1px solid rgba(255, 255, 255, 0.3)",
						zIndex: 10,
						animation:
							"snowyGlow 4s ease-in-out infinite alternate",
						backdropFilter: "blur(15px)",
						transform: "scale(1)",
						transition: "transform 0.3s ease",
					}}
				>
					<div
						style={{
							fontSize: "60px",
							marginBottom: "15px",
							animation: "winterBounce 3s ease-in-out infinite",
						}}
					>
						❄️💕🌹
					</div>
					<h1
						style={{
							fontSize: "28px",
							background:
								"linear-gradient(45deg, #5dade2, #85c1e9, #ff69b4, #ffb6c1)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
							fontWeight: "bold",
							animation: "snowyShimmer 4s ease-in-out infinite",
						}}
					>
						Kavindi💞..When you smile, the snow glows brighter
					</h1>

					<p
						style={{
							fontSize: "14px",
							color: "#e91e63",
							marginBottom: "20px",
							animation: "loveGlow 5s ease-in-out infinite 2s",
							textShadow: "0 0 6px rgba(233, 30, 99, 0.3)",
						}}
					>
						This winter, I only need one thing to keep warm—your
						hand in mine.
					</p>

					<div className="transition-all duration-500 transform cursor-pointer magical-scroll-container hover:scale-110 group animate-bounce">
						<button
							onClick={handleEnterApp}
							className="relative overflow-hidden group"
							style={{
								background:
									"linear-gradient(135deg, #ff7675 0%, #fd79a8 50%, #e84393 100%)",
								border: "none",
								borderRadius: "25px",
								padding: "18px 40px",
								fontSize: "18px",
								fontWeight: "600",
								color: "white",
								marginTop: "20px",
								marginBottom: "20px",
								cursor: "pointer",
								boxShadow:
									"0 15px 35px rgba(255, 118, 117, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1)",
								transition:
									"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
								animation:
									"buttonGlow 3s ease-in-out infinite alternate",
								zIndex: 20,
								position: "relative",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform =
									"translateY(-3px) scale(1.05)";
								e.currentTarget.style.boxShadow =
									"0 20px 40px rgba(255, 118, 117, 0.6), 0 8px 20px rgba(0, 0, 0, 0.15)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform =
									"translateY(0) scale(1)";
								e.currentTarget.style.boxShadow =
									"0 15px 35px rgba(255, 118, 117, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1)";
							}}
							onMouseDown={(e) => {
								e.currentTarget.style.transform =
									"translateY(1px) scale(0.98)";
							}}
							onMouseUp={(e) => {
								e.currentTarget.style.transform =
									"translateY(-3px) scale(1.05)";
							}}
						>
							<div className="flex items-center justify-center space-x-2 ">
								<Snowflake className="w-5 h-5 fill-current" />
								<span>Continue The Journey</span>
								<Sparkles className="w-5 h-5" />
							</div>

							{/* Button shine effect */}
							<div
								style={{
									position: "absolute",
									top: "0",
									left: "-100%",
									width: "100%",
									height: "100%",
									background:
										"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
									animation:
										"buttonShine 3s ease-in-out infinite",
								}}
							/>
						</button>
					</div>
					<div
						style={{
							fontSize: "20px",
							animation:
								"winterGardenDance 4s ease-in-out infinite",
							filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
						}}
					>
						❄️ 💕 🌹 ✨ ❄️
					</div>
				</div>

				<style jsx global>{`
					@keyframes snowFall {
						0% {
							transform: translateY(-10px) translateX(0px)
								rotate(0deg);
							opacity: 1;
						}
						100% {
							transform: translateY(100vh) translateX(100px)
								rotate(360deg);
							opacity: 0;
						}
					}

					@keyframes loveLetterFloat {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
							opacity: 0.7;
						}
						25% {
							transform: translate(20px, -15px) rotate(5deg);
							opacity: 1;
						}
						50% {
							transform: translate(-15px, -25px) rotate(-3deg);
							opacity: 0.8;
						}
						75% {
							transform: translate(25px, -10px) rotate(8deg);
							opacity: 0.9;
						}
					}

					@keyframes winterHeartDance {
						0%,
						100% {
							transform: translateY(0px) scale(1);
							opacity: 0.7;
						}
						50% {
							transform: translateY(-20px) scale(1.1);
							opacity: 1;
						}
					}

					@keyframes gentleSparkle {
						0%,
						100% {
							opacity: 0.3;
							transform: scale(0.8);
						}
						50% {
							opacity: 1;
							transform: scale(1.2);
						}
					}

					@keyframes loveBirdFly {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
						}
						33% {
							transform: translate(50px, -20px) rotate(10deg);
						}
						66% {
							transform: translate(-40px, -30px) rotate(-8deg);
						}
					}

					@keyframes winterFlowerSway {
						0%,
						100% {
							transform: rotate(0deg) scale(1);
						}
						50% {
							transform: rotate(5deg) scale(1.05);
						}
					}

					@keyframes winterCelebration {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg) scale(1);
							opacity: 0.6;
						}
						50% {
							transform: translateY(-20px) rotate(180deg)
								scale(1.1);
							opacity: 1;
						}
					}

					@keyframes snowyGlow {
						0% {
							box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1),
								0 0 40px rgba(255, 255, 255, 0.2),
								inset 0 1px 0 rgba(255, 255, 255, 0.3);
						}
						100% {
							box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15),
								0 0 60px rgba(255, 255, 255, 0.3),
								inset 0 1px 0 rgba(255, 255, 255, 0.4);
						}
					}

					@keyframes winterBounce {
						0%,
						100% {
							transform: translateY(0) scale(1);
						}
						33% {
							transform: translateY(-8px) scale(1.03);
						}
						66% {
							transform: translateY(-12px) scale(1.05);
						}
					}

					@keyframes snowyShimmer {
						0%,
						100% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
					}

					@keyframes loveGlow {
						0%,
						100% {
							opacity: 0.8;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.02);
						}
					}

					@keyframes winterGardenDance {
						0%,
						100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.08);
						}
					}

					@keyframes winterBreeze {
						0%,
						100% {
							filter: brightness(1) hue-rotate(0deg);
						}
						50% {
							filter: brightness(1.05) hue-rotate(2deg);
						}
					}
				`}</style>
			</div>
		</>
	);
}

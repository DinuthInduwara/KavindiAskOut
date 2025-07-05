import React from "react";

const GentleRain = () => (
	<div
		style={{
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			zIndex: 1,
            overflow: "hidden",
		}}
	>
		{/* Rain drops */}
		{[...Array.from({ length: 50 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: "-10px",
					width: "2px",
					height: `${Math.random() * 20 + 10}px`,
					background:
						"linear-gradient(180deg, transparent, rgba(173, 216, 230, 0.6), transparent)",
					borderRadius: "50px",
					animation: `gentleRain ${
						3 + Math.random() * 2
					}s linear infinite ${Math.random() * 2}s`,
				}}
			/>
		))}

		{/* Soft rain mist */}
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background:
					"linear-gradient(180deg, rgba(173, 216, 230, 0.1) 0%, transparent 30%)",
				animation: "mistFlow 4s ease-in-out infinite",
			}}
		/>

		{/* Gentle water ripples effect */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					width: "20px",
					height: "20px",
					border: "1px solid rgba(173, 216, 230, 0.3)",
					borderRadius: "50%",
					animation: `ripple ${
						2 + Math.random()
					}s ease-out infinite ${Math.random() * 3}s`,
				}}
			/>
		))}
		<style jsx global>{`
			@keyframes gentleRain {
				0% {
					top: -10px;
					opacity: 0;
				}
				10% {
					opacity: 0.6;
				}
				90% {
					opacity: 0.6;
				}
				100% {
					top: 100vh;
					opacity: 0;
				}
			}

			@keyframes mistFlow {
				0%,
				100% {
					opacity: 0.1;
				}
				50% {
					opacity: 0.3;
				}
			}

			@keyframes ripple {
				0% {
					transform: scale(0);
					opacity: 0.8;
				}
				100% {
					transform: scale(4);
					opacity: 0;
				}
			}

			@keyframes rainGlow {
				0% {
					filter: drop-shadow(0 0 10px rgba(70, 130, 180, 0.3));
				}
				100% {
					filter: drop-shadow(0 0 20px rgba(70, 130, 180, 0.5));
				}
			}

			@keyframes rainPulse {
				0%,
				100% {
					box-shadow: 0 8px 25px rgba(70, 130, 180, 0.3);
				}
				50% {
					box-shadow: 0 8px 25px rgba(70, 130, 180, 0.5);
				}
			}

			@keyframes floatHeart {
				0%,
				100% {
					transform: translateY(0px) rotate(0deg);
				}
				50% {
					transform: translateY(-20px) rotate(180deg);
				}
			}

			@keyframes floatGif {
				0%,
				100% {
					transform: translateY(0px);
				}
				50% {
					transform: translateY(-10px);
				}
			}

			@keyframes bounce {
				0%,
				100% {
					transform: scale(1);
				}
				50% {
					transform: scale(1.2);
				}
			}
		`}</style>
	</div>
);

export default GentleRain;

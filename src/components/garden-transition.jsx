"use client";
import React from "react";

// Define CloudyTransition here or import it if it's a separate component
const CloudyTransition = () => (
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
		{/* Moving clouds */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					top: `${10 + Math.random() * 60}%`,
					left: "-20%",
					fontSize: `${40 + Math.random() * 30}px`,
					opacity: 0.7,
					animation: `cloudMove ${
						8 + Math.random() * 4
					}s linear infinite ${i * 0.5}s`,
				}}
			>
				☁️
			</div>
		))}

		{/* Butterfly trails */}
		{[...Array.from({ length: 6 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					animation: `butterflyTrail ${
						4 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				<div style={{ fontSize: "24px" }}>🦋</div>
				{/* Glittery trail */}
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "30px",
						height: "2px",
						background:
							"linear-gradient(90deg, transparent, rgba(255, 182, 193, 0.8), transparent)",
						transform: "translate(-50%, -50%)",
						animation: `glitterTrail 2s ease-in-out infinite ${Math.random()}s`,
					}}
				/>
			</div>
		))}

		{/* Flower petals floating */}
		{[...Array.from({ length: 10 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "16px",
					animation: `petalFloat ${
						5 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				🌸
			</div>
		))}
	</div>
);

export default function GardenTransition() {
	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #87CEEB 0%, #98D8E8 25%, #B0E0E6 50%, #E0F6FF 75%, #F0F8FF 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					transition: "background 2s ease",
				}}
			>
				<CloudyTransition />

				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.9)",
						borderRadius: "30px",
						padding: "50px",
						boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
						border: "3px solid rgba(135, 206, 235, 0.5)",
						zIndex: 10,
						animation:
							"transitionGlow 2s ease-in-out infinite alternate",
					}}
				>
					<div
						style={{
							fontSize: "80px",
							marginBottom: "20px",
							animation: "bounce 1s ease-in-out infinite",
						}}
					>
						☁️🦋☁️
					</div>
					<h1
						style={{
							fontSize: "36px",
							background:
								"linear-gradient(45deg, #87CEEB, #4682B4, #5F9EA0)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
							fontWeight: "bold",
						}}
					>
						The garden is transforming... 🌸
					</h1>
					<p
						style={{
							fontSize: "18px",
							color: "#666",
							marginBottom: "20px",
						}}
					>
						Clouds are gathering, butterflies are dancing... ☁️🦋
					</p>
					<div style={{ fontSize: "24px" }}>🌸 ☁️ 🦋 🌺 ☁️</div>
				</div>
			</div>
		</>
	);
}

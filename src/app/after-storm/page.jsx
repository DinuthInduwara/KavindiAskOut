"use client";
import React from "react";



function MainComponent() {
	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #87CEEB 0%, #98FB98 25%, #F0E68C 50%, #FFE4B5 75%, #FFF8DC 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					transition: "background 3s ease",
				}}
			>
				<AfterRainEffects />
				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.85)",
						borderRadius: "25px",
						padding: "40px",
						boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
						border: "2px solid rgba(255, 215, 0, 0.3)",
						zIndex: 10,
						maxWidth: "600px",
						animation:
							"peacefulGlow 4s ease-in-out infinite alternate",
						backdropFilter: "blur(10px)",
					}}
				>
					<div
						style={{
							fontSize: "70px",
							marginBottom: "20px",
							animation: "sunBounce 3s ease-in-out infinite",
						}}
					>
						🌅🌈☀️
					</div>
					<h1
						style={{
							fontSize: "32px",
							background:
								"linear-gradient(45deg, #FFD700, #FFA500, #FF8C00)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
							fontWeight: "bold",
						}}
					>
						After the Rain ☀️
					</h1>
					<p
						style={{
							fontSize: "16px",
							color: "#4A6741",
							marginBottom: "20px",
						}}
					>
						The sun rises, the rainbow appears, and nature
						awakens... 🌈✨
					</p>
					<RainText fullText={kavindiSpeech} />

					<div
						style={{
							fontSize: "22px",
							color: "#228B22",
							marginTop: "20px",
						}}
					>
						🌅 🌈 🦋 🌸 🕊️ ☀️
					</div>

					{/* Next page button */}
					<button
						onClick={() => (window.location.href = "/next-page")}
						style={{
							marginTop: "30px",
							padding: "15px 30px",
							fontSize: "18px",
							fontWeight: "bold",
							color: "#fff",
							background:
								"linear-gradient(45deg, #32CD32, #228B22, #006400)",
							border: "none",
							borderRadius: "50px",
							cursor: "pointer",
							boxShadow: "0 8px 20px rgba(50, 205, 50, 0.3)",
							transition: "all 0.3s ease",
							animation:
								"buttonGlow 3s ease-in-out infinite alternate",
						}}
						onMouseEnter={(e) => {
							e.target.style.transform =
								"translateY(-3px) scale(1.05)";
							e.target.style.boxShadow =
								"0 12px 25px rgba(50, 205, 50, 0.5)";
						}}
						onMouseLeave={(e) => {
							e.target.style.transform = "translateY(0) scale(1)";
							e.target.style.boxShadow =
								"0 8px 20px rgba(50, 205, 50, 0.3)";
						}}
					>
						Continue Journey 🌿
					</button>
				</div>
				<style jsx global>{`
					@keyframes sunRise {
						0%,
						100% {
							transform: translateY(0px) scale(1);
							box-shadow: 0 0 60px rgba(255, 215, 0, 0.8),
								0 0 120px rgba(255, 165, 0, 0.4);
						}
						50% {
							transform: translateY(-10px) scale(1.05);
							box-shadow: 0 0 80px rgba(255, 215, 0, 1),
								0 0 160px rgba(255, 165, 0, 0.6);
						}
					}
					@keyframes sunRays {
						0%,
						100% {
							opacity: 0.6;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.2);
						}
					}
					@keyframes gentleCloudMove {
						0% {
							transform: translateX(-10%);
						}
						100% {
							transform: translateX(110vw);
						}
					}
					@keyframes rainbowFade {
						0%,
						100% {
							opacity: 0.4;
						}
						50% {
							opacity: 0.8;
						}
					}
					@keyframes butterflyFloat {
						0%,
						100% {
							transform: translateY(0px) translateX(0px)
								rotate(0deg);
						}
						25% {
							transform: translateY(-15px) translateX(10px)
								rotate(5deg);
						}
						50% {
							transform: translateY(-8px) translateX(-5px)
								rotate(-3deg);
						}
						75% {
							transform: translateY(-20px) translateX(15px)
								rotate(8deg);
						}
					}
					@keyframes birdFly {
						0% {
							transform: translateX(-5%) translateY(0px);
						}
						100% {
							transform: translateX(105vw) translateY(-20px);
						}
					}
					@keyframes dewdropSparkle {
						0%,
						100% {
							opacity: 0.6;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
							box-shadow: 0 0 10px rgba(135, 206, 235, 0.8);
						}
					}
					@keyframes flowerBloom {
						0% {
							transform: scale(0) rotate(0deg);
							opacity: 0;
						}
						50% {
							transform: scale(1.2) rotate(180deg);
							opacity: 1;
						}
						100% {
							transform: scale(1) rotate(360deg);
							opacity: 0.8;
						}
					}
					@keyframes peacefulGlow {
						0% {
							box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1),
								0 0 20px rgba(255, 215, 0, 0.2);
						}
						100% {
							box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15),
								0 0 30px rgba(255, 215, 0, 0.4);
						}
					}
					@keyframes sunBounce {
						0%,
						100% {
							transform: translateY(0) scale(1);
						}
						25% {
							transform: translateY(-5px) scale(1.02);
						}
						50% {
							transform: translateY(-3px) scale(1.01);
						}
						75% {
							transform: translateY(-8px) scale(1.03);
						}
					}
					@keyframes buttonGlow {
						0% {
							box-shadow: 0 8px 20px rgba(50, 205, 50, 0.3);
						}
						100% {
							box-shadow: 0 8px 20px rgba(50, 205, 50, 0.6),
								0 0 15px rgba(50, 205, 50, 0.4);
						}
					}
				`}</style>
			</div>
		</>
	);
}

export default MainComponent;

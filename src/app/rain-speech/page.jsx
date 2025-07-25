"use client";
import React from "react";
import RainText from "../../components/text-write-animation";
import { useRouter } from "next/navigation";
import { useMusicPlayer } from "../../context/MusicPlayerContext";

const RainyEffects = () => (
	<div
		style={{
			position: "absolute",
			minHeight: "100vh",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			zIndex: 2,
		}}
	>
		{/* Dark storm clouds */}
		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					top: `${5 + Math.random() * 40}%`,
					left: "-15%",
					fontSize: `${50 + Math.random() * 40}px`,
					opacity: 0.8,
					filter: "brightness(0.6)",
					animation: `stormCloudMove ${
						6 + Math.random() * 3
					}s linear infinite ${i * 0.3}s`,
				}}
			>
				☁️
			</div>
		))}

		{/* Rain drops */}
		{[...Array.from({ length: 100 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: "-5%",
					width: "2px",
					height: `${15 + Math.random() * 25}px`,
					background:
						"linear-gradient(to bottom, rgba(173, 216, 230, 0.8), rgba(135, 206, 235, 0.4))",
					borderRadius: "1px",
					animation: `rainFall ${
						0.5 + Math.random() * 1
					}s linear infinite ${Math.random() * 2}s`,
				}}
			/>
		))}

		{/* Lightning flashes */}
		{[...Array.from({ length: 3 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					top: `${10 + Math.random() * 30}%`,
					left: `${20 + Math.random() * 60}%`,
					fontSize: "60px",
					opacity: 0,
					animation: `lightningFlash ${
						3 + Math.random() * 4
					}s ease-in-out infinite ${i * 2}s`,
				}}
			>
				⚡
			</div>
		))}

		{/* Water ripples */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					bottom: "10%",
					width: "20px",
					height: "20px",
					border: "2px solid rgba(135, 206, 235, 0.6)",
					borderRadius: "50%",
					animation: `rippleEffect ${
						2 + Math.random() * 1
					}s ease-out infinite ${Math.random() * 3}s`,
				}}
			/>
		))}

		{/* Floating umbrellas */}
		{[...Array.from({ length: 4 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${60 + Math.random() * 30}%`,
					fontSize: "32px",
					animation: `umbrellaFloat ${
						4 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				☂️
			</div>
		))}
	</div>
);

function RainTransition() {

	const { switchTrack } = useMusicPlayer();
	
		React.useEffect(() => {
			switchTrack("/music-3.mp3");
		}, []);

	const fullText = `Kavindi, 🌧️💙\nDo you know how I see the rain? 🤔\n\nThe rain… it doesn’t fall from the sky. ☁️\nIt falls from hearts. 💧💔\n\nWhen you’re hurting, it rains. 😔\nWhen I’m hurting… it rains too. 😞\nAnd the worst storms… come when I’m hurt because of you. 🌪️\n\nThis rain is heavy. 🕳️\nIt hides the world, clouds my thoughts, and sometimes… I forget who I am in it. 🫥🌫️\n\nBut then— I see you smile. 🌈😊\nAnd just like that… the storm fades. 🌤️\nThe clouds pull back. ☁️➡️☀️\nThe world softens. 🌍💫\n\nYour smile breaks through the rain like sunlight tearing open the sky. ☀️🌤️💖\n\nFor a moment, I forget every wound. 🩹\nEvery scar. ⚡\nEvery reason I was hurting. 💔\n\nWhen I feel your presence, even my name disappears. 🫶\nI don’t exist in that moment. Only you do. 👁️‍🗨️💗\n\nI’ve walked through every storm, not because I loved the rain— 🌧️👣\nbut because I was waiting for you. 🕰️💘\n\nI exist to stop this rain. 🌫️\n\nBut the truth is… only you can. 🌷\nYour voice. 🎶 Your hand. 🤝 Your smile. 😊\n\nEven if the whole world becomes rain— 🌍🌧️\nI’ll keep walking through it, just to see you shine again. ✨🌟💞`;
	const [showContinue, setShowContinue] = React.useState(false);
	const router = useRouter();
	React.useEffect(() => {
		// Show the continue element after 15 seconds
		const timer = setTimeout(() => {
			setShowContinue(true);
		}, fullText.length * 70 + 1000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #2C3E50 0%, #34495E 25%, #4A6741 50%, #5D6D7E 75%, #85929E 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					transition: "background 2s ease",
				}}
			>
				<RainyEffects />
				<div
					style={{
						textAlign: "center",
						background: "rgba(44, 62, 80, 0.85)",
						borderRadius: "25px",
						padding: "40px",
						boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
						border: "2px solid rgba(135, 206, 235, 0.3)",
						zIndex: 10,
						maxWidth: "600px",
						animation:
							"rainyGlow 3s ease-in-out infinite alternate",
						backdropFilter: "blur(10px)",
					}}
				>
					<div
						style={{
							fontSize: "70px",
							marginBottom: "20px",
							animation: "thunderBounce 2s ease-in-out infinite",
						}}
					>
						⛈️🌧️⚡
					</div>
					<h1
						style={{
							fontSize: "32px",
							background:
								"linear-gradient(45deg, #85C1E9, #AED6F1, #D6EAF8)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
							fontWeight: "bold",
						}}
					>
						Dancing in the Rain 🌧️
					</h1>
					<p
						style={{
							fontSize: "16px",
							color: "#AED6F1",
							marginBottom: "20px",
						}}
					>
						Thunder rolls, lightning strikes, and raindrops fall...
						⚡🌧️
					</p>

					<div
						style={{
							fontFamily: "Dancing Script, cursive",
							fontSize: "1.5rem",
							color: "#ffffffcc",
							textAlignLast: "center",

							background: "rgba(44, 62, 80, 0.85)",
							borderRadius: "25px",
							padding: "30px 40px",
							boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
							border: "2px solid rgba(135, 206, 235, 0.3)",
							zIndex: 10,
							backdropFilter: "blur(10px)",
							lineHeight: 1.8,
							whiteSpace: "pre-wrap",
						}}
					>
						<RainText fullText={fullText} />
					</div>

					<div
						style={{
							fontSize: "22px",
							color: "#D6EAF8",
							marginTop: "20px",
						}}
					>
						☂️ ⛈️ 🌧️ ⚡ 💧
					</div>
				</div>
				{showContinue && (
					<div
						style={{
							position: "fixed",
							bottom: "40px",
							right: "40px",
							zIndex: 20,
							cursor: "pointer",
							pointerEvents: "auto",
							display: "flex",
							alignItems: "center",
							gap: "12px",
							background: "rgba(255, 255, 255, 0.15)",
							backdropFilter: "blur(10px)",
							borderRadius: "50px",
							padding: "16px 24px",
							border: "2px solid rgba(255, 255, 255, 0.3)",
							boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
							animation:
								"gentleGlow 3s ease-in-out infinite alternate, craneFloat 4s ease-in-out infinite",
							transition: "all 0.3s ease",
						}}
						onClick={() => {
							router.push("/about");
						}}
						onMouseEnter={(e) => {
							e.target.style.transform = "scale(1.05)";
							e.target.style.background =
								"rgba(255, 255, 255, 0.25)";
							e.target.style.boxShadow =
								"0 12px 35px rgba(0, 0, 0, 0.3)";
						}}
						onMouseLeave={(e) => {
							e.target.style.transform = "scale(1)";
							e.target.style.background =
								"rgba(255, 255, 255, 0.15)";
							e.target.style.boxShadow =
								"0 8px 25px rgba(0, 0, 0, 0.2)";
						}}
					>
						<div
							style={{
								fontSize: "24px",
								filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))",
							}}
						>
							🕊️
						</div>
						<span
							style={{
								color: "#ffffff",
								fontSize: "16px",
								fontWeight: "500",
								fontFamily: "system-ui, sans-serif",
								textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
								letterSpacing: "0.5px",
							}}
						>
							Ready for See Some Stufff? 🌙
						</span>
					</div>
				)}

				<style jsx global>{`
					@keyframes stormCloudMove {
						0% {
							transform: translateX(-15%);
						}
						100% {
							transform: translateX(115vw);
						}
					}

					@keyframes rainFall {
						0% {
							transform: translateY(-10px);
							opacity: 0;
						}
						10% {
							opacity: 1;
						}
						100% {
							transform: translateY(100vh);
							opacity: 0.3;
						}
					}

					@keyframes lightningFlash {
						0%,
						90%,
						100% {
							opacity: 0;
						}
						5%,
						10% {
							opacity: 1;
							filter: brightness(2) drop-shadow(0 0 20px #fff);
						}
					}

					@keyframes rippleEffect {
						0% {
							transform: scale(0);
							opacity: 1;
						}
						100% {
							transform: scale(4);
							opacity: 0;
						}
					}

					@keyframes umbrellaFloat {
						0%,
						100% {
							transform: translateY(0px) rotate(-5deg);
						}
						50% {
							transform: translateY(-15px) rotate(5deg);
						}
					}

					@keyframes rainyGlow {
						0% {
							box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3),
								0 0 20px rgba(135, 206, 235, 0.2);
						}
						100% {
							box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4),
								0 0 30px rgba(135, 206, 235, 0.4);
						}
					}

					@keyframes thunderBounce {
						0%,
						100% {
							transform: translateY(0) scale(1);
						}
						25% {
							transform: translateY(-8px) scale(1.05);
						}
						50% {
							transform: translateY(-5px) scale(1.02);
						}
						75% {
							transform: translateY(-12px) scale(1.08);
						}
					}
				`}</style>
			</div>
		</>
	);
}

export default RainTransition;

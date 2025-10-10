"use client";
import React from "react";
import RainText from "../../components/text-write-animation";
import { useRouter } from "next/navigation";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { Playfair_Display, Manrope } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

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
	const router = useRouter();

	const { switchTrack } = useMusicPlayer();
	
		React.useEffect(() => {
			switchTrack("/music-3.mp3");
		}, []);

	React.useEffect(() => {
		router.prefetch("/about");
	}, [router]);

	const fullText = `Kavindi, 🌧️💙\nDo you know how I see the rain? 🤔\n\nThe rain… it doesn’t fall from the sky. ☁️\nIt falls from hearts. 💧💔\n\nWhen you’re hurting, it rains. 😔\nWhen I’m hurting… it rains too. 😞\nAnd the worst storms… come when I’m hurt because of you. 🌪️\n\nThis rain is heavy. 🕳️\nIt hides the world, clouds my thoughts, and sometimes… I forget who I am in it. 🫥🌫️\n\nBut then— I see you smile. 🌈😊\nAnd just like that… the storm fades. 🌤️\nThe clouds pull back. ☁️➡️☀️\nThe world softens. 🌍💫\n\nYour smile breaks through the rain like sunlight tearing open the sky. ☀️🌤️💖\n\nFor a moment, I forget every wound. 🩹\nEvery scar. ⚡\nEvery reason I was hurting. 💔\n\nWhen I feel your presence, even my name disappears. 🫶\nI don’t exist in that moment. Only you do. 👁️‍🗨️💗\n\nI’ve walked through every storm, not because I loved the rain— 🌧️👣\nbut because I was waiting for you. 🕰️💘\n\nI exist to stop this rain. 🌫️\n\nBut the truth is… only you can. 🌷\nYour voice. 🎶 Your hand. 🤝 Your smile. 😊\n\nEven if the whole world becomes rain— 🌍🌧️\nI’ll keep walking through it, just to see you shine again. ✨🌟💞`;
	const [showContinue, setShowContinue] = React.useState(false);


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
						"radial-gradient(1200px 600px at 70% 10%, rgba(59, 130, 246, 0.15), transparent 60%), linear-gradient(135deg, #0f172a 0%, #111827 35%, #1f2937 70%, #0b1220 100%)",
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
						background: "rgba(17, 24, 39, 0.65)",
						borderRadius: "28px",
						padding: "48px 48px 36px 48px",
						boxShadow: "0 25px 60px rgba(0, 0, 0, 0.45)",
						border: "1px solid rgba(148, 163, 184, 0.25)",
						zIndex: 10,
						maxWidth: "720px",
						width: "min(92vw, 720px)",
						animation: "rainyGlow 4s ease-in-out infinite alternate",
						backdropFilter: "blur(14px)",
					}}
				>
					<div
						style={{
							fontSize: "56px",
							marginBottom: "12px",
							animation: "thunderBounce 2.6s ease-in-out infinite",
						}}
					>
						⛈️🌧️⚡
					</div>
					<h1
						className={playfair.className}
						style={{
							fontSize: "38px",
							letterSpacing: "0.3px",
							background:
								"linear-gradient(90deg, #c7d2fe 0%, #93c5fd 45%, #a5b4fc 100%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "6px",
							fontWeight: 700,
						}}
					>
						Dancing in the Rain 🌧️
					</h1>
					<p
						className={manrope.className}
						style={{
							fontSize: "15px",
							color: "#cbd5e1",
							marginBottom: "18px",
						}}
					>
						A soft storm, a quiet heart, and a little love letter in rain.
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							flexWrap: "wrap",
							gap: "8px",
							marginBottom: "22px",
						}}
					>
						{["rain-kissed", "heartfelt", "poetry", "devotion"].map((chip) => (
							<span
								key={chip}
								className={manrope.className}
								style={{
									display: "inline-block",
									padding: "6px 10px",
									borderRadius: "999px",
									fontSize: "12px",
									letterSpacing: "0.3px",
									color: "#bfdbfe",
									background: "rgba(59, 130, 246, 0.12)",
									border: "1px solid rgba(59, 130, 246, 0.25)",
								}}
							>
								{chip}
							</span>
						))}
					</div>
					<p
						className={manrope.className}
						style={{
							fontSize: "15px",
							color: "#a5b4fc",
							marginBottom: "18px",
						}}
					>
						Thunder rolls, lightning whispers, and raindrops write what words cannot. ⚡🌧️
					</p>

					<div
						className={manrope.className}
						style={{
							fontSize: "1.125rem",
							color: "#e5e7eb",
							textAlignLast: "center",
							background: "rgba(17, 24, 39, 0.55)",
							borderRadius: "22px",
							padding: "28px 36px",
							boxShadow: "0 18px 45px rgba(0, 0, 0, 0.35)",
							border: "1px solid rgba(148, 163, 184, 0.25)",
							zIndex: 10,
							backdropFilter: "blur(10px)",
							lineHeight: 1.9,
							whiteSpace: "pre-wrap",
						}}
					>
						<RainText fullText={fullText} />
					</div>
					<div
						className={manrope.className}
						style={{
							marginTop: "18px",
							fontSize: "13px",
							color: "#94a3b8",
							letterSpacing: "0.4px",
						}}
					>
						— written for <span style={{ color: "#bfdbfe" }}>Kavindi</span> with a sky full of rain
					</div>

					<div
						style={{
							fontSize: "20px",
							color: "#c7d2fe",
							marginTop: "18px",
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
							background: "rgba(99, 102, 241, 0.18)",
							backdropFilter: "blur(10px)",
							borderRadius: "50px",
							padding: "16px 24px",
							border: "1px solid rgba(99, 102, 241, 0.35)",
							boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
							animation:
								"gentleGlow 3s ease-in-out infinite alternate, craneFloat 4s ease-in-out infinite",
							transition: "all 0.3s ease",
						}}
						onClick={() => {
							router.push("/about");
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = "scale(1.05)";
							e.currentTarget.style.background =
								"rgba(99, 102, 241, 0.28)";
							e.currentTarget.style.boxShadow =
								"0 12px 35px rgba(0, 0, 0, 0.3)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = "scale(1)";
							e.currentTarget.style.background =
								"rgba(99, 102, 241, 0.18)";
							e.currentTarget.style.boxShadow =
								"0 8px 25px rgba(0, 0, 0, 0.2)";
						}}
					>
						<div
							style={{
								fontSize: "22px",
								filter: "drop-shadow(0 0 10px rgba(165, 180, 252, 0.8))",
							}}
						>
							🌙
						</div>
						<span
							className={manrope.className}
							style={{
								color: "#eef2ff",
								fontSize: "15px",
								fontWeight: 600,
								textShadow: "0 2px 4px rgba(0, 0, 0, 0.35)",
								letterSpacing: "0.4px",
							}}
						>
							Ready to see something beautiful?
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
							box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4),
								0 0 16px rgba(165, 180, 252, 0.16);
						}
						100% {
							box-shadow: 0 28px 60px rgba(0, 0, 0, 0.5),
								0 0 26px rgba(165, 180, 252, 0.28);
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

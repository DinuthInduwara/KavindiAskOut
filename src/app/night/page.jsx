"use client";
import React from "react";
import RainText from "../../components/text-write-animation";
import { useRouter } from "next/navigation";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";

const NightEffects = () => (
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
		{/* Glowing moon */}
		<div
			style={{
				position: "absolute",
				top: "10%",
				right: "15%",
				width: "100px",
				height: "100px",
				background:
					"radial-gradient(circle, #F5F5DC 0%, #E6E6FA 50%, #D8BFD8 100%)",
				borderRadius: "50%",
				boxShadow:
					"0 0 80px rgba(245, 245, 220, 0.8), 0 0 160px rgba(230, 230, 250, 0.4)",
				animation: "moonGlow 6s ease-in-out infinite alternate",
			}}
		/>

		{/* Moon craters */}
		<div
			style={{
				position: "absolute",
				top: "12%",
				right: "16.5%",
				width: "12px",
				height: "12px",
				background: "rgba(200, 200, 200, 0.3)",
				borderRadius: "50%",
			}}
		/>
		<div
			style={{
				position: "absolute",
				top: "14%",
				right: "17.8%",
				width: "8px",
				height: "8px",
				background: "rgba(200, 200, 200, 0.2)",
				borderRadius: "50%",
			}}
		/>

		{/* Twinkling stars */}
		{[...Array.from({ length: 20 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					top: `${Math.random() * 60}%`,
					left: `${Math.random() * 100}%`,
					fontSize: "16px",
					color: "#FFD700",
					animation: `starTwinkle ${
						2 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				✨
			</div>
		))}

		{/* Constellation stars */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					top: `${20 + Math.random() * 30}%`,
					left: `${10 + Math.random() * 80}%`,
					width: "4px",
					height: "4px",
					background: "#E6E6FA",
					borderRadius: "50%",
					boxShadow: "0 0 8px rgba(230, 230, 250, 0.8)",
					animation: `gentleGlow ${
						3 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 1}s`,
				}}
			/>
		))}

		{/* Floating fireflies */}
		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 90}%`,
					top: `${30 + Math.random() * 50}%`,
					width: "6px",
					height: "6px",
					background: "radial-gradient(circle, #ADFF2F, #32CD32)",
					borderRadius: "50%",
					boxShadow: "0 0 12px rgba(173, 255, 47, 0.8)",
					animation: `fireflyFloat ${
						4 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			/>
		))}

		{/* Animated owls */}
		{[...Array.from({ length: 3 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${20 + i * 30}%`,
					top: `${25 + Math.random() * 15}%`,
					fontSize: "32px",
					animation: `owlHoot ${
						5 + Math.random() * 2
					}s ease-in-out infinite ${i * 1.5}s`,
				}}
			>
				🦉
			</div>
		))}

		{/* Night clouds */}
		{[...Array.from({ length: 4 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					top: `${5 + Math.random() * 25}%`,
					left: "-15%",
					fontSize: `${25 + Math.random() * 15}px`,
					opacity: 0.4,
					filter: "brightness(0.7) contrast(1.2)",
					animation: `nightCloudDrift ${
						15 + Math.random() * 8
					}s linear infinite ${i * 2}s`,
				}}
			>
				☁️
			</div>
		))}

		{/* Sleeping animals */}
		{[...Array.from({ length: 4 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 80}%`,
					bottom: `${15 + Math.random() * 20}%`,
					fontSize: "24px",
					animation: `sleepyBreathe ${
						3 + Math.random() * 1
					}s ease-in-out infinite ${Math.random() * 1}s`,
				}}
			>
				{["🦔", "🐰", "🦝", "🐿️"][i]}
			</div>
		))}

		{/* Night flowers */}
		{[...Array.from({ length: 6 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					bottom: `${5 + Math.random() * 15}%`,
					fontSize: "20px",
					animation: `nightBloom ${
						4 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				{
					["🌙", "🌸", "🌺", "💜", "🌷", "🌼"][
						Math.floor(Math.random() * 6)
					]
				}
			</div>
		))}

		{/* Gentle mist */}
		{[...Array.from({ length: 5 })].map((_, i) => (
			<div
				key={i}
				style={{
					position: "absolute",
					bottom: "0%",
					left: `${Math.random() * 100}%`,
					width: "80px",
					height: "30px",
					background: "rgba(230, 230, 250, 0.1)",
					borderRadius: "50px",
					animation: `mistFloat ${
						6 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			/>
		))}

		{/* Shooting star */}
		<div
			style={{
				position: "absolute",
				top: "15%",
				left: "-5%",
				fontSize: "20px",
				animation: "shootingStar 8s linear infinite",
			}}
		>
			💫
		</div>
	</div>
);

function MainComponent() {
	const { switchTrack } = useMusicPlayer();

	const kavindiSpeech =
		"🌧️  Kavindi… do you know how I hate rain?  \n🌫️  Rain falls in this world, too.  \n☁️  If your heart is troubled, the skies will become cloudy.  \n💧  If you grieve, rain falls so terribly easily.  \n😔  Can you understand… the horrible feeling of being pelted by rain\nwhen you’re all alone in this solitary world?  🕊️  \n💪  If only to stop that rain, I shall lend you any strength, any power.  \n☀️  If you trust in me, I won’t let a single drop of rain fall from that sky.  \n❤️  Kavindi, trust me… you are not fighting alone.";
	const router = useRouter();
	const [hiddenButton, setHiddenButton] = React.useState(false);
	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #191970 0%, #483D8B 25%, #6A5ACD 50%, #9370DB 75%, #8B7EC8 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					transition: "background 3s ease",
				}}
			>
				<NightEffects />
				<div
					style={{
						textAlign: "center",
						background: "rgba(25, 25, 112, 0.85)",
						borderRadius: "25px",
						padding: "40px",
						boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
						border: "2px solid rgba(230, 230, 250, 0.3)",
						zIndex: 10,
						maxWidth: "600px",
						animation:
							"nightGlow 4s ease-in-out infinite alternate",
						backdropFilter: "blur(10px)",
					}}
				>
					<div
						style={{
							fontSize: "70px",
							marginBottom: "20px",
							animation: "moonBounce 4s ease-in-out infinite",
						}}
					>
						🌙🦉✨
					</div>
					<h1
						style={{
							fontSize: "32px",
							background:
								"linear-gradient(45deg, #E6E6FA, #DDA0DD, #DA70D6)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
							fontWeight: "bold",
						}}
					>
						Is the rain over? 🌙
					</h1>
					<p
						style={{
							fontSize: "16px",
							color: "#E6E6FA",
							marginBottom: "20px",
						}}
					>
						Yes, I think so. 🌟💤
					</p>
					<div
						style={{
							fontSize: "18px",
							color: "#DDA0DD",
							marginBottom: "20px",
							fontStyle: "italic",
						}}
					>
						<div
							style={{
								textAlignLast: "center",
								lineHeight: 1.8,
								fontFamily: "Dancing Script, cursive",

								whiteSpace: "pre-wrap",
							}}
						>
							<RainText
								fullText={kavindiSpeech}
								setClickble={setHiddenButton}
							/>
						</div>
					</div>
					<div
						style={{
							fontSize: "22px",
							color: "#E6E6FA",
							marginTop: "20px",
						}}
					>
						🌙 ✨ 🦉 💜 🌟 🦔
					</div>

					{hiddenButton && (
						<button
							onClick={() => {
								switchTrack("/music-1.mp3");
								sendMessageTelegram(
									"Sweet Dreams event triggered! 🌙✨"
								);
								router.push("/night/love-speech");
							}}
							style={{
								marginTop: "30px",
								padding: "15px 30px",
								fontSize: "18px",
								fontWeight: "bold",
								color: "#fff",
								background:
									"linear-gradient(45deg, #9370DB, #8A2BE2, #6A5ACD)",
								border: "none",
								borderRadius: "50px",
								cursor: "pointer",
								boxShadow:
									"0 8px 20px rgba(147, 112, 219, 0.3)",
								transition: "all 0.3s ease",
								animation:
									"nightButtonGlow 3s ease-in-out infinite alternate",
							}}
							onMouseEnter={(e) => {
								e.target.style.transform =
									"translateY(-3px) scale(1.05)";
								e.target.style.boxShadow =
									"0 12px 25px rgba(147, 112, 219, 0.5)";
							}}
							onMouseLeave={(e) => {
								e.target.style.transform =
									"translateY(0) scale(1)";
								e.target.style.boxShadow =
									"0 8px 20px rgba(147, 112, 219, 0.3)";
							}}
						>
							Sweet Dreams 🌟
						</button>
					)}
				</div>
				<style jsx global>{`
					@keyframes moonGlow {
						0% {
							box-shadow: 0 0 80px rgba(245, 245, 220, 0.6),
								0 0 160px rgba(230, 230, 250, 0.3);
							transform: scale(1);
						}
						100% {
							box-shadow: 0 0 120px rgba(245, 245, 220, 0.9),
								0 0 200px rgba(230, 230, 250, 0.5);
							transform: scale(1.05);
						}
					}
					@keyframes starTwinkle {
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
					@keyframes gentleGlow {
						0%,
						100% {
							opacity: 0.6;
							box-shadow: 0 0 8px rgba(230, 230, 250, 0.6);
						}
						50% {
							opacity: 1;
							box-shadow: 0 0 15px rgba(230, 230, 250, 1);
						}
					}
					@keyframes fireflyFloat {
						0%,
						100% {
							transform: translateY(0px) translateX(0px);
							opacity: 0.7;
						}
						25% {
							transform: translateY(-20px) translateX(15px);
							opacity: 1;
						}
						50% {
							transform: translateY(-10px) translateX(-10px);
							opacity: 0.8;
						}
						75% {
							transform: translateY(-25px) translateX(20px);
							opacity: 1;
						}
					}
					@keyframes owlHoot {
						0%,
						90%,
						100% {
							transform: scale(1) rotate(0deg);
						}
						5% {
							transform: scale(1.1) rotate(-2deg);
						}
						10% {
							transform: scale(1.05) rotate(2deg);
						}
						15% {
							transform: scale(1) rotate(0deg);
						}
					}
					@keyframes nightCloudDrift {
						0% {
							transform: translateX(-15%);
						}
						100% {
							transform: translateX(115vw);
						}
					}
					@keyframes sleepyBreathe {
						0%,
						100% {
							transform: scale(1) translateY(0px);
						}
						50% {
							transform: scale(1.02) translateY(-2px);
						}
					}
					@keyframes nightBloom {
						0%,
						100% {
							transform: scale(1) rotate(0deg);
							opacity: 0.7;
						}
						50% {
							transform: scale(1.1) rotate(5deg);
							opacity: 1;
						}
					}
					@keyframes mistFloat {
						0%,
						100% {
							transform: translateX(0px) translateY(0px);
							opacity: 0.1;
						}
						50% {
							transform: translateX(20px) translateY(-10px);
							opacity: 0.3;
						}
					}
					@keyframes shootingStar {
						0% {
							transform: translateX(-5%) translateY(0px);
							opacity: 0;
						}
						10% {
							opacity: 1;
						}
						90% {
							opacity: 1;
						}
						100% {
							transform: translateX(105vw) translateY(-50px);
							opacity: 0;
						}
					}
					@keyframes nightGlow {
						0% {
							box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3),
								0 0 20px rgba(230, 230, 250, 0.2);
						}
						100% {
							box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4),
								0 0 30px rgba(230, 230, 250, 0.4);
						}
					}
					@keyframes moonBounce {
						0%,
						100% {
							transform: translateY(0) scale(1);
						}
						25% {
							transform: translateY(-8px) scale(1.02);
						}
						50% {
							transform: translateY(-5px) scale(1.01);
						}
						75% {
							transform: translateY(-10px) scale(1.03);
						}
					}
					@keyframes nightButtonGlow {
						0% {
							box-shadow: 0 8px 20px rgba(147, 112, 219, 0.3);
						}
						100% {
							box-shadow: 0 8px 20px rgba(147, 112, 219, 0.6),
								0 0 15px rgba(147, 112, 219, 0.4);
						}
					}
				`}</style>
			</div>
		</>
	);
}

export default MainComponent;

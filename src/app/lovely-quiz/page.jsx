"use client";
import React from "react";
import QuestionBox from "./question-box";
import { useRouter } from "next/navigation";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";

function MainComponent() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [showTransition, setShowTransition] = React.useState(false);
	const [isComplete, setIsComplete] = React.useState(false);
	const [weatherState, setWeatherState] = React.useState("sunny"); // Add weather state
	const router = useRouter();
	const { switchTrack } = useMusicPlayer();

	React.useEffect(() => {
		switchTrack("/music-1.mp3");
	}, []);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 7000); // Simulate loading delay
		return () => clearTimeout(timer);
	}, []);

	// Weather cycling effect
	React.useEffect(() => {
		const weatherCycle = ["sunny", "cloudy", "rainy", "starry"];
		let currentIndex = 0;

		const weatherTimer = setInterval(() => {
			currentIndex = (currentIndex + 1) % weatherCycle.length;
			setWeatherState(weatherCycle[currentIndex]);
		}, 8000); // Change weather every 5 seconds

		return () => clearInterval(weatherTimer);
	}, []);

	// Dynamic background based on weather
	const getWeatherBackground = () => {
		switch (weatherState) {
			case "sunny":
				return "linear-gradient(135deg, #87CEEB 0%, #98D8E8 25%, #B0E0E6 50%, #E0F6FF 75%, #F0F8FF 100%)";
			case "cloudy":
				return "linear-gradient(135deg, #B0C4DE 0%, #D3D3D3 25%, #E6E6FA 50%, #F0F8FF 75%, #FFFFFF 100%)";
			case "rainy":
				return "linear-gradient(135deg, #708090 0%, #778899 25%, #87CEEB 50%, #B0C4DE 75%, #D3D3D3 100%)";
			case "starry":
				return "linear-gradient(135deg, #191970 0%, #483D8B 25%, #6A5ACD 50%, #9370DB 75%, #BA55D3 100%)";
			default:
				return "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #F0F8FF 100%)";
		}
	};

	// Floating emojis component
	const FloatingEmojis = () => {
		const weatherEmojis = {
			sunny: ["☀️", "🌞", "🌻", "🦋", "🌸", "💛", "✨", "🌺", "🐝", "🌷"],
			cloudy: [
				"☁️",
				"🌤️",
				"🕊️",
				"🤍",
				"💨",
				"🌫️",
				"🦢",
				"🌙",
				"💙",
				"🌊",
			],
			rainy: ["🌧️", "💧", "☔", "🌈", "🐸", "🍃", "💚", "🌿", "🦆", "💎"],
			starry: [
				"⭐",
				"🌟",
				"✨",
				"🌙",
				"💫",
				"🌌",
				"🔮",
				"💜",
				"🦉",
				"🌠",
			],
		};

		const currentEmojis =
			weatherEmojis[weatherState] || weatherEmojis.sunny;

		return (
			<>
				{Array.from({ length: 15 }, (_, i) => (
					<div
						key={`${weatherState}-${i}`}
						style={{
							position: "absolute",
							fontSize: Math.random() * 20 + 25 + "px",
							left: Math.random() * 100 + "%",
							top: Math.random() * 100 + "%",
							animation: `floatingEmoji${i % 3} ${
								6 + Math.random() * 4
							}s ease-in-out infinite`,
							animationDelay: Math.random() * 5 + "s",
							opacity: 0.7 + Math.random() * 0.3,
							zIndex: 1,
							pointerEvents: "none",
						}}
					>
						{currentEmojis[i % currentEmojis.length]}
					</div>
				))}
			</>
		);
	};

	// Weather particles component
	const WeatherParticles = () => {
		if (weatherState === "rainy") {
			return (
				<>
					{Array.from({ length: 20 }, (_, i) => (
						<div
							key={`rain-${i}`}
							style={{
								position: "absolute",
								width: "2px",
								height: "20px",
								background:
									"linear-gradient(to bottom, rgba(173, 216, 230, 0.8), rgba(173, 216, 230, 0.2))",
								left: Math.random() * 100 + "%",
								animation: `rainDrop ${
									0.5 + Math.random() * 0.5
								}s linear infinite`,
								animationDelay: Math.random() * 2 + "s",
							}}
						/>
					))}
				</>
			);
		}

		if (weatherState === "starry") {
			return (
				<>
					{Array.from({ length: 30 }, (_, i) => (
						<div
							key={`star-${i}`}
							style={{
								position: "absolute",
								width: "3px",
								height: "3px",
								background: "white",
								borderRadius: "50%",
								left: Math.random() * 100 + "%",
								top: Math.random() * 100 + "%",
								animation: `starTwinkle ${
									2 + Math.random() * 3
								}s ease-in-out infinite`,
								animationDelay: Math.random() * 3 + "s",
								boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
							}}
						/>
					))}
				</>
			);
		}

		return null;
	};

	const RainyButterflyTransition = () => (
		<div style={{ textAlign: "center", color: "white", zIndex: 10 }}>
			<div style={{ fontSize: "60px", marginBottom: "20px" }}>🦋💙</div>
			<h1 style={{ fontSize: "28px", marginBottom: "15px" }}>
				Transitioning to Love...
			</h1>
			<p style={{ fontSize: "16px" }}>Your answers are blooming... 🌸</p>
		</div>
	);


	React.useEffect(() => {
		router.prefetch("/rain-speech");
	}, [router]);

	const handleBackToLoveStory = () => {
		sendMessageTelegram("Returning to Rain Speech Page");
		router.push("/rain-speech");
	};

	if (isLoading) {
		return (
			<div
				style={{
					minHeight: "100vh",
					background: getWeatherBackground(),
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					transition: "background 3s ease",
				}}
			>
				<FloatingEmojis />
				<WeatherParticles />
				<></>
			</div>
		);
	}

	if (showTransition) {
		return (
			<div
				style={{
					minHeight: "100vh",
					background: getWeatherBackground(),
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					transition: "background 3s ease",
				}}
			>
				<FloatingEmojis />
				<WeatherParticles />
				<RainyButterflyTransition />
			</div>
		);
	}

	if (isComplete) {
		return (
			<div
				style={{
					minHeight: "100vh",
					background:
						"radial-gradient(ellipse at center, #a8e6a3 0%, #7dd87a 25%, #66d9a6 50%, #4ecdc4 75%, #45b7d1 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "20px",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<FloatingEmojis />
				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.85)",
						borderRadius: "25px",
						padding: "40px",
						boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
						border: "1px solid rgba(255, 255, 255, 0.3)",
						maxWidth: "450px",
						width: "90%",
						backdropFilter: "blur(10px)",
						zIndex: 10,
					}}
				>
					<div style={{ fontSize: "50px", marginBottom: "20px" }}>
						🌸💚
					</div>
					<h1
						style={{
							fontSize: "28px",
							color: "#2d5016",
							marginBottom: "20px",
							fontWeight: "bold",
						}}
					>
						Thank You My Love! 💖
					</h1>
					<p
						style={{
							fontSize: "16px",
							color: "#4a7c59",
							marginBottom: "25px",
						}}
					>
						Your answers mean the world to me! 🌸
					</p>
					<button
						onClick={handleBackToLoveStory}
						style={{
							background:
								"linear-gradient(45deg, #4a7c59, #6b8e23)",
							border: "none",
							borderRadius: "20px",
							padding: "12px 25px",
							fontSize: "16px",
							fontWeight: "bold",
							color: "white",
							cursor: "pointer",
							boxShadow: "0 6px 20px rgba(74, 124, 89, 0.3)",
							transition: "all 0.3s ease",
						}}
						onMouseOver={(e) =>
							(e.target.style.transform = "scale(1.05)")
						}
						onMouseOut={(e) =>
							(e.target.style.transform = "scale(1)")
						}
					>
						💕 Ready for the surprise 💕
					</button>
				</div>
			</div>
		);
	}

	return (
		<div
			style={{
				minHeight: "100vh",
				background: getWeatherBackground(),
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
				position: "relative",
				overflow: "hidden",
				transition: "background 3s ease",
				animation: "gardenBreeze 6s ease-in-out infinite",
			}}
		>
			<FloatingEmojis />
			<WeatherParticles />

			<QuestionBox
				setShowTransition={setShowTransition}
				setIsComplete={setIsComplete}
			/>

		</div>
	);
}

export default MainComponent;

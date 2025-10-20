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
	const [weatherState, setWeatherState] = React.useState("sunny");
	const router = useRouter();
	const { switchTrack } = useMusicPlayer();

	React.useEffect(() => {
		switchTrack("/music-1.mp3");
	}, []);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 7000);
		return () => clearTimeout(timer);
	}, []);

	React.useEffect(() => {
		const weatherCycle = ["sunny", "cloudy", "rainy", "starry"];
		let currentIndex = 0;

		const weatherTimer = setInterval(() => {
			currentIndex = (currentIndex + 1) % weatherCycle.length;
			setWeatherState(weatherCycle[currentIndex]);
		}, 8000);

		return () => clearInterval(weatherTimer);
	}, []);

	const getWeatherBackground = () => {
		switch (weatherState) {
			case "sunny":
				return "linear-gradient(135deg, #FFE4B5 0%, #FFEFD5 25%, #FFF8DC 50%, #FFFACD 75%, #FFFFE0 100%)";
			case "cloudy":
				return "linear-gradient(135deg, #E6F3FF 0%, #F0F8FF 25%, #F5FAFF 50%, #FAFCFF 75%, #FFFFFF 100%)";
			case "rainy":
				return "linear-gradient(135deg, #B8D4E8 0%, #C8DCE8 25%, #D8E8F0 50%, #E0EFF5 75%, #E8F4F8 100%)";
			case "starry":
				return "linear-gradient(135deg, #2C1B47 0%, #3D2A5E 25%, #4E3A75 50%, #6B5694 75%, #8A72B3 100%)";
			default:
				return "linear-gradient(135deg, #FFE4B5 0%, #FFF8DC 50%, #FFFFE0 100%)";
		}
	};

	const MagicalQuizEffects = () => (
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
			{[...Array.from({ length: 6 })].map((_, i) => (
				<div
					key={`butterfly-${i}`}
					style={{
						position: "absolute",
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animation: `butterflyDance ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
					}}
				>
					<div style={{ fontSize: "24px", opacity: 0.6 }}>🦋</div>
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "30px",
							height: "2px",
							background: "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent)",
							transform: "translate(-50%, -50%)",
							animation: `sparkleTrail 2s ease-in-out infinite ${Math.random()}s`,
						}}
					/>
				</div>
			))}

			{[...Array.from({ length: 12 })].map((_, i) => (
				<div
					key={`petal-${i}`}
					style={{
						position: "absolute",
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						fontSize: "18px",
						opacity: 0.5,
						animation: `petalDrift ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
					}}
				>
					{["🌸", "🌺", "🌼", "🌻"][Math.floor(Math.random() * 4)]}
				</div>
			))}

			{[...Array.from({ length: 20 })].map((_, i) => (
				<div
					key={`sparkle-${i}`}
					style={{
						position: "absolute",
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						fontSize: "10px",
						opacity: 0.6,
						animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 3}s`,
					}}
				>
					✨
				</div>
			))}

			{[...Array.from({ length: 8 })].map((_, i) => (
				<div
					key={`leaf-${i}`}
					style={{
						position: "absolute",
						left: "-10%",
						top: `${20 + Math.random() * 60}%`,
						fontSize: "16px",
						opacity: 0.4,
						animation: `leafFloat ${8 + Math.random() * 4}s linear infinite ${i * 0.5}s`,
					}}
				>
					{["🍃", "🌿"][Math.floor(Math.random() * 2)]}
				</div>
			))}
		</div>
	);

	const FloatingEmojis = () => {
		const weatherEmojis = {
			sunny: ["☀️", "🌞", "🌻", "🦋", "🌸", "💛", "✨", "🌺", "🐝", "🌷"],
			cloudy: ["☁️", "🌤️", "🕊️", "🤍", "💨", "🌫️", "🦢", "🌙", "💙", "🌊"],
			rainy: ["🌧️", "💧", "☔", "🌈", "🐸", "🍃", "💚", "🌿", "🦆", "💎"],
			starry: ["⭐", "🌟", "✨", "🌙", "💫", "🌌", "🔮", "💜", "🦉", "🌠"],
		};

		const currentEmojis = weatherEmojis[weatherState] || weatherEmojis.sunny;

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
							animation: `floatingEmoji${i % 3} ${6 + Math.random() * 4}s ease-in-out infinite`,
							animationDelay: Math.random() * 5 + "s",
							opacity: 0.4 + Math.random() * 0.2,
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
								background: "linear-gradient(to bottom, rgba(173, 216, 230, 0.8), rgba(173, 216, 230, 0.2))",
								left: Math.random() * 100 + "%",
								animation: `rainDrop ${0.5 + Math.random() * 0.5}s linear infinite`,
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
								animation: `starTwinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
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
		<div style={{ textAlign: "center", color: weatherState === "starry" ? "white" : "#2d5016", zIndex: 10 }}>
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
				<MagicalQuizEffects />
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
				<MagicalQuizEffects />
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
					background: "radial-gradient(ellipse at center, #a8e6a3 0%, #7dd87a 25%, #66d9a6 50%, #4ecdc4 75%, #45b7d1 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "20px",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<MagicalQuizEffects />
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
					<div style={{ fontSize: "50px", marginBottom: "20px" }}>🌸💚</div>
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
							background: "linear-gradient(45deg, #4a7c59, #6b8e23)",
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
						onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
						onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
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
				animation: "gardenBreeze 8s ease-in-out infinite",
			}}
		>
			<MagicalQuizEffects />
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

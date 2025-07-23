"use client";
import React from "react";

function MainComponent() {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [answers, setAnswers] = React.useState({});
	const [isComplete, setIsComplete] = React.useState(false);
	const [showTransition, setShowTransition] = React.useState(false);
	const [isTyping, setIsTyping] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);
	const [weatherState, setWeatherState] = React.useState("sunny"); // Add weather state

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
		}, 5000); // Change weather every 5 seconds

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

	const questions = [
		{
			question: "What's your favorite romantic memory with me? 💕",
			type: "text",
			placeholder: "Tell me about a special moment we shared...",
		},
		{
			question: "Which flower represents our love best? 🌸",
			type: "choice",
			options: [
				"🌹 Red Rose - Passionate Love",
				"🌸 Cherry Blossom - Delicate Beauty",
				"🌷 Tulip - Perfect Love",
				"💐 Mixed Bouquet - Variety of Love",
			],
		},
		{
			question: "What makes you smile when you think of us? 😊",
			type: "text",
			placeholder: "Share what brings joy to your heart...",
		},
		{
			question: "Our perfect date would be... ✨",
			type: "choice",
			options: [
				"🌅 Sunrise picnic in nature",
				"🌃 Stargazing on a rooftop",
				"🏖️ Beach walk at sunset",
				"🏠 Cozy night at home",
			],
		},
		{
			question:
				"What's one thing you love most about our relationship? 💖",
			type: "text",
			placeholder: "Express what makes us special...",
		},
	];

	const currentQ = questions[currentQuestion];
	const currentAnswer = answers[currentQuestion];

	const RainyButterflyTransition = () => (
		<div style={{ textAlign: "center", color: "white", zIndex: 10 }}>
			<div style={{ fontSize: "60px", marginBottom: "20px" }}>🦋💙</div>
			<h1 style={{ fontSize: "28px", marginBottom: "15px" }}>
				Transitioning to Love...
			</h1>
			<p style={{ fontSize: "16px" }}>Your answers are blooming... 🌸</p>
		</div>
	);

	const handleChoiceAnswer = (option) => {
		setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
	};

	const handleTextAnswer = (text) => {
		setAnswers((prev) => ({ ...prev, [currentQuestion]: text }));
	};

	const nextQuestion = () => {
		if (currentQuestion === questions.length - 1) {
			setShowTransition(true);
			setTimeout(() => {
				setIsComplete(true);
				setShowTransition(false);
			}, 3000);
		} else {
			setCurrentQuestion((prev) => prev + 1);
		}
	};

	const prevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion((prev) => prev - 1);
		}
	};

	const handleBackToLoveStory = () => {
		window.location.href = "/";
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
						💕 Back to Love Story 💕
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

			<div
				style={{
					background: "rgba(255, 255, 255, 0.9)",
					borderRadius: "25px",
					padding: "35px",
					boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
					border: "1px solid rgba(255, 255, 255, 0.3)",
					maxWidth: "500px",
					width: "90%",
					position: "relative",
					zIndex: 10,
					backdropFilter: "blur(15px)",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.2)",
						borderRadius: "10px",
						height: "6px",
						marginBottom: "25px",
						overflow: "hidden",
					}}
				>
					<div
						style={{
							background:
								"linear-gradient(45deg, #4a7c59, #6b8e23)",
							height: "100%",
							width: `${
								((currentQuestion + 1) / questions.length) * 100
							}%`,
							borderRadius: "10px",
							transition: "width 0.5s ease",
						}}
					/>
				</div>
				<div
					style={{
						textAlign: "center",
						fontSize: "12px",
						color: "#6b8e23",
						marginBottom: "20px",
					}}
				>
					Question {currentQuestion + 1} of {questions.length}
				</div>
				<h2
					style={{
						fontSize: "clamp(18px, 4vw, 22px)",
						textAlign: "center",
						marginBottom: "25px",
						color: "#2d5016",
						fontWeight: "bold",
						lineHeight: "1.4",
					}}
				>
					{currentQ.question}
				</h2>
				{currentQ.type === "choice" ? (
					<div style={{ marginBottom: "25px" }}>
						{currentQ.options.map((option, index) => (
							<button
								key={index}
								onClick={() => handleChoiceAnswer(option)}
								style={{
									display: "block",
									width: "100%",
									padding: "12px 15px",
									margin: "8px 0",
									border:
										currentAnswer === option
											? "2px solid #4a7c59"
											: "1px solid rgba(74, 124, 89, 0.3)",
									borderRadius: "12px",
									background:
										currentAnswer === option
											? "rgba(74, 124, 89, 0.1)"
											: "rgba(255, 255, 255, 0.7)",
									fontSize: "14px",
									cursor: "pointer",
									transition: "all 0.3s ease",
									textAlign: "left",
									color: "#2d5016",
								}}
								onMouseOver={(e) => {
									if (currentAnswer !== option) {
										e.target.style.background =
											"rgba(74, 124, 89, 0.05)";
										e.target.style.transform =
											"translateX(3px)";
									}
								}}
								onMouseOut={(e) => {
									if (currentAnswer !== option) {
										e.target.style.background =
											"rgba(255, 255, 255, 0.7)";
										e.target.style.transform =
											"translateX(0)";
									}
								}}
							>
								{option}
							</button>
						))}
					</div>
				) : (
					<div
						style={{
							marginBottom: "25px",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<textarea
							value={currentAnswer || ""}
							onChange={(e) => handleTextAnswer(e.target.value)}
							onFocus={() => setIsTyping(true)}
							onBlur={() => setIsTyping(false)}
							placeholder={currentQ.placeholder}
							style={{
								width: "100%",
								maxWidth: "400px",
								minHeight: "120px",
								padding: "18px",
								border: "2px solid rgba(74, 124, 89, 0.3)",
								borderRadius: "15px",
								fontSize: "15px",
								resize: "vertical",
								outline: "none",
								background: "rgba(255, 255, 255, 0.8)",
								color: "#2d5016",
								fontFamily: "inherit",
								transition:
									"all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
								textAlign: "center",
								boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
							}}
							onFocusCapture={(e) => {
								e.target.style.border = "2px solid #4a7c59";
								e.target.style.transform = "scale(1.03)";
								e.target.style.boxShadow =
									"0 8px 30px rgba(74, 124, 89, 0.2)";
							}}
							onBlurCapture={(e) => {
								e.target.style.border =
									"2px solid rgba(74, 124, 89, 0.3)";
								e.target.style.transform = "scale(1)";
								e.target.style.boxShadow =
									"0 4px 15px rgba(0, 0, 0, 0.05)";
							}}
						/>
					</div>
				)}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "12px",
					}}
				>
					<button
						onClick={prevQuestion}
						disabled={currentQuestion === 0}
						style={{
							background:
								currentQuestion === 0
									? "rgba(74, 124, 89, 0.3)"
									: "linear-gradient(45deg, #6b8e23, #8fbc8f)",
							border: "none",
							borderRadius: "15px",
							padding: "10px 20px",
							fontSize: "14px",
							fontWeight: "bold",
							color: "white",
							cursor:
								currentQuestion === 0
									? "not-allowed"
									: "pointer",
							transition: "all 0.3s ease",
							opacity: currentQuestion === 0 ? 0.5 : 1,
						}}
						onMouseOver={(e) => {
							if (currentQuestion !== 0) {
								e.target.style.transform = "scale(1.05)";
							}
						}}
						onMouseOut={(e) => {
							if (currentQuestion !== 0) {
								e.target.style.transform = "scale(1)";
							}
						}}
					>
						🌿 Previous
					</button>
					<button
						onClick={nextQuestion}
						disabled={!currentAnswer}
						style={{
							background: !currentAnswer
								? "rgba(74, 124, 89, 0.3)"
								: "linear-gradient(45deg, #4a7c59, #6b8e23)",
							border: "none",
							borderRadius: "15px",
							padding: "10px 20px",
							fontSize: "14px",
							fontWeight: "bold",
							color: "white",
							cursor: !currentAnswer ? "not-allowed" : "pointer",
							transition: "all 0.3s ease",
							opacity: !currentAnswer ? 0.5 : 1,
						}}
						onMouseOver={(e) => {
							if (currentAnswer) {
								e.target.style.transform = "scale(1.05)";
							}
						}}
						onMouseOut={(e) => {
							if (currentAnswer) {
								e.target.style.transform = "scale(1)";
							}
						}}
					>
						{currentQuestion === questions.length - 1
							? "🌸 Finish"
							: "💚 Next"}
					</button>
				</div>
			</div>

			<style jsx global>{`
				/* Floating emoji animations */
				@keyframes floatingEmoji0 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
						opacity: 0.7;
					}
					25% {
						transform: translateY(-30px) translateX(20px)
							rotate(5deg);
						opacity: 1;
					}
					50% {
						transform: translateY(-50px) translateX(-15px)
							rotate(-3deg);
						opacity: 0.8;
					}
					75% {
						transform: translateY(-25px) translateX(25px)
							rotate(8deg);
						opacity: 1;
					}
				}

				@keyframes floatingEmoji1 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
						opacity: 0.8;
					}
					33% {
						transform: translateY(-40px) translateX(-20px)
							rotate(-8deg);
						opacity: 1;
					}
					66% {
						transform: translateY(-60px) translateX(30px)
							rotate(12deg);
						opacity: 0.9;
					}
				}

				@keyframes floatingEmoji2 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
						opacity: 0.6;
					}
					20% {
						transform: translateY(-20px) translateX(15px)
							rotate(6deg);
						opacity: 1;
					}
					40% {
						transform: translateY(-45px) translateX(-25px)
							rotate(-10deg);
						opacity: 0.8;
					}
					60% {
						transform: translateY(-35px) translateX(20px)
							rotate(15deg);
						opacity: 1;
					}
					80% {
						transform: translateY(-15px) translateX(-10px)
							rotate(-5deg);
						opacity: 0.9;
					}
				}

				/* Weather particle animations */
				@keyframes rainDrop {
					0% {
						transform: translateY(-100vh);
						opacity: 0.8;
					}
					100% {
						transform: translateY(100vh);
						opacity: 0;
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

				/* Existing animations */
				@keyframes sunGlow {
					0%,
					100% {
						box-shadow: 0 0 60px rgba(255, 215, 0, 0.4),
							0 0 120px rgba(255, 165, 0, 0.2);
					}
					50% {
						box-shadow: 0 0 80px rgba(255, 215, 0, 0.6),
							0 0 160px rgba(255, 165, 0, 0.3);
					}
				}
				@keyframes rayRotate {
					0% {
						transform: translate(-50%, -50%) rotate(0deg);
					}
					100% {
						transform: translate(-50%, -50%) rotate(360deg);
					}
				}
				@keyframes gardenBreeze {
					0%,
					100% {
						filter: brightness(1) hue-rotate(0deg);
					}
					50% {
						filter: brightness(1.08) hue-rotate(8deg);
					}
				}
				/* ... rest of existing animations remain the same ... */
				@keyframes typingDance {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg) scale(1.1);
					}
					50% {
						transform: translateY(-8px) rotate(3deg) scale(1.15);
					}
				}
				@keyframes typingButterfly {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg) scale(1.1);
					}
					50% {
						transform: translate(10px, -8px) rotate(5deg)
							scale(1.15);
					}
				}
				@keyframes typingCloud {
					0%,
					100% {
						transform: translateX(0px) scale(1.05);
					}
					50% {
						transform: translateX(5px) scale(1.08);
					}
				}
				@keyframes typingHeart {
					0%,
					100% {
						transform: scale(1.1) rotate(0deg);
						opacity: 0.9;
					}
					50% {
						transform: scale(1.15) rotate(5deg);
						opacity: 1;
					}
				}
				@keyframes typingPlant {
					0%,
					100% {
						transform: translateX(0px) rotate(0deg) scale(1.05);
					}
					50% {
						transform: translateX(3px) rotate(2deg) scale(1.08);
					}
				}
				@keyframes typingSparkle {
					0%,
					100% {
						opacity: 0.7;
						transform: scale(1.1) rotate(0deg);
					}
					50% {
						opacity: 1;
						transform: scale(1.15) rotate(10deg);
					}
				}
				@keyframes typingAnimal {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg) scale(1.05);
					}
					50% {
						transform: translateY(-5px) rotate(2deg) scale(1.1);
					}
				}
				@keyframes gentleFloat {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
						opacity: 0.8;
					}
					25% {
						transform: translateY(-20px) rotate(8deg);
						opacity: 1;
					}
					50% {
						transform: translateY(-35px) rotate(-5deg);
						opacity: 0.9;
					}
					75% {
						transform: translateY(-15px) rotate(12deg);
						opacity: 1;
					}
				}
				@keyframes butterflyGlide {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					25% {
						transform: translate(60px, -40px) rotate(15deg);
					}
					50% {
						transform: translate(-45px, -55px) rotate(-12deg);
					}
					75% {
						transform: translate(80px, -25px) rotate(20deg);
					}
				}
				@keyframes cloudDrift {
					0% {
						transform: translateX(-15%) rotate(0deg);
						opacity: 0;
					}
					15% {
						opacity: 0.8;
					}
					85% {
						opacity: 0.8;
					}
					100% {
						transform: translateX(115vw) rotate(3deg);
						opacity: 0;
					}
				}
				@keyframes heartPulse {
					0%,
					100% {
						transform: scale(1) rotate(0deg);
						opacity: 0.8;
					}
					25% {
						transform: scale(1.3) rotate(15deg);
						opacity: 1;
					}
					50% {
						transform: scale(1.1) rotate(-8deg);
						opacity: 0.9;
					}
					75% {
						transform: scale(1.4) rotate(20deg);
						opacity: 1;
					}
				}
				@keyframes plantSway {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-15px) rotate(8deg);
					}
					50% {
						transform: translateY(-25px) rotate(-5deg);
					}
					75% {
						transform: translateY(-10px) rotate(12deg);
					}
				}
				@keyframes sparkleShine {
					0%,
					100% {
						opacity: 0.4;
						transform: scale(0.8) rotate(0deg);
					}
					25% {
						opacity: 1;
						transform: scale(1.4) rotate(90deg);
					}
					50% {
						opacity: 0.7;
						transform: scale(1.1) rotate(180deg);
					}
					75% {
						opacity: 1;
						transform: scale(1.5) rotate(270deg);
					}
				}
				@keyframes animalPlay {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-25px) rotate(10deg);
					}
					50% {
						transform: translateY(-35px) rotate(-8deg);
					}
					75% {
						transform: translateY(-18px) rotate(15deg);
					}
				}
			`}</style>
		</div>
	);
}

export default MainComponent;

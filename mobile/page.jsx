"use client";
import { useRouter } from "next/navigation";
import React from "react";
import MusicPlayer from "../components/music-player";
function MainComponent() {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [answers, setAnswers] = React.useState({});
	const [isComplete, setIsComplete] = React.useState(false);
	const [isAuthorized, setIsAuthorized] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);
	const router = useRouter();

	// Music Player Component

	// Check authorization on component mount
	React.useEffect(() => {
		const gardenAccess = localStorage.getItem("gardenAccess");
		const loginTime = localStorage.getItem("gardenLoginTime");

		if (gardenAccess === "true" && loginTime) {
			const currentTime = new Date().getTime();
			const timeDiff = currentTime - parseInt(loginTime);
			const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds

			if (timeDiff < tenMinutes) {
				// Still within 10 minutes, allow access
				setIsAuthorized(true);
			} else {
				// More than 10 minutes, clear authorization and redirect
				localStorage.removeItem("gardenAccess");
				localStorage.removeItem("gardenLoginTime");
				router.push("/garden-gate");
			}
		} else {
			// No authorization, redirect to garden gate
			router.push("/garden-gate");
		}
		setIsLoading(false);
	}, []);

	// Sample questions - you can customize these
	const questions = [
		{
			id: 1,
			type: "choice",
			question: "What's your favorite way to spend time together?",
			options: [
				"🌅 Watching sunrise/sunset",
				"🎬 Movie nights at home",
				"🚶‍♀️ Long walks together",
				"🍽️ Cooking together",
			],
		},
		{
			id: 2,
			type: "text",
			question: "What makes you smile the most about us?",
			placeholder: "Tell me what makes your heart happy...",
		},
		{
			id: 3,
			type: "choice",
			question: "Which season represents our love best?",
			options: [
				"🌸 Spring - Fresh and blooming",
				"☀️ Summer - Warm and bright",
				"🍂 Autumn - Cozy and golden",
				"❄️ Winter - Magical and peaceful",
			],
		},
		{
			id: 4,
			type: "text",
			question: "What's your favorite memory of us?",
			placeholder: "Share that special moment...",
		},
		{
			id: 5,
			type: "choice",
			question: "What's our perfect date?",
			options: [
				"🌙 Stargazing under the night sky",
				"🏖️ Beach picnic at sunset",
				"🎨 Art gallery and coffee",
				"🏔️ Mountain hiking adventure",
			],
		},
	];

	const handleChoiceAnswer = (answer) => {
		setAnswers({ ...answers, [currentQuestion]: answer });
	};

	const handleTextAnswer = (answer) => {
		setAnswers({ ...answers, [currentQuestion]: answer });
	};

	const nextQuestion = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setIsComplete(true);
		}
	};

	const prevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const currentQ = questions[currentQuestion];
	const currentAnswer = answers[currentQuestion];

	// Show loading while checking authorization
	if (isLoading) {
		return (
			<>
				<MusicPlayer />
				<div
					style={{
						minHeight: "100vh",
						background:
							"linear-gradient(135deg, #ffeef8 0%, #e8f5e8 25%, #fff0f5 50%, #f0fff0 75%, #fef7ff 100%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							textAlign: "center",
							fontSize: "24px",
							color: "#666",
						}}
					>
						🌸 Loading... 🌸
					</div>
				</div>
			</>
		);
	}

	// If not authorized, this won't render (redirected above)
	if (!isAuthorized) {
		return null;
	}

	if (isComplete) {
		return (
			<>
				<MusicPlayer />
				<div
					style={{
						minHeight: "100vh",
						background:
							"linear-gradient(135deg, #ffeef8 0%, #e8f5e8 25%, #fff0f5 50%, #f0fff0 75%, #fef7ff 100%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "20px",
						position: "relative",
						overflow: "hidden",
					}}
				>
					{/* Floating decorations */}
					{["💕", "🌸", "💚", "🌿", "💖", "🌺"].map(
						(emoji, index) => (
							<div
								key={index}
								style={{
									position: "absolute",
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									fontSize: `${Math.random() * 20 + 15}px`,
									opacity: 0.3,
									animation: `float ${
										3 + Math.random() * 2
									}s ease-in-out infinite`,
									animationDelay: `${Math.random() * 3}s`,
									pointerEvents: "none",
								}}
							>
								{emoji}
							</div>
						)
					)}

					<div
						style={{
							textAlign: "center",
							background: "rgba(255, 255, 255, 0.9)",
							borderRadius: "30px",
							padding: "50px",
							boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
							border: "3px solid rgba(255, 182, 193, 0.3)",
							maxWidth: "600px",
						}}
					>
						<div style={{ fontSize: "60px", marginBottom: "20px" }}>
							💕✨
						</div>
						<h1
							style={{
								fontSize: "36px",
								background:
									"linear-gradient(45deg, #e91e63, #4caf50, #ff69b4)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
								marginBottom: "30px",
								fontWeight: "bold",
							}}
						>
							Thank You My Love! 💖
						</h1>
						<p
							style={{
								fontSize: "18px",
								color: "#666",
								marginBottom: "30px",
							}}
						>
							Your answers mean the world to me! 🌸
						</p>
						<button
							onClick={() => router.push("/")}
							style={{
								background:
									"linear-gradient(45deg, #e91e63, #4caf50)",
								border: "none",
								borderRadius: "25px",
								padding: "15px 30px",
								fontSize: "18px",
								fontWeight: "bold",
								color: "white",
								cursor: "pointer",
								boxShadow: "0 8px 20px rgba(233, 30, 99, 0.3)",
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
			</>
		);
	}

	return (
		<>
			<MusicPlayer />
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #ffeef8 0%, #e8f5e8 25%, #fff0f5 50%, #f0fff0 75%, #fef7ff 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "20px",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Floating decorations */}
				{[
					"💕",
					"🌸",
					"💚",
					"🌿",
					"💖",
					"🌺",
					"🦋",
					"🌷",
					"💗",
					"🍃",
				].map((emoji, index) => (
					<div
						key={index}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 25 + 15}px`,
							opacity: 0.2,
							animation: `float ${
								3 + Math.random() * 2
							}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 3}s`,
							pointerEvents: "none",
						}}
					>
						{emoji}
					</div>
				))}

				{/* Main Quiz Card */}
				<div
					style={{
						background: "rgba(255, 255, 255, 0.95)",
						borderRadius: "25px",
						padding: "40px",
						boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
						border: "3px solid rgba(255, 182, 193, 0.3)",
						maxWidth: "600px",
						width: "100%",
						position: "relative",
						zIndex: 10,
					}}
				>
					{/* Progress Bar */}
					<div
						style={{
							background: "rgba(255, 182, 193, 0.2)",
							borderRadius: "10px",
							height: "8px",
							marginBottom: "30px",
							overflow: "hidden",
						}}
					>
						<div
							style={{
								background:
									"linear-gradient(45deg, #e91e63, #4caf50)",
								height: "100%",
								width: `${
									((currentQuestion + 1) / questions.length) *
									100
								}%`,
								borderRadius: "10px",
								transition: "width 0.5s ease",
							}}
						/>
					</div>

					{/* Question Counter */}
					<div
						style={{
							textAlign: "center",
							fontSize: "14px",
							color: "#888",
							marginBottom: "20px",
						}}
					>
						Question {currentQuestion + 1} of {questions.length}
					</div>

					{/* Question */}
					<h2
						style={{
							fontSize: "clamp(20px, 5vw, 28px)",
							textAlign: "center",
							marginBottom: "30px",
							color: "#333",
							fontWeight: "bold",
							lineHeight: "1.4",
						}}
					>
						{currentQ.question}
					</h2>

					{/* Answer Options */}
					{currentQ.type === "choice" ? (
						<div style={{ marginBottom: "30px" }}>
							{currentQ.options.map((option, index) => (
								<button
									key={index}
									onClick={() => handleChoiceAnswer(option)}
									style={{
										display: "block",
										width: "100%",
										padding: "15px 20px",
										margin: "10px 0",
										border:
											currentAnswer === option
												? "3px solid #e91e63"
												: "2px solid rgba(255, 182, 193, 0.3)",
										borderRadius: "15px",
										background:
											currentAnswer === option
												? "linear-gradient(45deg, rgba(233, 30, 99, 0.1), rgba(76, 175, 80, 0.1))"
												: "rgba(255, 255, 255, 0.8)",
										fontSize: "16px",
										cursor: "pointer",
										transition: "all 0.3s ease",
										textAlign: "left",
										color: "#333",
									}}
									onMouseOver={(e) => {
										if (currentAnswer !== option) {
											e.target.style.background =
												"rgba(255, 182, 193, 0.1)";
											e.target.style.transform =
												"translateX(5px)";
										}
									}}
									onMouseOut={(e) => {
										if (currentAnswer !== option) {
											e.target.style.background =
												"rgba(255, 255, 255, 0.8)";
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
						<div style={{ marginBottom: "30px" }}>
							<textarea
								value={currentAnswer || ""}
								onChange={(e) =>
									handleTextAnswer(e.target.value)
								}
								placeholder={currentQ.placeholder}
								style={{
									width: "100%",
									minHeight: "120px",
									padding: "20px",
									border: "2px solid rgba(255, 182, 193, 0.3)",
									borderRadius: "15px",
									fontSize: "16px",
									resize: "vertical",
									outline: "none",
									background: "rgba(255, 255, 255, 0.9)",
									color: "#333",
									fontFamily: "inherit",
								}}
								onFocus={(e) =>
									(e.target.style.border =
										"3px solid #e91e63")
								}
								onBlur={(e) =>
									(e.target.style.border =
										"2px solid rgba(255, 182, 193, 0.3)")
								}
							/>
						</div>
					)}

					{/* Navigation Buttons */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							gap: "15px",
						}}
					>
						<button
							onClick={prevQuestion}
							disabled={currentQuestion === 0}
							style={{
								background:
									currentQuestion === 0
										? "#ccc"
										: "linear-gradient(45deg, #4caf50, #81c784)",
								border: "none",
								borderRadius: "20px",
								padding: "12px 25px",
								fontSize: "16px",
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
							💚 Previous
						</button>

						<button
							onClick={nextQuestion}
							disabled={!currentAnswer}
							style={{
								background: !currentAnswer
									? "#ccc"
									: "linear-gradient(45deg, #e91e63, #f06292)",
								border: "none",
								borderRadius: "20px",
								padding: "12px 25px",
								fontSize: "16px",
								fontWeight: "bold",
								color: "white",
								cursor: !currentAnswer
									? "not-allowed"
									: "pointer",
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
								? "💕 Finish"
								: "💖 Next"}
						</button>
					</div>
				</div>

				<style jsx global>{`
					@keyframes floatUp {
						0% {
							transform: translateY(0px);
							opacity: 0.8;
						}
						50% {
							transform: translateY(-20px);
							opacity: 1;
						}
						100% {
							transform: translateY(-40px);
							opacity: 0;
						}
					}

					@keyframes musicFloat {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg);
							opacity: 0.7;
						}
						50% {
							transform: translateY(-15px) rotate(10deg);
							opacity: 1;
						}
					}

					@keyframes musicPulse {
						0%,
						100% {
							box-shadow: 0 8px 25px rgba(255, 20, 147, 0.4),
								0 0 20px rgba(255, 105, 180, 0.3);
						}
						50% {
							box-shadow: 0 8px 25px rgba(255, 20, 147, 0.6),
								0 0 30px rgba(255, 105, 180, 0.5);
						}
					}

					@keyframes musicRipple {
						0% {
							transform: translate(-50%, -50%) scale(1);
							opacity: 0.6;
						}
						100% {
							transform: translate(-50%, -50%) scale(1.5);
							opacity: 0;
						}
					}

					@keyframes float {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg);
						}
						50% {
							transform: translateY(-15px) rotate(180deg);
						}
					}
				`}</style>
			</div>
		</>
	);
}

export default MainComponent;

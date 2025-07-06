"use client";
import { useRouter } from "next/navigation";
import React from "react";
import GentleRain from "../../components/gental-rain";
import GardenTransition from "../../components/garden-transition"; // Import the transition component
function MainComponent() {
	const [noClickCount, setNoClickCount] = React.useState(0);
	const [showPage, setShowPage] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowPage(true);
		}, 1000000); // Adjust delay as needed

		// 🔁 Clean up on unmount
		return () => clearTimeout(timer);
	}, []);

	const questions = [
		"Kavindi, do you like me? Just a little bit? 💕",
		"Dont you have feelings for me? Or am I just dreaming too much? 💕",
		"Kavindi, are you sure there isn’t even a spark between us? Something real, something magical? 💖",
		"Maybe just a tiny bit of love, Kavindi? Something your heart whispers when you see me? 🥺",
		"Come on Kavindi, I know you feel it too… the way we smile, the way we pause… 💘",
		"Please don’t break my heart, Kavindi… I’ve never felt this way about anyone before. 💔",
		"One more chance, Kavindi? I keep holding onto hope because you mean that much to me… 🌹",
		"I promise I’ll make you happy, Kavindi… not just today, but every single day forward. 💝",
		"If love is a risk, then you're the only one I’d ever take it for, Kavindi. Will you give me that chance? 🌟",
		"Kavindi, I’ve waited with so much hope in my heart. Could there be even a small place for me in yours? 💫",
		"I may not be perfect, but what I feel for you is real. Could that ever be enough, Kavindi? 🌈",
		"What You Say Now 😎",
	];

	const noButtonTexts = [
		"No, I’m sorry 💔",
		"Not really... 💭",
		"I don’t think so",
		"It’s not mutual 💧",
		"Sorry, I can’t 💔",
		"No spark here 💬",
		"My heart says no",
		"I don’t feel that",
		"I’m not sure… no",
		"Please don’t wait 💔",
		"It’s not you...",
	];

	const router = useRouter(); // Use Next.js router for navigation

	const catGifs = [
		"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Cute cat with heart eyes
		"https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif", // Sad crying cat
		"https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif", // Cat with broken heart
		"https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif", // Dramatic crying cat
		"https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif", // Cat looking heartbroken
		"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif", // Cat pleading
		"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif", // Cat dramatically falling
	];

	const currentQuestion =
		questions[Math.min(noClickCount, questions.length - 1)];
	const currentNoText =
		noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)];
	const currentCatGif = catGifs[Math.min(noClickCount, catGifs.length - 1)];
	const yesButtonSize = 100 + noClickCount * 20; // Starts at 100px, grows by 20px each click

	const handleNoClick = () => {
		setNoClickCount((prev) => prev + 1);
	};

	// Gif explosion screen

	const handleYesClick = () => {
		router.push("/ask-out/result");
	};


	if (showPage) {
		return (
			<div>
				<GentleRain />

				<div
					style={{
						minHeight: "100vh",
						background:
							"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "20px",
					}}
				>
					<div
						style={{
							textAlign: "center",
							backgroundColor: "white",
							padding: "40px",
							borderRadius: "20px",
							boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
							maxWidth: "600px",
							width: "100%",
						}}
					>
						{noClickCount > 0 && (
							<div
								style={{
									marginBottom: "20px",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<img
									src={currentCatGif}
									alt="Sad cat reaction"
									style={{
										width: "150px",
										height: "150px",
										borderRadius: "15px",
										objectFit: "cover",
										border: "3px solid #ff69b4",
										boxShadow:
											"0 4px 15px rgba(255, 105, 180, 0.3)",
									}}
								/>
							</div>
						)}

						<div style={{ fontSize: "50px", marginBottom: "30px" }}>
							💝
						</div>

						<h1
							style={{
								fontSize: "28px",
								color: "#333",
								marginBottom: "40px",
								fontFamily: "serif",
								lineHeight: "1.4",
							}}
						>
							{currentQuestion}
						</h1>

						<div
							style={{
								display: "flex",
								gap: "20px",
								justifyContent: "center",
								alignItems: "center",
								flexWrap: "wrap",
							}}
						>
							<button
								onClick={handleYesClick}
								style={{
									width: `${yesButtonSize}px`,
									height: "60px",
									backgroundColor: "#4caf50",
									color: "white",
									border: "none",
									borderRadius: "30px",
									fontSize: "20px",
									fontWeight: "bold",
									cursor: "pointer",
									transition: "all 0.3s ease",
									boxShadow:
										"0 4px 15px rgba(76, 175, 80, 0.3)",
								}}
								onMouseOver={(e) => {
									e.target.style.backgroundColor = "#45a049";
									e.target.style.transform = "scale(1.05)";
								}}
								onMouseOut={(e) => {
									e.target.style.backgroundColor = "#4caf50";
									e.target.style.transform = "scale(1)";
								}}
							>
								Yes! 💚
							</button>

							{noClickCount < questions.length && (
								<button
									onClick={handleNoClick}
									style={{
										width: "140px",
										height: "60px",
										backgroundColor: "#f44336",
										color: "white",
										border: "none",
										borderRadius: "30px",
										fontSize: "14px",
										fontWeight: "bold",
										cursor: "pointer",
										transition: "all 0.3s ease",
										boxShadow:
											"0 4px 15px rgba(244, 67, 54, 0.3)",
									}}
									onMouseOver={(e) => {
										e.target.style.backgroundColor =
											"#da190b";
										e.target.style.transform =
											"scale(1.05)";
									}}
									onMouseOut={(e) => {
										e.target.style.backgroundColor =
											"#f44336";
										e.target.style.transform = "scale(1)";
									}}
								>
									{currentNoText}
								</button>
							)}
						</div>

						{noClickCount > 0 && (
							<p
								style={{
									marginTop: "30px",
									fontSize: "16px",
									color: "#666",
									fontStyle: "italic",
								}}
							>
								The "Yes" button is getting bigger... and the
								cat is getting sadder... 😿
							</p>
						)}
					</div>
				</div>
			</div>
		);
	}
	return <GardenTransition />;

}

export default MainComponent;

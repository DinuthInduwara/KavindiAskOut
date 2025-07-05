"use client";
import { useRouter } from "next/navigation";
import React from "react";
import GentleRain from "../../components/gental-rain";

function MainComponent() {
	const [noClickCount, setNoClickCount] = React.useState(0);
	const [showResult, setShowResult] = React.useState(false);
	const [showGifExplosion, setShowGifExplosion] = React.useState(false);
	const [poppedGifs, setPoppedGifs] = React.useState([]);

	const questions = [
		"Kavindi, do you have feelings for me? 💕",
		"Kavindi, are you sure you don't feel something special? 💖",
		"Maybe just a tiny bit of love, Kavindi? 🥺",
		"Come on Kavindi, I know you feel it too... 💘",
		"Please don't break my heart, Kavindi... 💔",
		"One more chance, Kavindi? I really like you... 🌹",
		"I promise I'll make you happy, Kavindi... 💝",
	];

	const noButtonTexts = [
		"No",
		"You're breaking my heart 💔",
		"Please don't hurt me 🥺",
		"I'm crying now 😭",
		"My heart is shattered 💔",
		"Why are you so cruel? 😢",
		"I can't take this anymore 😭💔",
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

	const explosionGifs = [
		"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Cat with heart eyes
		"https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif", // Happy cat
		"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif", // Cute pleading cat
		"https://media.giphy.com/media/3oEjI4sFlp73fvEYgw/giphy.gif", // Heart explosion
		"https://media.giphy.com/media/l0HlSz7F39EwrJ0pG/giphy.gif", // Love hearts floating
		"https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif", // Cute kitten
		"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif", // Dramatic cat
		"https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif", // Cat with hearts
		"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", // Love explosion
		"https://media.giphy.com/media/26BRBKqUiq586bRVm/giphy.gif", // Cute cat dancing
		"https://media.giphy.com/media/l0HlPystfePnAI3G8/giphy.gif", // Hearts and sparkles
		"https://media.giphy.com/media/26BRzozg4TCBXv6QU/giphy.gif", // Adorable kitten
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

	const handleYesClick = () => {
		setShowResult(true);
	};

	const handleCloseClick = () => {
		setShowResult(false);
		setShowGifExplosion(true);

		// Start the gif explosion sequence
		explosionGifs.forEach((gif, index) => {
			setTimeout(() => {
				const newGif = {
					id: Date.now() + index,
					src: gif,
					left: Math.random() * 80 + 10, // 10% to 90% from left
					top: Math.random() * 80 + 10, // 10% to 90% from top
					size: Math.random() * 60 + 80, // 80px to 140px
					rotation: Math.random() * 360,
					delay: index * 200,
				};
				setPoppedGifs((prev) => [...prev, newGif]);
			}, index * 300);
		});

		// Clear explosion after 8 seconds and reset
		setTimeout(() => {
			setShowGifExplosion(false);
			setPoppedGifs([]);
			router.push("/lovely-quiz");
		}, 8000);
	};

	// Gif explosion screen
	if (showGifExplosion) {
		return (
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(45deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #ff9a9e 75%, #fecfef 100%)",
					backgroundSize: "400% 400%",
					animation: "gradientShift 3s ease infinite",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Kavindi name floating */}
				<div
					style={{
						position: "absolute",
						top: "20%",
						left: "50%",
						transform: "translateX(-50%)",
						fontSize: "48px",
						fontWeight: "bold",
						color: "#ff1493",
						textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
						animation:
							"floatName 2s ease-in-out infinite alternate",
						zIndex: 1000,
						fontFamily: "serif",
					}}
				>
					💖 KAVINDI 💖
				</div>
				{/* Popping gifs */}
				{poppedGifs.map((gif) => (
					<div
						key={gif.id}
						style={{
							position: "absolute",
							left: `${gif.left}%`,
							top: `${gif.top}%`,
							width: `${gif.size}px`,
							height: `${gif.size}px`,
							transform: `rotate(${gif.rotation}deg)`,
							animation: `popIn 0.8s ease-out ${
								gif.delay
							}ms both, bounce 2s ease-in-out infinite ${
								gif.delay + 800
							}ms`,
							zIndex: 100,
						}}
					>
						<img
							src={gif.src}
							alt="Love explosion"
							style={{
								width: "100%",
								height: "100%",
								borderRadius: "50%",
								objectFit: "cover",
								border: "4px solid #ff69b4",
								boxShadow:
									"0 8px 25px rgba(255, 105, 180, 0.6)",
							}}
						/>
					</div>
				))}

				{/* Floating hearts */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						pointerEvents: "none",
						zIndex: 50,
					}}
				>
					{[...Array(20)].map((_, i) => (
						<div
							key={i}
							style={{
								position: "absolute",
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								fontSize: `${Math.random() * 30 + 20}px`,
								animation: `floatHeart ${
									3 + Math.random() * 2
								}s ease-in-out infinite`,
								animationDelay: `${Math.random() * 2}s`,
								opacity: 0.8,
							}}
						>
							{
								[
									"💕",
									"💖",
									"💗",
									"💘",
									"💝",
									"💞",
									"💟",
									"❤️",
									"🧡",
									"💛",
									"💚",
									"💙",
									"💜",
								][Math.floor(Math.random() * 13)]
							}
						</div>
					))}
				</div>

				<style jsx global>{`
					@keyframes gradientShift {
						0% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
						100% {
							background-position: 0% 50%;
						}
					}

					@keyframes popIn {
						0% {
							transform: scale(0) rotate(0deg);
							opacity: 0;
						}
						50% {
							transform: scale(1.3) rotate(180deg);
							opacity: 1;
						}
						100% {
							transform: scale(1) rotate(360deg);
							opacity: 1;
						}
					}

					@keyframes bounce {
						0%,
						100% {
							transform: translateY(0px) scale(1);
						}
						50% {
							transform: translateY(-20px) scale(1.1);
						}
					}

					@keyframes floatName {
						0% {
							transform: translateX(-50%) translateY(0px) scale(1);
						}
						100% {
							transform: translateX(-50%) translateY(-15px)
								scale(1.05);
						}
					}

					@keyframes floatHeart {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg);
							opacity: 0.8;
						}
						25% {
							transform: translateY(-30px) rotate(90deg);
							opacity: 1;
						}
						50% {
							transform: translateY(-10px) rotate(180deg);
							opacity: 0.9;
						}
						75% {
							transform: translateY(-25px) rotate(270deg);
							opacity: 1;
						}
					}

					@keyframes fadeInScale {
						0% {
							opacity: 0;
							transform: scale(0.8);
						}
						100% {
							opacity: 1;
							transform: scale(1);
						}
					}

					@keyframes slideUp {
						0% {
							opacity: 0;
							transform: translateY(30px);
						}
						100% {
							opacity: 1;
							transform: translateY(0);
						}
					}
				`}</style>
			</div>
		);
	}

	if (showResult) {
		return (
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
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
						animation: "fadeInScale 0.8s ease-out",
					}}
				>
					<div style={{ fontSize: "60px", marginBottom: "20px" }}>
						🎉💕🎉
					</div>
					<h1
						style={{
							fontSize: "32px",
							color: "#e91e63",
							marginBottom: "30px",
							fontFamily: "serif",
						}}
					>
						Yay! I knew it, Kavindi! 💖
					</h1>

					<div
						style={{
							marginBottom: "30px",
							display: "flex",
							justifyContent: "center",
							gap: "15px",
							flexWrap: "wrap",
						}}
					>
						<img
							src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
							alt="Happy celebration"
							style={{
								width: "80px",
								height: "80px",
								borderRadius: "10px",
								objectFit: "cover",
							}}
						/>
						<img
							src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
							alt="Love hearts"
							style={{
								width: "80px",
								height: "80px",
								borderRadius: "10px",
								objectFit: "cover",
							}}
						/>
						<img
							src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
							alt="Happy cat"
							style={{
								width: "80px",
								height: "80px",
								borderRadius: "10px",
								objectFit: "cover",
							}}
						/>
					</div>

					<div
						style={{
							textAlign: "left",
							fontSize: "16px",
							color: "#444",
							lineHeight: "1.8",
							marginBottom: "30px",
							padding: "20px",
							backgroundColor: "#f8f9fa",
							borderRadius: "15px",
							border: "2px solid #ff69b4",
							animation: "slideUp 1s ease-out 0.3s both",
						}}
					>
						<p style={{ marginBottom: "15px" }}>
							💫{" "}
							<strong>
								Kavindi, you have no idea how long I've been
								waiting for this moment...
							</strong>
						</p>
						<p style={{ marginBottom: "15px" }}>
							🌟 Every day, I tried so hard to get close to you,
							Kavindi. I watched from afar, hoping you'd notice
							the little things I did just for you. Every smile,
							every conversation, every moment we shared meant the
							world to me. 💝
						</p>
						<p style={{ marginBottom: "15px" }}>
							🌹 I spent countless nights thinking about you,
							wondering if you felt the same way. I tried to learn
							everything about you - your favorite things, what
							makes you laugh, what makes you happy. Because
							making you happy became my biggest dream, Kavindi.
							✨
						</p>
						<p style={{ marginBottom: "15px" }}>
							💕 My heart would race every time I saw you. I
							practiced what I'd say, how I'd tell you how I feel.
							I was so scared of rejection, but my feelings for
							you grew stronger every day. You became my sunshine,
							my reason to smile. 🌞
						</p>
						<p style={{ marginBottom: "15px" }}>
							🎭 I know I might have seemed awkward sometimes, or
							maybe I tried too hard. But everything I did came
							from a place of pure love and admiration for the
							amazing person you are, Kavindi. 💖
						</p>
						<p style={{ marginBottom: "0" }}>
							🌈 Now that you've said yes, I promise to cherish
							every moment with you. Thank you for giving my heart
							a chance, Kavindi. You've just made me the happiest
							person alive! 🥰✨💕
						</p>
					</div>

					<button
						onClick={handleCloseClick}
						style={{
							backgroundColor: "#ff69b4",
							color: "white",
							border: "none",
							borderRadius: "25px",
							padding: "12px 30px",
							fontSize: "16px",
							fontWeight: "bold",
							cursor: "pointer",
							transition: "all 0.3s ease",
							boxShadow: "0 4px 15px rgba(255, 105, 180, 0.3)",
						}}
						onMouseOver={(e) => {
							e.target.style.backgroundColor = "#ff1493";
							e.target.style.transform = "scale(1.05)";
						}}
						onMouseOut={(e) => {
							e.target.style.backgroundColor = "#ff69b4";
							e.target.style.transform = "scale(1)";
						}}
					>
						Close 💕
					</button>
				</div>
			</div>
		);
	}

	return (
		<div >
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
								boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
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
								boxShadow: "0 4px 15px rgba(244, 67, 54, 0.3)",
							}}
							onMouseOver={(e) => {
								e.target.style.backgroundColor = "#da190b";
								e.target.style.transform = "scale(1.05)";
							}}
							onMouseOut={(e) => {
								e.target.style.backgroundColor = "#f44336";
								e.target.style.transform = "scale(1)";
							}}
						>
							{currentNoText}
						</button>
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
							The "Yes" button is getting bigger... and the cat is
							getting sadder... 😿
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default MainComponent;

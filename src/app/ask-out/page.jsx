"use client";
import React from "react";
import GardenTransition from "../../components/garden-transition";
import WinterEffect from "../../components/winter-effect";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";

const MoonlitGardenEffects = () => (
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
		{/* Full moon with glow */}
		<div
			style={{
				position: "absolute",
				top: "10%",
				right: "15%",
				width: "120px",
				height: "120px",
				borderRadius: "50%",
				background:
					"radial-gradient(circle, #fff9c4 0%, #f7dc6f 30%, #f4d03f 100%)",
				boxShadow:
					"0 0 60px rgba(255, 249, 196, 0.8), 0 0 120px rgba(255, 249, 196, 0.4)",
				animation: "moonGlow 4s ease-in-out infinite alternate",
				zIndex: 5,
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "20%",
					left: "25%",
					width: "15px",
					height: "15px",
					borderRadius: "50%",
					background: "rgba(0, 0, 0, 0.1)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "40%",
					right: "30%",
					width: "8px",
					height: "8px",
					borderRadius: "50%",
					background: "rgba(0, 0, 0, 0.08)",
				}}
			/>
		</div>

		{/* Moonbeams */}
		{[...Array.from({ length: 10 })].map((_, i) => (
			<div
				key={`moonbeam-${i}`}
				style={{
					position: "absolute",
					top: "15%",
					right: "20%",
					width: "2px",
					height: "200px",
					background:
						"linear-gradient(180deg, rgba(255, 249, 196, 0.6), transparent)",
					transform: `rotate(${i * 45}deg)`,
					transformOrigin: "50% 0%",
					animation: `moonbeamShine 6s ease-in-out infinite ${
						i * 0.3
					}s`,
				}}
			/>
		))}

		{/* Floating night flowers */}
		{[...Array.from({ length: 15 })].map((_, i) => (
			<div
				key={`night-flower-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "22px",
					animation: `nightFloralDance ${
						8 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
				}}
			>
				{
					["🌙", "⭐", "🌟", "💫", "🌸", "🌺"][
						Math.floor(Math.random() * 6)
					]
				}
			</div>
		))}

		{/* Twinkling stars */}
		{[...Array.from({ length: 30 })].map((_, i) => (
			<div
				key={`star-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 60}%`,
					fontSize: `${8 + Math.random() * 8}px`,
					animation: `starTwinkle ${
						2 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 4}s`,
					color: "#fff9c4",
				}}
			>
				✨
			</div>
		))}

		{/* Fireflies */}
		{[...Array.from({ length: 20 })].map((_, i) => (
			<div
				key={`firefly-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					width: "4px",
					height: "4px",
					borderRadius: "50%",
					background: "#f7dc6f",
					boxShadow: "0 0 10px #f7dc6f",
					animation: `fireflyDance ${
						4 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			/>
		))}

		{/* Night moths */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`moth-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "18px",
					animation: `mothFlight ${
						5 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
					filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
				}}
			>
				🦋
			</div>
		))}

		{/* Floating love hearts */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`heart-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "16px",
					animation: `loveFloat ${
						6 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					color: "#ff7675",
					filter: "drop-shadow(0 0 8px rgba(255, 118, 117, 0.4))",
				}}
			>
				💕
			</div>
		))}
	</div>
);

function MainComponent() {
	const [showPage, setShowPage] = React.useState(false);
	const [yesClicked, setyesClicked] = React.useState(false);
	const { switchTrack } = useMusicPlayer();
	const loveFlow = React.useMemo(
		() => ({
			text: "කාවින්දි, ඔයා දන්නවා නේද මම ඔයාට ආදරෙයි කියල, 💕",
			yesLabel: "දන්නවා",
			noLabel: "නැ",
			yes: {
				text: "ඇත්තමයි නේද 😻",
				yesLabel: "ඔව් ඔව්",
				noLabel: "JOKE එකක්",
				no: {
					text: "ඔයා හරිම ආඩම්බරයි නේද 🦋",
					yesLabel: "අනේ නෑ",
					noLabel: "ඔව්! ගොඩක් ",
					yes: {
						text: "ආඩම්බර උනාට මට කැමති නේද 😇",
						yesLabel: "නැ! ආදරෙයි",
						noLabel: "",
						yes: { done: true },
						
					},
					no: {
						text: "දැන්නම් කැමති තමයි. නේද 🫠",
						yesLabel: "නැ! ආදරෙයි",
						noLabel: "",
						yes: { done: true },
					},
				},
				yes: {
					text: "ඔයා කැමතිද මගේ වෙන්න 😘",
					yesLabel: "ඔයාගේ විතරක්ම",
					noLabel: "තාම නැ",
					yes: {
						text: "හැමදාටම",
						yesLabel: "හ්ම්ම්ම් ඔව්!",
						noLabel: "",
						yes: { done: true },
						
					},
					no: {
						text: "දැන්නම් කැමති තමයි. නේද 🫠",
						yesLabel: "හ්ම්ම්ම් ඔව්!",
						noLabel: "",
						yes: { done: true },
					},
				},
			},
			no: {
				text: "බොරු නේද කිව්වේ ඔයා නැ කියල ??? 🥺",
				yesLabel: "ඔව්",
				noLabel: "ඇත්ත",
				no: {
					text: "ඔයා හරිම ආඩම්බරයි නේද 🦋",
					yesLabel: "එහෙම තමයි",
					noLabel: "මම එහෙම නැ",
					yes: {
						text: "දැන් ඇති නේද ආඩම්බර උනා, Come on, just say yes! , දුක  හිතෙනවනෙ ... 😿",
						yesLabel: "හ්ම්ම්ම්",
						noLabel: "",
						yes: { done: true },
					},
					no: {
						text: "චොකලට් එකක් ඩුන්නොත් කැමති නේ 🍫",
						yesLabel: "හ්ම්ම්ම්",
						noLabel: "",
						yes: { done: true },
					},
				},
				yes: {
					text: "කැමති නේහ් ! 💖",
					yesLabel: "හ්ම්ම්ම්",
					noLabel: "නෑ",
					yes: {
						text: "ඇත්තමයි නේද",
						yesLabel: "ඔව් ඇත්තමයි",
						noLabel: "",
						yes: { done: true },
					},
					no: {
						text: "දැන්නම් කැමති තමයි. නේද 🫠",
						yesLabel: "💖 ආදරෙයි",
						noLabel: "",
						yes: { done: true },
					},
				},
			},
		}),
		[]
	);
	const [currentNode, setCurrentNode] = React.useState(loveFlow);
	const [noClickCount, setNoClickCount] = React.useState(0);
	const [yesButtonSize, setYesButtonSize] = React.useState(120);

	React.useEffect(() => {
		switchTrack("/music-2.mp3");
	}, []);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowPage(true);
		}, 10000); // Adjust delay as needed

		// 🔁 Clean up on unmount
		return () => clearTimeout(timer);
	}, []);

	const triggerFinale = (message) => {
		setTimeout(() => {
			setShowPage(false);
			setyesClicked(true);
		}, 500);
		sendMessageTelegram(message || "Yes Clicked! 💖");
	};

	const getYesLabel = (node) =>
		node?.yesLabel && node.yesLabel.trim()
			? node.yesLabel.trim()
			: loveFlow.yesLabel?.trim() || "Yes! 💚";
	const getNoLabel = (node) =>
		node?.noLabel && node.noLabel.trim()
			? node.noLabel.trim()
			: loveFlow.noLabel?.trim() || null;

	const handleBranchClick = (branch) => {
		const nextNode = currentNode?.[branch];
		const clickedLabel =
			branch === "yes" ? getYesLabel(currentNode) : getNoLabel(currentNode);

		if (branch === "no") {
			setNoClickCount((prev) => prev + 1);
			setYesButtonSize((prev) => prev + 15);
		}

		if (!nextNode || nextNode.done || nextNode.text === "Done") {
			triggerFinale(
				`${branch.toUpperCase()} clicked on "${currentNode?.text}"${
					nextNode?.text ? ` -> ${nextNode.text}` : ""
				}`
			);
			return;
		}

		sendMessageTelegram(
			`${branch === "yes" ? "Yes" : "No"} clicked on "${
				currentNode?.text
			}" -> "${nextNode.text}"`
		);
		setCurrentNode(nextNode);
	};

	const loveMessages = [
		[
			"In this enchanted garden where moonbeams dance,",
			"Every star whispers your name, my darling",
			"You are the moon to my night sky ✨",
		],
		[
			"The flowers bloom brighter when you're near 🌸",
			"Even the fireflies pause to admire you",
			"Won't you make this garden complete? 💫",
		],
		[
			"The moon is lonely without your smile 🌙",
			"All the night creatures are rooting for us",
			"Please say yes, sweet angel? 👼",
		],
		[
			"Look how the stars are twinkling for you ⭐",
			"The garden spirits are whispering 'say yes!'",
			"Don't break this magical moment 💔",
		],
		[
			"Even the moths are crying now 🦋💧",
			"The moonlight dims with each 'no'",
			"Please bring joy back to our garden? 🥺",
		],
		[
			"I'll share my virtual cookies with you 🍪✨",
			"The fireflies promise to dance just for us",
			"Sweet treats and love await! 💕",
		],
		[
			"The whole garden is holding its breath 🌿",
			"One 'yes' will make everything bloom again",
			"Please don't let the magic fade away... 🌙💔",
		],
	];

	const catGifs = [
		"https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif",
		"https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
		"https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
		"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
		"https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
		"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
	];

	const currentQuestion = currentNode?.text || "";
	const yesLabel = getYesLabel(currentNode);
	const noLabel = getNoLabel(currentNode);
	const hasNoPath = Boolean(currentNode?.no);
	const currentCatGif =
		catGifs[
			Math.max(0, Math.min(noClickCount - 1, catGifs.length - 1))
		];
	const currentLoveMessage =
		loveMessages[Math.min(noClickCount, loveMessages.length - 1)];

	const nightGardenElements = [
		"🌙",
		"⭐",
		"🌟",
		"💫",
		"🌸",
		"🌺",
		"🦋",
		"💕",
		"🌿",
		"🍃",
		"🌱",
		"🌳",
	];

	if (showPage) {
		return (
			<>
				<div
					style={{
						minHeight: "100vh",
						background:
							"linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #0f1419 100%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						overflow: "hidden",
						animation: "nightBreeze 10s ease-in-out infinite",
					}}
				>
					<MoonlitGardenEffects />

					{/* Night garden celebration elements */}
					{[...Array.from({ length: 20 })].map((_, i) => (
						<div
							key={i}
							style={{
								position: "absolute",
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								fontSize: `${Math.random() * 25 + 15}px`,
								animation: `nightCelebration ${
									3 + Math.random() * 2
								}s ease-in-out infinite`,
								animationDelay: `${Math.random() * 2}s`,
								zIndex: 1,
								filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
							}}
						>
							{
								nightGardenElements[
									Math.floor(
										Math.random() *
											nightGardenElements.length
									)
								]
							}
						</div>
					))}

					<div
						style={{
							textAlign: "center",
							background: "rgba(255, 255, 255, 0.08)",
							borderRadius: "25px",
							padding: "35px",
							maxWidth: "480px",
							width: "90%",
							boxShadow:
								"0 25px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 249, 196, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
							border: "1px solid rgba(255, 249, 196, 0.2)",
							zIndex: 10,
							animation:
								"moonlitGlow 3s ease-in-out infinite alternate",
							backdropFilter: "blur(15px)",
							transform: "scale(1)",
							transition: "transform 0.3s ease",
						}}
					>
						{noClickCount > 0 && (
							<div
								style={{
									marginBottom: "15px",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<img
									src={currentCatGif}
									alt="Sad cat reaction"
									style={{
										width: "120px",
										height: "120px",
										borderRadius: "12px",
										objectFit: "cover",
										border: "2px solid #ff69b4",
										boxShadow:
											"0 4px 15px rgba(255, 105, 180, 0.3)",
									}}
								/>
							</div>
						)}

						<div
							style={{
								fontSize: "60px",
								marginBottom: "15px",
								animation:
									"romanticBounce 3s ease-in-out infinite",
							}}
						>
							🌙💕🌸
						</div>
						<h1
							style={{
								fontSize: "28px",
								background:
									"linear-gradient(45deg, #fff9c4, #f7dc6f, #ff7675, #74b9ff)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
								marginBottom: "20px",
								fontWeight: "bold",
								animation:
									"moonlitShimmer 4s ease-in-out infinite",
							}}
						>
							{currentQuestion}
						</h1>
						<p
							style={{
								fontSize: "16px",
								color: "#fff9c4",
								marginBottom: "8px",
								animation: "loveGlow 5s ease-in-out infinite",
								textShadow: "0 0 8px rgba(255, 249, 196, 0.5)",
							}}
						>
							{currentLoveMessage[0]}
						</p>
						<p
							style={{
								fontSize: "15px",
								color: "#f7dc6f",
								marginBottom: "8px",
								animation:
									"loveGlow 5s ease-in-out infinite 1s",
								textShadow: "0 0 6px rgba(247, 220, 111, 0.4)",
							}}
						>
							{currentLoveMessage[1]}
						</p>
						<p
							style={{
								fontSize: "14px",
								color: "#ff7675",
								marginBottom: "20px",
								animation:
									"loveGlow 5s ease-in-out infinite 2s",
								textShadow: "0 0 6px rgba(255, 118, 117, 0.4)",
							}}
						>
							{currentLoveMessage[2]}
						</p>

						<div
							style={{
								display: "flex",
								gap: "15px",
								justifyContent: "center",
								alignItems: "center",
								flexWrap: "wrap",
								marginBottom: "20px",
							}}
						>
							<button
								onClick={() => handleBranchClick("yes")}
								style={{
									width: `${yesButtonSize}px`,
									height: "50px",
									backgroundColor: "#4caf50",
									color: "white",
									border: "none",
									borderRadius: "25px",
									fontSize: "18px",
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
								{yesLabel}
							</button>

							{hasNoPath && noLabel && open && (
								<button
									onClick={() => handleBranchClick("no")}
									style={{
										width: "120px",
										height: "50px",
										backgroundColor: "#f44336",
										color: "white",
										border: "none",
										borderRadius: "25px",
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
									{noLabel}
								</button>
							)}
						</div>

						{noClickCount > 0 && (
							<p
								style={{
									marginBottom: "12px",
									fontSize: "13px",
									color: "rgba(255, 255, 255, 0.8)",
									fontStyle: "italic",
									textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
								}}
							>
								The "Yes" button is getting bigger... and the
								cat is getting sadder... 😿
							</p>
						)}

						<div
							style={{
								fontSize: "20px",
								animation:
									"nightGardenDance 4s ease-in-out infinite",
								filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
							}}
						>
							🌙 💕 🌸 ⭐ 🌙
						</div>
					</div>
				</div>
			</>
		);
	}

	if (yesClicked) {
		return <WinterEffect />;
	}
	return <GardenTransition />;
}

export default MainComponent;

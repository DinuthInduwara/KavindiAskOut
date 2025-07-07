"use client";
import React from "react";
const SnowyLoveEffects = () => (
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
		{[...Array.from({ length: 50 })].map((_, i) => (
			<div
				key={`snowflake-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `-10px`,
					fontSize: `${8 + Math.random() * 12}px`,
					color: "rgba(255, 255, 255, 0.9)",
					animation: `snowFall ${
						8 + Math.random() * 6
					}s linear infinite ${Math.random() * 5}s`,
					zIndex: 3,
					filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
				}}
			>
				{["❄️", "❅", "❆", "✻", "✼", "❋"][Math.floor(Math.random() * 6)]}
			</div>
		))}

		{[...Array.from({ length: 15 })].map((_, i) => (
			<div
				key={`love-letter-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "18px",
					animation: `loveLetterFloat ${
						6 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					filter: "drop-shadow(0 0 15px rgba(255, 182, 193, 0.8))",
				}}
			>
				{
					["💌", "💕", "💖", "💝", "💗", "💘"][
						Math.floor(Math.random() * 6)
					]
				}
			</div>
		))}

		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={`winter-heart-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "16px",
					animation: `winterHeartDance ${
						5 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
					color: "#ff69b4",
					filter: "drop-shadow(0 0 12px rgba(255, 105, 180, 0.7))",
				}}
			>
				💕
			</div>
		))}

		{[...Array.from({ length: 35 })].map((_, i) => (
			<div
				key={`sparkle-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: `${6 + Math.random() * 8}px`,
					animation: `gentleSparkle ${
						3 + Math.random() * 2
					}s ease-in-out infinite ${Math.random() * 3}s`,
					color: "rgba(255, 255, 255, 1)",
					filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))",
				}}
			>
				✨
			</div>
		))}

		{[...Array.from({ length: 6 })].map((_, i) => (
			<div
				key={`love-bird-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 60}%`,
					fontSize: "20px",
					animation: `loveBirdFly ${
						8 + Math.random() * 4
					}s ease-in-out infinite ${Math.random() * 3}s`,
					filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))",
				}}
			>
				🕊️
			</div>
		))}

		{[...Array.from({ length: 10 })].map((_, i) => (
			<div
				key={`winter-flower-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "22px",
					animation: `winterFlowerSway ${
						7 + Math.random() * 3
					}s ease-in-out infinite ${Math.random() * 2}s`,
					filter: "drop-shadow(0 0 15px rgba(255, 182, 193, 0.7))",
				}}
			>
				{["🌹", "🌸", "🌺", "🌷"][Math.floor(Math.random() * 4)]}
			</div>
		))}
	</div>
);

function MainComponent() {
	const [reactions, setReactions] = React.useState([]);
	const [showMessage, setShowMessage] = React.useState(false);
	const [heartClicks, setHeartClicks] = React.useState(0);
	const [snowflakeClicks, setSnowflakeClicks] = React.useState(0);
	const [showNextButton, setShowNextButton] = React.useState(false);

	const winterElements = [
		"❄️",
		"❅",
		"❆",
		"💌",
		"💕",
		"🌹",
		"🌸",
		"🕊️",
		"✨",
		"💖",
		"🔥",
		"☕",
	];

	const reactionEmojis = [
		"💕",
		"😍",
		"🥰",
		"💖",
		"🌹",
		"✨",
		"💌",
		"🦋",
		"🌸",
		"💝",
	];

	const addReaction = (emoji, event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const newReaction = {
			id: Date.now() + Math.random(),
			emoji,
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		};

		setReactions((prev) => [...prev, newReaction]);

		setTimeout(() => {
			setReactions((prev) => prev.filter((r) => r.id !== newReaction.id));
		}, 2000);
	};

	const handleTopEmojiClick = (emoji, event) => {
		// Add reaction effect for top emojis
		const rect = document
			.querySelector('div[style*="minHeight: 100vh"]')
			.getBoundingClientRect();
		const newReaction = {
			id: Date.now() + Math.random(),
			emoji: emoji + "✨",
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		};

		setReactions((prev) => [...prev, newReaction]);

		setTimeout(() => {
			setReactions((prev) => prev.filter((r) => r.id !== newReaction.id));
		}, 2000);

		// Show special message for top emoji clicks
		setShowMessage(true);
		setTimeout(() => setShowMessage(false), 3000);

		// Trigger next button to show
		setShowNextButton(true);
	};

	const handleSnowflakeClick = () => {
		setSnowflakeClicks((prev) => prev + 1);
		if (snowflakeClicks >= 1) {
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
		}
		// Show next button after clicking
		setTimeout(() => setShowNextButton(true), 2000);
	};

	const handleHeartClick = () => {
		setHeartClicks((prev) => prev + 1);
		if (heartClicks >= 2) {
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 3000);
		}
	};

	const goToNextPage = () => {
		// You can change this to navigate to your desired next page
		window.location.href = "/next-page";
	};

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowMessage(true);
			setTimeout(() => setShowMessage(false), 4000);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	// Show next button after some time automatically
	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowNextButton(true);
		}, 10000); // Show after 10 seconds
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"radial-gradient(ellipse at top, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #a8e6cf 75%, #88d8c0 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					animation: "smoothColorFlow 15s ease-in-out infinite",
				}}
			>
				<SnowyLoveEffects />

				{reactions.map((reaction) => (
					<div
						key={reaction.id}
						style={{
							position: "absolute",
							left: reaction.x,
							top: reaction.y,
							fontSize: "28px",
							animation: "reactionFloat 2s ease-out forwards",
							pointerEvents: "none",
							zIndex: 100,
							filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
						}}
					>
						{reaction.emoji}
					</div>
				))}

				{showMessage && (
					<div
						style={{
							position: "fixed",
							top: "20px",
							left: "50%",
							transform: "translateX(-50%)",
							background: "rgba(255, 255, 255, 0.25)",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
							padding: "18px 30px",
							borderRadius: "30px",
							fontSize: "17px",
							fontFamily: "Dancing Script, cursive",
							fontWeight: "600",
							color: "#2d1b69",
							animation: "messageSlideIn 0.5s ease-out",
							zIndex: 1000,
							boxShadow:
								"0 15px 35px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
							border: "1px solid rgba(255, 255, 255, 0.3)",
							textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
						}}
					>
						❄️ You're as beautiful as fresh snow! Keep exploring for
						winter magic ❄️
					</div>
				)}

				{showNextButton && (
					<button
						onClick={goToNextPage}
						style={{
							position: "fixed",
							bottom: "30px",
							right: "30px",
							background: "rgba(255, 255, 255, 0.2)",
							backdropFilter: "blur(25px)",
							WebkitBackdropFilter: "blur(25px)",
							border: "2px solid rgba(255, 255, 255, 0.3)",
							borderRadius: "50px",
							padding: "15px 30px",
							fontSize: "18px",
							fontFamily: "Dancing Script, cursive",
							fontWeight: "600",
							color: "#2d1b69",
							cursor: "pointer",
							animation: "nextButtonGlow 3s ease-in-out infinite",
							zIndex: 1000,
							boxShadow:
								"0 15px 35px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
							transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
							textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
						}}
						onMouseEnter={(e) => {
							e.target.style.transform =
								"scale(1.1) translateY(-3px)";
							e.target.style.background =
								"rgba(255, 255, 255, 0.3)";
							e.target.style.boxShadow =
								"0 20px 45px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)";
						}}
						onMouseLeave={(e) => {
							e.target.style.transform =
								"scale(1) translateY(0px)";
							e.target.style.background =
								"rgba(255, 255, 255, 0.2)";
							e.target.style.boxShadow =
								"0 15px 35px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
						}}
					>
						Continue Reading ✨ →
					</button>
				)}

				{[...Array.from({ length: 15 })].map((_, i) => (
					<div
						key={i}
						onClick={(e) =>
							handleTopEmojiClick(
								winterElements[
									Math.floor(
										Math.random() * winterElements.length
									)
								],
								e
							)
						}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 25 + 15}px`,
							animation: `winterCelebration ${
								4 + Math.random() * 3
							}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
							zIndex: 1,
							filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))",
							cursor: "pointer",
							transition: "all 0.3s ease",
							pointerEvents: "auto",
						}}
						onMouseEnter={(e) => {
							e.target.style.transform =
								"scale(1.3) rotate(15deg)";
							e.target.style.filter =
								"drop-shadow(0 0 20px rgba(255, 255, 255, 1))";
						}}
						onMouseLeave={(e) => {
							e.target.style.transform = "scale(1) rotate(0deg)";
							e.target.style.filter =
								"drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))";
						}}
					>
						{
							winterElements[
								Math.floor(
									Math.random() * winterElements.length
								)
							]
						}
					</div>
				))}

				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.08)",
						backdropFilter: "blur(40px)",
						WebkitBackdropFilter: "blur(40px)",
						borderRadius: "35px",
						padding: "50px",
						maxWidth: "65vw",
						width: "90%",
						boxShadow:
							"0 25px 50px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
						border: "1px solid rgba(255, 255, 255, 0.2)",
						zIndex: 10,
						animation: "glassFloat 6s ease-in-out infinite",
						transform: "scale(1)",
						transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
						position: "relative",
						overflow: "hidden",
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform =
							"scale(1.02) translateY(-5px)";
						e.currentTarget.style.boxShadow =
							"0 35px 70px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
						e.currentTarget.style.background =
							"rgba(255, 255, 255, 0.12)";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform =
							"scale(1) translateY(0px)";
						e.currentTarget.style.boxShadow =
							"0 25px 50px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
						e.currentTarget.style.background =
							"rgba(255, 255, 255, 0.08)";
					}}
				>
					{/* Floating glass orbs inside content box */}
					<div
						style={{
							position: "absolute",
							top: "10%",
							left: "5%",
							width: "20px",
							height: "20px",
							background: "rgba(255, 255, 255, 0.3)",
							borderRadius: "50%",
							animation: "floatingOrb 8s ease-in-out infinite",
							filter: "blur(1px)",
						}}
					></div>
					<div
						style={{
							position: "absolute",
							top: "20%",
							right: "8%",
							width: "15px",
							height: "15px",
							background: "rgba(255, 182, 193, 0.4)",
							borderRadius: "50%",
							animation: "floatingOrb 6s ease-in-out infinite 2s",
							filter: "blur(1px)",
						}}
					></div>
					<div
						style={{
							position: "absolute",
							bottom: "15%",
							left: "10%",
							width: "18px",
							height: "18px",
							background: "rgba(255, 255, 255, 0.25)",
							borderRadius: "50%",
							animation: "floatingOrb 7s ease-in-out infinite 1s",
							filter: "blur(1px)",
						}}
					></div>
					<div
						style={{
							position: "absolute",
							bottom: "25%",
							right: "5%",
							width: "12px",
							height: "12px",
							background: "rgba(255, 105, 180, 0.3)",
							borderRadius: "50%",
							animation: "floatingOrb 9s ease-in-out infinite 3s",
							filter: "blur(1px)",
						}}
					></div>

					<div
						style={{
							fontSize: "75px",
							marginBottom: "25px",
							animation: "magicalBounce 4s ease-in-out infinite",
							cursor: "pointer",
							filter: "drop-shadow(0 0 25px rgba(255, 255, 255, 0.9))",
							position: "relative",
						}}
						onClick={handleSnowflakeClick}
					>
						<span
							style={{
								display: "inline-block",
								animation: "iconDance 3s ease-in-out infinite",
							}}
						>
							❄️
						</span>
						<span
							style={{
								display: "inline-block",
								animation:
									"iconDance 3s ease-in-out infinite 0.5s",
								margin: "0 5px",
							}}
						>
							💕
						</span>
						<span
							style={{
								display: "inline-block",
								animation:
									"iconDance 3s ease-in-out infinite 1s",
							}}
						>
							🌹
						</span>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "20px",
							marginBottom: "35px",
							flexWrap: "wrap",
						}}
					>
						{reactionEmojis.slice(0, 5).map((emoji, index) => (
							<button
								key={index}
								onClick={(e) => addReaction(emoji, e)}
								style={{
									background: "rgba(255, 255, 255, 0.15)",
									backdropFilter: "blur(20px)",
									WebkitBackdropFilter: "blur(20px)",
									border: "2px solid rgba(255, 255, 255, 0.25)",
									borderRadius: "50%",
									width: "70px",
									height: "70px",
									fontSize: "28px",
									cursor: "pointer",
									transition:
										"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
									animation: `gentleFloat 3s ease-in-out infinite ${
										index * 0.3
									}s`,
									boxShadow:
										"0 10px 25px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
									position: "relative",
									overflow: "hidden",
								}}
								onMouseEnter={(e) => {
									e.target.style.transform =
										"scale(1.25) rotate(15deg) translateY(-5px)";
									e.target.style.background =
										"rgba(255, 255, 255, 0.25)";
									e.target.style.boxShadow =
										"0 15px 35px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
									e.target.style.borderColor =
										"rgba(255, 255, 255, 0.4)";
								}}
								onMouseLeave={(e) => {
									e.target.style.transform =
										"scale(1) rotate(0deg) translateY(0px)";
									e.target.style.background =
										"rgba(255, 255, 255, 0.15)";
									e.target.style.boxShadow =
										"0 10px 25px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
									e.target.style.borderColor =
										"rgba(255, 255, 255, 0.25)";
								}}
							>
								<span
									style={{
										position: "relative",
										zIndex: 1,
									}}
								>
									{emoji}
								</span>
								<div
									style={{
										position: "absolute",
										top: "-50%",
										left: "-50%",
										width: "200%",
										height: "200%",
										background:
											"linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
										animation:
											"shimmer 2s ease-in-out infinite",
										pointerEvents: "none",
									}}
								></div>
							</button>
						))}
					</div>

					<div
						style={{
							background: "rgba(255, 255, 255, 0.05)",
							backdropFilter: "blur(15px)",
							WebkitBackdropFilter: "blur(15px)",
							borderRadius: "25px",
							padding: "35px",
							margin: "20px 0",
							border: "1px solid rgba(255, 255, 255, 0.1)",
							position: "relative",
						}}
					>
						<p
							style={{
								fontSize: "22px",
								lineHeight: "1.9",
								fontFamily: "Crimson Text, serif",
								fontWeight: "400",
								letterSpacing: "0.8px",
								background:
									"linear-gradient(135deg, #2d1b69 0%, #ff69b4 25%, #8a2be2 50%, #ff1493 75%, #2d1b69 100%)",
								backgroundSize: "400% 400%",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								animation:
									"gradientShift 6s ease-in-out infinite",
								textShadow: "none",
								position: "relative",
							}}
						>
							<span
								style={{
									fontSize: "32px",
									fontFamily: "Great Vibes, cursive",
									fontWeight: "400",
									display: "block",
									marginBottom: "20px",
									background:
										"linear-gradient(45deg, #ff1493, #ff69b4, #da70d6)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									animation:
										"titleGlow 3s ease-in-out infinite alternate",
								}}
							>
								✨ My Dearest Winter Angel ✨
							</span>
							<span
								style={{
									fontSize: "18px",
									fontFamily: "Libre Baskerville, serif",
									fontStyle: "italic",
									display: "block",
									marginBottom: "25px",
									opacity: "0.9",
									background:
										"linear-gradient(90deg, #6a5acd, #ff69b4)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								"In winter's embrace, I found my forever
								spring..."
							</span>
							Like winter's first kiss on a sleepy dawn, your
							presence has gently covered every corner of my
							heart. In this frosty season of shimmering silence
							and soft sparkles, your love is the only warmth I
							seek. ❄️
							<br />
							<br />
							<span
								style={{
									fontSize: "20px",
									fontFamily: "Dancing Script, cursive",
									fontWeight: "600",
									background:
										"linear-gradient(45deg, #ff69b4, #da70d6, #ff1493)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								With every snowflake that falls, I find myself
								falling again—for your smile, your voice, your
								light.
							</span>{" "}
							You are my serene snowfall in a chaotic world,
							softening my soul with every breath you take. 💕
							<br />
							<br />
							If the stars ever freeze in the sky, I'd still find
							my way to you—guided by the sparkle in your eyes and
							the warmth of our memories dancing like flames in
							the cold. 🌹
							<br />
							<br />
							<span
								style={{
									fontFamily: "Great Vibes, cursive",
									fontSize: "26px",
									fontWeight: "400",
									background:
										"linear-gradient(45deg, #ff69b4, #da70d6, #ff1493)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									display: "block",
									marginTop: "20px",
									animation:
										"signatureFloat 4s ease-in-out infinite",
								}}
							>
								Forever yours, wrapped in winter whispers and
								starlight,
								<br />
								💖 Your Winter Lovebird
							</span>
						</p>
					</div>

					<div
						style={{
							fontSize: "28px",
							animation:
								"magicalGardenDance 5s ease-in-out infinite",
							filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))",
							marginTop: "30px",
							marginBottom: "20px",
						}}
					>
						<span
							style={{
								display: "inline-block",
								animation: "sparkleRotate 4s linear infinite",
							}}
						>
							❄️
						</span>{" "}
						<span
							style={{
								display: "inline-block",
								animation: "heartPulse 2s ease-in-out infinite",
							}}
						>
							💕
						</span>{" "}
						<span
							style={{
								display: "inline-block",
								animation:
									"sparkleRotate 4s linear infinite 1s",
							}}
						>
							🌹
						</span>{" "}
						<span
							style={{
								display: "inline-block",
								animation:
									"sparkleRotate 4s linear infinite 2s",
							}}
						>
							✨
						</span>{" "}
						<span
							style={{
								display: "inline-block",
								animation:
									"sparkleRotate 4s linear infinite 3s",
							}}
						>
							❄️
						</span>
					</div>

					<div
						style={{
							marginTop: "25px",
							fontSize: "18px",
							fontFamily: "Dancing Script, cursive",
							fontWeight: "600",
							background:
								"linear-gradient(45deg, #ff1493, #ff69b4, #da70d6)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							animation: "gentlePulse 2s ease-in-out infinite",
							opacity: 0.9,
						}}
					>
						❄️ Click the snowflake above and emoji buttons for
						winter magic! ❄️
					</div>
				</div>

				<style jsx global>{`
					@keyframes smoothColorFlow {
						0% {
							background: radial-gradient(
								ellipse at top,
								#ff9a9e 0%,
								#fecfef 25%,
								#fecfef 50%,
								#a8e6cf 75%,
								#88d8c0 100%
							);
						}
						20% {
							background: radial-gradient(
								ellipse at right,
								#ffecd2 0%,
								#fcb69f 25%,
								#ff9a9e 50%,
								#fecfef 75%,
								#a8e6cf 100%
							);
						}
						40% {
							background: radial-gradient(
								ellipse at bottom,
								#a8e6cf 0%,
								#88d8c0 25%,
								#ff9a9e 50%,
								#fecfef 75%,
								#ffecd2 100%
							);
						}
						60% {
							background: radial-gradient(
								ellipse at left,
								#fecfef 0%,
								#ff9a9e 25%,
								#a8e6cf 50%,
								#88d8c0 75%,
								#ffecd2 100%
							);
						}
						80% {
							background: radial-gradient(
								ellipse at center,
								#ff69b4 0%,
								#da70d6 25%,
								#ff9a9e 50%,
								#fecfef 75%,
								#a8e6cf 100%
							);
						}
						100% {
							background: radial-gradient(
								ellipse at top,
								#ff9a9e 0%,
								#fecfef 25%,
								#fecfef 50%,
								#a8e6cf 75%,
								#88d8c0 100%
							);
						}
					}

					@keyframes nextButtonGlow {
						0%,
						100% {
							box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2),
								inset 0 1px 0 rgba(255, 255, 255, 0.4);
							border-color: rgba(255, 255, 255, 0.3);
						}
						50% {
							box-shadow: 0 20px 45px rgba(255, 105, 180, 0.4),
								inset 0 1px 0 rgba(255, 255, 255, 0.5);
							border-color: rgba(255, 105, 180, 0.5);
						}
					}

					@keyframes fluidGradient {
						0%,
						100% {
							background: radial-gradient(
								ellipse at top,
								#ff9a9e 0%,
								#fecfef 25%,
								#fecfef 50%,
								#a8e6cf 75%,
								#88d8c0 100%
							);
						}
						25% {
							background: radial-gradient(
								ellipse at right,
								#ffecd2 0%,
								#fcb69f 25%,
								#ff9a9e 50%,
								#fecfef 75%,
								#a8e6cf 100%
							);
						}
						50% {
							background: radial-gradient(
								ellipse at bottom,
								#a8e6cf 0%,
								#88d8c0 25%,
								#ff9a9e 50%,
								#fecfef 75%,
								#ffecd2 100%
							);
						}
						75% {
							background: radial-gradient(
								ellipse at left,
								#fecfef 0%,
								#ff9a9e 25%,
								#a8e6cf 50%,
								#88d8c0 75%,
								#ffecd2 100%
							);
						}
					}

					@keyframes glassFloat {
						0%,
						100% {
							transform: translateY(0px) scale(1);
							backdrop-filter: blur(25px);
						}
						50% {
							transform: translateY(-10px) scale(1.01);
							backdrop-filter: blur(30px);
						}
					}

					@keyframes magicalBounce {
						0%,
						100% {
							transform: translateY(0) scale(1) rotate(0deg);
						}
						25% {
							transform: translateY(-12px) scale(1.05)
								rotate(2deg);
						}
						50% {
							transform: translateY(-18px) scale(1.08)
								rotate(-1deg);
						}
						75% {
							transform: translateY(-8px) scale(1.03) rotate(1deg);
						}
					}

					@keyframes textShimmer {
						0% {
							background-position: 0% 50%;
						}
						100% {
							background-position: 100% 50%;
						}
					}

					@keyframes magicalGardenDance {
						0%,
						100% {
							transform: scale(1) rotate(0deg);
						}
						25% {
							transform: scale(1.1) rotate(5deg);
						}
						50% {
							transform: scale(1.15) rotate(-3deg);
						}
						75% {
							transform: scale(1.08) rotate(8deg);
						}
					}

					@keyframes reactionFloat {
						0% {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
						100% {
							opacity: 0;
							transform: translateY(-100px) scale(1.5);
						}
					}

					@keyframes messageSlideIn {
						from {
							opacity: 0;
							transform: translateX(-50%) translateY(-20px);
						}
						to {
							opacity: 1;
							transform: translateX(-50%) translateY(0);
						}
					}

					@keyframes gentlePulse {
						0%,
						100% {
							opacity: 0.7;
						}
						50% {
							opacity: 1;
						}
					}

					@keyframes gentleFloat {
						0%,
						100% {
							transform: translateY(0) rotate(0deg);
						}
						50% {
							transform: translateY(-5px) rotate(5deg);
						}
					}

					@keyframes snowFall {
						0% {
							transform: translateY(-10px) translateX(0px)
								rotate(0deg);
							opacity: 1;
						}
						100% {
							transform: translateY(100vh) translateX(100px)
								rotate(360deg);
							opacity: 0;
						}
					}

					@keyframes loveLetterFloat {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
							opacity: 0.8;
						}
						25% {
							transform: translate(20px, -15px) rotate(5deg);
							opacity: 1;
						}
						50% {
							transform: translate(-15px, -25px) rotate(-3deg);
							opacity: 0.9;
						}
						75% {
							transform: translate(25px, -10px) rotate(8deg);
							opacity: 1;
						}
					}

					@keyframes winterHeartDance {
						0%,
						100% {
							transform: translateY(0px) scale(1);
							opacity: 0.8;
						}
						50% {
							transform: translateY(-20px) scale(1.2);
							opacity: 1;
						}
					}

					@keyframes gentleSparkle {
						0%,
						100% {
							opacity: 0.4;
							transform: scale(0.8);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
					}

					@keyframes loveBirdFly {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
						}
						33% {
							transform: translate(50px, -20px) rotate(10deg);
						}
						66% {
							transform: translate(-40px, -30px) rotate(-8deg);
						}
					}

					@keyframes winterFlowerSway {
						0%,
						100% {
							transform: rotate(0deg) scale(1);
						}
						50% {
							transform: rotate(8deg) scale(1.1);
						}
					}

					@keyframes winterCelebration {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg) scale(1);
							opacity: 0.7;
						}
						50% {
							transform: translateY(-25px) rotate(180deg)
								scale(1.2);
							opacity: 1;
						}
					}

					@keyframes floatingOrb {
						0%,
						100% {
							transform: translateY(0) rotate(0deg);
						}
						50% {
							transform: translateY(-5px) rotate(5deg);
						}
					}

					@keyframes iconDance {
						0%,
						100% {
							transform: translateY(0) rotate(0deg);
						}
						50% {
							transform: translateY(-5px) rotate(5deg);
						}
					}

					@keyframes titleGlow {
						0%,
						100% {
							transform: translateY(0) rotate(0deg);
						}
						50% {
							transform: translateY(-5px) rotate(5deg);
						}
					}

					@keyframes signatureFloat {
						0%,
						100% {
							transform: translateY(0) rotate(0deg);
						}
						50% {
							transform: translateY(-5px) rotate(5deg);
						}
					}

					@keyframes sparkleRotate {
						0%,
						100% {
							transform: rotate(0deg);
						}
						50% {
							transform: rotate(360deg);
						}
					}

					@keyframes heartPulse {
						0%,
						100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.2);
						}
					}

					@keyframes shimmer {
						0%,
						100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.2);
						}
					}

					@keyframes gradientShift {
						0%,
						100% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
					}
				`}</style>
			</div>
		</>
	);
}

export default MainComponent;

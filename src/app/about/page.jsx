"use client";
import React from "react";

function MainComponent() {
	const [isVisible, setIsVisible] = React.useState({});
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible((prev) => ({
							...prev,
							[entry.target.id]: true,
						}));
					}
				});
			},
			{ threshold: 0.1 }
		);

		const sections = document.querySelectorAll('[id^="section-"]');
		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	const galleryImages = [
		{
			src: "/romantic-sunset.jpg",
			alt: "Beautiful sunset representing our eternal love",
		},
		{
			src: "/couple-hands.jpg",
			alt: "Two hands intertwined symbolizing our unbreakable bond",
		},
		{
			src: "/heart-shaped-clouds.jpg",
			alt: "Heart-shaped clouds in the sky like our love",
		},
		{
			src: "/romantic-dinner.jpg",
			alt: "Candlelit dinner representing our intimate moments",
		},
		{
			src: "/love-letters.jpg",
			alt: "Love letters expressing my deepest feelings",
		},
		{
			src: "/wedding-rings.jpg",
			alt: "Wedding rings symbolizing our eternal commitment",
		},
	];

	const FloatingHearts = () => {
		const heartEmojis = [
			"💖",
			"💕",
			"💗",
			"💝",
			"💘",
			"💞",
			"💓",
			"💟",
			"❤️",
			"🌹",
			"💐",
			"🦋",
			"✨",
			"🌸",
			"💫",
		];

		return (
			<>
				{Array.from({ length: 20 }, (_, i) => (
					<div
						key={i}
						style={{
							position: "fixed",
							fontSize: Math.random() * 15 + 20 + "px",
							left: Math.random() * 100 + "%",
							top: Math.random() * 100 + "%",
							animation: `floatingHeart${i % 4} ${
								8 + Math.random() * 6
							}s ease-in-out infinite`,
							animationDelay: Math.random() * 8 + "s",
							opacity: 0.3 + Math.random() * 0.2,
							zIndex: 0,
							pointerEvents: "none",
							color: `hsl(${320 + Math.random() * 40}, 70%, ${
								60 + Math.random() * 20
							}%)`,
						}}
					>
						{heartEmojis[i % heartEmojis.length]}
					</div>
				))}
			</>
		);
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, #ffeef8 0%, #ffe0f0 25%, #ffd6e8 50%, #ffcce0 75%, #ffc2d8 100%)",
				position: "relative",
				overflow: "hidden",
				fontFamily: "Georgia, serif",
			}}
		>
			<FloatingHearts />

			{/* Title Section */}
			<section
				id="section-title"
				style={{
					padding: "80px 20px 60px",
					textAlign: "center",
					position: "relative",
					zIndex: 10,
				}}
			>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.15)",
						backdropFilter: "blur(20px)",
						borderRadius: "30px",
						padding: "40px",
						border: "2px solid rgba(255, 255, 255, 0.3)",
						boxShadow:
							"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
						transform: isVisible["section-title"]
							? "translateY(0)"
							: "translateY(50px)",
						opacity: isVisible["section-title"] ? 1 : 0,
						transition:
							"all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<h1
						style={{
							fontSize: "clamp(2.5rem, 6vw, 4rem)",
							background:
								"linear-gradient(45deg, #d63384, #e91e63, #f06292)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							marginBottom: "20px",
							fontWeight: "bold",
							textShadow: "0 4px 8px rgba(214, 51, 132, 0.3)",
						}}
					>
						💖 My Heart's Journey to You 💖
					</h1>
					<p
						style={{
							fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
							color: "#8e4162",
							maxWidth: "800px",
							margin: "0 auto",
							lineHeight: "1.6",
							fontStyle: "italic",
						}}
					>
						A story of love, dedication, and the beautiful struggles
						that brought us together
					</p>
				</div>
			</section>

			{/* Hardships Section */}
			<section
				id="section-hardships"
				style={{
					padding: "60px 20px",
					maxWidth: "1200px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.15)",
						backdropFilter: "blur(20px)",
						borderRadius: "30px",
						padding: "40px",
						border: "2px solid rgba(255, 255, 255, 0.3)",
						boxShadow:
							"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
						transform: isVisible["section-hardships"]
							? "translateY(0)"
							: "translateY(50px)",
						opacity: isVisible["section-hardships"] ? 1 : 0,
						transition:
							"all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 2.5rem)",
							color: "#d63384",
							textAlign: "center",
							marginBottom: "30px",
							fontWeight: "bold",
						}}
					>
						🌹 The Beautiful Struggle 🌹
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(300px, 1fr))",
							gap: "30px",
							marginTop: "40px",
						}}
					>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "25px",
								borderRadius: "20px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							<h3
								style={{
									color: "#d63384",
									fontSize: "1.3rem",
									marginBottom: "15px",
								}}
							>
								💻 Coding Through Tears
							</h3>
							<p style={{ color: "#8e4162", lineHeight: "1.6" }}>
								Every line of code was written with trembling
								hands, thinking of you. Late nights turned into
								early mornings as I poured my soul into creating
								something worthy of your love.
							</p>
						</div>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "25px",
								borderRadius: "20px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							<h3
								style={{
									color: "#d63384",
									fontSize: "1.3rem",
									marginBottom: "15px",
								}}
							>
								🎨 Design Perfection
							</h3>
							<p style={{ color: "#8e4162", lineHeight: "1.6" }}>
								Countless hours spent choosing the perfect
								colors, animations, and layouts. Nothing was
								good enough because you deserve nothing but
								perfection, my darling.
							</p>
						</div>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "25px",
								borderRadius: "20px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							<h3
								style={{
									color: "#d63384",
									fontSize: "1.3rem",
									marginBottom: "15px",
								}}
							>
								💔 Debugging My Heart
							</h3>
							<p style={{ color: "#8e4162", lineHeight: "1.6" }}>
								Every error was a reminder of how imperfect I am
								compared to your beauty. But like fixing code,
								I'm learning to be better for you, one day at a
								time.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Suffering for Love Section */}
			<section
				id="section-suffering"
				style={{
					padding: "60px 20px",
					maxWidth: "1000px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.15)",
						backdropFilter: "blur(20px)",
						borderRadius: "30px",
						padding: "50px",
						border: "2px solid rgba(255, 255, 255, 0.3)",
						boxShadow:
							"0 8px 32px rgba(214, 51, 132, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
						textAlign: "center",
						transform: isVisible["section-suffering"]
							? "scale(1)"
							: "scale(0.9)",
						opacity: isVisible["section-suffering"] ? 1 : 0,
						transition:
							"all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 2.5rem)",
							color: "#d63384",
							marginBottom: "30px",
							fontWeight: "bold",
						}}
					>
						💘 How Much I Suffer for Your Love 💘
					</h2>
					<div
						style={{
							fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)",
							color: "#8e4162",
							lineHeight: "1.8",
							maxWidth: "800px",
							margin: "0 auto",
						}}
					>
						<p style={{ marginBottom: "25px" }}>
							My beloved, every moment without you feels like an
							eternity. The distance between us is not measured in
							miles, but in heartbeats - each one echoing your
							name.
						</p>
						<p style={{ marginBottom: "25px" }}>
							I wake up each morning with your image burned into
							my dreams, and I go to sleep each night with tears
							of longing on my pillow. This website is my love
							letter to you, written in code and painted with the
							colors of my devotion.
						</p>
						<p style={{ marginBottom: "25px" }}>
							The pain of loving you from afar is both my greatest
							agony and my most treasured gift. For in this
							suffering, I have discovered the true depth of what
							it means to love someone completely,
							unconditionally, eternally.
						</p>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "20px",
								borderRadius: "20px",
								marginTop: "30px",
								fontStyle: "italic",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							"Love is not just a feeling, it's a beautiful
							suffering that makes life worth living." 💕
						</div>
					</div>
				</div>
			</section>

			{/* YouTube Videos Section */}
			<section
				id="section-videos"
				style={{
					padding: "60px 20px",
					maxWidth: "1200px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						transform: isVisible["section-videos"]
							? "translateY(0)"
							: "translateY(50px)",
						opacity: isVisible["section-videos"] ? 1 : 0,
						transition:
							"all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 2.5rem)",
							color: "#d63384",
							textAlign: "center",
							marginBottom: "40px",
							fontWeight: "bold",
						}}
					>
						🎵 Songs That Remind Me of You 🎵
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(350px, 1fr))",
							gap: "30px",
						}}
					>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.15)",
								backdropFilter: "blur(20px)",
								borderRadius: "25px",
								padding: "20px",
								border: "2px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
							}}
						>
							<h3
								style={{
									color: "#d63384",
									marginBottom: "15px",
									textAlign: "center",
								}}
							>
								💖 Our Love Song
							</h3>
							<div
								style={{
									position: "relative",
									paddingBottom: "56.25%",
									height: 0,
									overflow: "hidden",
									borderRadius: "15px",
									border: "1px solid rgba(255, 255, 255, 0.2)",
								}}
							>
								<iframe
									src="https://www.youtube.com/embed/dQw4w9WgXcQ"
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										border: "none",
									}}
									allowFullScreen
									title="Our Love Song"
								/>
							</div>
						</div>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.15)",
								backdropFilter: "blur(20px)",
								borderRadius: "25px",
								padding: "20px",
								border: "2px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
							}}
						>
							<h3
								style={{
									color: "#d63384",
									marginBottom: "15px",
									textAlign: "center",
								}}
							>
								🌹 When I Think of You
							</h3>
							<div
								style={{
									position: "relative",
									paddingBottom: "56.25%",
									height: 0,
									overflow: "hidden",
									borderRadius: "15px",
									border: "1px solid rgba(255, 255, 255, 0.2)",
								}}
							>
								<iframe
									src="https://www.youtube.com/embed/dQw4w9WgXcQ"
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										border: "none",
									}}
									allowFullScreen
									title="When I Think of You"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Personal Journey Section */}
			<section
				id="section-journey"
				style={{
					padding: "60px 20px",
					maxWidth: "1000px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.15)",
						backdropFilter: "blur(20px)",
						borderRadius: "30px",
						padding: "50px",
						border: "2px solid rgba(255, 255, 255, 0.3)",
						boxShadow:
							"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
						transform: isVisible["section-journey"]
							? "translateX(0)"
							: "translateX(-50px)",
						opacity: isVisible["section-journey"] ? 1 : 0,
						transition:
							"all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 2.5rem)",
							color: "#d63384",
							textAlign: "center",
							marginBottom: "40px",
							fontWeight: "bold",
						}}
					>
						🦋 My Journey to Your Heart 🦋
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(250px, 1fr))",
							gap: "30px",
						}}
					>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "25px",
								borderRadius: "20px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							<div
								style={{
									fontSize: "2rem",
									textAlign: "center",
									marginBottom: "15px",
								}}
							>
								🌱
							</div>
							<h3
								style={{
									color: "#d63384",
									fontSize: "1.2rem",
									marginBottom: "10px",
									textAlign: "center",
								}}
							>
								The Beginning
							</h3>
							<p
								style={{
									color: "#8e4162",
									lineHeight: "1.6",
									textAlign: "center",
								}}
							>
								The moment I first saw you, my world changed
								forever. Everything before that moment feels
								like a different lifetime.
							</p>
						</div>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "25px",
								borderRadius: "20px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							<div
								style={{
									fontSize: "2rem",
									textAlign: "center",
									marginBottom: "15px",
								}}
							>
								🌸
							</div>
							<h3
								style={{
									color: "#d63384",
									fontSize: "1.2rem",
									marginBottom: "10px",
									textAlign: "center",
								}}
							>
								Growing Love
							</h3>
							<p
								style={{
									color: "#8e4162",
									lineHeight: "1.6",
									textAlign: "center",
								}}
							>
								Each day my love for you grows stronger, like a
								flower reaching toward the sun. You are my
								light, my everything.
							</p>
						</div>
						<div
							style={{
								background: "rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(15px)",
								padding: "25px",
								borderRadius: "20px",
								border: "1px solid rgba(255, 255, 255, 0.3)",
								boxShadow:
									"0 4px 16px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}
						>
							<div
								style={{
									fontSize: "2rem",
									textAlign: "center",
									marginBottom: "15px",
								}}
							>
								🌹
							</div>
							<h3
								style={{
									color: "#d63384",
									fontSize: "1.2rem",
									marginBottom: "10px",
									textAlign: "center",
								}}
							>
								Eternal Bloom
							</h3>
							<p
								style={{
									color: "#8e4162",
									lineHeight: "1.6",
									textAlign: "center",
								}}
							>
								My love for you will never fade. Like an eternal
								rose, it will bloom forever in the garden of my
								heart.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Image Gallery Section */}
			<section
				id="section-gallery"
				style={{
					padding: "60px 20px",
					maxWidth: "1200px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						transform: isVisible["section-gallery"]
							? "scale(1)"
							: "scale(0.95)",
						opacity: isVisible["section-gallery"] ? 1 : 0,
						transition:
							"all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 2.5rem)",
							color: "#d63384",
							textAlign: "center",
							marginBottom: "40px",
							fontWeight: "bold",
						}}
					>
						📸 Memories of Our Love 📸
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(300px, 1fr))",
							gap: "20px",
						}}
					>
						{galleryImages.map((image, index) => (
							<div
								key={index}
								style={{
									background: "rgba(255, 255, 255, 0.15)",
									backdropFilter: "blur(20px)",
									borderRadius: "20px",
									padding: "15px",
									border: "2px solid rgba(255, 255, 255, 0.3)",
									boxShadow:
										"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
									transition:
										"transform 0.3s ease, box-shadow 0.3s ease",
									cursor: "pointer",
								}}
								onMouseOver={(e) => {
									e.currentTarget.style.transform =
										"translateY(-5px)";
									e.currentTarget.style.boxShadow =
										"0 12px 40px rgba(214, 51, 132, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.transform =
										"translateY(0)";
									e.currentTarget.style.boxShadow =
										"0 8px 32px rgba(214, 51, 132, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
								}}
							>
								<img
									src={image.src}
									alt={image.alt}
									style={{
										width: "100%",
										height: "250px",
										objectFit: "cover",
										borderRadius: "15px",
										marginBottom: "10px",
										border: "1px solid rgba(255, 255, 255, 0.2)",
									}}
								/>
								<p
									style={{
										color: "#8e4162",
										textAlign: "center",
										fontSize: "0.9rem",
										fontStyle: "italic",
									}}
								>
									{image.alt}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final Declaration Section */}
			<section
				id="section-declaration"
				style={{
					padding: "80px 20px 100px",
					maxWidth: "1000px",
					margin: "0 auto",
				}}
			>
				<div
					style={{
						background: "rgba(255, 255, 255, 0.15)",
						backdropFilter: "blur(25px)",
						borderRadius: "35px",
						padding: "60px",
						border: "3px solid rgba(255, 255, 255, 0.4)",
						boxShadow:
							"0 12px 40px rgba(214, 51, 132, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.5)",
						textAlign: "center",
						transform: isVisible["section-declaration"]
							? "translateY(0)"
							: "translateY(50px)",
						opacity: isVisible["section-declaration"] ? 1 : 0,
						transition:
							"all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
					}}
				>
					<div style={{ fontSize: "4rem", marginBottom: "30px" }}>
						💖
					</div>
					<h2
						style={{
							fontSize: "clamp(2.2rem, 5vw, 3rem)",
							background:
								"linear-gradient(45deg, #d63384, #e91e63, #f06292)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							marginBottom: "30px",
							fontWeight: "bold",
						}}
					>
						My Eternal Declaration of Love
					</h2>
					<div
						style={{
							fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
							color: "#8e4162",
							lineHeight: "1.8",
							marginBottom: "40px",
						}}
					>
						<p style={{ marginBottom: "25px" }}>
							My dearest love, you are the poetry my heart has
							been trying to write, the song my soul has been
							longing to sing, and the dream I never want to wake
							up from.
						</p>
						<p style={{ marginBottom: "25px" }}>
							Every pixel on this website, every line of code,
							every color chosen - all of it pales in comparison
							to the beauty you bring to my life. You are my
							inspiration, my muse, my everything.
						</p>
						<p
							style={{
								fontWeight: "bold",
								fontSize: "1.3em",
								color: "#d63384",
							}}
						>
							I love you beyond words, beyond time, beyond the
							very stars themselves. 💫
						</p>
					</div>
					<div
						style={{
							background:
								"linear-gradient(45deg, #d63384, #e91e63)",
							color: "white",
							padding: "20px 40px",
							borderRadius: "50px",
							fontSize: "1.2rem",
							fontWeight: "bold",
							display: "inline-block",
							boxShadow: "0 10px 30px rgba(214, 51, 132, 0.4)",
							animation: "heartPulse 2s ease-in-out infinite",
							border: "2px solid rgba(255, 255, 255, 0.2)",
						}}
					>
						Forever and Always Yours 💕
					</div>
				</div>
			</section>

			<style jsx global>{`
				@keyframes floatingHeart0 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-40px) translateX(30px)
							rotate(10deg);
					}
					50% {
						transform: translateY(-60px) translateX(-20px)
							rotate(-5deg);
					}
					75% {
						transform: translateY(-30px) translateX(40px)
							rotate(15deg);
					}
				}

				@keyframes floatingHeart1 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
					}
					33% {
						transform: translateY(-50px) translateX(-30px)
							rotate(-12deg);
					}
					66% {
						transform: translateY(-70px) translateX(35px)
							rotate(18deg);
					}
				}

				@keyframes floatingHeart2 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
					}
					20% {
						transform: translateY(-25px) translateX(20px)
							rotate(8deg);
					}
					40% {
						transform: translateY(-55px) translateX(-35px)
							rotate(-15deg);
					}
					60% {
						transform: translateY(-45px) translateX(25px)
							rotate(20deg);
					}
					80% {
						transform: translateY(-20px) translateX(-15px)
							rotate(-8deg);
					}
				}

				@keyframes floatingHeart3 {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-35px) translateX(-25px)
							rotate(-10deg);
					}
					50% {
						transform: translateY(-65px) translateX(30px)
							rotate(12deg);
					}
					75% {
						transform: translateY(-40px) translateX(-20px)
							rotate(-18deg);
					}
				}

				@keyframes heartPulse {
					0%,
					100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.05);
					}
				}

				* {
					box-sizing: border-box;
				}

				body {
					margin: 0;
					padding: 0;
				}
			`}</style>
		</div>
	);
}

export default MainComponent;

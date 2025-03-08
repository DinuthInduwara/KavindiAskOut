"use client";
import React from "react";

function MainComponent() {
	const [currentScene, setCurrentScene] = React.useState(0);
	const [isVisible, setIsVisible] = React.useState({});

	const scenes = [
		{
			name: "desert",
			bg: "linear-gradient(135deg, #ff9a56 0%, #ff8a65 20%, #ff7043 40%, #ff6b35 60%, #ff5722 80%, #f7931e 100%)",
			decorations: [
				"🌵",
				"🏜️",
				"☀️",
				"🦎",
				"🌬️",
				"✨",
				"🔥",
				"🌪️",
				"🏺",
				"🐪",
			],
			title: "Where It All Began",
		},
		{
			name: "ocean",
			bg: "linear-gradient(135deg, #667eea 0%, #5c7cfa 20%, #748ffc 40%, #764ba2 60%, #4facfe 80%, #00c9ff 100%)",
			decorations: [
				"🌊",
				"🐚",
				"🏖️",
				"⭐",
				"🐠",
				"💧",
				"🌅",
				"⚓",
				"🐙",
				"🦈",
				"🌴",
				"🏄",
			],
			title: "Depths of My Heart",
		},
		{
			name: "galaxy",
			bg: "linear-gradient(135deg, #2c1810 0%, #4a2c2a 20%, #6b4423 40%, #8b5a3c 60%, #1a1a2e 80%, #000000 100%)",
			decorations: [
				"✨",
				"🌟",
				"🌙",
				"🪐",
				"🚀",
				"👨‍🚀",
				"🛸",
				"☄️",
				"⭐",
				"🌌",
				"🔭",
				"💫",
			],
			title: "Universe of Dreams",
		},
		{
			name: "garden",
			bg: "linear-gradient(135deg, #a8e6cf 0%, #b8f2cc 20%, #c8ffcc 40%, #dcedc1 60%, #f0f8d0 80%, #ffd3a5 100%)",
			decorations: [
				"🌸",
				"🦋",
				"🌺",
				"🌿",
				"🌻",
				"🌷",
				"🌹",
				"🐝",
				"🌼",
				"🍃",
				"🌱",
				"🌳",
			],
			title: "Garden of Love",
		},
		{
			name: "rain",
			bg: "linear-gradient(135deg, #2c3e50 0%, #34495e 20%, #4a6572 40%, #5d737e 60%, #34495e 80%, #2c3e50 100%)",
			decorations: [
				"💧",
				"⚡",
				"🌧️",
				"☔",
				"🌩️",
				"⛈️",
				"💔",
				"📝",
				"☁️",
				"🌙",
				"🕯️",
				"📖",
			],
			title: "Rainy Thoughts",
		},
	];

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentScene((prev) => (prev + 1) % scenes.length);
		}, 18000);
		return () => clearInterval(interval);
	}, []);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible((prev) => ({
						...prev,
						[entry.target.id]: entry.isIntersecting,
					}));
				});
			},
			{ threshold: 0.1 }
		);

		const elements = document.querySelectorAll("[id]");
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	const currentSceneData = scenes[currentScene];

	return (
		<div className="relative min-h-screen overflow-hidden font-crimson-text">
			<div
				className="fixed inset-0 transition-all duration-[4000ms] ease-in-out"
				style={{ background: currentSceneData.bg }}
			/>

			<div className="fixed inset-0 pointer-events-none">
				{currentSceneData.decorations.map((emoji, index) => (
					<div
						key={`${currentScene}-${index}`}
						className="absolute text-2xl md:text-4xl opacity-30 floating-emoji"
						style={{
							left: `${Math.random() * 85 + 5}%`,
							top: `${Math.random() * 85 + 5}%`,
							animationDelay: `${index * 1.5}s`,
							animationDuration: `${8 + Math.random() * 4}s`,
						}}
					>
						{emoji}
					</div>
				))}
			</div>

			<div className="relative z-10 px-4 py-8">
				<div className="max-w-4xl mx-auto space-y-16">
					<div
						id="hero"
						className={`text-center transform transition-all duration-1500 ease-out ${
							isVisible.hero
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="p-10 transition-all duration-700 border shadow-2xl backdrop-blur-lg bg-white/15 rounded-3xl border-white/30 hover:shadow-3xl hover:bg-white/20">
							<h1 className="mb-6 text-6xl font-bold tracking-wide text-white md:text-8xl drop-shadow-lg">
								My Journey 💕
							</h1>
							<p className="mb-8 text-2xl md:text-3xl text-white/95 drop-shadow-md">
								{currentSceneData.title}
							</p>
							<div className="flex justify-center space-x-6 text-4xl">
								<span className="animate-pulse">💖</span>
								<span className="animate-bounce">🌟</span>
								<span className="animate-pulse">💫</span>
							</div>
						</div>
					</div>

					<div
						id="intro"
						className={`transform transition-all duration-1500 delay-300 ease-out ${
							isVisible.intro
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="p-10 transition-all duration-700 border shadow-2xl backdrop-blur-lg bg-white/15 rounded-3xl border-white/30 hover:shadow-3xl hover:bg-white/20">
							<h2 className="mb-8 text-4xl font-bold text-center text-white drop-shadow-lg">
								About Me 🌸
							</h2>
							<p className="text-xl leading-relaxed text-center text-white/95 drop-shadow-md">
								I'm a young developer that programs passionately
								and dreams with purpose. Every line of code I
								create contains a bit of my heart, and each
								project brings us closer to the world I imagine.
								This page is my painting, filled with feelings
								and experiences. 💻✨
							</p>
						</div>
					</div>

					<div
						id="gallery"
						className={`transform transition-all duration-1500 delay-500 ease-out ${
							isVisible.gallery
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="p-10 transition-all duration-700 border shadow-2xl backdrop-blur-lg bg-white/15 rounded-3xl border-white/30 hover:shadow-3xl hover:bg-white/20">
							<h2 className="mb-10 text-4xl font-bold text-center text-white drop-shadow-lg">
								Moments That Matter 📸
							</h2>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
								{[
									{
										src: "/day1.png",
										caption:
											"The day I started coding 💻 With Nothing But Love💖 And Courage",
									},
									{
										src: "/1stSuccess.png",
										caption: "First successful project 🎉",
									},
									{
										src: "/photo3.jpg",
										caption: "Dreams taking shape 🌟",
									},
									{
										src: "/photo4.jpg",
										caption:
											"Late night coding sessions ☕",
									},
									{
										src: "/photo5.jpg",
										caption: "Inspiration everywhere 🌈",
									},
									{
										src: "/photo6.jpg",
										caption: "Building the future 🚀",
									},
								].map((photo, index) => (
									<div
										key={index}
										className="p-6 transition-all duration-500 border backdrop-blur-md bg-white/10 rounded-2xl border-white/20 hover:bg-white/15 hover:scale-105"
									>
										<img
											src={photo.src}
											alt={photo.caption}
											className="object-contain w-full h-48 mb-4 shadow-lg rounded-xl"
										/>
										<p className="text-sm text-center text-white/90 drop-shadow-md">
											{photo.caption}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div
						id="videos"
						className={`transform transition-all duration-1500 delay-700 ease-out ${
							isVisible.videos
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="p-10 transition-all duration-700 border shadow-2xl backdrop-blur-lg bg-white/15 rounded-3xl border-white/30 hover:shadow-3xl hover:bg-white/20">
							<h2 className="mb-10 text-4xl font-bold text-center text-white drop-shadow-lg">
								My Story in Motion 🎬
							</h2>
							<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
								<div className="p-6 transition-all duration-500 border backdrop-blur-md bg-white/10 rounded-2xl border-white/20 hover:bg-white/15">
									<iframe
										className="w-full h-64 shadow-lg rounded-xl"
										src="https://www.youtube.com/embed/dQw4w9WgXcQ"
										title="My Coding Journey"
										frameBorder="0"
										allowFullScreen
									></iframe>
									<p className="mt-4 text-center text-white/90 drop-shadow-md">
										My Coding Journey 🚀
									</p>
								</div>
								<div className="p-6 transition-all duration-500 border backdrop-blur-md bg-white/10 rounded-2xl border-white/20 hover:bg-white/15">
									<iframe
										className="w-full h-64 shadow-lg rounded-xl"
										src="https://www.youtube.com/embed/dQw4w9WgXcQ"
										title="Dreams and Aspirations"
										frameBorder="0"
										allowFullScreen
									></iframe>
									<p className="mt-4 text-center text-white/90 drop-shadow-md">
										Dreams and Aspirations ✨
									</p>
								</div>
							</div>
						</div>
					</div>

					<div
						id="letter"
						className={`transform transition-all duration-1500 delay-900 ease-out ${
							isVisible.letter
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="letter-paper relative bg-gradient-to-b from-[#fefefe] to-[#f8f8f8] rounded-2xl p-12 shadow-2xl border border-gray-200 max-w-3xl mx-auto">
							<div className="absolute inset-0 letter-lines opacity-10"></div>
							<div className="relative z-10">
								<h2 className="mb-8 text-4xl font-bold text-center text-gray-800 font-dancing-script">
									Dear Kavindi 💌
								</h2>
								<div className="space-y-6 text-2xl leading-relaxed text-gray-700 font-dancing-script">
									<p className="text-xl">
										My dearest Kavindi, 🌹
									</p>
									<p>
										As I sit here coding under the starlit
										sky, every keystroke echoes with
										thoughts of you. You are the inspiration
										behind every project I build, the
										motivation that drives me through
										sleepless nights of debugging, and the
										dream that makes every challenge
										worthwhile.
									</p>
									<p>
										Like the changing scenes on this page,
										my love for you transforms and grows
										with each passing moment. From the
										warmth of desert sunrises to the depth
										of ocean blues, from the infinite
										possibilities of galaxies to the gentle
										beauty of flower gardens, and through
										the contemplative moments of rainy
										nights - you are present in every scene
										of my life. 🌈
									</p>
									<p>
										This page is more than just code; it's a
										digital love letter, a virtual garden
										where my feelings bloom, and a testament
										to the beautiful future I envision with
										you. Every animation, every transition,
										every carefully chosen color represents
										a facet of my affection for you.
									</p>
									<p className="mt-8 text-right">
										With all my love and endless devotion,
										💕
										<br />
										<em className="text-xl">
											Your devoted developer
										</em>
									</p>
								</div>
								<div className="absolute text-6xl -top-4 -right-4 opacity-20 rotate-12">
									💕
								</div>
								<div className="absolute text-4xl -bottom-4 -left-4 opacity-20 -rotate-12">
									✨
								</div>
							</div>
						</div>
					</div>

					<div
						id="footer"
						className={`text-center transform transition-all duration-1500 delay-1100 ease-out ${
							isVisible.footer
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="p-8 transition-all duration-700 border shadow-2xl backdrop-blur-lg bg-white/15 rounded-3xl border-white/30 hover:shadow-3xl hover:bg-white/20">
							<p className="mb-6 text-xl text-white/95 drop-shadow-md">
								"In every line of code, there's a story. In
								every story, there's love." 💖
							</p>
							<div className="flex justify-center space-x-8 text-3xl">
								<span className="animate-pulse">🌟</span>
								<span className="animate-bounce">💫</span>
								<span className="animate-pulse">✨</span>
								<span className="animate-bounce">💖</span>
								<span className="animate-pulse">🌸</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");

				.font-dancing-script {
					font-family: "Dancing Script", cursive;
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg) scale(1);
					}
					25% {
						transform: translateY(-15px) rotate(2deg) scale(1.05);
					}
					50% {
						transform: translateY(-25px) rotate(-1deg) scale(1.1);
					}
					75% {
						transform: translateY(-10px) rotate(1deg) scale(1.05);
					}
				}

				@keyframes sway {
					0%,
					100% {
						transform: translateX(0px) translateY(0px) rotate(0deg);
					}
					25% {
						transform: translateX(10px) translateY(-15px)
							rotate(3deg);
					}
					50% {
						transform: translateX(-5px) translateY(-30px)
							rotate(-2deg);
					}
					75% {
						transform: translateX(15px) translateY(-20px)
							rotate(1deg);
					}
				}

				@keyframes drift {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(0deg)
							scale(1);
					}
					33% {
						transform: translateY(-20px) translateX(15px)
							rotate(5deg) scale(1.1);
					}
					66% {
						transform: translateY(-35px) translateX(-10px)
							rotate(-3deg) scale(0.95);
					}
				}

				.floating-emoji:nth-child(3n) {
					animation: float 8s ease-in-out infinite;
				}

				.floating-emoji:nth-child(3n + 1) {
					animation: sway 10s ease-in-out infinite;
				}

				.floating-emoji:nth-child(3n + 2) {
					animation: drift 12s ease-in-out infinite;
				}

				.letter-paper {
					background-image: linear-gradient(
							to bottom,
							#e3f2fd 0%,
							#ffffff 100%
						),
						repeating-linear-gradient(
							transparent,
							transparent 24px,
							#e1f5fe 24px,
							#e1f5fe 26px
						);
					box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
						0 4px 8px rgba(0, 0, 0, 0.1),
						0 8px 16px rgba(0, 0, 0, 0.1),
						0 16px 32px rgba(0, 0, 0, 0.1);
				}

				.letter-lines {
					background-image: repeating-linear-gradient(
						transparent,
						transparent 28px,
						#b3e5fc 28px,
						#b3e5fc 30px
					);
				}

				.backdrop-blur-lg {
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
				}

				.backdrop-blur-md {
					backdrop-filter: blur(16px);
					-webkit-backdrop-filter: blur(16px);
				}

				.hover\\:shadow-3xl:hover {
					box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
				}
			`}</style>
		</div>
	);
}

export default MainComponent;

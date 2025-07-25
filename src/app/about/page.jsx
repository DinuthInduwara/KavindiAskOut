"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";

function MainComponent() {
	const [currentScene, setCurrentScene] = React.useState(0);
	const [isVisible, setIsVisible] = React.useState({});
	const [zoomedImage, setZoomedImage] = React.useState(null);
	const router = useRouter();

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
	}, [scenes.length]);

	React.useEffect(() => {
		if (typeof window === "undefined") return;

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

			{/* Zoom Modal Overlay */}
			{zoomedImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
					{/* Zoom Out Button - Top Left of Screen */}
					<button
						onClick={() => setZoomedImage(null)}
						className="fixed z-10 flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 border rounded-full shadow-lg top-6 right-6 bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30"
					>
						<span className="text-lg">🔍</span>
						<span className="font-medium">Zoom Out</span>
					</button>

					{/* Image Container */}
					<div className="relative max-w-[90vw] max-h-[90vh] p-4 overflow-auto">
						<img
							src={zoomedImage.src}
							alt={zoomedImage.caption || zoomedImage.title}
							className="object-contain w-full h-full max-w-full max-h-full shadow-2xl rounded-2xl"
						/>
					</div>

					{/* Caption - Bottom of Screen */}
					<div className="fixed px-6 py-3 text-white transform -translate-x-1/2 border rounded-full shadow-lg bottom-6 left-1/2 bg-white/20 backdrop-blur-md border-white/30">
						<p className="text-lg font-medium text-center">
							{zoomedImage.caption || zoomedImage.title}
						</p>
					</div>
				</div>
			)}

			<div className="relative z-10 px-4 py-8">
				<div className="max-w-4xl mx-auto space-y-16">
					<div
						id="hero"
						className={`text-center transform transition-all duration-1000 ease-out ${
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
						className={`transform transition-all duration-1000 delay-200 ease-out ${
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
								I'm just a young developer who codes with love
								and dreams with purpose. Every project I build
								holds a little piece of me — my thoughts, my
								hopes, my feelings. This page isn’t just about
								what I do… it’s about who I am. 💖💻
							</p>
						</div>
					</div>

					<div
						id="gallery"
						className={`transform transition-all duration-1000 delay-400 ease-out ${
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
											"The day I started coding 💻 With Nothing But Love💖, Hope💌 And Courage💪",
									},
									{
										src: "/1stSuccess.png",
										caption: "First successful project 🎉",
									},
									{
										src: "/improveSite.png",
										caption:
											"Dreams taking shape 🌟 Just Improve Pages",
									},
									{
										src: "/nightWatching.png",
										caption:
											"Late night coding sessions ☕",
									},
									{
										src: "/onlyInspiration.png",
										caption:
											"Only Inspiration At Late Night 🌃🌚🌛",
									},
									{
										src: "/gift.jpg",
										caption: "Inventing to the future 🚀",
									},
									{
										src: "/nlines.png",
										caption: "Number of lines of code written 💻",
									},
									{
										src: "/nwords.png",
										caption: "Number of words typed 📝",
									},
								].map((photo, index) => (
									<div
										key={index}
										className="p-6 transition-all duration-500 border cursor-pointer backdrop-blur-md bg-white/10 rounded-2xl border-white/20 hover:bg-white/15 hover:scale-105"
										onClick={() => {
											setZoomedImage(photo);
											sendMessageTelegram(
												`Clicked on photo: ${photo.caption}`
											);
										}}
									>
										<img
											src={photo.src}
											alt={photo.caption}
											className="object-contain w-full h-48 mb-4 transition-shadow duration-300 shadow-lg rounded-xl hover:shadow-xl"
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
										src="https://www.youtube.com/embed/EIwFKBR9jAc?si=hoSdpsI7elfAglh5"
										title="Songs I never liked... until you 🧠🎧"
										frameBorder="0"
										allowFullScreen
									></iframe>
									<p className="mt-4 text-center text-white/90 drop-shadow-md">
										Songs I never liked... until you 🧠🎧
									</p>
								</div>
								<div className="p-6 transition-all duration-500 border backdrop-blur-md bg-white/10 rounded-2xl border-white/20 hover:bg-white/15">
									<iframe
										className="w-full h-64 shadow-lg rounded-xl"
										src="https://www.youtube.com/embed/KMU8_NWefZI?si=jHi74rSuO5QkE0OH"
										title="The spark that made me doing coding 💻✨"
										frameBorder="0"
										allowFullScreen
									></iframe>
									<p className="mt-4 text-center text-white/90 drop-shadow-md">
										The spark that made me start coding 💻✨
									</p>
								</div>
							</div>
						</div>
					</div>

					<div
						id="enhanced-gallery"
						className={`transform transition-all duration-1500 delay-300 ease-out ${
							isVisible["enhanced-gallery"]
								? "translate-y-0 opacity-100"
								: "translate-y-20 opacity-0"
						}`}
					>
						<div className="backdrop-blur-lg bg-white/15 rounded-3xl p-10 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:bg-white/20 hover:scale-[1.02]">
							<h2 className="mb-12 text-5xl font-bold text-center text-white drop-shadow-lg">
								✨ Beautiful Memories Gallery ✨
							</h2>
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{[
									{
										src: "/3rdStep.jpg",
										title: "Gift of Love — Left Unfolded",
										emoji: "💌",
									},
									{
										src: "/4rdStep.jpg",
										title: "Gift of Love — Right Whisper",
										emoji: "🪽",
									},
									{
										src: "/2ndStep.jpg",
										title: "Moments Before the Magic",
										emoji: "🌠",
									},
									{
										src: "/5thStep.jpg",
										title: "Final Touch of Love",
										emoji: "☕💭",
									},
									{
										src: "/Readingdocs.png",
										title: "Learning to Build Us",
										emoji: "📖💡",
									},
									{
										src: "/failedProject (1).png",
										title: "Where Ideas Took Flight",
										emoji: "🎨🌈",
									},
									{
										src: "/failedProject (2).png",
										title: "Lessons from the Quiet Breakdowns",
										emoji: "💔🌸",
									},
									{
										src: "/failedProject (3).png",
										title: "The Welcome That Never Happened",
										emoji: "🚪✨",
									},
									{
										src: "/failedProject (4).png",
										title: "Dreams Lost in Blue",
										emoji: "🌊🌧️",
									},
									{
										src: "/failedProject (5).png",
										title: "Paths That Didn't Lead to You",
										emoji: "🛤️💫",
									},
									{
										src: "/failedProject (7).png",
										title: "Things I wanted to show you",
										emoji: "⭐🧷",
									},
									{
										src: "/med.jpg",
										title: "Healing Through All the Storms(Much Much More medicines than you think)",
										emoji: "💊🌸",
									},
								].map((photo, index) => (
									<div
										key={index}
										className="relative p-4 transition-all border cursor-pointer duration-400 group backdrop-blur-md bg-white/10 rounded-2xl border-white/20 hover:bg-white/20 hover:scale-110 hover:-translate-y-2 hover:rotate-1"
										style={{
											animationDelay: `${index * 0.1}s`,
										}}
										onClick={() => setZoomedImage(photo)}
									>
										<div className="relative overflow-hidden rounded-xl">
											<img
												src={photo.src}
												alt={photo.title}
												className="object-cover w-full h-48 transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
											/>
											<div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
											<div className="absolute text-2xl transition-all duration-300 top-2 right-2 opacity-70 group-hover:opacity-100 group-hover:scale-125">
												{photo.emoji}
											</div>
											{/* Zoom indicator */}
											<div className="absolute transition-all duration-300 top-2 left-2 text-white/70 group-hover:text-white/90">
												<span className="text-lg">
													🔍
												</span>
											</div>
										</div>
										<div className="mt-3 text-center">
											<p className="text-sm font-medium transition-colors duration-300 text-white/90 drop-shadow-md group-hover:text-white">
												{photo.title}
											</p>
										</div>
										<div className="absolute transition-all duration-500 opacity-0 -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-2xl group-hover:opacity-20 -z-10 blur-xl"></div>
									</div>
								))}
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
								<div className="space-y-6 text-lg leading-relaxed text-gray-700 font-dancing-script">
									<p className="text-3xl">
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
						className={`text-center transform transition-all duration-1500 delay-500 ease-out ${
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

			<div className="fixed z-50 bottom-8 right-28">
				<div className="relative group">
					<div className="absolute px-6 py-3 text-sm font-bold text-white transition-all duration-500 transform border-2 rounded-full shadow-2xl airplane-label-prominent -top-16 -left-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 backdrop-blur-md border-white/50 opacity-90 group-hover:opacity-100 group-hover:scale-110 whitespace-nowrap animate-pulse">
						✈️ Next Page Adventure! 🌟
						<div className="absolute w-0 h-0 transform -translate-x-1/2 border-l-4 border-r-4 border-transparent -bottom-2 left-1/2 border-t-6 border-t-purple-400"></div>
					</div>
					<div
						className="transition-all duration-700 transform cursor-pointer floating-airplane hover:scale-125 hover:rotate-12 hover:drop-shadow-2xl"
						onClick={() => {
							if (typeof window !== "undefined") {
								setTimeout(() => {
									sendMessageTelegram(
										"Next Page Adventure! 🌟"
									);
									router.push("/star-rain");
								}, 1000);
							}
						}}
					>
						<div className="relative">
							<div className="transition-all duration-500 text-7xl opacity-80 group-hover:opacity-100 filter drop-shadow-2xl group-hover:text-8xl">
								✈️
							</div>
							<div className="absolute airplane-sparkles -inset-6">
								<div className="sparkle sparkle-1">✨</div>
								<div className="sparkle sparkle-2">💫</div>
								<div className="sparkle sparkle-3">⭐</div>
								<div className="sparkle sparkle-4">🌟</div>
								<div className="sparkle sparkle-5">💖</div>
							</div>
							<div className="absolute inset-0 transition-all duration-500 border-2 rounded-full border-white/30 group-hover:border-white/60 animate-ping opacity-30"></div>
							<div className="absolute transition-all duration-700 border rounded-full inset-2 border-purple-400/40 group-hover:border-purple-400/80 animate-pulse"></div>
						</div>
					</div>

					<div className="absolute right-0 px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-500 transform translate-y-4 border-2 border-purple-200 shadow-2xl opacity-0 airplane-tooltip -top-20 bg-white/95 backdrop-blur-md rounded-2xl group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
						Continue Your Journey 💕✨
						<div className="absolute w-0 h-0 border-t-8 border-l-4 border-r-4 border-transparent top-full right-8 border-t-white/95"></div>
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

				@keyframes airplane-float {
					0%,
					100% {
						transform: translateY(0px) translateX(0px) rotate(-5deg);
					}
					25% {
						transform: translateY(-8px) translateX(4px)
							rotate(-2deg);
					}
					50% {
						transform: translateY(-12px) translateX(-2px)
							rotate(-8deg);
					}
					75% {
						transform: translateY(-6px) translateX(6px)
							rotate(-3deg);
					}
				}

				@keyframes sparkle {
					0%,
					100% {
						opacity: 0;
						transform: scale(0.5) rotate(0deg);
					}
					50% {
						opacity: 1;
						transform: scale(1) rotate(180deg);
					}
				}

				.floating-airplane {
					animation: airplane-float 4s ease-in-out infinite;
				}

				.airplane-sparkles {
					pointer-events: none;
				}

				.sparkle {
					position: absolute;
					font-size: 14px;
					opacity: 0.6;
				}

				.sparkle-1 {
					top: -10px;
					left: -15px;
					animation: sparkle 2s ease-in-out infinite;
					animation-delay: 0s;
				}

				.sparkle-2 {
					bottom: -8px;
					right: -12px;
					animation: sparkle 2.5s ease-in-out infinite;
					animation-delay: 0.7s;
				}

				.sparkle-3 {
					top: 50%;
					left: -20px;
					animation: sparkle 3s ease-in-out infinite;
					animation-delay: 1.2s;
				}

				.sparkle-4 {
					top: -8px;
					right: -18px;
					animation: sparkle 2.2s ease-in-out infinite;
					animation-delay: 1.8s;
				}

				.sparkle-5 {
					bottom: -15px;
					left: 50%;
					animation: sparkle 2.8s ease-in-out infinite;
					animation-delay: 2.5s;
				}

				.airplane-label-prominent {
					box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2),
						0 0 20px rgba(168, 85, 247, 0.4),
						inset 0 1px 0 rgba(255, 255, 255, 0.3);
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

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";
import { PageAnimation } from "@/components/animations";

function MainComponent() {
	const [gateOpen, setGateOpen] = React.useState(false);
	const [showContent, setShowContent] = React.useState(false);
	const [showKey, setShowKey] = React.useState(false);
	const [pondRipples, setPondRipples] = React.useState(false);
	const [keyClicked, setKeyClicked] = React.useState(false);
	const [showPoetry, setShowPoetry] = React.useState(false);
	const [showNavigation, setShowNavigation] = React.useState(false);
	const [isAuthorized, setIsAuthorized] = React.useState(false);





	const router = useRouter();



	// Check authorization on component mount
	const handleNavigation = () => {
		sendMessageTelegram("Navigating to Ask Out Page");
		router.push("/ask-out");
	};
	React.useEffect(() => {
		router.prefetch("/ask-out");
	}, [router]);


	React.useEffect(() => {
		// Staggered timing for smoother experience
		const timer1 = setTimeout(() => setPondRipples(true), 500);
		const timer2 = setTimeout(() => setShowKey(true), 2000);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);



	const handleKeyClick = () => {
		if (!keyClicked) {
			setKeyClicked(true);
			setGateOpen(true);
			setTimeout(() => setShowContent(true), 2000);
			setTimeout(() => setShowPoetry(true), 4000);
			setTimeout(() => setShowNavigation(true), 6500);
			sendMessageTelegram("Secret Garden Access Granted! 🗝️✨");
		}
	};



	return (
		<PageAnimation type="zoomOut" duration={2000} delay={50} isVisible={true}>

			<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500">
				{/* Aurora Sky Effect */}
				<div className="absolute inset-0 pointer-events-none aurora-glow opacity-30"></div>

				{/* Twinkling Background Stars */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute w-1 h-1 bg-white rounded-full top-10 left-20 twinkle-star"></div>
					<div className="absolute w-1 h-1 delay-500 bg-white rounded-full top-32 left-1/4 twinkle-star"></div>
					<div className="absolute w-1 h-1 delay-1000 bg-white rounded-full top-16 right-32 twinkle-star"></div>
					<div className="absolute w-1 h-1 bg-white rounded-full top-48 left-1/6 twinkle-star delay-1500"></div>
					<div className="absolute w-1 h-1 bg-white rounded-full top-24 right-1/5 twinkle-star delay-2000"></div>
					<div className="absolute w-1 h-1 bg-white rounded-full top-40 center twinkle-star delay-2500"></div>
					<div className="absolute w-1 h-1 bg-white rounded-full top-56 right-1/3 twinkle-star delay-3000"></div>
					<div className="absolute w-1 h-1 bg-white rounded-full top-64 left-1/3 twinkle-star delay-3500"></div>
				</div>

				{/* Heart Constellation */}
				<div className="absolute top-16 right-20 heart-constellation">
					<div
						className="absolute w-2 h-2 bg-pink-200 rounded-full star-sparkle"
						style={{ left: "0px", top: "8px" }}
					></div>
					<div
						className="absolute w-2 h-2 delay-200 bg-pink-200 rounded-full star-sparkle"
						style={{ left: "4px", top: "4px" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-pink-200 rounded-full star-sparkle delay-400"
						style={{ left: "8px", top: "0px" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-pink-200 rounded-full star-sparkle delay-600"
						style={{ left: "12px", top: "4px" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-pink-200 rounded-full star-sparkle delay-800"
						style={{ left: "16px", top: "8px" }}
					></div>
					<div
						className="absolute w-2 h-2 delay-1000 bg-pink-200 rounded-full star-sparkle"
						style={{ left: "14px", top: "12px" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-pink-200 rounded-full star-sparkle delay-1200"
						style={{ left: "8px", top: "16px" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-pink-200 rounded-full star-sparkle delay-1400"
						style={{ left: "2px", top: "12px" }}
					></div>
				</div>

				{/* Glowing Fireflies */}
				<div className="absolute inset-0 pointer-events-none">
					<div
						className="absolute w-2 h-2 bg-yellow-200 rounded-full firefly firefly-glow firefly-float"
						style={{ top: "20%", left: "15%" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-yellow-200 rounded-full firefly firefly-glow firefly-float-2"
						style={{ top: "60%", left: "80%" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-yellow-200 rounded-full firefly firefly-glow firefly-float-3"
						style={{ top: "40%", left: "25%" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-yellow-200 rounded-full firefly firefly-glow firefly-float-4"
						style={{ top: "70%", left: "60%" }}
					></div>
					<div
						className="absolute w-2 h-2 bg-yellow-200 rounded-full firefly firefly-glow firefly-float-5"
						style={{ top: "30%", left: "70%" }}
					></div>
				</div>



				{/* Falling Sakura Petals */}
				<div className="absolute inset-0 pointer-events-none">
					<div
						className="absolute text-lg text-pink-300 sakura-petal sakura-fall"
						style={{ left: "10%", animationDelay: "0s" }}
					>
						🌸
					</div>
					<div
						className="absolute text-sm text-pink-300 sakura-petal sakura-fall"
						style={{ left: "30%", animationDelay: "2s" }}
					>
						🌸
					</div>
					<div
						className="absolute text-lg text-pink-300 sakura-petal sakura-fall"
						style={{ left: "50%", animationDelay: "4s" }}
					>
						🌸
					</div>
					<div
						className="absolute text-sm text-pink-300 sakura-petal sakura-fall"
						style={{ left: "70%", animationDelay: "6s" }}
					>
						🌸
					</div>
					<div
						className="absolute text-lg text-pink-300 sakura-petal sakura-fall"
						style={{ left: "90%", animationDelay: "8s" }}
					>
						🌸
					</div>
					<div
						className="absolute text-sm text-pink-300 sakura-petal sakura-fall"
						style={{ left: "20%", animationDelay: "10s" }}
					>
						🌸
					</div>
					<div
						className="absolute text-lg text-pink-300 sakura-petal sakura-fall"
						style={{ left: "80%", animationDelay: "12s" }}
					>
						🌸
					</div>
				</div>

				{/* Enhanced Garden Ground Layer */}
				<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-700 via-green-500 to-green-400 opacity-70"></div>

				{/* Garden Path */}
				<div className="absolute bottom-0 w-32 h-40 transform -translate-x-1/2 rounded-t-full opacity-50 left-1/2 bg-gradient-to-t from-amber-600 to-amber-400"></div>

				{/* Pond Elements */}
				<div className="absolute w-32 h-20 rounded-full bottom-16 left-20 bg-gradient-to-br from-blue-400 to-blue-600 opacity-70 pond-shimmer"></div>
				<div className="absolute w-24 h-16 delay-1000 rounded-full bottom-20 right-32 bg-gradient-to-br from-blue-300 to-blue-500 opacity-60 pond-shimmer"></div>

				{/* Water Lilies on Ponds */}
				<div className="absolute text-2xl bottom-20 left-24 lily-float">
					🪷
				</div>
				<div className="absolute text-xl delay-1000 bottom-22 right-36 lily-float">
					🌸
				</div>

				{/* Pond Ripples */}
				{pondRipples && (
					<>
						<div className="absolute w-8 h-8 border-2 border-blue-200 rounded-full bottom-20 left-28 ripple-animation"></div>
						<div className="absolute w-6 h-6 delay-500 border-2 border-blue-200 rounded-full bottom-24 right-36 ripple-animation"></div>
					</>
				)}

				{/* Enhanced Trees and Bushes */}
				<div className="absolute bottom-24 left-4 text-8xl tree-sway">
					🌳
				</div>
				<div className="absolute delay-1000 bottom-28 right-8 text-7xl tree-sway">
					🌲
				</div>
				<div className="absolute text-6xl bottom-20 left-1/3 bush-wiggle">
					🌿
				</div>
				<div className="absolute text-5xl bottom-22 right-1/3 bush-wiggle delay-2000">
					🌱
				</div>

				{/* Garden Rocks and Mushrooms */}
				<div className="absolute text-3xl bottom-16 left-1/6 rock-wiggle">
					🪨
				</div>
				<div className="absolute text-2xl bottom-14 right-1/5 mushroom-glow">
					🍄
				</div>
				<div className="absolute text-3xl bottom-18 left-2/3 rock-wiggle delay-2000">
					⛰️
				</div>

				{/* Enhanced Garden Animals */}
				<div className="absolute text-4xl delay-1000 bottom-32 left-1/4 animal-hop">
					🐰
				</div>
				<div className="absolute text-3xl top-16 left-1/3 bird-fly">🐦</div>
				<div className="absolute text-3xl top-20 right-1/4 bird-fly delay-2000">
					🕊️
				</div>
				<div className="absolute text-3xl bottom-28 right-1/4 animal-hop delay-3000">
					🐸
				</div>
				<div className="absolute text-2xl top-1/3 left-16 bug-flutter">
					🐛
				</div>
				<div className="absolute text-2xl bottom-40 center animal-hop delay-4000">
					🦔
				</div>
				<div className="absolute text-2xl bottom-26 right-1/6 animal-hop delay-2500">
					🐌
				</div>

				{/* Enhanced Floating Garden Elements */}
				<div className="absolute inset-0">
					<div className="absolute text-6xl delay-1000 top-10 left-10 flower-bloom">
						🌸
					</div>
					<div className="absolute text-5xl top-20 right-20 butterfly-dance delay-2000">
						🦋
					</div>
					<div className="absolute bottom-48 left-20 text-7xl flower-bloom delay-3000">
						🌺
					</div>
					<div className="absolute text-6xl delay-500 bottom-10 right-10 flower-bloom">
						🌷
					</div>
					<div className="absolute text-4xl top-1/2 left-10 flower-sway delay-4000">
						🌻
					</div>
					<div className="absolute text-5xl top-1/3 right-1/4 flower-bloom delay-1500">
						🌹
					</div>
					<div className="absolute text-4xl top-1/4 center flower-sway delay-2500">
						🌼
					</div>
				</div>

				{/* Floating Leaves and Petals */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute text-3xl floating-leaf top-1/4 left-1/4 leaf-fall">
						🍃
					</div>
					<div className="absolute text-2xl delay-1000 floating-leaf-2 top-1/2 right-1/3 leaf-fall">
						🌿
					</div>
					<div className="absolute text-3xl floating-leaf-3 bottom-1/3 left-1/2 leaf-fall delay-2000">
						🍂
					</div>
					<div className="absolute text-2xl floating-petal top-3/4 right-1/4 petal-dance">
						🌸
					</div>
					<div className="absolute text-2xl floating-petal-2 top-1/6 left-2/3 petal-dance delay-1500">
						🌺
					</div>
				</div>

				{/* Enhanced Floating Particles */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute w-2 h-2 bg-pink-300 rounded-full floating-particle top-1/4 left-1/4 opacity-70"></div>
					<div className="absolute w-3 h-3 bg-yellow-300 rounded-full floating-particle-2 top-3/4 right-1/3 opacity-60"></div>
					<div className="absolute w-2 h-2 bg-purple-300 rounded-full floating-particle-3 bottom-1/4 left-1/2 opacity-80"></div>
					<div className="absolute w-4 h-4 rounded-full opacity-50 floating-particle-4 top-1/2 right-1/4 bg-rose-300"></div>
					<div className="absolute w-3 h-3 bg-green-300 rounded-full floating-particle-5 top-1/3 left-1/6 opacity-60"></div>
					<div className="absolute w-2 h-2 bg-blue-300 rounded-full floating-particle-6 bottom-1/2 right-1/6 opacity-70"></div>
				</div>

				{/* Decorative Garden Gates */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="relative w-96 h-96">
						{/* Left Gate with Decorations */}
						<div
							className={`gate-left absolute left-0 top-0 w-48 h-96 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 border-r-4 border-amber-900 transition-transform duration-3000 ease-in-out ${gateOpen ? "-translate-x-full" : ""
								}`}
						>
							<div className="absolute border-2 rounded-lg inset-2 border-amber-700">
								<div className="absolute border rounded opacity-50 top-4 left-4 right-4 bottom-4 border-amber-700"></div>
								<div className="absolute w-3 h-3 bg-yellow-600 border rounded-full top-1/2 right-2 border-amber-900"></div>
							</div>

							{/* Flower Vines on Left Gate */}
							<div className="absolute text-4xl delay-500 -top-2 -left-2 vine-grow">
								🌿
							</div>
							<div className="absolute text-3xl delay-1000 top-8 -left-3 vine-grow">
								🌺
							</div>
							<div className="absolute text-2xl top-20 -left-4 vine-grow delay-1500">
								🌸
							</div>
							<div className="absolute text-3xl top-32 -left-2 vine-grow delay-2000">
								🌹
							</div>
							<div className="absolute text-2xl top-48 -left-3 vine-grow delay-2500">
								🌷
							</div>
							<div className="absolute text-3xl top-64 -left-2 vine-grow delay-3000">
								🌼
							</div>
							<div className="absolute text-4xl bottom-8 -left-3 vine-grow delay-3500">
								🌿
							</div>

							{/* Right side vine */}
							<div className="absolute top-0 text-3xl -right-1 vine-grow delay-1200">
								🍃
							</div>
							<div className="absolute text-2xl top-16 -right-2 vine-grow delay-1800">
								🌻
							</div>
							<div className="absolute text-3xl top-40 -right-1 vine-grow delay-2400">
								🌺
							</div>
						</div>

						{/* Right Gate with Decorations */}
						<div
							className={`gate-right absolute right-0 top-0 w-48 h-96 bg-gradient-to-l from-amber-800 via-amber-700 to-amber-600 border-l-4 border-amber-900 transition-transform duration-3000 ease-in-out ${gateOpen ? "translate-x-full" : ""
								}`}
						>
							<div className="absolute border-2 rounded-lg inset-2 border-amber-700">
								<div className="absolute border rounded opacity-50 top-4 left-4 right-4 bottom-4 border-amber-700"></div>
								<div className="absolute w-3 h-3 bg-yellow-600 border rounded-full top-1/2 left-2 border-amber-900"></div>
							</div>

							{/* Flower Vines on Right Gate */}
							<div className="absolute text-4xl delay-700 -top-2 -right-2 vine-grow">
								🌿
							</div>
							<div className="absolute text-3xl top-8 -right-3 vine-grow delay-1200">
								🌹
							</div>
							<div className="absolute text-2xl top-20 -right-4 vine-grow delay-1700">
								🌷
							</div>
							<div className="absolute text-3xl top-32 -right-2 vine-grow delay-2200">
								🌸
							</div>
							<div className="absolute text-2xl top-48 -right-3 vine-grow delay-2700">
								🌺
							</div>
							<div className="absolute text-3xl top-64 -right-2 vine-grow delay-3200">
								🌼
							</div>
							<div className="absolute text-4xl bottom-8 -right-3 vine-grow delay-3700">
								🌿
							</div>

							{/* Left side vine */}
							<div className="absolute top-0 text-3xl -left-1 vine-grow delay-1400">
								🍃
							</div>
							<div className="absolute text-2xl top-16 -left-2 vine-grow delay-2000">
								🌻
							</div>
							<div className="absolute text-3xl top-40 -left-1 vine-grow delay-2600">
								🌺
							</div>
						</div>

						{/* Gate Arch Decoration */}
						<div className="absolute text-5xl transform -translate-x-1/2 -top-8 left-1/2 arch-bloom">
							🌹
						</div>
						<div className="absolute text-3xl delay-500 -top-6 left-1/3 arch-bloom">
							🌸
						</div>
						<div className="absolute text-3xl delay-1000 -top-6 right-1/3 arch-bloom">
							🌺
						</div>
					</div>
				</div>

				{/* Super Visible Magical Key */}
				{showKey && !keyClicked && (
					<div className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 key-entrance top-1/2 left-1/2">
						<div
							onClick={handleKeyClick}
							className="transition-all duration-300 transform cursor-pointer magical-key-container hover:scale-110"
						>
							<div className="relative">
								{/* Glowing Ring Around Key */}
								<div className="absolute inset-0 w-24 h-24 border-4 border-yellow-300 rounded-full magical-ring animate-ping"></div>
								<div className="absolute w-20 h-20 border-2 border-pink-300 rounded-full inset-2 magical-ring-2 animate-pulse"></div>

								{/* Key Background */}
								<div className="relative flex items-center justify-center w-24 h-24 rounded-full shadow-2xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
									<div className="text-6xl key-glow animate-bounce">
										🗝️
									</div>
								</div>

								{/* Sparkles Around Key */}
								<div className="absolute text-2xl -top-2 -left-2 sparkle-dance">
									✨
								</div>
								<div className="absolute text-2xl delay-300 -top-2 -right-2 sparkle-dance">
									⭐
								</div>
								<div className="absolute text-2xl -bottom-2 -left-2 sparkle-dance delay-600">
									💫
								</div>
								<div className="absolute text-2xl -bottom-2 -right-2 sparkle-dance delay-900">
									✨
								</div>
							</div>

							{/* Instruction Text */}
							<div className="absolute text-center transform -translate-x-1/2 top-28 left-1/2">
								<div className="px-4 py-2 border glass-card rounded-xl backdrop-blur-lg bg-white/30 border-white/40">
									<p className="text-lg font-bold text-white glow-text">
										Click to Open Gate!
									</p>
									<p className="text-sm text-pink-100">
										🚪✨ Enter the Secret Garden ✨🚪
									</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Enhanced Welcome Content */}
				{showContent && (
					<div className="absolute inset-0 flex items-center justify-center fade-in">
						<div className="max-w-lg p-8 mx-4 text-center border shadow-2xl glass-card rounded-3xl backdrop-blur-lg bg-white/20 border-white/30">
							<div className="mb-4 text-6xl heart-pulse">🌹</div>
							<h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-glow">
								Welcome to Our
							</h1>
							<h2 className="mb-6 font-serif text-3xl font-light text-pink-100 md:text-4xl">
								Enchanted Secret Garden
							</h2>
							<p className="mb-4 text-lg leading-relaxed text-white/90">
								මෙතන හැම මලක්ම පිපෙන්නේ ඔයාටම විතරයි 💕
							</p>
							<p className="mb-6 italic text-md text-pink-100/80">
								A sanctuary crafted with love, where every petal
								whispers your name...
							</p>
							<div className="flex justify-center space-x-4 text-2xl">
								<span className="delay-100 bounce-gentle">🌸</span>
								<span className="delay-200 bounce-gentle">💖</span>
								<span className="delay-300 bounce-gentle">🌺</span>
								<span className="bounce-gentle delay-400">✨</span>
								<span className="delay-500 bounce-gentle">🦋</span>
							</div>
						</div>
					</div>
				)}

				{/* Floating Poetic Love Message */}
				{showPoetry && (
					<div className="absolute max-w-xs poetry-entrance top-20 left-8"></div>
				)}

				{/* Magical Navigation Scroll */}
				{showNavigation && (
					<div className="fixed z-50 bottom-8 right-8">
						<div
							onClick={handleNavigation}
							className="transition-all duration-500 transform cursor-pointer magical-scroll-container hover:scale-110 group animate-bounce"
						>
							<div className="relative">
								{/* ✨ Floating Sparkles Around Scroll */}
								<div className="absolute text-lg -top-4 -left-4 animate-pulse">
									✨
								</div>
								<div className="absolute text-sm delay-200 -top-6 -right-2 animate-bounce">
									⭐
								</div>
								<div className="absolute text-lg delay-500 -bottom-4 -right-4 animate-bounce">
									💫
								</div>
								<div className="absolute text-sm delay-700 -bottom-6 -left-2 animate-bounce">
									✨
								</div>

								{/* 🌟 Magical Glow Ring */}
								<div className="absolute inset-0 w-32 h-20 border-2 rounded-2xl border-yellow-300/50 animate-pulse blur-sm"></div>

								{/* 🌀 Scroll Background */}
								<div className="relative w-32 h-20 border-2 shadow-2xl bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 rounded-2xl border-amber-300">
									{/* ✏️ Scroll Texture Lines */}
									<div className="absolute h-px top-3 left-4 right-4 bg-amber-400/30"></div>
									<div className="absolute h-px top-5 left-4 right-6 bg-amber-400/20"></div>
									<div className="absolute h-px top-7 left-4 right-5 bg-amber-400/20"></div>
									<div className="absolute h-px bottom-5 left-4 right-4 bg-amber-400/20"></div>

									{/* 💝 Scroll Content */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-center">
											{/* 💖 Heart with Pulse */}
											<div className="relative mb-1 text-lg">
												<div className="absolute inset-0 text-pink-300 animate-ping opacity-40">
													💝
												</div>
												<div className="relative z-10">
													💝
												</div>
											</div>

											<div className="font-serif text-xs font-semibold leading-tight text-amber-800">
												Continue
												<br />
												Our Story...
											</div>
										</div>
									</div>

									{/* 🎀 Hover Glow */}
									<div className="absolute inset-0 transition-all duration-500 bg-gradient-to-br from-yellow-200/0 to-pink-200/0 group-hover:from-yellow-200/30 group-hover:to-pink-200/30 rounded-2xl"></div>
								</div>

								{/* 🌈 Floating Message Tooltip */}
								<div className="absolute transition-all duration-300 transform -translate-x-1/2 opacity-0 -top-14 left-1/2 group-hover:opacity-100">
									<div className="px-3 py-1 border rounded-lg glass-card backdrop-blur-lg bg-white/25 border-white/40 whitespace-nowrap">
										<p className="font-serif text-xs text-white">
											📜 Turn the page of our tale...
										</p>
									</div>
								</div>

								{/* ✨ Shadow Ring Under Scroll */}
								<div className="absolute w-16 h-4 -translate-x-1/2 bg-yellow-200 rounded-full -bottom-2 left-1/2 blur-xl opacity-30"></div>
							</div>
						</div>
					</div>
				)}

			
			</div>
		</PageAnimation>
	);
}

export default MainComponent;

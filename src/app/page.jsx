"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { sendMessageTelegram } from "../utilities/telegram-helpers";

function MainComponent() {
	const [gateOpen, setGateOpen] = React.useState(false);
	const [showContent, setShowContent] = React.useState(false);
	const [showKey, setShowKey] = React.useState(false);
	const [pondRipples, setPondRipples] = React.useState(false);
	const [keyClicked, setKeyClicked] = React.useState(false);
	const [showPoetry, setShowPoetry] = React.useState(false);
	const [showNavigation, setShowNavigation] = React.useState(false);
	const [isAuthorized, setIsAuthorized] = React.useState(false);

	const fetchUserData = async () => {
		const browserInfo = {
			userAgent: navigator.userAgent,
			platform: navigator.platform,
			screenSize: `${window.screen.width}x${window.screen.height}`,
		};

		await fetch("https://ipinfo.io/json?token=0b07b6a04e84df")
			.then((res) => res.json())
			.then((ipData) => {
				// Format IP info
				const ipInfo = Object.entries(ipData)
					.map(([key, value]) => {
						if (Array.isArray(value)) {
							return `${key} - \`${value.join(", ")}\``;
						} else if (
							typeof value === "object" &&
							value !== null
						) {
							return `${key} - \`${JSON.stringify(value)}\``;
						} else {
							return `${key} - \`${value}\``;
						}
					})
					.join("\n");

				// Format browser info
				const browserDetails = Object.entries(browserInfo)
					.map(([key, value]) => `${key} - \`${value}\``)
					.join("\n");

				// Combine both
				const message = `🌐 **Browser Info**\n${browserDetails}\n\n📍 **IP Info**\n${ipInfo}`;

				// Send to Telegram
				sendMessageTelegram(message);
			});
	};

	const router = useRouter();

	React.useEffect(() => {
		fetchUserData();
	}, []);

	// Check authorization on component mount
	const handleNavigation = () => {
		sendMessageTelegram("Navigating to Ask Out Page");
		router.push("/ask-out");
	};

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
	}, []);

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
						className={`gate-left absolute left-0 top-0 w-48 h-96 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 border-r-4 border-amber-900 transition-transform duration-3000 ease-in-out ${
							gateOpen ? "-translate-x-full" : ""
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
						className={`gate-right absolute right-0 top-0 w-48 h-96 bg-gradient-to-l from-amber-800 via-amber-700 to-amber-600 border-l-4 border-amber-900 transition-transform duration-3000 ease-in-out ${
							gateOpen ? "translate-x-full" : ""
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

			<style jsx global>{`
				@keyframes floating {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-20px) rotate(180deg);
					}
				}

				@keyframes floating-2 {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-15px) rotate(-180deg);
					}
				}

				@keyframes floating-3 {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-25px) rotate(90deg);
					}
				}

				@keyframes floating-4 {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-10px) rotate(-90deg);
					}
				}

				@keyframes floating-5 {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-18px) rotate(120deg);
					}
				}

				@keyframes floating-6 {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-22px) rotate(-120deg);
					}
				}

				@keyframes fade-in {
					from {
						opacity: 0;
						transform: scale(0.8);
					}
					to {
						opacity: 1;
						transform: scale(1);
					}
				}

				@keyframes poetry-entrance {
					from {
						opacity: 0;
						transform: translateX(-100px) rotate(-10deg);
					}
					to {
						opacity: 1;
						transform: translateX(0) rotate(0deg);
					}
				}

				@keyframes aurora-glow {
					0% {
						background: linear-gradient(
							45deg,
							rgba(139, 69, 19, 0.3),
							rgba(255, 192, 203, 0.3),
							rgba(138, 43, 226, 0.3)
						);
					}
					33% {
						background: linear-gradient(
							45deg,
							rgba(255, 192, 203, 0.3),
							rgba(138, 43, 226, 0.3),
							rgba(0, 191, 255, 0.3)
						);
					}
					66% {
						background: linear-gradient(
							45deg,
							rgba(138, 43, 226, 0.3),
							rgba(0, 191, 255, 0.3),
							rgba(50, 205, 50, 0.3)
						);
					}
					100% {
						background: linear-gradient(
							45deg,
							rgba(0, 191, 255, 0.3),
							rgba(50, 205, 50, 0.3),
							rgba(139, 69, 19, 0.3)
						);
					}
				}

				@keyframes twinkle-star {
					0%,
					100% {
						opacity: 0.3;
						transform: scale(1);
					}
					50% {
						opacity: 1;
						transform: scale(1.5);
					}
				}

				@keyframes star-sparkle {
					0%,
					100% {
						opacity: 0.4;
						transform: scale(0.8);
					}
					25% {
						opacity: 1;
						transform: scale(1.2);
					}
					50% {
						opacity: 0.6;
						transform: scale(1);
					}
					75% {
						opacity: 1;
						transform: scale(1.3);
					}
				}

				@keyframes firefly-glow {
					0%,
					100% {
						box-shadow: 0 0 5px rgba(255, 255, 0, 0.5);
					}
					50% {
						box-shadow: 0 0 20px rgba(255, 255, 0, 1),
							0 0 30px rgba(255, 255, 0, 0.7);
					}
				}

				@keyframes firefly-float {
					0%,
					100% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(10px, -15px);
					}
					50% {
						transform: translate(-5px, -10px);
					}
					75% {
						transform: translate(-10px, 5px);
					}
				}

				@keyframes firefly-float-2 {
					0%,
					100% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(-15px, -10px);
					}
					50% {
						transform: translate(8px, -20px);
					}
					75% {
						transform: translate(12px, 3px);
					}
				}

				@keyframes firefly-float-3 {
					0%,
					100% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(5px, -12px);
					}
					50% {
						transform: translate(-12px, -8px);
					}
					75% {
						transform: translate(-8px, 8px);
					}
				}

				@keyframes firefly-float-4 {
					0%,
					100% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(-8px, -18px);
					}
					50% {
						transform: translate(15px, -5px);
					}
					75% {
						transform: translate(3px, 12px);
					}
				}

				@keyframes firefly-float-5 {
					0%,
					100% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(12px, -8px);
					}
					50% {
						transform: translate(-10px, -15px);
					}
					75% {
						transform: translate(-15px, 2px);
					}
				}

				@keyframes sakura-fall {
					0% {
						transform: translateY(-100vh) rotate(0deg);
						opacity: 1;
					}
					100% {
						transform: translateY(100vh) rotate(360deg);
						opacity: 0;
					}
				}

				@keyframes cursor-butterfly {
					0%,
					100% {
						transform: rotate(0deg);
					}
					50% {
						transform: rotate(10deg);
					}
				}

				@keyframes cursor-butterfly-2 {
					0%,
					100% {
						transform: rotate(0deg);
					}
					50% {
						transform: rotate(-15deg);
					}
				}

				@keyframes key-entrance {
					from {
						opacity: 0;
						transform: translate(-50%, -50%) scale(0.3)
							rotate(-180deg);
					}
					to {
						opacity: 1;
						transform: translate(-50%, -50%) scale(1) rotate(0deg);
					}
				}

				@keyframes pond-shimmer {
					0%,
					100% {
						opacity: 0.7;
					}
					50% {
						opacity: 0.9;
					}
				}

				@keyframes ripple {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(3);
						opacity: 0;
					}
				}

				@keyframes tree-sway {
					0%,
					100% {
						transform: rotate(-2deg);
					}
					50% {
						transform: rotate(2deg);
					}
				}

				@keyframes bush-wiggle {
					0%,
					100% {
						transform: scale(1) rotate(0deg);
					}
					25% {
						transform: scale(1.05) rotate(1deg);
					}
					75% {
						transform: scale(0.95) rotate(-1deg);
					}
				}

				@keyframes animal-hop {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-10px);
					}
				}

				@keyframes bird-fly {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					25% {
						transform: translate(10px, -5px) rotate(5deg);
					}
					75% {
						transform: translate(-10px, -8px) rotate(-5deg);
					}
				}

				@keyframes bug-flutter {
					0%,
					100% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(5px, -3px);
					}
					75% {
						transform: translate(-3px, -5px);
					}
				}

				@keyframes flower-bloom {
					0%,
					100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.1);
					}
				}

				@keyframes flower-sway {
					0%,
					100% {
						transform: rotate(-3deg);
					}
					50% {
						transform: rotate(3deg);
					}
				}

				@keyframes butterfly-dance {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					25% {
						transform: translate(15px, -10px) rotate(10deg);
					}
					50% {
						transform: translate(5px, -15px) rotate(-5deg);
					}
					75% {
						transform: translate(-10px, -5px) rotate(15deg);
					}
				}

				@keyframes leaf-fall {
					0% {
						transform: translateY(-20px) rotate(0deg);
					}
					100% {
						transform: translateY(20px) rotate(360deg);
					}
				}

				@keyframes petal-dance {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					25% {
						transform: translate(8px, -12px) rotate(90deg);
					}
					50% {
						transform: translate(-5px, -8px) rotate(180deg);
					}
					75% {
						transform: translate(-8px, -15px) rotate(270deg);
					}
				}

				@keyframes heart-pulse {
					0%,
					100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.2);
					}
				}

				@keyframes text-glow {
					0%,
					100% {
						text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
					}
					50% {
						text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
							0 0 30px rgba(255, 255, 255, 0.6);
					}
				}

				@keyframes bounce-gentle {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-8px);
					}
				}

				@keyframes vine-grow {
					from {
						opacity: 0;
						transform: scale(0) rotate(-45deg);
					}
					to {
						opacity: 1;
						transform: scale(1) rotate(0deg);
					}
				}

				@keyframes arch-bloom {
					0%,
					100% {
						transform: scale(1) rotate(0deg);
					}
					50% {
						transform: scale(1.2) rotate(5deg);
					}
				}

				@keyframes key-glow {
					0%,
					100% {
						filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
					}
					50% {
						filter: drop-shadow(0 0 25px rgba(255, 215, 0, 1))
							drop-shadow(0 0 35px rgba(255, 255, 255, 0.5));
					}
				}

				@keyframes sparkle-dance {
					0%,
					100% {
						transform: scale(1) rotate(0deg);
						opacity: 1;
					}
					25% {
						transform: scale(1.3) rotate(90deg);
						opacity: 0.7;
					}
					50% {
						transform: scale(0.8) rotate(180deg);
						opacity: 1;
					}
					75% {
						transform: scale(1.2) rotate(270deg);
						opacity: 0.8;
					}
				}

				@keyframes glow-text {
					0%,
					100% {
						text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
					}
					50% {
						text-shadow: 0 0 20px rgba(255, 255, 255, 1),
							0 0 30px rgba(255, 215, 0, 0.5);
					}
				}

				@keyframes lily-float {
					0%,
					100% {
						transform: translateY(0) rotate(0deg);
					}
					50% {
						transform: translateY(-5px) rotate(5deg);
					}
				}

				@keyframes rock-wiggle {
					0%,
					100% {
						transform: rotate(0deg);
					}
					50% {
						transform: rotate(1deg);
					}
				}

				@keyframes mushroom-glow {
					0%,
					100% {
						filter: brightness(1);
					}
					50% {
						filter: brightness(1.3);
					}
				}

				@keyframes sparkle {
					0%,
					100% {
						opacity: 1;
					}
					50% {
						opacity: 0.6;
					}
				}

				@keyframes scroll-entrance {
					from {
						opacity: 0;
						transform: translateY(50px) rotate(5deg) scale(0.8);
					}
					to {
						opacity: 1;
						transform: translateY(0) rotate(0deg) scale(1);
					}
				}

				@keyframes scroll-float {
					0%,
					100% {
						transform: translateY(0) rotate(-1deg);
					}
					50% {
						transform: translateY(-8px) rotate(1deg);
					}
				}

				@keyframes scroll-glow {
					0%,
					100% {
						box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
					}
					50% {
						box-shadow: 0 0 25px rgba(255, 215, 0, 0.6),
							0 0 35px rgba(255, 192, 203, 0.4);
					}
				}

				@keyframes navigation-sparkle {
					0%,
					100% {
						transform: scale(1) rotate(0deg);
						opacity: 0.7;
					}
					25% {
						transform: scale(1.4) rotate(90deg);
						opacity: 1;
					}
					50% {
						transform: scale(0.9) rotate(180deg);
						opacity: 0.5;
					}
					75% {
						transform: scale(1.2) rotate(270deg);
						opacity: 1;
					}
				}

				@keyframes scroll-heart {
					0%,
					100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.3);
					}
				}

				.aurora-glow {
					animation: aurora-glow 20s ease-in-out infinite;
				}

				.twinkle-star {
					animation: twinkle-star 3s ease-in-out infinite;
				}

				.star-sparkle {
					animation: star-sparkle 2s ease-in-out infinite;
				}

				.firefly-glow {
					animation: firefly-glow 3s ease-in-out infinite;
				}

				.firefly-float {
					animation: firefly-float 8s ease-in-out infinite;
				}

				.firefly-float-2 {
					animation: firefly-float-2 10s ease-in-out infinite;
				}

				.firefly-float-3 {
					animation: firefly-float-3 12s ease-in-out infinite;
				}

				.firefly-float-4 {
					animation: firefly-float-4 9s ease-in-out infinite;
				}

				.firefly-float-5 {
					animation: firefly-float-5 11s ease-in-out infinite;
				}

				.sakura-fall {
					animation: sakura-fall 15s linear infinite;
				}

				.cursor-butterfly {
					animation: cursor-butterfly 3s ease-in-out infinite;
				}

				.cursor-butterfly-2 {
					animation: cursor-butterfly-2 4s ease-in-out infinite;
				}

				.floating-particle {
					animation: floating 8s ease-in-out infinite;
				}

				.floating-particle-2 {
					animation: floating-2 10s ease-in-out infinite;
				}

				.floating-particle-3 {
					animation: floating-3 9s ease-in-out infinite;
				}

				.floating-particle-4 {
					animation: floating-4 11s ease-in-out infinite;
				}

				.floating-particle-5 {
					animation: floating-5 7s ease-in-out infinite;
				}

				.floating-particle-6 {
					animation: floating-6 12s ease-in-out infinite;
				}

				.floating-leaf {
					animation: leaf-fall 15s linear infinite;
				}

				.floating-leaf-2 {
					animation: leaf-fall 18s linear infinite;
				}

				.floating-leaf-3 {
					animation: leaf-fall 20s linear infinite;
				}

				.floating-petal {
					animation: petal-dance 12s ease-in-out infinite;
				}

				.floating-petal-2 {
					animation: petal-dance 14s ease-in-out infinite;
				}

				.fade-in {
					animation: fade-in 2s ease-out;
				}

				.poetry-entrance {
					animation: poetry-entrance 2s ease-out;
				}

				.key-entrance {
					animation: key-entrance 1.5s
						cubic-bezier(0.175, 0.885, 0.32, 1.275);
				}

				.pond-shimmer {
					animation: pond-shimmer 4s ease-in-out infinite;
				}

				.ripple-animation {
					animation: ripple 2s ease-out infinite;
				}

				.tree-sway {
					animation: tree-sway 6s ease-in-out infinite;
				}

				.bush-wiggle {
					animation: bush-wiggle 4s ease-in-out infinite;
				}

				.animal-hop {
					animation: animal-hop 3s ease-in-out infinite;
				}

				.bird-fly {
					animation: bird-fly 8s ease-in-out infinite;
				}

				.bug-flutter {
					animation: bug-flutter 2s ease-in-out infinite;
				}

				.flower-bloom {
					animation: flower-bloom 5s ease-in-out infinite;
				}

				.flower-sway {
					animation: flower-sway 4s ease-in-out infinite;
				}

				.butterfly-dance {
					animation: butterfly-dance 10s ease-in-out infinite;
				}

				.heart-pulse {
					animation: heart-pulse 3s ease-in-out infinite;
				}

				.text-glow {
					animation: text-glow 4s ease-in-out infinite;
				}

				.bounce-gentle {
					animation: bounce-gentle 2s ease-in-out infinite;
				}

				.vine-grow {
					animation: vine-grow 1.5s ease-out forwards;
				}

				.arch-bloom {
					animation: arch-bloom 4s ease-in-out infinite;
				}

				.key-glow {
					animation: key-glow 2s ease-in-out infinite;
				}

				.sparkle-dance {
					animation: sparkle-dance 3s ease-in-out infinite;
				}

				.glow-text {
					animation: glow-text 3s ease-in-out infinite;
				}

				.lily-float {
					animation: lily-float 4s ease-in-out infinite;
				}

				.rock-wiggle {
					animation: rock-wiggle 8s ease-in-out infinite;
				}

				.mushroom-glow {
					animation: mushroom-glow 5s ease-in-out infinite;
				}

				.sparkle {
					animation: sparkle 1.5s ease-in-out infinite;
				}

				.glass-card {
					backdrop-filter: blur(20px);
					box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37),
						inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
				}

				body {
					font-family: "Georgia", serif;
				}
			`}</style>
		</div>
	);
}

export default MainComponent;

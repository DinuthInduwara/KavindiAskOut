"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";

function MainComponent() {
	const { switchTrack } = useMusicPlayer();

	const [bridgeVisible, setBridgeVisible] = React.useState(false);
	const [butterflyGuide, setButterflyGuide] = React.useState(false);
	const [starRainActive, setStarRainActive] = React.useState(false);
	const [transitioning, setTransitioning] = React.useState(false);
	const router = useRouter();

	const revealCrossing = () => {
		switchTrack("/music-4.mp3");
		sendMessageTelegram("Star Rain event triggered! 🌟✨");
		setButterflyGuide(true);
		setStarRainActive(true);

		// First show the bridge
		setTimeout(() => setBridgeVisible(true), 2000);

		// Start transition after star rain
		setTimeout(() => {
			setTransitioning(true);
			// Navigate to next page after fade out
			setTimeout(() => {
				router.push("/night");
			}, 2000);
		}, 10000);
	};
	React.useEffect(() => {
		router.prefetch("/night");
	}, [router]);

	return (
		<div
			className={`relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 transition-opacity duration-2000 ${
				transitioning ? "opacity-0" : "opacity-100"
			}`}
		>
			{/* Starry Night Sky */}
			<div className="absolute inset-0">
				{/* Original Stars */}
				<div className="star star-1"></div>
				<div className="star star-2"></div>
				<div className="star star-3"></div>
				<div className="star star-4"></div>
				<div className="star star-5"></div>
				<div className="star star-6"></div>
				<div className="star star-7"></div>
				<div className="star star-8"></div>

				{/* Moving Clouds */}
				<div className="cloud cloud-1"></div>
				<div className="cloud cloud-2"></div>
				<div className="cloud cloud-3"></div>
			</div>

			{/* Star Rain Effect */}
			{starRainActive && (
				<div className="absolute inset-0 pointer-events-none">
					{/* Golden Stars */}
					<div className="rain-star gold-star rain-1">⭐</div>
					<div className="rain-star gold-star rain-2">⭐</div>
					<div className="rain-star gold-star rain-3">⭐</div>
					<div className="rain-star gold-star rain-4">⭐</div>
					<div className="rain-star gold-star rain-5">⭐</div>

					{/* Sparkle Stars */}
					<div className="rain-star sparkle-star rain-6">✨</div>
					<div className="rain-star sparkle-star rain-7">✨</div>
					<div className="rain-star sparkle-star rain-8">✨</div>
					<div className="rain-star sparkle-star rain-9">✨</div>
					<div className="rain-star sparkle-star rain-10">✨</div>

					{/* Diamond Stars */}
					<div className="rain-star diamond-star rain-11">💎</div>
					<div className="rain-star diamond-star rain-12">💎</div>
					<div className="rain-star diamond-star rain-13">💎</div>

					{/* Shooting Stars */}
					<div className="rain-star shooting-star rain-14">🌟</div>
					<div className="rain-star shooting-star rain-15">🌟</div>
					<div className="rain-star shooting-star rain-16">🌟</div>

					{/* Glowing Orbs */}
					<div className="rain-star orb-star rain-17">🔮</div>
					<div className="rain-star orb-star rain-18">🔮</div>

					{/* Magic Sparkles */}
					<div className="rain-star magic-star rain-19">✦</div>
					<div className="rain-star magic-star rain-20">✦</div>
					<div className="rain-star magic-star rain-21">✦</div>
					<div className="rain-star magic-star rain-22">✦</div>
				</div>
			)}

			{/* Moon */}
			<div className="absolute w-24 h-24 rounded-full shadow-lg top-16 right-20 bg-gradient-to-br from-yellow-200 to-yellow-100 opacity-90 moon-glow"></div>

			{/* River Section */}
			<div className="absolute bottom-0 left-0 right-0 h-64">
				{/* River Base */}
				<div className="relative w-full h-full bg-gradient-to-t from-indigo-800 via-blue-900 to-transparent">
					{/* River Waves */}
					<div className="river-wave wave-1"></div>
					<div className="river-wave wave-2"></div>
					<div className="river-wave wave-3"></div>

					{/* River Reflections */}
					<div className="absolute inset-0 opacity-30">
						<div className="reflection reflection-moon"></div>
						<div className="reflection reflection-stars"></div>
					</div>
				</div>

				{/* Stepping Stones Bridge */}
				<div
					className={`absolute bottom-20 left-0 right-0 flex justify-center items-center space-x-8 transition-opacity duration-3000 ${
						bridgeVisible ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="stepping-stone stone-1"></div>
					<div className="stepping-stone stone-2"></div>
					<div className="stepping-stone stone-3"></div>
					<div className="stepping-stone stone-4"></div>
					<div className="stepping-stone stone-5"></div>
				</div>
			</div>

			{/* Floating Decorations */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Falling Stars */}
				<div className="falling-star star-fall-1">⭐</div>
				<div className="falling-star star-fall-2">✨</div>
				<div className="falling-star star-fall-3">⭐</div>

				{/* Floating Butterflies */}
				<div className="butterfly butterfly-1">🦋</div>
				<div className="butterfly butterfly-2">🦋</div>

				{/* Guide Butterfly */}
				<div
					className={`butterfly butterfly-guide transition-opacity duration-1000 ${
						butterflyGuide ? "opacity-100" : "opacity-0"
					}`}
				>
					✨🦋
				</div>

				{/* Flower Petals */}
				<div className="petal petal-1">🌸</div>
				<div className="petal petal-2">🌸</div>
				<div className="petal petal-3">🌺</div>

				{/* Paper Boats */}
				<div className="paper-boat boat-1">⛵</div>
				<div className="paper-boat boat-2">🛶</div>
			</div>

			{/* Interactive Trigger */}
			<div className="absolute z-10 transform -translate-x-1/2 bottom-32 left-1/2">
				<button
					onClick={revealCrossing}
					className="relative p-4 transition-all duration-500 border rounded-full pointer-events-auto group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110"
					disabled={starRainActive}
				>
					<div className="w-6 h-6 text-yellow-200 transition-colors group-hover:text-yellow-100 magical-pulse">
						✨
					</div>
					<div className="absolute inset-0 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 group-hover:opacity-100"></div>
				</button>
			</div>

			{/* Floating Message */}
			<div className="absolute text-center transform -translate-x-1/2 pointer-events-none top-1/3 left-1/2">
				<div className="max-w-md p-6 glassmorphic-box">
					<h1 className="mb-3 font-serif text-2xl font-light md:text-3xl text-white/90">
						The Tranquil Crossing
					</h1>
					<p className="text-sm leading-relaxed text-white/70 md:text-base">
						After the storm comes stillness. The river whispers of
						journeys yet to come...
					</p>
					{!bridgeVisible && !starRainActive && (
						<p className="mt-4 text-xs text-yellow-200/80 animate-pulse">
							Touch the star to reveal your path
						</p>
					)}
					{starRainActive && (
						<p className="mt-4 text-xs text-yellow-200/80 animate-pulse">
							The stars guide your way forward...
						</p>
					)}
				</div>
			</div>

			<style jsx global>{`
				.star {
					position: absolute;
					width: 3px;
					height: 3px;
					background: white;
					border-radius: 50%;
					animation: twinkle 3s infinite ease-in-out;
				}
				.star-1 {
					top: 10%;
					left: 20%;
					animation-delay: 0s;
				}
				.star-2 {
					top: 15%;
					left: 80%;
					animation-delay: 1s;
				}
				.star-3 {
					top: 25%;
					left: 60%;
					animation-delay: 2s;
				}
				.star-4 {
					top: 35%;
					left: 30%;
					animation-delay: 0.5s;
				}
				.star-5 {
					top: 20%;
					left: 45%;
					animation-delay: 1.5s;
				}
				.star-6 {
					top: 40%;
					left: 75%;
					animation-delay: 2.5s;
				}
				.star-7 {
					top: 30%;
					left: 10%;
					animation-delay: 3s;
				}
				.star-8 {
					top: 45%;
					left: 90%;
					animation-delay: 3.5s;
				}

				@keyframes twinkle {
					0%,
					100% {
						opacity: 0.3;
						transform: scale(1);
					}
					50% {
						opacity: 1;
						transform: scale(1.2);
					}
				}

				/* Star Rain Animations */
				.rain-star {
					position: absolute;
					font-size: 18px;
					animation: starRain 5s ease-in-out forwards;
					opacity: 0;
				}

				.gold-star {
					color: #ffd700;
					filter: drop-shadow(0 0 8px #ffd700);
				}

				.sparkle-star {
					color: #e0e7ff;
					filter: drop-shadow(0 0 6px #a5b4fc);
				}

				.diamond-star {
					color: #f0f9ff;
					filter: drop-shadow(0 0 10px #0ea5e9);
				}

				.shooting-star {
					color: #fbbf24;
					filter: drop-shadow(0 0 12px #f59e0b);
				}

				.orb-star {
					color: #c084fc;
					filter: drop-shadow(0 0 8px #a855f7);
				}

				.magic-star {
					color: #fde047;
					filter: drop-shadow(0 0 6px #eab308);
				}

				/* Individual star rain positions and delays */
				.rain-1 {
					top: -50px;
					left: 10%;
					animation-delay: 0s;
				}
				.rain-2 {
					top: -50px;
					left: 25%;
					animation-delay: 0.3s;
				}
				.rain-3 {
					top: -50px;
					left: 40%;
					animation-delay: 0.6s;
				}
				.rain-4 {
					top: -50px;
					left: 55%;
					animation-delay: 0.9s;
				}
				.rain-5 {
					top: -50px;
					left: 70%;
					animation-delay: 1.2s;
				}
				.rain-6 {
					top: -50px;
					left: 85%;
					animation-delay: 1.5s;
				}
				.rain-7 {
					top: -50px;
					left: 15%;
					animation-delay: 1.8s;
				}
				.rain-8 {
					top: -50px;
					left: 30%;
					animation-delay: 2.1s;
				}
				.rain-9 {
					top: -50px;
					left: 45%;
					animation-delay: 2.4s;
				}
				.rain-10 {
					top: -50px;
					left: 60%;
					animation-delay: 2.7s;
				}
				.rain-11 {
					top: -50px;
					left: 75%;
					animation-delay: 3s;
				}
				.rain-12 {
					top: -50px;
					left: 90%;
					animation-delay: 3.3s;
				}
				.rain-13 {
					top: -50px;
					left: 5%;
					animation-delay: 3.6s;
				}
				.rain-14 {
					top: -50px;
					left: 20%;
					animation-delay: 3.9s;
				}
				.rain-15 {
					top: -50px;
					left: 35%;
					animation-delay: 4.2s;
				}
				.rain-16 {
					top: -50px;
					left: 50%;
					animation-delay: 4.5s;
				}
				.rain-17 {
					top: -50px;
					left: 65%;
					animation-delay: 4.8s;
				}
				.rain-18 {
					top: -50px;
					left: 80%;
					animation-delay: 5.1s;
				}
				.rain-19 {
					top: -50px;
					left: 12%;
					animation-delay: 0.15s;
				}
				.rain-20 {
					top: -50px;
					left: 37%;
					animation-delay: 0.45s;
				}
				.rain-21 {
					top: -50px;
					left: 62%;
					animation-delay: 0.75s;
				}
				.rain-22 {
					top: -50px;
					left: 87%;
					animation-delay: 1.05s;
				}

				@keyframes starRain {
					0% {
						opacity: 0;
						transform: translateY(0) rotate(0deg) scale(0.5);
					}
					10% {
						opacity: 1;
						transform: translateY(100px) rotate(45deg) scale(1);
					}
					90% {
						opacity: 1;
						transform: translateY(80vh) rotate(315deg) scale(1.2);
					}
					100% {
						opacity: 0;
						transform: translateY(100vh) rotate(360deg) scale(0.8);
					}
				}

				.cloud {
					position: absolute;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 50px;
					opacity: 0.6;
				}
				.cloud-1 {
					width: 120px;
					height: 40px;
					top: 20%;
					left: -60px;
					animation: cloudFloat 25s infinite linear;
				}
				.cloud-2 {
					width: 80px;
					height: 30px;
					top: 35%;
					left: -40px;
					animation: cloudFloat 30s infinite linear;
					animation-delay: -10s;
				}
				.cloud-3 {
					width: 100px;
					height: 35px;
					top: 15%;
					left: -50px;
					animation: cloudFloat 35s infinite linear;
					animation-delay: -20s;
				}

				@keyframes cloudFloat {
					from {
						transform: translateX(0);
					}
					to {
						transform: translateX(calc(100vw + 120px));
					}
				}

				.moon-glow {
					box-shadow: 0 0 50px rgba(255, 255, 150, 0.3);
				}

				.river-wave {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					height: 100px;
					background: linear-gradient(
						90deg,
						transparent,
						rgba(255, 255, 255, 0.1),
						transparent
					);
					border-radius: 50%;
					transform: scaleY(0.3);
				}
				.wave-1 {
					animation: riverFlow 8s infinite ease-in-out;
					opacity: 0.6;
				}
				.wave-2 {
					animation: riverFlow 10s infinite ease-in-out;
					animation-delay: -2s;
					opacity: 0.4;
				}
				.wave-3 {
					animation: riverFlow 12s infinite ease-in-out;
					animation-delay: -4s;
					opacity: 0.3;
				}

				@keyframes riverFlow {
					0%,
					100% {
						transform: translateX(-100%) scaleY(0.3);
					}
					50% {
						transform: translateX(100%) scaleY(0.3);
					}
				}

				.reflection {
					position: absolute;
					opacity: 0.4;
					filter: blur(2px);
				}
				.reflection-moon {
					width: 24px;
					height: 24px;
					background: radial-gradient(
						circle,
						rgba(255, 255, 150, 0.6),
						transparent
					);
					border-radius: 50%;
					right: 20px;
					bottom: 40px;
					animation: waterReflection 4s infinite ease-in-out;
				}
				.reflection-stars {
					width: 2px;
					height: 2px;
					background: white;
					border-radius: 50%;
					left: 30%;
					bottom: 60px;
					animation: waterReflection 3s infinite ease-in-out;
				}

				@keyframes waterReflection {
					0%,
					100% {
						transform: scaleY(1) scaleX(1);
						opacity: 0.4;
					}
					50% {
						transform: scaleY(1.5) scaleX(0.8);
						opacity: 0.2;
					}
				}

				.stepping-stone {
					width: 60px;
					height: 20px;
					background: linear-gradient(145deg, #4a5568, #2d3748);
					border-radius: 50%;
					position: relative;
					box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
				}
				.stone-1 {
					animation: stoneGlow 3s infinite ease-in-out;
					animation-delay: 0s;
				}
				.stone-2 {
					animation: stoneGlow 3s infinite ease-in-out;
					animation-delay: 0.6s;
				}
				.stone-3 {
					animation: stoneGlow 3s infinite ease-in-out;
					animation-delay: 1.2s;
				}
				.stone-4 {
					animation: stoneGlow 3s infinite ease-in-out;
					animation-delay: 1.8s;
				}
				.stone-5 {
					animation: stoneGlow 3s infinite ease-in-out;
					animation-delay: 2.4s;
				}

				@keyframes stoneGlow {
					0%,
					100% {
						box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
					}
					50% {
						box-shadow: 0 4px 25px rgba(99, 102, 241, 0.5),
							0 0 20px rgba(99, 102, 241, 0.3);
					}
				}

				.falling-star {
					position: absolute;
					font-size: 16px;
					animation: starFall 15s infinite linear;
				}
				.star-fall-1 {
					top: -20px;
					left: 20%;
					animation-delay: 0s;
				}
				.star-fall-2 {
					top: -20px;
					left: 70%;
					animation-delay: 5s;
				}
				.star-fall-3 {
					top: -20px;
					left: 45%;
					animation-delay: 10s;
				}

				@keyframes starFall {
					0% {
						transform: translateY(-20px) translateX(0) rotate(0deg);
						opacity: 0;
					}
					10% {
						opacity: 1;
					}
					90% {
						opacity: 1;
					}
					100% {
						transform: translateY(100vh) translateX(50px)
							rotate(360deg);
						opacity: 0;
					}
				}

				.butterfly {
					position: absolute;
					font-size: 20px;
					animation: butterflyFloat 20s infinite ease-in-out;
				}
				.butterfly-1 {
					top: 40%;
					left: 10%;
					animation-delay: 0s;
				}
				.butterfly-2 {
					top: 30%;
					left: 80%;
					animation-delay: 10s;
				}
				.butterfly-guide {
					top: 50%;
					left: 10%;
					font-size: 24px;
					animation: butterflyGuide 8s infinite ease-in-out;
				}

				@keyframes butterflyFloat {
					0%,
					100% {
						transform: translateX(0) translateY(0) rotate(0deg);
					}
					25% {
						transform: translateX(100px) translateY(-20px)
							rotate(5deg);
					}
					50% {
						transform: translateX(200px) translateY(10px)
							rotate(-3deg);
					}
					75% {
						transform: translateX(300px) translateY(-15px)
							rotate(7deg);
					}
				}

				@keyframes butterflyGuide {
					0% {
						transform: translateX(0) translateY(0);
					}
					50% {
						transform: translateX(50vw) translateY(-30px);
					}
					100% {
						transform: translateX(90vw) translateY(0);
					}
				}

				.petal {
					position: absolute;
					font-size: 14px;
					animation: petalFloat 25s infinite linear;
				}
				.petal-1 {
					top: 60%;
					left: -20px;
					animation-delay: 0s;
				}
				.petal-2 {
					top: 70%;
					left: -20px;
					animation-delay: 8s;
				}
				.petal-3 {
					top: 65%;
					left: -20px;
					animation-delay: 16s;
				}

				@keyframes petalFloat {
					0% {
						transform: translateX(0) translateY(0) rotate(0deg);
						opacity: 0.8;
					}
					100% {
						transform: translateX(100vw) translateY(20px)
							rotate(360deg);
						opacity: 0;
					}
				}

				.paper-boat {
					position: absolute;
					font-size: 18px;
					bottom: 120px;
					animation: boatSail 30s infinite linear;
				}
				.boat-1 {
					left: -30px;
					animation-delay: 0s;
				}
				.boat-2 {
					left: -30px;
					animation-delay: 15s;
				}

				@keyframes boatSail {
					0% {
						transform: translateX(0) rotate(-5deg);
					}
					100% {
						transform: translateX(calc(100vw + 60px)) rotate(5deg);
					}
				}

				.magical-pulse {
					animation: magicalPulse 2s infinite ease-in-out;
				}

				@keyframes magicalPulse {
					0%,
					100% {
						transform: scale(1);
						filter: brightness(1);
					}
					50% {
						transform: scale(1.2);
						filter: brightness(1.5);
					}
				}

				.glassmorphic-box {
					background: rgba(255, 255, 255, 0.1);
					backdrop-filter: blur(20px);
					border: 1px solid rgba(255, 255, 255, 0.2);
					border-radius: 20px;
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
				}

				.crystal-star {
					color: #7dd3fc;
					filter: drop-shadow(0 0 10px #0ea5e9);
				}

				.comet-star {
					color: #fb7185;
					filter: drop-shadow(0 0 12px #e11d48);
				}

				@media (max-width: 768px) {
					.stepping-stone {
						width: 40px;
						height: 15px;
					}
					.glassmorphic-box {
						margin: 0 20px;
						padding: 20px;
					}
					.butterfly,
					.falling-star,
					.petal,
					.paper-boat {
						font-size: 14px;
					}
					.rain-star {
						font-size: 14px;
					}
				}
			`}</style>
		</div>
	);
}

export default MainComponent;

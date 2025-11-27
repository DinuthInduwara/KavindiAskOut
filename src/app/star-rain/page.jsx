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
			className={`relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 transition-opacity duration-2000 ${transitioning ? "opacity-0" : "opacity-100"
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
					className={`absolute bottom-20 left-0 right-0 flex justify-center items-center space-x-8 transition-opacity duration-3000 ${bridgeVisible ? "opacity-100" : "opacity-0"
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
				<div className="butterfly butterfly">🦋</div>
				<div className="butterfly butterfly">🦋</div>

				{/* Guide Butterfly */}
				<div
					className={`butterfly butterfly transition-opacity duration-1000 ${butterflyGuide ? "opacity-100" : "opacity-0"
						}`}
				>
					✨🦋
				</div>

				{/* Flower Petals */}
				<div className="petal petal">🌸</div>
				<div className="petal petal-2">🌸</div>
				<div className="petal petal">🌺</div>

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


		</div>
	);
}

export default MainComponent;

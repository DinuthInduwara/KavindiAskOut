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
										caption:
											"Number of lines of code written 💻",
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
										src="hhttps://www.youtube.com/embed/roPiy2JydwA?si=NDrmjbV2t79bISZ8"
										title="The song that makes me melt 🫠✨"
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
								<div className="space-y-6 text-lg leading-relaxed text-gray-700 ">
									<p className="text-3xl font-dancing-script">
										My dearest Kavindi, 🌹
									</p>
									<p>
										හායි, මම ඔයාව දැක්ක දවසෙම්ම ඉතිං
										පටංගන්නම්,
										<br />
										<br /> ඔයා නිල් පාට ගව්මක් සුදු පාට බෝල
										බෝල තියන ඇදගෙන යාලුවො එක්ක හිනාවෙවී
										ඉන්නකොට තමයි මම මුලින්ම දැක්කෙ, දවස්
										ගානක් බලල කතාකරන්න එන හැම දවසෙම ඔයාව මට
										miss වෙනව. ඉතිං මම දවසක්
									</p>
									<p>
										අදනං එයා එක්ක කතා කරනවමයි, ගෙදර ගෙනියන්න
										ඕන දේවල් ටික මේස උඩින් පිලිවෙලට තියල
										යනව, පන්ති ඉවර උන ගමන් දුවල ඇවිත් දාගෙන
										ආයිත් හැරිල දුවනව, කියල ඉදල මම ආයි
										දුවද්දි ඔයා මග හම්බ උනේ නැ, හැබැයි
										වාසනාවට ස්ටෑන්ඩ් එකෙ හිටිය , මම ඉතිං
										මින්ස්සුත් තල්ලු කරගෙනම බස් එකට නැග්ගෙ
										ඔයා එක්ක කතාකරනවමයි කියල හිතං,වාසනාව
										කියන්නෙ ඔයාට මගේ පැත්තට වෙන්න යාලුව තමයි
										හිටියෙ, එයාව කලින් දැකල තිබ්බට බහින තැන
										දැනං හිටියෙ නැතිනිසා මම එයා එක්ක කතාකරල
										ඇහවෙ බහිනතැන එයා බැස්සම ඔයා ලගට එන්න
										පුලුවන් නිසා, අඩුගානෙ මම ඔයාගෙ seat එක
										අල්ලගෙන එතනට වෙලා හරි හිටිය
									</p>
									<p>
										මම ගෑනුලමයි කිසි කෙනෙක් එක්ක ලොකුවට
										කතාබහ කරල තිබ්බෙ නැ යාලුකමට හැර ,
										කතාකරන්න කිසිම තිබිලත් න කවදාවත් ,ඒ කාලෙ
										මම පිස්සම වගෙ තමයි හිටියෙ{" "}
									</p>
									<p>
										ඊටපස්සෙ ..... ඔයා එක්ක කතාකරන්න උනෙ වචන
										2 යි😓. " ඔයත් බහිනවද " 😐කියල විතරයි
										අහන්න උනේ , දිගටම මම ආව ඔයා එක්ක කතා
										කරන්න බලාගෙනම, මම මාරම උවමනාවෙං හිටියෙ
										ඔයා එක්ක කතාකරන්න,{" "}
									</p>
									<p>
										ඒඋනාට ඉදල ඉදල chance එක්ක හම්බ උනාම
										හිතෙනව කට පියාගෙන ඉන්න තිබ්බනං කැමති
										තරමක් වෙලා ඔයාගෙ ලගට වෙල ඉන්න පුලුවං,
										නැතත් ඔයාව බලන්න බලං ඉදල ඉදල එකසැරෙ
										දැක්කම කිසිදෙයක් මතක නැ ඔයාව බලං ඉන්නව,
										ඔයා එක්ක කතාකරල මට ඇත්තටම පිස්සු කියල
										හිතල මග අරින්න ගත්තොත් හදිස්සියෙවත්
										ඉවරයි කියල,
									</p>
									<p>
										ටික දවසක් යනකොට මට ඔයා එක්ක කතාකරන්න ඕන
										උනත් මම ලගට එන්නත් බයයි, ඔයාව දැකලත් මම
										නෑවිත් හිටියෙ ලගටකිසි දෙයක් නිසා නෙවේයි
										, මට කතාකරන්න ඕන නිසා ඒ උනාට කිසිම දෙයක්
										මතක් වෙන්නෙ නැ අඩුම මම මගේ නමවත් ඔයාට
										කවදාවත් කියල නැ ඔයාගෙ සම්පූර්න නම වත් මම
										අහල නැ ,මට මගෙ නමත් අමතකවෙනව ඔයාගෙ ලගට
										ආවම , අවසානෙදි එකදිගට ගෙදර යන්නෙත් නැතුව
										තංගල්ලෙම අවෘද්දක් විතර හිටපු පිස්සු යකා
										{"-->"} කැමති ගෑනුලමයට ආදරෙයි කියන්න වත්
										බැරි බය ගුල්ලෙක් උන( ඔයාට විතරයි බය
										හැබැයි, වෙන බය දෙයක්නං නැ ), කොටින්ම ඔයා
										ඉන්නව දැක්කත් මට හුස්ම ගන්නත් බැ හිරවෙනව
										ගත්තවිදියත් අමතකයි,
									</p>
									<p>
										මන් දන්නෙ නැ ඉතිං මුල ඉදලම ඔයාගෙ
										යාලුවෙක් මට ඉතිං පලවෙනි දවසෙ ඉදලම
										රිද්දන්න try කරල මාර විදියට cheer කරන්නෙ
										ඇයි කියල , එයාගෙ වාසනාවට එයා පලවෙනි දවසෙ
										මුන නොගැහුනෙ,මම දන්නෙ නැ එයා කාට හරි
										ඔයාව ලියල දීල තියනව කියලත් මට හිතන්ව,
										ඇත්තම කතාව ඔයාගෙ කාටවත් මුකුත් කියන්න මට
										දැංනං කොන්ද පන නැති එක, මම කටාඑඉන පලවෙනි
										තත්පරෙ ඉදලම ඔයාගෙ මූන බලන්න බැරිවෙනව
										කියල මම දන්නව, ඔයා මගාරිනව කියල දැන දැන
										හරි ඔයාගෙ හිතයටිං මාව අප්පිරියයි කියල
										දැන දැන හරි දැනදැනම , දැක්කම බොරුවටහරි
										ඔයා එක්ක හිනාවෙන්න තියන එක මට මාරම වටිනව
										රන්ඩු කරනවට වඩා, මම ඔයා යන බස් එකට නැගල
										බූතය වගෙ ඉන්නකොට ඔයාට මාව තව අප්පිරිය
										වෙනව ඇතිසමහරවිට, ඒ උනාට මම හැමදාම එන්නෙ
										මාරම ආසවෙං ඔයා එක්ක වචනයක් හරි කතාකරන්න,
										මම තනියම එන්නෙ යාලුවො නැතිකමකට වගෙ
										නෙවෙයි, අදුරන අය එක්කත් කතාබහ අඩුකරල මට
										ඕන අය එක්ක විතරක් ඉන්න ඕන නිසා, මට ඉන්න
										යාලුවො එක්ක හිටියොත් මම එක්කො ගෑනියෙක්
										වෙනව, නැත්තං කොලුකාරයෙක් වෙනව, නැතත් මම
										බය ඔයාට විතරයි, එයාල එහෙම නෙවෙයි , අනිත්
										සෙට් එක එක්ක ආවම මොකද්ද වෙන්නෙ කියල ඔයා
										දන්නවනෙ,
									</p>
									<p>
										මගෙ ඇස් දෙකට මෙච්චරකලකට, තාමත් පෙනිල
										තියන, තාමත් පේන ලස්සනම, අහින්සකම ගෑනු
										ලමය ඔයා තමයි, මං හිතුවෙ ඔයා ඇත්තටම
										අහින්සකයි කියල, .මම ඔයාට වැඩිය චුට්ටම
										චුට්ටක් විතර ඇගපතිං ලොකු දිග උස ඇති. වෙන
										තැංවල නැතිඋනාට ඔයාගෙ ලග මම ඔයාටවැඩිය
										මාරම අහින්සකයි, අඩුම ඔයා වෙනපැත්තක්
										බැලුවත් මට ඇත්තටම දුකයි, ඔයා මං මග
										අරින්න හිතුවත් මට තේරෙනව, ඔයා ම්ං එක්ක
										බොරුවට හිනාඋනත් මට තෙරෙන්ව, ඒ උනාටමට ඒක
										මාර වටිනව,
									</p>
									<p>
										ඇත්තටම මම simulation එකකවත් නාට්‍යකවත්
										නෙව්‍යි ඇත්තටම ජීවත් වෙනව, වෙලා තියනව
										මෙච්චරකල්, ඔයාට අවු100ක් ජිවත් උනත් ගන්න
										බැරි human senses මට දැනටමත් තියනව
									</p>
									<p>
										<h4 className="mb-8 text-2xl font-bold text-center text-gray-800 font-dancing-script">
											අකුරුලියන එක හරිම මෝඩ වැඩක් මෙච්චර
											දියුනු වෙලත්, මම ඔයාට කොච්චර ආදරෙං
											මේක ලිව්වත් කාවින්දි මේක කියවන tone
											එක අනුව හිතෙයි මට තරහ ගිහින්, බනින්න
											try කරනව කියල,
										</h4>
										ඔයා දන්නවද , ඔයාව දැක්ක දවසෙ ඉදලම මම
										බෝඩිමට දුවන සෙල්ලම කරනව , පස්සෙ ඔයාව
										බලන්න තියන අවස්තා ගාන අඩු උනාම නැවතිල
										ඉන්නතැනටත් සල්ල්ලි දීල තියෙද්දි මම මේ
										ටික ලියන අදටත් හැමදාම ගෙදර යනව එක දවසක්
										හරි අහ්ම්බෙන් හරි ඔයාව දකී කියල හිතන්,
										මටනොයාව දැකක වැඩක් නැ , මට බලන්න ඕන, ඔයා
										එක්ක කතාකරල බොරුවට හරි හිනාවෙන්න ඕන වෙලා
										තිබ්බෙ,
									</p>
									<p>
										ඔයාව දැක්ක දවස්වල ඉදලම මගෙ මූනෙ ගෙඩි
										එන්න පටං අරං,ලගදි එක ටිකක්වැඩිවෙලා මාරම
										විදියට බෙහෙත් අනං මනං ගත්ත, බෙහෙත්වලට
										මූනෙ කුට්ටිපිටිං හම යන්න ගත්ත , ඒ අස්සෙ
										ඉස්කොලෙ යන්න රැව්ල කපන්න ගිහින් shaveing
										cream ගාල දෙපාරක් මූන flat කරා මගෙ,
										පස්සෙ බෙහෙතුයි blade පාරවලුයි විසවෙලා
										මූන ඉදිමිල තිබ්බ සතියක් විතර, හැමතැනම
										කැපිල කැලැල්තිබ හැම තැනම, ඔයාල එ හැමදේම
										දැක්ක, සමහරු cheer කරා, පුලුවන් තරමක්
										වියදං කරල සති දෙකෙන් හොද කරගත්ත මම ඒක
										මොකද කාවින්දිව නොබල එකදවසක් වත් ඉන්න
										බැරි නිසා,
									</p>
									<h4 className="mb-8 text-2xl font-bold text-center text-gray-800 font-dancing-script">
										මම මේ මෝඩ කතාව ලියනකොට වෙලාව රෑ 2-3 යි,
										ඒ නිසා මට පිස්සු කියල ප්‍රසිද්ද කරල
										ගෙවල් වලට කියල මට බෙහෙත් අරන්දෙන්න එපා
										plzz,🥹
									</h4>
									<p>
										මට කියන්න ඕන මේ website එක ගැන,මම
										මේකහදන්න ගන්නකොට ඔයාගෙ නමවත් දන්නෙ නැ,
										අඩුම වචනයක්වත් කතාකරලවත් නැ, මම නිකමට
										මේක හදන්නගත්තෙ, පස්සෙ මම ජීවිතේ වැඩිපුරම
										ආසවෙන් කරපු project එක උනා, සමහර වෙලාවට
										එපාම වෙලා ගියපු වෙලාවල් තිබ්බට කාවින්දිට
										මට මේකබ්පෙන්නන්න ඕන උන නිසා කොහොම හරි
										ඉවර කරා , 100% කිසිම කෙනෙක්ගෙ උදව්වක්
										නැතුව මෙච්චර කල් හොරෙං මම මේක හැදුවෙ මේක
										ඔයාට පෙන්නන්නම ඕන නිසා, මේවගෙ කිසිම
										රචනාවක්දාන්න ඕන උනෙ නැ මට, එ උනාට මට
										ඔයාට කතාකරන්න තියන එකම විදිය මේක
										විතරිනෙ,
									</p>
									<p>
										ඔයා දන්නවද GIT කියල Version Controlling
										Systems එකක් තියනව, මම මේක හදන්න ගත්ත
										දවසෙ ඉදල මම site එකට commit කරපු හැම
										updated එකක් ම කර වෙලාව තත්පරෙ ඉදලම ඔයාට
										බලන්න පුලුවන්, එකසැරේ මේ තත්වෙට ගේන්න බැ
										නෙ මෙක, ටික ටික වෙනස් කරපු හැමදේම
										timeline එකක් බලාගන්න පුලුවන් පටන්ගත්ත
										දවසෙ ඉදලම site එක තිබ්බ විදිය ඔයාට,
									</p>
									<p>
										මේකෙ webpage 5-6 ක් වගේ පොඩි ගානක්
										විතරක් තිබ්බට කාවින්දි දන්නවද කොච්චරනං
										ලියපු දේවල් අයින් කරාද කියල, පිටු 100
										කින් විතර හොදමටික තමමයි මෙ, ඔයාට තියන
										ලස්සම දේ පෙන්නන්න ඕන නිසා මම හරිම
										මහන්සියෙං මේක හැදුවෙ, ඇත්තටම backend
										server side application මාරම ලේසි මිට
										වඩා ඒවගෙ languages කොච්චර අමාරු උනත්
										html, css වැඩියත්ම brain rotting
										JavaScripts නැතිනිසා, මේ webapp එකේ තියන
										හැම අකුරක්ම තිබ්බ හැම අකුරක්ම හැම logic
										එකක්ම හැම component එකක්ම මම තනියම මාස
										ගානක් මහන්සි වෙලා හදපු දේවල්, ඇත්තටම
										ඔයාට පේන animation නම් ගොඩක්ම මම හදපු
										දේවල්නෙවෙයි AI generate කලෙ, පස්සෙ හිතුන
										ඊට වැඩිය මමම ලිව්වනං ලේසි නේද කියල, මට
										ඒව එච්චර බෑ , කිසිම motivation එකක් නෑ ,
										කාවින්දි ඔයාට මේක පෙන්නන්න ඕන කියන එක
										තමයි එකමදේ මෙකහදන්න motivate කරපු,
									</p>
									<p>
										මට හරිම සතුටුයි මේක හදල ඉවර උන එක ගැන,
										මන් දන්නෙ නැ මේක කාවින්දිට පෙන්නන්න
										පුලුවන් වෙයිද කියලවත්, ලොකුම ප්‍රශ්නෙ
										මේක Mobile Phone Screens වලට Responsive
										නැති එක, ඒක කරන්න ගියොත් මට අංගොඩ යන්න
										වෙන එක වෙනවාමයි, දැනුත් එහෙමයි මට තියන
										වැඩ කන්දරාව දැක්කම , මගෙ නිදාගන්න තියන
										free time එක පාවිච්චි කරල මේක හදන්නෙ
										කාවින්දිට ආදරෙයි කියන්න , මට මාස 6 ක්
										ඉදං නිදාගන්න ඕන වෙලා ඉන්නෙ තාම මට
										නිදාගන්න උනෙ නැ නිදහසෙ, කාවින්දි මේ
										හැමදේම කියෙව්වම් ඔයා මට කියන්න ඕන අකුරු
										5200 කට වඩා දැනුත් කියවල,
									</p>
									<p>
										ඒ උනාට මට කියන්න ඕන ඒ දේවල් නෙවෙයි, මම
										ඔයාගෙ ලගට මෙච්චරකල් ආවෙ ඔයා එක්ක
										කතාකරන්න ආසාවෙන්, පොඩි ලමයෙක් අම්මගෙලගට
										යනව වගෙ, කාවින්දි දන්නවද ඔයාව බලන්න මම
										කොච්චර කැමත්තෙන්දෛන්නෙ කියල, මම දන් නැ
										කාවින්දිට මාව කොච්චර මෝඩ විදියට පෙනුනද
										කියල, ඒ හැමතුස්සෙම මම හිටියෙ ඔයාට
										බයවෙලා, ඔයා එක්ක කතාකරන්න තියන කැමැත්ත
										තරමටම මම බයයි ඔයා එක්ක කතාකරල් ඔයා
										නැතිවෙයි කියල,
									</p>
									<p>
										ඔයා කොල්ලෙකුගෙ මොනව හරි දෙක්කට කැමති ඇති
										මම ඒ වගෙ වෙනෙයිත් ඇති, ඉතින්න්මට ඒක
										කියන්න, ඔයා මැටි ගුලියක් දිහා බලාගෙන
										යාලුවො එක්කඇද කිය කිය හිනා උනාට කිසිම
										දෙයක් වැඩක් නැ, ඔයා ඒක අතට ස්‍ර්ස්ගෙන
										හදනකං ඉතිං ඒක එනස් වෙන්නෙ නැ නෙ
									</p>
									<p>
										<br /> මගෙ effort එක = 999999999 <br />
										ඔයාගෙ effort එක = 0 <br />
										Result = 0{" "}
									</p>
									<p>
										හරි එහෙනම් කාවින්දි ඔයාඅකුරු Almost 6000
										ක් විතර ඔයා කියව්ව, ඒ උනාට මම කැමතිම
										අකුරු 7 "K A V I N D I",{" "}
									</p>
									<br />
									<p>
										අවම අවසානෙට කියන්නෙ කාවින්දි මම ඔයාට
										හරිම ආදරෙයි කියල💖
									</p>
									<p>
										එහෙනං, ඔයාට මොනව හරි කියන්න තියනවනම් මම
										එක්ක කියන්න , දුවන්නෙ නැතුව, මම කැමති
										පැයක් හරි ඔයා බනින දෙයක් හරි අහන් ඉන්න,
										මම ඔයාට බනින්නෙ සැරකරන්නෙ නැ ඔයා
										දන්නවනෙ, ඔයාගෙ ලගට ආවම ඔයාගෙ උකුල උඩ
										නිදාගෙන ගිය පොඩි ලමයටත් වැඩිය මම
										අහින්සකයි, ඉතිං ඒක use කරන්න එපා වෙන අය
										ලවා මට hurt කරන්න, ඔයයි මමයි කොහොමත් අපි
										හැමොමෙ තව අවුරුදු 40-50 ක් උපරිම ඉදියි
										ඇත්තම කතාව, ඇයි තරහ උන අය වෙලා අදුරන්නෙ
										නැ වගෙ ඉන්නෙ, තව අවුරුදු 80ක් යන්න කලින්
										කොහොමත් මිනිස්සු 6 Billion අනිවාරෙම්ම
										නැතිවෙන්න ඕන, අපි දෙන්නත් ඉන්නවනෙ ඒ
										ගොඩෙ,
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

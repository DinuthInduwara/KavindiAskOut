
import { Heart, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// Magical garden effects component

const MagicalGardenEffects = () => (
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
		{/* Floating butterflies with trails */}
		{[...Array.from({ length: 8 })].map((_, i) => (
			<div
				key={`butterfly-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					animation: `butterflyDance ${4 + Math.random() * 3
						}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				<div style={{ fontSize: "28px" }}>🦋</div>
				{/* Sparkle trail */}
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "40px",
						height: "3px",
						background:
							"linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.8), transparent)",
						transform: "translate(-50%, -50%)",
						animation: `sparkleTrail 2s ease-in-out infinite ${Math.random()}s`,
					}}
				/>
			</div>
		))}

		{/* Floating flower petals */}
		{[...Array.from({ length: 15 })].map((_, i) => (
			<div
				key={`petal-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "20px",
					animation: `petalDrift ${6 + Math.random() * 4
						}s ease-in-out infinite ${Math.random() * 3}s`,
				}}
			>
				{["🌸", "🌺", "🌼", "🌻"][Math.floor(Math.random() * 4)]}
			</div>
		))}

		{/* Magical sparkles */}
		{[...Array.from({ length: 25 })].map((_, i) => (
			<div
				key={`sparkle-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "12px",
					animation: `twinkle ${1 + Math.random() * 2
						}s ease-in-out infinite ${Math.random() * 3}s`,
				}}
			>
				✨
			</div>
		))}

		{/* Gentle breeze leaves */}
		{[...Array.from({ length: 12 })].map((_, i) => (
			<div
				key={`leaf-${i}`}
				style={{
					position: "absolute",
					left: "-10%",
					top: `${20 + Math.random() * 60}%`,
					fontSize: "18px",
					animation: `leafFloat ${8 + Math.random() * 4
						}s linear infinite ${i * 0.5}s`,
				}}
			>
				{["🍃", "🌿"][Math.floor(Math.random() * 2)]}
			</div>
		))}

		{/* Buzzing bees */}
		{[...Array.from({ length: 4 })].map((_, i) => (
			<div
				key={`bee-${i}`}
				style={{
					position: "absolute",
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					fontSize: "20px",
					animation: `beeBuzz ${3 + Math.random() * 2
						}s ease-in-out infinite ${Math.random() * 2}s`,
				}}
			>
				🐝
			</div>
		))}
	</div>
);

function WelcomeGarden() {
	const router = useRouter();
	const handleEnterApp = () => {
		setTimeout(() => {
			router.push("/welcome-garden");
		}, 1000); // Optional delay for effect
	};
	useEffect(() => {
		router.prefetch("/welcome-garden");
	}, [router]);
	const gardenElements = [
		"🌸",
		"🌺",
		"🌻",
		"🌷",
		"🌹",
		"🌼",
		"🦋",
		"🐝",
		"🌿",
		"🍃",
		"🌱",
		"🌳",
	];

	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #a8e6cf 0%, #dcedc1 25%, #ffd3a5 50%, #ffeaa7 75%, #fab1a0 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					animation: "gardenBreeze 8s ease-in-out infinite",
				}}
			>
				<MagicalGardenEffects />

				{/* Garden celebration elements */}
				{[...Array.from({ length: 20 })].map((_, i) => (
					<div
						key={i}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 30 + 20}px`,
							animation: `gardenCelebration ${2 + Math.random() * 2
								}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
							zIndex: 1,
						}}
					>
						{
							gardenElements[
							Math.floor(
								Math.random() * gardenElements.length
							)
							]
						}
					</div>
				))}

				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.60)",
						borderRadius: "35px",
						padding: "50px",
						boxShadow:
							"0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px rgba(168, 230, 207, 0.3)",
						border: "3px solid rgba(168, 230, 207, 0.6)",
						zIndex: 10,
						animation:
							"gardenGlow 2s ease-in-out infinite alternate",
						backdropFilter: "blur(5px)",
						transform: "scale(1)",
						transition: "transform 0.3s ease",
					}}
				>
					<div
						style={{
							fontSize: "80px",
							marginBottom: "20px",
							animation: "magicalBounce 2s ease-in-out infinite",
						}}
					>
						🌺✨🦋
					</div>
					<h1
						style={{
							fontSize: "36px",
							background:
								"linear-gradient(45deg, #00b894, #00cec9, #74b9ff, #fd79a8)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
							fontWeight: "bold",
							animation: "textShimmer 3s ease-in-out infinite",
						}}
					>
						Welcome to the Garden, Kavindi! 🌸
					</h1>
					<p
						style={{
							fontSize: "18px",
							color: "#2d3436",
							marginBottom: "20px",
							animation: "fadeInOut 4s ease-in-out infinite",
						}}
					>
						The garden gates are opening for you... 🦋
					</p>

					<div
						style={{
							fontSize: "24px",
							animation:
								"nightGardenDance 4s ease-in-out infinite",
							filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
							marginBottom: "30px",
						}}
					>
						🌿 🌺 🦋 🌻 🌿
					</div>

					<button
						onClick={handleEnterApp}
						className="relative overflow-hidden group"
						style={{
							background:
								"linear-gradient(135deg, #ff7675 0%, #fd79a8 50%, #e84393 100%)",
							border: "none",
							borderRadius: "25px",
							padding: "18px 40px",
							fontSize: "18px",
							fontWeight: "600",
							color: "white",
							cursor: "pointer",
							boxShadow:
								"0 15px 35px rgba(255, 118, 117, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1)",
							transition:
								"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
							animation:
								"buttonGlow 3s ease-in-out infinite alternate",
							zIndex: 20,
							position: "relative",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform =
								"translateY(-3px) scale(1.05)";
							e.currentTarget.style.boxShadow =
								"0 20px 40px rgba(255, 118, 117, 0.6), 0 8px 20px rgba(0, 0, 0, 0.15)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform =
								"translateY(0) scale(1)";
							e.currentTarget.style.boxShadow =
								"0 15px 35px rgba(255, 118, 117, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1)";
						}}
						onMouseDown={(e) => {
							e.currentTarget.style.transform =
								"translateY(1px) scale(0.98)";
						}}
						onMouseUp={(e) => {
							e.currentTarget.style.transform =
								"translateY(-3px) scale(1.05)";
						}}
					>
						<div className="flex items-center justify-center space-x-2">
							<Heart className="w-5 h-5 fill-current" />
							<span>Enter Love's Garden</span>
							<Sparkles className="w-5 h-5" />
						</div>

						{/* Button shine effect */}
						<div
							style={{
								position: "absolute",
								top: "0",
								left: "-100%",
								width: "100%",
								height: "100%",
								background:
									"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
								animation:
									"buttonShine 3s ease-in-out infinite",
							}}
						/>
					</button>
				</div>

			</div>
		</>
	);
}

export default WelcomeGarden;

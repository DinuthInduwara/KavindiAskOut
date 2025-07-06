"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GentleRain from "../components/gental-rain";

function MainComponent() {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [gifsLoaded, setGifsLoaded] = React.useState(false);
	const [isAuthorized, setIsAuthorized] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);
	const router = useRouter();




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
		setIsLoading(false);
	}, []);

	React.useEffect(() => {
		setIsLoaded(true);

		// Preload all GIFs
		const gifUrls = [
			"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
			"https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
			"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
		];

		let loadedCount = 0;
		gifUrls.forEach((url) => {
			const img = new Image();
			img.onload = () => {
				loadedCount++;
				if (loadedCount === gifUrls.length) {
					setGifsLoaded(true);
				}
			};
			img.src = url;
		});
	}, []);

	const handleEnterClick = () => {
		router.push("/ask-out");
	};

	const floatingHearts = [
		"💕",
		"💖",
		"💗",
		"💘",
		"💝",
		"💞",
		"❤️",
		"🧡",
		"💛",
		"💚",
		"💙",
		"💜",
		"🤍",
		"💋",
		"😍",
		"🥰",
		"😘",
	];

	return (
		<div
			style={{
				minHeight: "100vh",
				position: "relative",
				overflow: "hidden",
				background:
					"linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 25%, #e1f5fe 50%, #f3e5f5 75%, #fce4ec 100%)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			{/* Add gentle rain effect */}
			<GentleRain />

			{/* Floating Hearts */}
			{floatingHearts.map((heart, index) => (
				<div
					key={index}
					style={{
						position: "absolute",
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						fontSize: `${Math.random() * 30 + 20}px`,
						opacity: 0.4,
						animation: `floatHeart ${
							3 + Math.random() * 2
						}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 3}s`,
						zIndex: 3,
						pointerEvents: "none",
					}}
				>
					{heart}
				</div>
			))}

			{/* Romantic GIFs - Only show when loaded */}
			{gifsLoaded && (
				<>
					<div
						style={{
							position: "absolute",
							top: "15%",
							left: "10%",
							width: "100px",
							height: "100px",
							borderRadius: "50%",
							overflow: "hidden",
							border: "3px solid rgba(173, 216, 230, 0.6)",
							boxShadow: "0 8px 25px rgba(173, 216, 230, 0.3)",
							animation: "floatGif 4s ease-in-out infinite",
							zIndex: 4,
						}}
					>
						<img
							src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
							alt="Love"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>

					<div
						style={{
							position: "absolute",
							top: "20%",
							right: "15%",
							width: "80px",
							height: "80px",
							borderRadius: "50%",
							overflow: "hidden",
							border: "3px solid rgba(173, 216, 230, 0.6)",
							boxShadow: "0 8px 25px rgba(173, 216, 230, 0.3)",
							animation: "floatGif 5s ease-in-out infinite 1s",
							zIndex: 4,
						}}
					>
						<img
							src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
							alt="Hearts"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>

					<div
						style={{
							position: "absolute",
							bottom: "25%",
							left: "15%",
							width: "90px",
							height: "90px",
							borderRadius: "50%",
							overflow: "hidden",
							border: "3px solid rgba(173, 216, 230, 0.6)",
							boxShadow: "0 8px 25px rgba(173, 216, 230, 0.3)",
							animation: "floatGif 6s ease-in-out infinite 2s",
							zIndex: 4,
						}}
					>
						<img
							src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
							alt="Cute"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				</>
			)}

	
			{/* Main Content */}
			<div
				style={{
					textAlign: "center",
					zIndex: 10,
					transform: isLoaded ? "translateY(0)" : "translateY(30px)",
					opacity: isLoaded ? 1 : 0,
					transition: "all 1.2s ease-out",
				}}
			>
				{/* Simple Title */}
				<div
					style={{
						fontSize: "clamp(50px, 12vw, 90px)",
						marginBottom: "30px",
						animation: "bounce 2s ease-in-out infinite",
					}}
				>
					💖
				</div>

				<h1
					style={{
						fontSize: "clamp(32px, 8vw, 60px)",
						fontFamily: "serif",
						background:
							"linear-gradient(45deg, #4682B4, #5F9EA0, #87CEEB)",
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						color: "transparent",
						marginBottom: "50px",
						fontWeight: "bold",
						animation: "rainGlow 2s ease-in-out infinite alternate",
						textShadow: "0 2px 4px rgba(70, 130, 180, 0.3)",
					}}
				>
					Love Story
				</h1>

				{/* Simple Enter Button */}
				<button
					onClick={handleEnterClick}
					style={{
						background: "linear-gradient(45deg, #4682B4, #5F9EA0)",
						border: "none",
						borderRadius: "50px",
						padding: "18px 40px",
						fontSize: "clamp(20px, 5vw, 28px)",
						fontWeight: "bold",
						color: "white",
						cursor: "pointer",
						boxShadow: "0 8px 25px rgba(70, 130, 180, 0.3)",
						transition: "all 0.3s ease",
						animation: "rainPulse 2s ease-in-out infinite",
					}}
					onMouseOver={(e) => {
						e.target.style.transform = "scale(1.1)";
						e.target.style.boxShadow =
							"0 12px 35px rgba(70, 130, 180, 0.4)";
					}}
					onMouseOut={(e) => {
						e.target.style.transform = "scale(1)";
						e.target.style.boxShadow =
							"0 8px 25px rgba(70, 130, 180, 0.3)";
					}}
				>
					💕 Enter 💕
				</button>
			</div>
		</div>
	);
}

export default MainComponent;

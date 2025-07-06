"use client";
import React, { useEffect, useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

const MoonlitGardenEffects = () => (
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
      {/* Full moon with glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #fff9c4 0%, #f7dc6f 30%, #f4d03f 100%)",
          boxShadow:
            "0 0 60px rgba(255, 249, 196, 0.8), 0 0 120px rgba(255, 249, 196, 0.4)",
          animation: "moonGlow 4s ease-in-out infinite alternate",
          zIndex: 5,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "25%",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "30%",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.08)",
          }}
        />
      </div>
  
      {/* Moonbeams */}
      {[...Array.from({ length: 8 })].map((_, i) => (
        <div
          key={`moonbeam-${i}`}
          style={{
            position: "absolute",
            top: "15%",
            right: "20%",
            width: "2px",
            height: "200px",
            background:
              "linear-gradient(180deg, rgba(255, 249, 196, 0.6), transparent)",
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "50% 0%",
            animation: `moonbeamShine 6s ease-in-out infinite ${i * 0.3}s`,
          }}
        />
      ))}
  
      {/* Floating night flowers */}
      {[...Array.from({ length: 12 })].map((_, i) => (
        <div
          key={`night-flower-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: "22px",
            animation: `nightFloralDance ${
              8 + Math.random() * 4
            }s ease-in-out infinite ${Math.random() * 3}s`,
            filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
          }}
        >
          {["🌙", "⭐", "🌟", "💫", "🌸", "🌺"][Math.floor(Math.random() * 6)]}
        </div>
      ))}
  
      {/* Twinkling stars */}
      {[...Array.from({ length: 30 })].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            fontSize: `${8 + Math.random() * 8}px`,
            animation: `starTwinkle ${
              2 + Math.random() * 3
            }s ease-in-out infinite ${Math.random() * 4}s`,
            color: "#fff9c4",
          }}
        >
          ✨
        </div>
      ))}
  
      {/* Fireflies */}
      {[...Array.from({ length: 15 })].map((_, i) => (
        <div
          key={`firefly-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "#f7dc6f",
            boxShadow: "0 0 10px #f7dc6f",
            animation: `fireflyDance ${
              4 + Math.random() * 3
            }s ease-in-out infinite ${Math.random() * 2}s`,
          }}
        />
      ))}
  
      {/* Night moths */}
      {[...Array.from({ length: 6 })].map((_, i) => (
        <div
          key={`moth-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: "18px",
            animation: `mothFlight ${
              5 + Math.random() * 3
            }s ease-in-out infinite ${Math.random() * 2}s`,
            filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
          }}
        >
          🦋
        </div>
      ))}
  
      {/* Floating love hearts */}
      {[...Array.from({ length: 8 })].map((_, i) => (
        <div
          key={`heart-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: "16px",
            animation: `loveFloat ${
              6 + Math.random() * 4
            }s ease-in-out infinite ${Math.random() * 3}s`,
            color: "#ff7675",
            filter: "drop-shadow(0 0 8px rgba(255, 118, 117, 0.4))",
          }}
        >
          💕
        </div>
      ))}
    </div>
  );



  
const MoonlitTransition = ({ children }) => {
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [displayChildren, setDisplayChildren] = useState(children);
	const [animationPhase, setAnimationPhase] = useState(0);

	useEffect(() => {
		setIsTransitioning(true);
		setAnimationPhase(0);

		// Staggered animation phases for more creative transitions
		const phaseTimers = [
			setTimeout(() => setAnimationPhase(1), 200),
			setTimeout(() => setAnimationPhase(2), 600),
			setTimeout(() => setAnimationPhase(3), 1200),
			setTimeout(() => {
				setDisplayChildren(children);
				setAnimationPhase(4);
			}, 1800),
			setTimeout(() => {
				setIsTransitioning(false);
				setAnimationPhase(0);
			}, 5000),
		];

		return () => {
			phaseTimers.forEach((timer) => clearTimeout(timer));
		};
	}, [children]);

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Main content with creative transition */}
			<div
				className={`transition-all duration-1000 ${
					isTransitioning
						? "opacity-0 scale-95 rotate-1 blur-md filter saturate-150"
						: "opacity-100 scale-100 rotate-0 blur-0 filter saturate-100"
				}`}
				style={{
					transitionTimingFunction: isTransitioning
						? "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
						: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				}}
			>
				{displayChildren}
			</div>

			{/* Enhanced Moonlit Transition Overlay */}
			{isTransitioning && (
				<div className="fixed inset-0 z-50 pointer-events-none">
					{/* Dynamic gradient background */}
					<div
						className="absolute inset-0 transition-all duration-1000"
						style={{
							background: `
                radial-gradient(circle at 30% 20%, rgba(139, 69, 19, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(75, 0, 130, 0.4) 0%, transparent 50%),
                linear-gradient(135deg, 
                  #0f1419 0%, 
                  #1a252f 20%, 
                  #2c3e50 40%, 
                  #34495e 60%, 
                  #2c3e50 80%, 
                  #0f1419 100%
                )
              `,
							opacity: animationPhase >= 1 ? 0.95 : 0,
							transform:
								animationPhase >= 1 ? "scale(1)" : "scale(1.2)",
							transitionTimingFunction:
								"cubic-bezier(0.23, 1, 0.320, 1)",
						}}
					/>

					{/* Floating sparkles */}
					<div className="absolute inset-0">
						{[...Array.from({ length: 15 })].map((_, i) => (
							<Sparkles
								key={`sparkle-${i}`}
								className="absolute text-yellow-200 fill-current"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									fontSize: `${6 + Math.random() * 8}px`,
									opacity: animationPhase >= 2 ? 1 : 0,
									transform:
										animationPhase >= 2
											? "scale(1) rotate(0deg)"
											: "scale(0) rotate(180deg)",
									animation:
										animationPhase >= 2
											? `sparkleFloat ${
													2 + Math.random() * 3
											  }s ease-in-out infinite ${
													Math.random() * 2
											  }s`
											: "none",
									transitionDelay: `${i * 50}ms`,
									transitionDuration: "800ms",
									transitionTimingFunction:
										"cubic-bezier(0.68, -0.55, 0.265, 1.55)",
								}}
							/>
						))}
					</div>

					{/* Central elements container */}
					<div className="absolute inset-0 flex items-center justify-center">
						{/* Enhanced central moon */}
						<div
							className="absolute"
							style={{
								width: "100px",
								height: "100px",
								borderRadius: "50%",
								background:
									"radial-gradient(circle, #fff9c4 0%, #f7dc6f 30%, #f4d03f 70%, #f39c12 100%)",
								boxShadow:
									"0 0 50px rgba(255, 249, 196, 0.9), 0 0 100px rgba(255, 249, 196, 0.5), 0 0 150px rgba(255, 249, 196, 0.2)",
								opacity: animationPhase >= 1 ? 1 : 0,
								transform:
									animationPhase >= 1
										? "scale(1) rotate(0deg)"
										: "scale(0) rotate(360deg)",
								animation:
									animationPhase >= 1
										? "creativeMonPulse 2s ease-in-out infinite"
										: "none",
								transitionDuration: "1200ms",
								transitionTimingFunction:
									"cubic-bezier(0.68, -0.55, 0.265, 1.55)",
							}}
						/>

						{/* Orbiting hearts with creative timing */}
						{[...Array.from({ length: 12 })].map((_, i) => (
							<Heart
								key={`orbit-heart-${i}`}
								className="absolute w-5 h-5 text-pink-400 fill-current"
								style={{
									opacity: animationPhase >= 2 ? 1 : 0,
									transform:
										animationPhase >= 2
											? "scale(1)"
											: "scale(0)",
									animation:
										animationPhase >= 2
											? `creativeOrbitHeart ${
													2 + (i % 3) * 0.5
											  }s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite ${
													i * 0.15
											  }s`
											: "none",
									transformOrigin: "0 0",
									left: "50%",
									top: "50%",
									transitionDelay: `${i * 80}ms`,
									transitionDuration: "600ms",
									transitionTimingFunction:
										"cubic-bezier(0.175, 0.885, 0.32, 1.275)",
								}}
							/>
						))}

						{/* Enhanced twinkling stars */}
						{[...Array.from({ length: 25 })].map((_, i) => (
							<Star
								key={`twinkle-star-${i}`}
								className="absolute text-yellow-200 fill-current"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									fontSize: `${6 + Math.random() * 10}px`,
									opacity: animationPhase >= 3 ? 1 : 0,
									transform:
										animationPhase >= 3
											? "scale(1) rotate(0deg)"
											: "scale(0) rotate(45deg)",
									animation:
										animationPhase >= 3
											? `creativeStarTwinkle ${
													1.5 + Math.random() * 2
											  }s ease-in-out infinite ${
													Math.random() * 2
											  }s`
											: "none",
									transitionDelay: `${i * 30}ms`,
									transitionDuration: "500ms",
									transitionTimingFunction:
										"cubic-bezier(0.68, -0.55, 0.265, 1.55)",
								}}
							/>
						))}

						{/* Floating love emojis with creative paths */}
						{[...Array.from({ length: 8 })].map((_, i) => (
							<div
								key={`love-emoji-${i}`}
								className="absolute text-xl"
								style={{
									left: `${20 + Math.random() * 60}%`,
									top: `${20 + Math.random() * 60}%`,
									opacity: animationPhase >= 2 ? 1 : 0,
									transform:
										animationPhase >= 2
											? "scale(1) rotate(0deg)"
											: "scale(0) rotate(180deg)",
									animation:
										animationPhase >= 2
											? `creativeLoveFloat ${
													3 + Math.random() * 2
											  }s ease-in-out infinite ${
													Math.random() * 2
											  }s`
											: "none",
									transitionDelay: `${i * 150}ms`,
									transitionDuration: "700ms",
									transitionTimingFunction:
										"cubic-bezier(0.175, 0.885, 0.32, 1.275)",
								}}
							>
								{
									[
										"💕",
										"💖",
										"💗",
										"💝",
										"🌸",
										"🌺",
										"✨",
										"🌙",
									][Math.floor(Math.random() * 8)]
								}
							</div>
						))}
					</div>

					{/* Enhanced romantic message */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div
							className="mt-40 text-center"
							style={{
								opacity: animationPhase >= 3 ? 1 : 0,
								transform:
									animationPhase >= 3
										? "translateY(0px) scale(1)"
										: "translateY(30px) scale(0.9)",
								transitionDuration: "1000ms",
								transitionTimingFunction:
									"cubic-bezier(0.68, -0.55, 0.265, 1.55)",
								transitionDelay: "400ms",
							}}
						>
							<p className="mb-3 text-3xl font-bold text-yellow-200 drop-shadow-lg">
								✨ Creating Magic ✨
							</p>
							<p className="text-xl text-pink-200 drop-shadow-md">
								Under the starlit sky...
							</p>
							<div className="flex justify-center mt-2 space-x-2">
								{[...Array.from({ length: 3 })].map((_, i) => (
									<div
										key={`dot-${i}`}
										className="w-2 h-2 bg-pink-300 rounded-full"
										style={{
											animation: `dotPulse 1.5s ease-in-out infinite ${
												i * 0.3
											}s`,
										}}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			<style jsx global>{`
				@keyframes creativeMonPulse {
					0%,
					100% {
						transform: scale(1) rotate(0deg);
						box-shadow: 0 0 50px rgba(255, 249, 196, 0.9),
							0 0 100px rgba(255, 249, 196, 0.5),
							0 0 150px rgba(255, 249, 196, 0.2);
					}
					25% {
						transform: scale(1.05) rotate(1deg);
					}
					50% {
						transform: scale(1.15) rotate(0deg);
						box-shadow: 0 0 70px rgba(255, 249, 196, 1),
							0 0 140px rgba(255, 249, 196, 0.7),
							0 0 200px rgba(255, 249, 196, 0.3);
					}
					75% {
						transform: scale(1.05) rotate(-1deg);
					}
				}

				@keyframes creativeOrbitHeart {
					0% {
						transform: translate(-50%, -50%) rotate(0deg)
							translateX(70px) rotate(0deg) scale(0.8);
					}
					25% {
						transform: translate(-50%, -50%) rotate(90deg)
							translateX(75px) rotate(-90deg) scale(1.1);
					}
					50% {
						transform: translate(-50%, -50%) rotate(180deg)
							translateX(70px) rotate(-180deg) scale(0.9);
					}
					75% {
						transform: translate(-50%, -50%) rotate(270deg)
							translateX(75px) rotate(-270deg) scale(1.1);
					}
					100% {
						transform: translate(-50%, -50%) rotate(360deg)
							translateX(70px) rotate(-360deg) scale(0.8);
					}
				}

				@keyframes creativeStarTwinkle {
					0%,
					100% {
						opacity: 0.4;
						transform: scale(0.8) rotate(0deg);
					}
					25% {
						opacity: 0.8;
						transform: scale(1.2) rotate(90deg);
					}
					50% {
						opacity: 1;
						transform: scale(1.4) rotate(180deg);
					}
					75% {
						opacity: 0.8;
						transform: scale(1.2) rotate(270deg);
					}
				}

				@keyframes creativeLoveFloat {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg) scale(1);
						opacity: 0.8;
					}
					25% {
						transform: translateY(-15px) rotate(90deg) scale(1.1);
						opacity: 1;
					}
					50% {
						transform: translateY(-25px) rotate(180deg) scale(0.9);
						opacity: 0.9;
					}
					75% {
						transform: translateY(-15px) rotate(270deg) scale(1.1);
						opacity: 1;
					}
				}

				@keyframes sparkleFloat {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg) scale(1);
						opacity: 0.6;
					}
					33% {
						transform: translateY(-10px) rotate(120deg) scale(1.2);
						opacity: 1;
					}
					66% {
						transform: translateY(-5px) rotate(240deg) scale(0.8);
						opacity: 0.8;
					}
				}

				@keyframes dotPulse {
					0%,
					100% {
						transform: scale(1);
						opacity: 0.7;
					}
					50% {
						transform: scale(1.5);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
};


export default function MoonTransition() {
	const handleEnterApp = () => {
		router = useRouter();
		router.push("/app");
	};
	const nightGardenElements = [
		"🌙",
		"⭐",
		"🌟",
		"💫",
		"🌸",
		"🌺",
		"🦋",
		"💕",
		"🌿",
		"🍃",
		"🌱",
		"🌳",
	  ];
	return (
		<MoonlitTransition>
			<div
				style={{
					minHeight: "100vh",
					background:
						"linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #0f1419 100%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					animation: "nightBreeze 10s ease-in-out infinite",
				}}
			>
				<MoonlitGardenEffects />

				{/* Night garden celebration elements */}
				{[...Array.from({ length: 15 })].map((_, i) => (
					<div
						key={i}
						style={{
							position: "absolute",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 25 + 15}px`,
							animation: `nightCelebration ${
								3 + Math.random() * 2
							}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 2}s`,
							zIndex: 1,
							filter: "drop-shadow(0 0 8px rgba(255, 249, 196, 0.3))",
						}}
					>
						{
							nightGardenElements[
								Math.floor(
									Math.random() * nightGardenElements.length
								)
							]
						}
					</div>
				))}

				<div
					style={{
						textAlign: "center",
						background: "rgba(255, 255, 255, 0.08)",
						borderRadius: "35px",
						padding: "50px",
						boxShadow:
							"0 25px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 249, 196, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
						border: "1px solid rgba(255, 249, 196, 0.2)",
						zIndex: 10,
						animation:
							"moonlitGlow 3s ease-in-out infinite alternate",
						backdropFilter: "blur(15px)",
						transform: "scale(1)",
						transition: "transform 0.3s ease",
					}}
				>
					<div
						style={{
							fontSize: "80px",
							marginBottom: "20px",
							animation: "romanticBounce 3s ease-in-out infinite",
						}}
					>
						🌙💕🌸
					</div>
					<h1
						style={{
							fontSize: "36px",
							background:
								"linear-gradient(45deg, #fff9c4, #f7dc6f, #ff7675, #74b9ff)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "25px",
							fontWeight: "bold",
							animation: "moonlitShimmer 4s ease-in-out infinite",
						}}
					>
						Under the Moonlight, My Love 🌙
					</h1>
					<p
						style={{
							fontSize: "20px",
							color: "#fff9c4",
							marginBottom: "15px",
							animation: "loveGlow 5s ease-in-out infinite",
							textShadow: "0 0 10px rgba(255, 249, 196, 0.5)",
						}}
					>
						In this enchanted garden where moonbeams dance,
					</p>
					<p
						style={{
							fontSize: "18px",
							color: "#f7dc6f",
							marginBottom: "15px",
							animation: "loveGlow 5s ease-in-out infinite 1s",
							textShadow: "0 0 8px rgba(247, 220, 111, 0.4)",
						}}
					>
						Every star whispers your name, my darling
					</p>
					<p
						style={{
							fontSize: "16px",
							color: "#ff7675",
							marginBottom: "25px",
							animation: "loveGlow 5s ease-in-out infinite 2s",
							textShadow: "0 0 8px rgba(255, 118, 117, 0.4)",
						}}
					>
						You are the moon to my night sky ✨
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
						🌙 💕 🌸 ⭐ 🌙
					</div>

					{/* Beautiful Romantic Button */}
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

					{/* Floating hearts around button */}
					<div style={{ position: "relative", marginTop: "20px" }}>
						{[...Array.from({ length: 6 })].map((_, i) => (
							<div
								key={`button-heart-${i}`}
								style={{
									position: "absolute",
									left: `${-50 + Math.random() * 100}px`,
									top: `${-30 + Math.random() * 60}px`,
									fontSize: "12px",
									animation: `buttonHeartFloat ${
										2 + Math.random() * 2
									}s ease-in-out infinite ${
										Math.random() * 2
									}s`,
									color: "#ff7675",
									pointerEvents: "none",
								}}
							>
								💕
							</div>
						))}
					</div>
				</div>

				<style jsx global>{`
					@keyframes moonGlow {
						0% {
							box-shadow: 0 0 60px rgba(255, 249, 196, 0.8),
								0 0 120px rgba(255, 249, 196, 0.4);
						}
						100% {
							box-shadow: 0 0 80px rgba(255, 249, 196, 1),
								0 0 160px rgba(255, 249, 196, 0.6);
						}
					}

					@keyframes moonbeamShine {
						0%,
						100% {
							opacity: 0.3;
						}
						50% {
							opacity: 0.8;
						}
					}

					@keyframes nightFloralDance {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
							opacity: 0.7;
						}
						25% {
							transform: translate(30px, -20px) rotate(90deg);
							opacity: 1;
						}
						50% {
							transform: translate(-20px, -40px) rotate(180deg);
							opacity: 0.8;
						}
						75% {
							transform: translate(40px, -15px) rotate(270deg);
							opacity: 0.9;
						}
					}

					@keyframes starTwinkle {
						0%,
						100% {
							opacity: 0.4;
							transform: scale(0.8);
						}
						50% {
							opacity: 1;
							transform: scale(1.3);
						}
					}

					@keyframes fireflyDance {
						0%,
						100% {
							transform: translate(0, 0);
							opacity: 0.6;
						}
						25% {
							transform: translate(25px, -15px);
							opacity: 1;
						}
						50% {
							transform: translate(-20px, -30px);
							opacity: 0.8;
						}
						75% {
							transform: translate(30px, -10px);
							opacity: 0.9;
						}
					}

					@keyframes mothFlight {
						0%,
						100% {
							transform: translate(0, 0) rotate(0deg);
						}
						33% {
							transform: translate(40px, -25px) rotate(15deg);
						}
						66% {
							transform: translate(-30px, -35px) rotate(-10deg);
						}
					}

					@keyframes loveFloat {
						0%,
						100% {
							transform: translateY(0px) scale(1);
							opacity: 0.7;
						}
						50% {
							transform: translateY(-25px) scale(1.1);
							opacity: 1;
						}
					}

					@keyframes nightCelebration {
						0%,
						100% {
							transform: translateY(0px) rotate(0deg) scale(1);
							opacity: 0.6;
						}
						50% {
							transform: translateY(-15px) rotate(180deg)
								scale(1.05);
							opacity: 1;
						}
					}

					@keyframes moonlitGlow {
						0% {
							box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
								0 0 40px rgba(255, 249, 196, 0.1),
								inset 0 1px 0 rgba(255, 255, 255, 0.1);
						}
						100% {
							box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4),
								0 0 60px rgba(255, 249, 196, 0.2),
								inset 0 1px 0 rgba(255, 255, 255, 0.15);
						}
					}

					@keyframes romanticBounce {
						0%,
						100% {
							transform: translateY(0) scale(1);
						}
						33% {
							transform: translateY(-8px) scale(1.03);
						}
						66% {
							transform: translateY(-12px) scale(1.05);
						}
					}

					@keyframes moonlitShimmer {
						0%,
						100% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
					}

					@keyframes loveGlow {
						0%,
						100% {
							opacity: 0.8;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.02);
						}
					}

					@keyframes nightGardenDance {
						0%,
						100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.08);
						}
					}

					@keyframes nightBreeze {
						0%,
						100% {
							filter: brightness(1) hue-rotate(0deg);
						}
						50% {
							filter: brightness(1.1) hue-rotate(3deg);
						}
					}

					@keyframes buttonGlow {
						0% {
							box-shadow: 0 15px 35px rgba(255, 118, 117, 0.4),
								0 5px 15px rgba(0, 0, 0, 0.1);
						}
						100% {
							box-shadow: 0 20px 40px rgba(255, 118, 117, 0.6),
								0 8px 20px rgba(0, 0, 0, 0.15);
						}
					}

					@keyframes buttonShine {
						0% {
							left: -100%;
						}
						50% {
							left: 100%;
						}
						100% {
							left: 100%;
						}
					}

					@keyframes buttonHeartFloat {
						0%,
						100% {
							transform: translateY(0px) scale(1);
							opacity: 0.6;
						}
						50% {
							transform: translateY(-15px) scale(1.2);
							opacity: 1;
						}
					}
				`}</style>
			</div>
		</MoonlitTransition>
	);
}


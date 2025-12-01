"use client"
import React, { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Sparkles, Heart } from "lucide-react";

const ASSETS = {
  heroBg:
    "/w-hero.png",
  gate: "/gate.png",
  innerBg:
    "/w-inner.png",
  // Placeholder music - peaceful garden ambient
  music:
    "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=garden-ambient-21782.mp3",
  // Placeholder chime
  chime:
    "https://cdn.pixabay.com/download/audio/2022/03/24/audio_c8c8a73467.mp3?filename=magic-chime-01-6134.mp3",
};

export default function SecretGardenPage() {
  const [scene, setScene] = useState("gate"); // gate, opening, inner, surprise
  const [isMuted, setIsMuted] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);

  const audioRef = useRef(null);
  const chimeRef = useRef(null);

  // Initial fade in
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed", e));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleGateClick = () => {
    if (scene !== "gate") return;

    // Play chime
    if (chimeRef.current && !isMuted) {
      chimeRef.current.currentTime = 0;
      chimeRef.current.play().catch((e) => console.log("Chime failed", e));
    }

    setScene("opening");

    // Transition to inner scene after animation
    setTimeout(() => {
      setScene("inner");
    }, 2000);
  };

  const handleSecondSurprise = () => {
    setShowFinalSurprise(true);
    // Maybe play chime again
    if (chimeRef.current && !isMuted) {
      chimeRef.current.currentTime = 0;
      chimeRef.current.play();
    }
  };

  return (
		<div className="relative w-full h-screen overflow-hidden text-white select-none font-quicksand">
			{/* Fonts */}
			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;600&display=swap");

				.font-handwriting {
					font-family: "Dancing Script", cursive;
				}
				.font-quicksand {
					font-family: "Quicksand", sans-serif;
				}

				@keyframes float {
					0% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-20px) rotate(5deg);
					}
					100% {
						transform: translateY(0px) rotate(0deg);
					}
				}
				@keyframes sun-spin {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				@keyframes pulse-soft {
					0%,
					100% {
						transform: scale(1);
						opacity: 0.8;
					}
					50% {
						transform: scale(1.1);
						opacity: 1;
					}
				}
				@keyframes sparkle-twinkle {
					0%,
					100% {
						opacity: 0.3;
						transform: scale(0.8);
					}
					50% {
						opacity: 1;
						transform: scale(1.2);
					}
				}
				@keyframes drift {
					0% {
						transform: translate(0, 0) rotate(0deg);
						opacity: 0;
					}
					10% {
						opacity: 1;
					}
					90% {
						opacity: 1;
					}
					100% {
						transform: translate(100px, -500px) rotate(360deg);
						opacity: 0;
					}
				}

				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
				.animate-sun-spin {
					animation: sun-spin 60s linear infinite;
				}
				.animate-pulse-soft {
					animation: pulse-soft 3s ease-in-out infinite;
				}

				.particle {
					position: absolute;
					pointer-events: none;
					animation: drift 15s linear infinite;
				}

				.perspective-container {
					perspective: 1000px;
				}

				.gate-door {
					transform-style: preserve-3d;
					transition: transform 2s ease-in-out, opacity 1s ease-in-out;
					transform-origin: center bottom;
				}

				.scene-transition {
					transition: opacity 2s ease-in-out, transform 2s ease-in-out;
				}

				/* Gate Opening Animation Class */
				.gate-opening {
					transform: scale(3) translateY(50px);
					opacity: 0;
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes popIn {
					0% {
						transform: scale(0);
						opacity: 0;
					}
					70% {
						transform: scale(1.1);
						opacity: 1;
					}
					100% {
						transform: scale(1);
						opacity: 1;
					}
				}

				.animate-fade-in {
					animation: fadeIn 1s ease-out forwards;
				}

				.animate-pop-in {
					animation: popIn 0.5s
						cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
				}
			`}</style>

			{/* Audio Elements */}
			<audio ref={audioRef} src={ASSETS.music} loop />
			<audio ref={chimeRef} src={ASSETS.chime} />

			{/* Background Layers */}
			<img
				className={`absolute inset-0  w-full h-screen  bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
					scene === "inner" || scene === "surprise"
						? "opacity-0"
						: "opacity-100"
				}`}
				src={ASSETS.heroBg}
			/>
			<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>

			<div
				className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
					scene === "inner" || scene === "surprise"
						? "opacity-100"
						: "opacity-0"
				}`}
				style={{ backgroundImage: `url(${ASSETS.innerBg})` }}
			>
				<div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
			</div>

			{/* Sun & Rays */}
			<div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] pointer-events-none opacity-80 mix-blend-screen">
				<div className="absolute inset-0 rounded-full bg-yellow-100 blur-[80px] animate-pulse-soft"></div>
				<div className="absolute inset-0 flex items-center justify-center animate-sun-spin">
					{Array.from({ length: 12 }).map((_, i) => (
						<div
							key={i}
							className="absolute w-[600px] h-[40px] bg-gradient-to-r from-yellow-200/40 to-transparent blur-xl"
							style={{ transform: `rotate(${i * 30}deg)` }}
						/>
					))}
				</div>
			</div>

			{/* Ambient Particles */}
			<ParticleSystem count={30} />

			{/* UI Controls */}
			<button
				onClick={toggleMusic}
				className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-110 hover:bg-white/40 transition-all duration-300 group"
			>
				{isMuted ? (
					<VolumeX className="w-6 h-6 text-white" />
				) : (
					<Volume2 className="w-6 h-6 text-white animate-pulse" />
				)}
			</button>

			{/* Main Content Area */}
			<div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
				{/* SCENE 1: THE GATE */}
				{(scene === "gate" || scene === "opening") && (
					<div
						className={`flex flex-col items-center justify-center transition-all duration-[2000ms] ${
							scene === "opening"
								? "gate-opening pointer-events-none"
								: ""
						}`}
					>
						{/* The Gate */}
						<div
							className="relative cursor-pointer group perspective-container"
							onClick={handleGateClick}
						>
							<div className="relative w-[300px] h-[400px] md:w-[300px] md:h-[400px] transition-transform duration-1000 ease-out transform group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]">
								<img
									src={ASSETS.gate}
									alt="Magical Gate"
									className="object-contain w-full h-full"
								/>

								{/* Glowing Keyhole Overlay */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-10 h-10 transition-all duration-500 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400/30 blur-xl"></div>
								</div>

								{/* Sparkles on hover */}
								<div className="absolute w-full h-full transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none top-1/2 left-1/2 group-hover:opacity-100">
									<Sparkles className="absolute w-6 h-6 text-yellow-200 top-1/4 left-1/4 animate-pulse" />
									<Sparkles className="absolute w-4 h-4 text-yellow-100 bottom-1/3 right-1/4 animate-bounce" />
									<Sparkles className="absolute w-5 h-5 text-white top-1/3 right-1/3 animate-pulse" />
								</div>
							</div>

							{/* Text Hint */}
							<div className="absolute w-full text-center -translate-x-1/2 -bottom-16 left-1/2">
								<h2 className="text-3xl md:text-4xl font-handwriting text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] animate-pulse-soft">
									Click to Open the Gate!
								</h2>
								<p className="mt-2 text-sm font-semibold tracking-wider uppercase md:text-base text-blue-50 opacity-90 drop-shadow-md">
									Enter our Secret Garden of Love
								</p>
							</div>
						</div>
					</div>
				)}

				{/* SCENE 2: INNER GARDEN */}
				{(scene === "inner" || scene === "surprise") && (
					<div
						className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-1000 ${
							scene === "inner"
								? "opacity-100 scale-100"
								: "opacity-100"
						}`}
					>
						<div className="max-w-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] shadow-[0_0_50px_rgba(255,255,255,0.2)] border border-white/20 relative overflow-hidden">
							{/* Decorative Corner Flowers/Vines could go here */}
							<div className="absolute w-24 h-24 rounded-full -top-4 -left-4 bg-pink-400/20 blur-2xl"></div>
							<div className="absolute w-24 h-24 rounded-full -bottom-4 -right-4 bg-blue-400/20 blur-2xl"></div>

							<h1 className="text-4xl md:text-6xl font-handwriting mb-8 leading-tight text-white drop-shadow-[0_2px_10px_rgba(255,105,180,0.6)]">
								<TypewriterText
									text="My love, you are the sunshine in my secret garden."
									delay={50}
								/>
							</h1>

							<div className="text-lg md:text-2xl font-light text-blue-50 drop-shadow-md mb-10 opacity-0 animate-[fadeIn_2s_ease-out_3s_forwards]">
								Thank you for being the most magical part of my
								life.
							</div>

							{!showFinalSurprise ? (
								<button
									onClick={handleSecondSurprise}
									className="group relative px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full text-white font-bold tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(255,105,180,0.6)] hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeIn_1s_ease-out_5s_forwards]"
								>
									<span className="relative z-10 flex items-center gap-2">
										Tap for another surprise{" "}
										<Heart className="w-4 h-4 fill-white animate-bounce" />
									</span>
									<div className="absolute inset-0 transition-transform duration-300 scale-0 rounded-full bg-white/30 group-hover:scale-100"></div>
								</button>
							) : (
								<div className="animate-pop-in">
									<div className="flex flex-col items-center gap-4">
										<div className="flex items-center justify-center gap-4 mb-4">
											{/* Simple Chibi/Avatar Representation using Icons/Shapes since we can't generate custom dynamic assets easily */}
											<div className="relative flex items-center justify-center w-16 h-16 overflow-hidden text-2xl bg-blue-200 border-2 border-white rounded-full shadow-lg">
												🧑‍🌾
											</div>
											<Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse" />
											<div className="relative flex items-center justify-center w-16 h-16 overflow-hidden text-2xl bg-pink-200 border-2 border-white rounded-full shadow-lg">
												🧚‍♀️
											</div>
										</div>
										<h2 className="text-3xl md:text-5xl font-handwriting text-pink-200 drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]">
											I love you, [Her Name]! 💕
										</h2>
										<p className="mt-4 text-xs text-white/60">
											(You can edit this text easily!)
										</p>
									</div>
									<Fireworks />
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
  );
}

// --- Subcomponents ---

function ParticleSystem({ count }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <Particle key={i} delay={i * 0.5} />
      ))}
    </div>
  );
}

function Particle({ delay }) {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100 + 10}%`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.2,
    transform: `scale(${Math.random() * 0.5 + 0.5})`,
  };

  // Randomize particle type
  const type = Math.random();

  return (
    <div className="particle" style={style}>
      {type > 0.6 ? (
        // Petal
        <div className="w-3 h-3 bg-pink-200 rounded-tr-xl rounded-bl-xl opacity-80" />
      ) : type > 0.3 ? (
        // Sparkle
        <Sparkles className="w-4 h-4 text-yellow-100" />
      ) : (
        // Small circle
        <div className="w-2 h-2 bg-white rounded-full blur-[1px]" />
      )}
    </div>
  );
}

function TypewriterText({ text, delay = 50 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return <span>{displayedText}</span>;
}

function Fireworks() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* CSS Fireworks could go here, for now using simple particle bursts */}
      <div className="absolute top-0 -translate-x-1/2 -translate-y-full left-1/2">
        <div className="relative">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-400 rounded-full animate-firework"
              style={{
                transform: `rotate(${i * 30}deg) translate(0px)`,
                "--angle": `${i * 30}deg`,
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
                @keyframes firework {
                    0% { transform: rotate(var(--angle)) translateY(0px); opacity: 1; }
                    100% { transform: rotate(var(--angle)) translateY(-100px); opacity: 0; }
                }
                .animate-firework {
                    animation: firework 1s ease-out forwards;
                }
            `}</style>
    </div>
  );
}




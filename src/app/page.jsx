"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WelcomeGarden from "../components/welcome-garden";
import LoadingPage from "../components/loading-page";
import { AnimatedOverlay } from "@/components/effects";
import { CLOUDLY_EFFECT, SUNRISE_EFFECT } from "@/config/effects";
import { GARDEN_EMOJIS, SAD_EMOJIS } from "@/constants/emojis";
import { PageAnimation, FadeAnimation, SlideUpAnimation, BloomAnimation } from "@/components/animations";
import SuccessCelebration from "@/components/SuccessCelebration";
import MoonlitGardenEffects from "@/components/MoonlitGardenEffects";
import "@/styles/animations.css";

function MainComponent() {
        const passwordRef = React.useRef(null);
        const [isWrong, setIsWrong] = React.useState(false);
        const [wrongAttempts, setWrongAttempts] = React.useState(0);
        const [isShaking, setIsShaking] = React.useState(false);
        const [showSuccess, setShowSuccess] = React.useState(false);
        const [progress, setProgress] = React.useState(0);
        const [isTransitioning, setIsTransitioning] = React.useState(false);
        const [showCelebration, setShowCelebration] = React.useState(false);

        const handleKeyPulse = React.useCallback((e) => {
                const el = e.currentTarget;
                el.classList.remove("typingPulse");
                void el.offsetWidth;
                el.classList.add("typingPulse");
        }, []);

        const router = useRouter();

        const fetchUserData = async () => {
                const browserInfo = {
                        userAgent: navigator.userAgent,
                        platform: navigator.platform,
                        screenSize: `${window.screen.width}x${window.screen.height}`,
                };

                try {
                        await fetch('/api/track-visitor', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ browserInfo }),
                        });
                } catch (error) {
                        console.error('Failed to track visitor:', error);
                }
        };

        React.useEffect(() => {
                fetchUserData();
        }, []);

        React.useEffect(() => {
                router.prefetch("/");
        }, [router]);

        React.useEffect(() => {
                const isAuthorized = localStorage.getItem("gardenAccess");
                const loginTime = localStorage.getItem("gardenLoginTime");

                if (isAuthorized === "true" && loginTime) {
                        const currentTime = new Date().getTime();
                        const timeDiff = currentTime - parseInt(loginTime);
                        const tenMinutes = 10 * 60 * 1000;

                        if (timeDiff < tenMinutes) {
                                setTimeout(() => {
                                        setShowSuccess(true);
                                }, 1000);
                                setTimeout(() => {
                                        router.push("/");
                                }, 4000);
                        } else {
                                localStorage.removeItem("gardenAccess");
                                localStorage.removeItem("gardenLoginTime");
                        }
                }
        }, [router]);

        const startTransition = () => {
                setIsTransitioning(true);
                setShowCelebration(true);

                setTimeout(() => {
                        setShowSuccess(true);
                        setShowCelebration(false);
                }, 9000); // 9 seconds
        };

        const handleSubmit = async (e) => {
                e.preventDefault();
                const attemptedPassword = passwordRef.current?.value || "";

                try {
                        await fetch('/api/log-attempt', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ attempt: attemptedPassword }),
                        });

                        const response = await fetch('/api/check-password', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ password: attemptedPassword }),
                        });

                        const data = await response.json();

                        if (data.isCorrect) {
                                const currentTime = new Date().getTime();
                                localStorage.setItem("gardenAccess", "true");
                                localStorage.setItem("gardenLoginTime", currentTime.toString());

                                // Start the beautiful transition
                                startTransition();
                        } else {
                                setIsWrong(true);
                                setIsShaking(true);
                                setWrongAttempts((prev) => prev + 1);
                                if (passwordRef.current) passwordRef.current.value = "";

                                setTimeout(() => {
                                        setIsShaking(false);
                                }, 600);

                                setTimeout(() => {
                                        setIsWrong(false);
                                }, 3000);
                        }
                } catch (error) {
                        console.error('Failed to check password:', error);
                }
        };

        if (showSuccess && progress === 100) {
                return (
                        <PageAnimation type="blur" duration={1500} delay={200} isVisible={true}>
                                <WelcomeGarden />
                        </PageAnimation> 
                );
        }

        if (showSuccess && progress !== 100) {
                return (
                        <SlideUpAnimation isVisible={true}>
                                <LoadingPage progress={progress} setProgress={setProgress} />
                        </SlideUpAnimation> 
                );
        }

        if (!showSuccess) {
                const currentElements = isWrong ? SAD_EMOJIS : GARDEN_EMOJIS;

                return (
                        <>
                                <SuccessCelebration isActive={showCelebration} />

                                <BloomAnimation isVisible={!isTransitioning}>
                                        <div
                                                style={{
                                                        minHeight: "100vh",
                                                        background: isWrong
                                                                ? "linear-gradient(135deg, #636e72 0%, #74b9ff 25%, #a29bfe 50%, #fd79a8 75%, #fdcb6e 100%)"
                                                                : "linear-gradient(135deg, #FFE4B5 0%, #FFEFD5 25%, #FFF8DC 50%, #FFFACD 75%, #FFFFE0 100%)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        transition: "background 0.5s ease",
                                                }}
                                        >
                                                {!isWrong && <AnimatedOverlay config={SUNRISE_EFFECT} zIndex={1} />}

                                                {currentElements.map((element, index) => (
                                                        <div
                                                                key={index}
                                                                style={{
                                                                        position: "absolute",
                                                                        left: `${Math.random() * 100}%`,
                                                                        top: `${Math.random() * 100}%`,
                                                                        fontSize: `${Math.random() * 25 + 15}px`,
                                                                        opacity: isWrong ? 0.6 : 0.4,
                                                                        animation: isWrong
                                                                                ? `sadFloat ${3 + Math.random() * 2}s ease-in-out infinite`
                                                                                : `gardenFloat ${3 + Math.random() * 2}s ease-in-out infinite`,
                                                                        animationDelay: `${Math.random() * 3}s`,
                                                                        zIndex: 3,
                                                                        transform: isWrong ? "rotate(180deg)" : "rotate(0deg)",
                                                                        transition: "all 0.5s ease",
                                                                }}
                                                        >
                                                                {element}
                                                        </div>
                                                ))}

                                                <AnimatedOverlay config={CLOUDLY_EFFECT} zIndex={2} />

                                                {isWrong && (
                                                        <>
                                                                <div
                                                                        style={{
                                                                                position: "absolute",
                                                                                top: "20%",
                                                                                left: "15%",
                                                                                fontSize: "60px",
                                                                                animation: "cry 1s ease-in-out infinite",
                                                                                zIndex: 5,
                                                                        }}
                                                                >
                                                                        😭🌸
                                                                </div>
                                                                <div
                                                                        style={{
                                                                                position: "absolute",
                                                                                bottom: "25%",
                                                                                right: "20%",
                                                                                fontSize: "50px",
                                                                                animation: "wilt 2s ease-in-out infinite",
                                                                                zIndex: 5,
                                                                        }}
                                                                >
                                                                        🥀💔
                                                                </div>
                                                                <div
                                                                        style={{
                                                                                position: "absolute",
                                                                                top: "30%",
                                                                                right: "10%",
                                                                                fontSize: "40px",
                                                                                animation: "sadBee 1.5s ease-in-out infinite",
                                                                                zIndex: 5,
                                                                        }}
                                                                >
                                                                        🐝💧
                                                                </div>
                                                        </>
                                                )}

                                                <div
                                                        style={{
                                                                textAlign: "center",
                                                                background: "rgba(255, 255, 255, 0.70)",
                                                                borderRadius: "25px",
                                                                padding: "40px",
                                                                boxShadow: isWrong
                                                                        ? "0 20px 40px rgba(255, 0, 0, 0.2)"
                                                                        : "0 20px 40px rgba(255, 223, 0, 0.3)",
                                                                border: isWrong
                                                                        ? "3px solid rgba(255, 107, 107, 0.5)"
                                                                        : "3px solid rgba(255, 223, 0, 0.6)",
                                                                maxWidth: "500px",
                                                                width: "100%",
                                                                zIndex: 10,
                                                                transform: isShaking ? "translateX(0)" : "translateX(0)",
                                                                animation: isShaking
                                                                        ? "shake 0.6s ease-in-out"
                                                                        : !isWrong
                                                                                ? "sunGlow 2s ease-in-out infinite alternate"
                                                                                : "none",
                                                                transition: "all 0.3s ease",
                                                                position: "relative",
                                                        }}
                                                >
                                                        {!isWrong && <MoonlitGardenEffects />}
                                                        <div
                                                                style={{
                                                                        fontSize: "60px",
                                                                        marginBottom: "20px",
                                                                        animation: isWrong
                                                                                ? "sadGate 1s ease-in-out infinite"
                                                                                : "sunriseGate 3s ease-in-out infinite",
                                                                }}
                                                        >
                                                                {isWrong ? "🚪💔" : "🌅🚪🌅"}
                                                        </div>

                                                        <h1
                                                                style={{
                                                                        fontSize: "28px",
                                                                        color: isWrong ? "#e17055" : "#FF8C00",
                                                                        marginBottom: "30px",
                                                                        fontWeight: "bold",
                                                                        transition: "color 0.3s ease",
                                                                        textShadow: !isWrong
                                                                                ? "0 2px 4px rgba(255, 140, 0, 0.3)"
                                                                                : "none",
                                                                }}
                                                        >
                                                                {isWrong
                                                                        ? "The Garden is Sad... 🥀"
                                                                        : "Welcome to Kavindi's Sunrise Garden 🌅"}
                                                        </h1>

                                                        <form onSubmit={handleSubmit}>
                                                                <div style={{ marginBottom: "25px" }}>
                                                                        <input
                                                                                type="password"
                                                                                ref={passwordRef}
                                                                                onKeyDown={handleKeyPulse}
                                                                                placeholder="🔑 Enter the secret garden key..."
                                                                                style={{
                                                                                        width: "100%",
                                                                                        padding: "15px 20px",
                                                                                        border: isWrong
                                                                                                ? "3px solid rgba(255, 107, 107, 0.5)"
                                                                                                : "2px solid rgba(255, 223, 0, 0.6)",
                                                                                        borderRadius: "15px",
                                                                                        fontSize: "16px",
                                                                                        outline: "none",
                                                                                        background: "rgba(255, 255, 255, 0.9)",
                                                                                        transition: "all 0.3s ease",
                                                                                        boxShadow: isWrong
                                                                                                ? "0 4px 15px rgba(255, 107, 107, 0.2)"
                                                                                                : "0 4px 15px rgba(255, 223, 0, 0.2)",
                                                                                }}
                                                                                onFocus={(e) => {
                                                                                        e.target.style.border = "3px solid #00b894";
                                                                                        e.target.style.boxShadow =
                                                                                                "0 4px 15px rgba(0, 184, 148, 0.3)";
                                                                                }}
                                                                                onBlur={(e) => {
                                                                                        e.target.style.border = isWrong
                                                                                                ? "3px solid rgba(255, 107, 107, 0.5)"
                                                                                                : "2px solid rgba(255, 223, 0, 0.6)";
                                                                                        e.target.style.boxShadow = isWrong
                                                                                                ? "0 4px 15px rgba(255, 107, 107, 0.2)"
                                                                                                : "0 4px 15px rgba(255, 223, 0, 0.2)";
                                                                                }}
                                                                        />
                                                                </div>

                                                                <button
                                                                        type="submit"
                                                                        style={{
                                                                                background: isWrong
                                                                                        ? "linear-gradient(45deg, #e17055, #fdcb6e)"
                                                                                        : "linear-gradient(45deg, #00b894, #00cec9)",
                                                                                border: "none",
                                                                                borderRadius: "20px",
                                                                                padding: "15px 30px",
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold",
                                                                                color: "white",
                                                                                cursor: "pointer",
                                                                                boxShadow: isWrong
                                                                                        ? "0 8px 20px rgba(225, 112, 85, 0.3)"
                                                                                        : "0 8px 20px rgba(0, 184, 148, 0.3)",
                                                                                transition: "all 0.3s ease",
                                                                                width: "100%",
                                                                        }}
                                                                        onMouseOver={(e) => {
                                                                                e.target.style.transform = "scale(1.05)";
                                                                                e.target.style.boxShadow = isWrong
                                                                                        ? "0 12px 25px rgba(225, 112, 85, 0.4)"
                                                                                        : "0 12px 25px rgba(0, 184, 148, 0.4)";
                                                                        }}
                                                                        onMouseOut={(e) => {
                                                                                e.target.style.transform = "scale(1)";
                                                                                e.target.style.boxShadow = isWrong
                                                                                        ? "0 8px 20px rgba(225, 112, 85, 0.3)"
                                                                                        : "0 8px 20px rgba(0, 184, 148, 0.3)";
                                                                        }}
                                                                >
                                                                        {isWrong ? "🥀 Try Again 🥀" : "🌸 Enter Garden 🌸"}
                                                                </button>
                                                        </form>

                                                        <p
                                                                style={{
                                                                        marginTop: "20px",
                                                                        fontSize: "14px",
                                                                        color: "#666",
                                                                        fontStyle: "italic",
                                                                }}
                                                        >
                                                                {isWrong
                                                                        ? "💔 The garden creatures are waiting for the right key... 😢"
                                                                        : "🦋 Only Kavindi knows the secret to this magical garden... 🌺"}
                                                        </p>
                                                </div>
                                        </div>
                                </BloomAnimation>

                                <style jsx>{`
          @keyframes bloomEffect {
            0% {
              transform: scale(0) rotate(0deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) rotate(180deg);
              opacity: 1;
            }
            100% {
              transform: scale(1) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes goldenSparkle {
            0% {
              transform: scale(0) rotate(0deg);
              opacity: 0;
            }
            20% {
              transform: scale(1) rotate(180deg);
              opacity: 1;
            }
            80% {
              transform: scale(1) rotate(360deg);
              opacity: 1;
            }
            100% {
              transform: scale(0) rotate(540deg);
              opacity: 0;
            }
          }

          @keyframes heartFloat {
            0% {
              transform: translateY(0) scale(0);
              opacity: 0;
            }
            20% {
              transform: translateY(-20px) scale(1);
              opacity: 1;
            }
            80% {
              transform: translateY(-100px) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-150px) scale(0);
              opacity: 0;
            }
          }
        `}</style>
                        </>
                );
        }
}

export default MainComponent;
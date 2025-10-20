"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WelcomeGarden from "../components/welcome-garden";
import LoadingPage from "../components/loading-page";
import { AnimatedOverlay } from "@/components/effects";
import { CLOUDLY_EFFECT, SUNRISE_EFFECT } from "@/config/effects";
import { GARDEN_EMOJIS, SAD_EMOJIS } from "@/constants/emojis";

const MoonlitGardenEffects = () => (
        <div
                style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 0,
                        overflow: "visible",
                }}
        >
                {/* Full moon with glow */}
                <div
                        style={{
                                position: "absolute",
                                top: "-60px",
                                right: "-60px",
                                width: "120px",
                                height: "120px",
                                borderRadius: "50%",
                                background:
                                        "radial-gradient(circle, #fff9c4 0%, #f7dc6f 30%, #f4d03f 100%)",
                                boxShadow:
                                        "0 0 30px rgba(255, 249, 196, 0.4), 0 0 60px rgba(255, 249, 196, 0.2)",
                                opacity: 0.7,
                                zIndex: -1,
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
                {[...Array.from({ length: 10 })].map((_, i) => (
                        <div
                                key={`moonbeam-${i}`}
                                style={{
                                        position: "absolute",
                                        top: "0px",
                                        right: "0px",
                                        width: "2px",
                                        height: "200px",
                                        background:
                                                "linear-gradient(180deg, rgba(255, 249, 196, 0.4), transparent)",
                                        transform: `rotate(${i * 36}deg)`,
                                        transformOrigin: "50% 0%",
                                }}
                        />
                ))}

                {/* Floating light particles around the moon */}
                {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 360) / 12;
                        const distance = 70 + Math.sin(i) * 15;
                        const x = Math.cos((angle * Math.PI) / 180) * distance;
                        const y = Math.sin((angle * Math.PI) / 180) * distance;

                        return (
                                <div
                                        key={`particle-${i}`}
                                        style={{
                                                position: "absolute",
                                                top: `${y}px`,
                                                right: `${-x}px`,
                                                width: "6px",
                                                height: "6px",
                                                borderRadius: "50%",
                                                background: "#fff9c4",
                                                boxShadow: "0 0 8px rgba(255, 249, 196, 0.5)",
                                                opacity: 0.7,
                                        }}
                                />
                        );
                })}
        </div>
);

function MainComponent() {
        const passwordRef = React.useRef(null);
        const [isWrong, setIsWrong] = React.useState(false);
        const [wrongAttempts, setWrongAttempts] = React.useState(0);
        const [isShaking, setIsShaking] = React.useState(false);
        const [showSuccess, setShowSuccess] = React.useState(false);
        const [progress, setProgress] = React.useState(0);

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

                                setTimeout(() => {
                                        setShowSuccess(true);
                                }, 500);
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

        if (!showSuccess) {
                const currentElements = isWrong ? SAD_EMOJIS : GARDEN_EMOJIS;

                return (
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
                );
        }

        if (progress !== 100) {
                return <LoadingPage progress={progress} setProgress={setProgress} />;
        }

        if (showSuccess) {
                return <WelcomeGarden />;
        }
}

export default MainComponent;

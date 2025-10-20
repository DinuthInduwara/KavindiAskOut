"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WelcomeGarden from "../components/welcome-garden"; // Import the welcome garden component
import LoadingPage from "../components/loading-page"


const CloudyTransition = () => (
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
                {/* Moving clouds */}
                {[...Array.from({ length: 8 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        top: `${10 + Math.random() * 60}%`,
                                        left: "-20%",
                                        fontSize: `${40 + Math.random() * 30}px`,
                                        opacity: 0.7,
                                        animation: `cloudMove ${8 + Math.random() * 4
                                                }s linear infinite ${i * 0.5}s`,
                                }}
                        >
                                ☁️
                        </div>
                ))}

                {/* Butterfly trails */}
                {[...Array.from({ length: 6 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animation: `butterflyTrail ${4 + Math.random() * 2
                                                }s ease-in-out infinite ${Math.random() * 2}s`,
                                }}
                        >
                                <div style={{ fontSize: "24px" }}>🦋</div>
                                {/* Glittery trail */}
                                <div
                                        style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                width: "30px",
                                                height: "2px",
                                                background:
                                                        "linear-gradient(90deg, transparent, rgba(255, 182, 193, 0.8), transparent)",
                                                transform: "translate(-50%, -50%)",
                                                animation: `glitterTrail 2s ease-in-out infinite ${Math.random()}s`,
                                        }}
                                />
                        </div>
                ))}

                {/* Flower petals floating */}
                {[...Array.from({ length: 10 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        fontSize: "16px",
                                        animation: `petalFloat ${5 + Math.random() * 3
                                                }s ease-in-out infinite ${Math.random() * 2}s`,
                                }}
                        >
                                🌸
                        </div>
                ))}
        </div>
);

function MainComponent() {
        const passwordRef = React.useRef(null);
        const [isWrong, setIsWrong] = React.useState(false);
        const [wrongAttempts, setWrongAttempts] = React.useState(0);
        const [isShaking, setIsShaking] = React.useState(false);
        const [showSuccess, setShowSuccess] = React.useState(false);
        const clouds = React.useMemo(() => <CloudyTransition />, []);
        const [progress, setProgress] = React.useState(0);

        // Smooth key press pulse for input without triggering React re-renders
        const handleKeyPulse = React.useCallback((e) => {
                const el = e.currentTarget;
                // Restart animation by toggling the class
                el.classList.remove("typingPulse");
                // Force reflow to allow re-adding the class
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



        const SunriseEffect = () => (
                <div
                        style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                pointerEvents: "none",
                                zIndex: 1,
                        }}
                >
                        {/* Sun rays */}
                        {[...Array.from({ length: 12 })].map((_, i) => (
                                <div
                                        key={i}
                                        style={{
                                                position: "absolute",
                                                top: "20%",
                                                right: "15%",
                                                width: "200px",
                                                height: "2px",
                                                background:
                                                        "linear-gradient(90deg, transparent, rgba(255, 223, 0, 0.6), transparent)",
                                                transformOrigin: "0 50%",
                                                transform: `rotate(${i * 30}deg)`,
                                                animation: `sunRays 4s ease-in-out infinite ${i * 0.2
                                                        }s`,
                                        }}
                                />
                        ))}

                        {/* Floating sun particles */}
                        {[...Array.from({ length: 15 })].map((_, i) => (
                                <div
                                        key={i}
                                        style={{
                                                position: "absolute",
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                width: "4px",
                                                height: "4px",
                                                background: "rgba(255, 223, 0, 0.8)",
                                                borderRadius: "50%",
                                                animation: `sunParticles ${3 + Math.random() * 2
                                                        }s ease-in-out infinite ${Math.random() * 2}s`,
                                        }}
                                />
                        ))}

                        {/* Shimmering light overlay */}
                        <div
                                style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                                "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                                        animation: "shimmer 3s ease-in-out infinite",
                                }}
                        />
                </div>
        );

        React.useEffect(() => {
                // Check if already authorized and not expired
                const isAuthorized = localStorage.getItem("gardenAccess");
                const loginTime = localStorage.getItem("gardenLoginTime");

                if (isAuthorized === "true" && loginTime) {
                        const currentTime = new Date().getTime();
                        const timeDiff = currentTime - parseInt(loginTime);
                        const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds

                        if (timeDiff < tenMinutes) {
                                // Still within 10 minutes, start transition then redirect
                                setTimeout(() => {
                                        setShowSuccess(true);
                                }, 1000);
                                setTimeout(() => {
                                        router.push("/");
                                }, 4000);
                        } else {
                                // More than 10 minutes, clear authorization
                                localStorage.removeItem("gardenAccess");
                                localStorage.removeItem("gardenLoginTime");
                        }
                }
        }, []);

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
        const sadElements = ["🥀", "😢", "💔", "😭", "🌧️", "⛈️"];





        if (!showSuccess) {
                return (
                        <>
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
                                        {/* Add sunrise effect when not wrong */}
                                        {!isWrong && <SunriseEffect />}
                                        {/* Floating garden elements */}
                                        {(isWrong ? sadElements : gardenElements).map(
                                                (element, index) => (
                                                        <div
                                                                key={index}
                                                                style={{
                                                                        position: "absolute",
                                                                        left: `${Math.random() * 100}%`,
                                                                        top: `${Math.random() * 100}%`,
                                                                        fontSize: `${Math.random() * 25 + 15}px`,
                                                                        opacity: isWrong ? 0.6 : 0.4,
                                                                        animation: isWrong
                                                                                ? `sadFloat ${3 + Math.random() * 2
                                                                                }s ease-in-out infinite`
                                                                                : `gardenFloat ${3 + Math.random() * 2
                                                                                }s ease-in-out infinite`,
                                                                        animationDelay: `${Math.random() * 3}s`,
                                                                        zIndex: 3,
                                                                        transform: isWrong
                                                                                ? "rotate(180deg)"
                                                                                : "rotate(0deg)",
                                                                        transition: "all 0.5s ease",
                                                                }}
                                                        >
                                                                {element}
                                                        </div>
                                                )
                                        )}
                                        {clouds};{/* Garden creatures reactions */}
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
                                        {/* Main garden gate */}
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
                                                        transform: isShaking
                                                                ? "translateX(0)"
                                                                : "translateX(0)",
                                                        animation: isShaking
                                                                ? "shake 0.6s ease-in-out"
                                                                : !isWrong
                                                                        ? "sunGlow 2s ease-in-out infinite alternate"
                                                                        : "none",
                                                        transition: "all 0.3s ease",
                                                }}
                                        >
                                                {/* Garden gate header */}
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
                        </>
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

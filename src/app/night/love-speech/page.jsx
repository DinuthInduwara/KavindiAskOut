"use client";
import React from "react";
import MoonTransition from "../../../components/MoonlitTransition";

function MainComponent() {
        const [loading, setLoading] = React.useState(true);
        React.useEffect(() => {
                const timer = setTimeout(() => {
                        setLoading(false);
                }, 15000); // Simulate loading for 1 second
                return () => clearTimeout(timer);
        }, []);

        React.useEffect(() => {
                document.title = "🫅The End of the journey ";
        }, []);

        const transitionDuration = 60; // seconds - easily adjustable
        const poeticLines = [
                "කවින්දි, නුඹ හිනැහෙද්දි, 😊",
                "",
                "මට මගේ නමත් අමතක වෙයි. 😶‍🌫️",
                "",
                "නුඹේ එක සිනහාවෙන්, 🌟",
                "මගේ ලෝකයම සන්සුන් වෙයි. 🌍✨",
                "",
                "මට හිතෙනවා කියන්න, 💭",
                "මම නුඹට හිතුට වඩා ආදරෙයි කියලා. ❤️",
                "ඒ වගේම කියන්න ඕනෙ, 🗣️",
                "වැස්සට මගේ හිත කවදාවත් සන්සුන් නැහැ කියලා. ☔💔",
                "",
                "වැස්ස… මගේ හිත බර කරන්නේ, 🌧️",
                "නුඹේ හිත නොමැතිව එන ඒ තරහයි. 😔",
                "තරු නැඟෙන  අහස වගේ, ✨🌌",
                "මේ හිතේ වැස්ස නිමවෙයි නුඹේ මුවහත් සිනාසෙද්දි. 😊🌈",
                "",
                "මගේ හදවතේ පැතිරෙන ආලෝකය ඔබයි, 💡",
                "අඳුරු මීදුම ඉවත් කරන්නේ ඔබයි. 🌞",
                "කඩං වැටෙන තරුණ වැස්සක් වගේ, 🌦️",
                "ඔයා නැතිව , මට නවාතැනක්වත් නැහැ. ",
        ];
        // Calculate timing for each line
        const lineStartTime = -0.5; // Start first line at 15% of total duration
        const lineSpacing = 0.7 / (poeticLines.length - 1); // Spread remaining 70% across lines

        const lineDelays = poeticLines.map(
                (_, index) => (lineStartTime + index * lineSpacing) * transitionDuration
        );
        if (loading) return <MoonTransition />;

        return (
                <div
                        className="relative w-full h-screen overflow-hidden"
                        style={{
                                "--transition-duration": `${transitionDuration}s`,
                                "--duration-ms": transitionDuration * 1000,
                        }}
                >
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 transition-all duration-[var(--duration-ms)] ease-out animate-sky-transform"></div>

                        {/* Storm clouds */}
                        <div className="absolute inset-0 animate-clouds-drift">
                                <div className="absolute top-0 left-0 w-[120%] h-[60%] opacity-80 animate-cloud-fade">
                                        <div className="cloud cloud-1"></div>
                                        <div className="cloud cloud-2"></div>
                                        <div className="cloud cloud-3"></div>
                                </div>
                        </div>

                        {/* Rain effect */}
                        <div className="absolute inset-0 animate-rain-fade">
                                {Array.from({ length: 100 }).map((_, i) => (
                                        <div
                                                key={i}
                                                className="raindrop"
                                                style={{
                                                        left: `${Math.random() * 100}%`,
                                                        animationDelay: `${Math.random() * 2}s`,
                                                        animationDuration: `${0.5 + Math.random() * 0.5}s`,
                                                }}
                                        ></div>
                                ))}
                        </div>

                        {/* Mist effect */}
                        <div className="absolute inset-0 animate-mist-appear">
                                <div className="mist mist-1"></div>
                                <div className="mist mist-2"></div>
                                <div className="mist mist-3"></div>
                        </div>

                        {/* Stars */}
                        <div className="absolute inset-0 animate-stars-twinkle">
                                {Array.from({ length: 50 }).map((_, i) => (
                                        <div
                                                key={i}
                                                className="star"
                                                style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 60}%`,
                                                        animationDelay: `${
                                                                (0.4 + Math.random() * 0.3) * transitionDuration
                                                        }s`,
                                                }}
                                        ></div>
                                ))}
                        </div>

                        {/* Glowing butterflies */}
                        <div className="absolute inset-0 animate-creatures-appear">
                                {Array.from({ length: 8 }).map((_, i) => (
                                        <div
                                                key={i}
                                                className="butterfly"
                                                style={{
                                                        left: `${20 + Math.random() * 60}%`,
                                                        top: `${30 + Math.random() * 40}%`,
                                                        animationDelay: `${
                                                                (0.6 + i * 0.05) * transitionDuration
                                                        }s`,
                                                }}
                                        ></div>
                                ))}
                        </div>

                        {/* Floating koi spirits */}
                        <div className="absolute inset-0 animate-spirits-float">
                                {Array.from({ length: 5 }).map((_, i) => (
                                        <div
                                                key={i}
                                                className="koi-spirit"
                                                style={{
                                                        left: `${10 + Math.random() * 80}%`,
                                                        top: `${40 + Math.random() * 30}%`,
                                                        animationDelay: `${
                                                                (0.7 + i * 0.08) * transitionDuration
                                                        }s`,
                                                }}
                                        ></div>
                                ))}
                        </div>

                        {/* Gentle glows */}
                        <div className="absolute inset-0 animate-glows-emerge">
                                <div className="glow glow-1"></div>
                                <div className="glow glow-2"></div>
                                <div className="glow glow-3"></div>
                        </div>

                        {/* Floating Glassmorphic Text Box with improved overflow handling */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 animate-text-box-appear">
                                <div className="glass-text-box animate-box-float">
                                        <div className="glass-shimmer"></div>
                                        <div className="relative z-10 p-6 md:p-8">
                                                <div className="text-container">
                                                        {poeticLines.map((line, index) => (
                                                                <div
                                                                        key={index}
                                                                        className={`text-line ${
                                                                                index === poeticLines.length - 1
                                                                                        ? "text-line-last"
                                                                                        : ""
                                                                        } ${line === "" ? "empty-line" : ""}`}
                                                                        style={{
                                                                                "--line-delay": `${lineDelays[index]}s`,
                                                                                animationDelay: `${lineDelays[index]}s`,
                                                                        }}
                                                                >
                                                                        {line || "\u00A0"}{" "}
                                                                        {/* Non-breaking space for empty lines */}
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* Audio suggestion overlay */}
                        <div
                                className="absolute p-3 text-sm text-white bg-black rounded-lg bottom-4 right-4 bg-opacity-30 backdrop-blur-sm opacity-70 animate-text-appear"
                                style={{ animationDelay: `${0.8 * transitionDuration}s` }}
                        >
                                Alright then... thank you for being here 🌸 This little garden
                                remembers you forever 🌧️💫
                        </div>

                        <style jsx global>{`
                                :root {
                                        --transition-duration: ${transitionDuration}s;
                                        --duration-ms: ${transitionDuration * 1000}ms;
                                }

                                @keyframes sky-transform {
                                        0% {
                                                background: linear-gradient(
                                                        to bottom,
                                                        #1a1a2e,
                                                        #16213e,
                                                        #0f3460
                                                );
                                        }
                                        30% {
                                                background: linear-gradient(
                                                        to bottom,
                                                        #2a2a4e,
                                                        #26314e,
                                                        #1f4470
                                                );
                                        }
                                        60% {
                                                background: linear-gradient(
                                                        to bottom,
                                                        #3a3a6e,
                                                        #36416e,
                                                        #2f5480
                                                );
                                        }
                                        100% {
                                                background: linear-gradient(
                                                        to bottom,
                                                        #4a4a8e,
                                                        #46518e,
                                                        #3f6490
                                                );
                                        }
                                }

                                @keyframes rain-fade {
                                        0% {
                                                opacity: 1;
                                        }
                                        40% {
                                                opacity: 0.8;
                                        }
                                        70% {
                                                opacity: 0.3;
                                        }
                                        100% {
                                                opacity: 0;
                                        }
                                }

                                @keyframes cloud-fade {
                                        0% {
                                                opacity: 0.9;
                                                transform: translateX(0) scale(1);
                                        }
                                        50% {
                                                opacity: 0.6;
                                                transform: translateX(20px) scale(1.1);
                                        }
                                        100% {
                                                opacity: 0.2;
                                                transform: translateX(50px) scale(1.3);
                                        }
                                }

                                @keyframes mist-appear {
                                        0% {
                                                opacity: 0;
                                        }
                                        40% {
                                                opacity: 0;
                                        }
                                        70% {
                                                opacity: 0.4;
                                        }
                                        100% {
                                                opacity: 0.7;
                                        }
                                }

                                @keyframes stars-twinkle {
                                        0% {
                                                opacity: 0;
                                                transform: scale(0);
                                        }
                                        50% {
                                                opacity: 0;
                                        }
                                        70% {
                                                opacity: 0.8;
                                                transform: scale(1);
                                        }
                                        85% {
                                                opacity: 1;
                                                transform: scale(1.2);
                                        }
                                        100% {
                                                opacity: 0.9;
                                                transform: scale(1);
                                        }
                                }

                                @keyframes creatures-appear {
                                        0% {
                                                opacity: 0;
                                                transform: translateY(20px) scale(0);
                                        }
                                        60% {
                                                opacity: 0;
                                        }
                                        80% {
                                                opacity: 0.8;
                                                transform: translateY(0) scale(1);
                                        }
                                        100% {
                                                opacity: 1;
                                                transform: translateY(-5px) scale(1);
                                        }
                                }

                                @keyframes spirits-float {
                                        0% {
                                                opacity: 0;
                                                transform: translateY(30px) translateX(0) scale(0);
                                        }
                                        70% {
                                                opacity: 0;
                                        }
                                        90% {
                                                opacity: 0.6;
                                                transform: translateY(0) translateX(10px) scale(1);
                                        }
                                        100% {
                                                opacity: 0.8;
                                                transform: translateY(-10px) translateX(20px) scale(1);
                                        }
                                }

                                @keyframes glows-emerge {
                                        0% {
                                                opacity: 0;
                                        }
                                        50% {
                                                opacity: 0;
                                        }
                                        80% {
                                                opacity: 0.3;
                                        }
                                        100% {
                                                opacity: 0.5;
                                        }
                                }

                                @keyframes text-appear {
                                        0% {
                                                opacity: 0;
                                        }
                                        80% {
                                                opacity: 0;
                                        }
                                        100% {
                                                opacity: 0.7;
                                        }
                                }

                                @keyframes text-box-appear {
                                        0% {
                                                opacity: 0;
                                                transform: translateY(30px);
                                        }
                                        15% {
                                                opacity: 1;
                                                transform: translateY(0);
                                        }
                                        85% {
                                                opacity: 1;
                                                transform: translateY(0);
                                        }
                                        100% {
                                                opacity: 0;
                                                transform: translateY(-20px);
                                        }
                                }

                                @keyframes box-float {
                                        0%,
                                        100% {
                                                transform: translateY(0) scale(1);
                                        }
                                        50% {
                                                transform: translateY(-8px) scale(1.02);
                                        }
                                }

                                @keyframes line-appear {
                                        0% {
                                                opacity: 0;
                                                transform: translateY(15px);
                                        }
                                        20% {
                                                opacity: 1;
                                                transform: translateY(0);
                                        }
                                        100% {
                                                opacity: 1;
                                                transform: translateY(0);
                                        }
                                }

                                @keyframes shimmer-flow {
                                        0% {
                                                transform: translateX(-100%) translateY(-100%)
                                                        rotate(45deg);
                                        }
                                        100% {
                                                transform: translateX(200%) translateY(100%)
                                                        rotate(45deg);
                                        }
                                }

                                @keyframes raindrop-fall {
                                        0% {
                                                transform: translateY(-100vh) rotate(15deg);
                                                opacity: 0.8;
                                        }
                                        10% {
                                                opacity: 1;
                                        }
                                        100% {
                                                transform: translateY(100vh) rotate(15deg);
                                                opacity: 0;
                                        }
                                }

                                @keyframes butterfly-float {
                                        0%,
                                        100% {
                                                transform: translateY(0) rotate(0deg);
                                        }
                                        25% {
                                                transform: translateY(-10px) rotate(2deg);
                                        }
                                        50% {
                                                transform: translateY(-5px) rotate(-1deg);
                                        }
                                        75% {
                                                transform: translateY(-15px) rotate(1deg);
                                        }
                                }

                                @keyframes koi-swim {
                                        0%,
                                        100% {
                                                transform: translateX(0) translateY(0) rotate(0deg);
                                        }
                                        33% {
                                                transform: translateX(15px) translateY(-8px)
                                                        rotate(5deg);
                                        }
                                        66% {
                                                transform: translateX(-10px) translateY(8px)
                                                        rotate(-3deg);
                                        }
                                }

                                @keyframes star-pulse {
                                        0%,
                                        100% {
                                                opacity: 0.8;
                                                transform: scale(1);
                                        }
                                        50% {
                                                opacity: 1;
                                                transform: scale(1.3);
                                        }
                                }

                                .animate-sky-transform {
                                        animation: sky-transform var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-rain-fade {
                                        animation: rain-fade var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-cloud-fade {
                                        animation: cloud-fade var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-mist-appear {
                                        animation: mist-appear var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-stars-twinkle {
                                        animation: stars-twinkle var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-creatures-appear {
                                        animation: creatures-appear var(--transition-duration)
                                                ease-out forwards;
                                }
                                .animate-spirits-float {
                                        animation: spirits-float var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-glows-emerge {
                                        animation: glows-emerge var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-text-appear {
                                        animation: text-appear var(--transition-duration) ease-out
                                                forwards;
                                }
                                .animate-text-box-appear {
                                        animation: text-box-appear var(--transition-duration)
                                                ease-out forwards;
                                }
                                .animate-box-float {
                                        animation: box-float 4s ease-in-out infinite;
                                }

                                .glass-text-box {
                                        position: relative;
                                        background: rgba(255, 255, 255, 0.08);
                                        backdrop-filter: blur(25px);
                                        border: 1px solid rgba(255, 255, 255, 0.15);
                                        border-radius: 24px;
                                        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.2);
                                        max-width: min(90vw, 600px);
                                        max-height: min(80vh, 700px);
                                        width: auto;
                                        overflow: hidden;
                                }

                                .text-container {
                                        max-height: min(60vh, 500px);
                                        overflow-y: auto;
                                        overflow-x: hidden;
                                        padding-right: 8px;
                                        scrollbar-width: thin;
                                        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
                                }

                                .text-container::-webkit-scrollbar {
                                        width: 6px;
                                }

                                .text-container::-webkit-scrollbar-track {
                                        background: transparent;
                                }

                                .text-container::-webkit-scrollbar-thumb {
                                        background: rgba(255, 255, 255, 0.3);
                                        border-radius: 3px;
                                }

                                .text-container::-webkit-scrollbar-thumb:hover {
                                        background: rgba(255, 255, 255, 0.5);
                                }

                                .glass-shimmer {
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        right: 0;
                                        bottom: 0;
                                        background: linear-gradient(
                                                45deg,
                                                transparent,
                                                rgba(255, 255, 255, 0.1),
                                                transparent
                                        );
                                        animation: shimmer-flow 3s ease-in-out infinite;
                                }

                                .text-line {
                                        font-size: clamp(0.9rem, 2.5vw, 1.1rem);
                                        line-height: 1.8;
                                        color: rgba(255, 255, 255, 0.9);
                                        margin: 0.5rem 0;
                                        font-weight: 300;
                                        letter-spacing: 0.5px;
                                        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                                        opacity: 0;
                                        animation: line-appear var(--transition-duration) ease-out
                                                forwards;
                                        word-wrap: break-word;
                                        overflow-wrap: break-word;
                                        hyphens: auto;
                                        text-align: center;
                                }

                                .text-line-last {
                                        font-size: clamp(1rem, 3vw, 1.2rem);
                                        color: rgba(255, 255, 255, 1);
                                        font-weight: 400;
                                        margin-top: 1rem;
                                        margin-bottom: 0.5rem;
                                }

                                .empty-line {
                                        height: 0.8rem;
                                        margin: 0.2rem 0;
                                }

                                .raindrop {
                                        position: absolute;
                                        width: 2px;
                                        height: 15px;
                                        background: linear-gradient(
                                                to bottom,
                                                transparent,
                                                rgba(173, 216, 230, 0.8),
                                                transparent
                                        );
                                        animation: raindrop-fall linear infinite;
                                }

                                .cloud {
                                        position: absolute;
                                        background: rgba(100, 100, 100, 0.8);
                                        border-radius: 100px;
                                        filter: blur(2px);
                                }

                                .cloud-1 {
                                        width: 200px;
                                        height: 60px;
                                        top: 10%;
                                        left: 20%;
                                        animation-delay: 0s;
                                }

                                .cloud-2 {
                                        width: 300px;
                                        height: 80px;
                                        top: 20%;
                                        right: 30%;
                                        animation-delay: 1s;
                                }

                                .cloud-3 {
                                        width: 150px;
                                        height: 50px;
                                        top: 5%;
                                        left: 60%;
                                        animation-delay: 2s;
                                }

                                .mist {
                                        position: absolute;
                                        background: radial-gradient(
                                                ellipse,
                                                rgba(200, 200, 255, 0.3),
                                                transparent
                                        );
                                        border-radius: 50%;
                                        filter: blur(20px);
                                }

                                .mist-1 {
                                        width: 400px;
                                        height: 200px;
                                        bottom: 0;
                                        left: -100px;
                                }

                                .mist-2 {
                                        width: 600px;
                                        height: 300px;
                                        bottom: -50px;
                                        right: -150px;
                                }

                                .mist-3 {
                                        width: 300px;
                                        height: 150px;
                                        bottom: 20px;
                                        left: 50%;
                                        transform: translateX(-50%);
                                }

                                .star {
                                        position: absolute;
                                        width: 2px;
                                        height: 2px;
                                        background: rgba(255, 255, 255, 0.9);
                                        border-radius: 50%;
                                        box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
                                        animation: star-pulse 3s ease-in-out infinite;
                                }

                                .butterfly {
                                        position: absolute;
                                        width: 12px;
                                        height: 8px;
                                        background: radial-gradient(
                                                ellipse,
                                                rgba(255, 182, 193, 0.8),
                                                rgba(221, 160, 221, 0.6)
                                        );
                                        border-radius: 50%;
                                        box-shadow: 0 0 15px rgba(255, 182, 193, 0.6);
                                        animation: butterfly-float 4s ease-in-out infinite;
                                }

                                .butterfly::before {
                                        content: "";
                                        position: absolute;
                                        width: 8px;
                                        height: 6px;
                                        background: radial-gradient(
                                                ellipse,
                                                rgba(186, 85, 211, 0.7),
                                                rgba(147, 112, 219, 0.5)
                                        );
                                        border-radius: 50%;
                                        top: -2px;
                                        left: 8px;
                                        box-shadow: 0 0 10px rgba(186, 85, 211, 0.5);
                                }

                                .koi-spirit {
                                        position: absolute;
                                        width: 20px;
                                        height: 8px;
                                        background: linear-gradient(
                                                90deg,
                                                rgba(255, 215, 0, 0.7),
                                                rgba(255, 165, 0, 0.5)
                                        );
                                        border-radius: 15px 5px 15px 5px;
                                        box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
                                        animation: koi-swim 6s ease-in-out infinite;
                                }

                                .koi-spirit::after {
                                        content: "";
                                        position: absolute;
                                        width: 6px;
                                        height: 6px;
                                        background: rgba(255, 140, 0, 0.6);
                                        border-radius: 0 100% 0 100%;
                                        right: -3px;
                                        top: 1px;
                                        transform: rotate(45deg);
                                }

                                .glow {
                                        position: absolute;
                                        border-radius: 50%;
                                        filter: blur(30px);
                                }

                                .glow-1 {
                                        width: 200px;
                                        height: 200px;
                                        background: radial-gradient(
                                                circle,
                                                rgba(186, 85, 211, 0.3),
                                                transparent
                                        );
                                        top: 20%;
                                        left: 10%;
                                }

                                .glow-2 {
                                        width: 300px;
                                        height: 300px;
                                        background: radial-gradient(
                                                circle,
                                                rgba(147, 112, 219, 0.2),
                                                transparent
                                        );
                                        top: 40%;
                                        right: 20%;
                                }

                                .glow-3 {
                                        width: 150px;
                                        height: 150px;
                                        background: radial-gradient(
                                                circle,
                                                rgba(221, 160, 221, 0.4),
                                                transparent
                                        );
                                        bottom: 30%;
                                        left: 60%;
                                }
                        `}</style>
                </div>
        );
}

export default MainComponent;

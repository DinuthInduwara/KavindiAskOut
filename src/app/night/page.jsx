"use client";
import React from "react";
import RainText from "../../components/TypewriterText";
import { useRouter } from "next/navigation";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import { sendMessageTelegram } from "../../utilities/telegram-helpers";
import { DynaPuff } from 'next/font/google'
const dynaPuff = DynaPuff({ subsets: ["latin"], weight: ["400"], });


const NightEffects = () => (
        <div
                style={{
                        position: "absolute",
                        minHeight: "100vh",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 2,
                }}
        >
                {/* Glowing moon */}
                <div
                        style={{
                                position: "absolute",
                                top: "10%",
                                right: "15%",
                                width: "100px",
                                height: "100px",
                                background:
                                        "radial-gradient(circle, #F5F5DC 0%, #E6E6FA 50%, #D8BFD8 100%)",
                                borderRadius: "50%",
                                boxShadow:
                                        "0 0 80px rgba(245, 245, 220, 0.8), 0 0 160px rgba(230, 230, 250, 0.4)",
                                animation: "moonGlow 6s ease-in-out infinite alternate",
                        }}
                />

                {/* Moon craters */}
                <div
                        style={{
                                position: "absolute",
                                top: "12%",
                                right: "16.5%",
                                width: "12px",
                                height: "12px",
                                background: "rgba(200, 200, 200, 0.3)",
                                borderRadius: "50%",
                        }}
                />
                <div
                        style={{
                                position: "absolute",
                                top: "14%",
                                right: "17.8%",
                                width: "8px",
                                height: "8px",
                                background: "rgba(200, 200, 200, 0.2)",
                                borderRadius: "50%",
                        }}
                />

                {/* Twinkling stars */}
                {[...Array.from({ length: 20 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        top: `${Math.random() * 60}%`,
                                        left: `${Math.random() * 100}%`,
                                        fontSize: "16px",
                                        color: "#FFD700",
                                        animation: `starTwinkle ${2 + Math.random() * 3
                                                }s ease-in-out infinite ${Math.random() * 2}s`,
                                }}
                        >
                                ✨
                        </div>
                ))}

                {/* Constellation stars */}
                {[...Array.from({ length: 8 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        top: `${20 + Math.random() * 30}%`,
                                        left: `${10 + Math.random() * 80}%`,
                                        width: "4px",
                                        height: "4px",
                                        background: "#E6E6FA",
                                        borderRadius: "50%",
                                        boxShadow: "0 0 8px rgba(230, 230, 250, 0.8)",
                                        animation: `gentleGlow ${3 + Math.random() * 2
                                                }s ease-in-out infinite ${Math.random() * 1}s`,
                                }}
                        />
                ))}

                {/* Floating fireflies */}
                {[...Array.from({ length: 12 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        left: `${Math.random() * 90}%`,
                                        top: `${30 + Math.random() * 50}%`,
                                        width: "6px",
                                        height: "6px",
                                        background: "radial-gradient(circle, #ADFF2F, #32CD32)",
                                        borderRadius: "50%",
                                        boxShadow: "0 0 12px rgba(173, 255, 47, 0.8)",
                                        animation: `fireflyFloat ${4 + Math.random() * 3
                                                }s ease-in-out infinite ${Math.random() * 2}s`,
                                }}
                        />
                ))}

                {/* Animated owls */}
                {[...Array.from({ length: 3 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        left: `${20 + i * 30}%`,
                                        top: `${25 + Math.random() * 15}%`,
                                        fontSize: "32px",
                                        animation: `owlHoot ${5 + Math.random() * 2
                                                }s ease-in-out infinite ${i * 1.5}s`,
                                }}
                        >
                                🦉
                        </div>
                ))}

                {/* Night clouds */}
                {[...Array.from({ length: 4 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        top: `${5 + Math.random() * 25}%`,
                                        left: "-15%",
                                        fontSize: `${25 + Math.random() * 15}px`,
                                        opacity: 0.4,
                                        filter: "brightness(0.7) contrast(1.2)",
                                        animation: `nightCloudDrift ${15 + Math.random() * 8
                                                }s linear infinite ${i * 2}s`,
                                }}
                        >
                                ☁️
                        </div>
                ))}

                {/* Sleeping animals */}
                {[...Array.from({ length: 4 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        left: `${Math.random() * 80}%`,
                                        bottom: `${15 + Math.random() * 20}%`,
                                        fontSize: "24px",
                                        animation: `sleepyBreathe ${3 + Math.random() * 1
                                                }s ease-in-out infinite ${Math.random() * 1}s`,
                                }}
                        >
                                {["🦔", "🐰", "🦝", "🐿️"][i]}
                        </div>
                ))}

                {/* Night flowers */}
                {[...Array.from({ length: 6 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        left: `${Math.random() * 100}%`,
                                        bottom: `${5 + Math.random() * 15}%`,
                                        fontSize: "20px",
                                        animation: `nightBloom ${4 + Math.random() * 2
                                                }s ease-in-out infinite ${Math.random() * 2}s`,
                                }}
                        >
                                {
                                        ["🌙", "🌸", "🌺", "💜", "🌷", "🌼"][
                                        Math.floor(Math.random() * 6)
                                        ]
                                }
                        </div>
                ))}

                {/* Gentle mist */}
                {[...Array.from({ length: 5 })].map((_, i) => (
                        <div
                                key={i}
                                style={{
                                        position: "absolute",
                                        bottom: "0%",
                                        left: `${Math.random() * 100}%`,
                                        width: "80px",
                                        height: "30px",
                                        background: "rgba(230, 230, 250, 0.1)",
                                        borderRadius: "50px",
                                        animation: `mistFloat ${6 + Math.random() * 3
                                                }s ease-in-out infinite ${Math.random() * 2}s`,
                                }}
                        />
                ))}

                {/* Shooting star */}
                <div
                        style={{
                                position: "absolute",
                                top: "15%",
                                left: "-5%",
                                fontSize: "20px",
                                animation: "shootingStar 8s linear infinite",
                        }}
                >
                        💫
                </div>
        </div>
);

function MainComponent() {
        const { switchTrack } = useMusicPlayer();

        const kavindiSpeech =
                `🌧️✨\n
Kavindi…\n      
do you know\n
how much I hate rain?\n
🌫️💭\n
It falls in this world too,\n
just like in yours.\n
☁️😔\n
When your heart is troubled,\n
the skies forget how to smile.\n
💧🥀\n
When you grieve—\n
the clouds tear themselves open\n
so easily,\n
so cruelly.\n
😞🌙\n
Can you understand\n
this unbearable feeling…\n
of cold drops\n
striking your skin\n
when you’re completely,\n
terribly\n
alone\n
in this solitary world?\n
🕊️🤍\n
💪🔥\n
Just to stop that rain for you,\n
I would give every ounce of my strength,\n
every fragment of my power.\n
☀️🌈\n
If you trust me—\n
even a little—\n
I swear\n
not a single drop of rain\n
will ever touch you again.\n
❤️‍🔥💫\n
Kavindi…\n
trust me.\n
You are not fighting alone.\n
I’m right here,\n
holding the sky for you.\n`
        const router = useRouter();
        const [hiddenButton, setHiddenButton] = React.useState(false);

        React.useEffect(() => {
                router.prefetch("/night/love-speech");
        }, [router]);



        return (
                <>
                        <div
                                style={{
                                        minHeight: "100vh",
                                        background:
                                                "linear-gradient(135deg, #191970 0%, #483D8B 25%, #6A5ACD 50%, #9370DB 75%, #8B7EC8 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                        overflow: "hidden",
                                        transition: "background 3s ease",
                                }}
                        >
                                <NightEffects />
                                <div
                                        style={{
                                                textAlign: "center",
                                                background: "rgba(25, 25, 112, 0.85)",
                                                borderRadius: "25px",
                                                padding: "40px",
                                                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                                                border: "2px solid rgba(230, 230, 250, 0.3)",
                                                zIndex: 10,
                                                maxWidth: "800px",
                                                minWidth: "60%",
                                                padding: "28px 36px",
                                                animation:
                                                        "nightGlow 4s ease-in-out infinite alternate",
                                                backdropFilter: "blur(10px)",
                                        }}
                                >
                                        <div
                                                style={{
                                                        fontSize: "70px",
                                                        marginBottom: "20px",
                                                        animation: "moonBounce 4s ease-in-out infinite",
                                                }}
                                        >
                                                🌙🦉✨
                                        </div>
                                        <h1
                                                style={{
                                                        fontSize: "32px",
                                                        background:
                                                                "linear-gradient(45deg, #E6E6FA, #DDA0DD, #DA70D6)",
                                                        backgroundClip: "text",
                                                        WebkitBackgroundClip: "text",
                                                        color: "transparent",
                                                        marginBottom: "20px",
                                                        fontWeight: "bold",
                                                }}
                                        >
                                                Is the rain over? 🌙
                                        </h1>
                                        <p
                                                style={{
                                                        fontSize: "16px",
                                                        color: "#E6E6FA",
                                                        marginBottom: "20px",
                                                }}
                                        >
                                                Yes, I think so. 🌟💤
                                        </p>
                                        <div
                                                style={{
                                                        fontSize: "18px",
                                                        color: "#DDA0DD",
                                                        marginBottom: "20px",
                                                        fontStyle: "italic",
                                                }}
                                        >
                                                <div
                                                        style={{
                                                                textAlignLast: "center",
                                                                lineHeight: 1,
                                                                fontSize: "20px",
                                                                fontFamily: dynaPuff.style.fontFamily,
                                                                whiteSpace: "pre-wrap",
                                                        }}
                                                >
                                                        <RainText
                                                                fullText={kavindiSpeech}
                                                                setClickble={setHiddenButton}
                                                        />
                                                </div>
                                        </div>
                                        <div
                                                style={{
                                                        fontSize: "22px",
                                                        color: "#E6E6FA",
                                                        marginTop: "20px",
                                                }}
                                        >
                                                🌙 ✨ 🦉 💜 🌟 🦔
                                        </div>

                                        {hiddenButton && (
                                                <button
                                                        onClick={() => {
                                                                switchTrack("/music-1.mp3");
                                                                sendMessageTelegram(
                                                                        "Sweet Dreams event triggered! 🌙✨"
                                                                );
                                                                router.push("/night/love-speech");
                                                        }}
                                                        style={{
                                                                marginTop: "30px",
                                                                padding: "15px 30px",
                                                                fontSize: "18px",
                                                                fontWeight: "bold",
                                                                color: "#fff",
                                                                background:
                                                                        "linear-gradient(45deg, #9370DB, #8A2BE2, #6A5ACD)",
                                                                border: "none",
                                                                borderRadius: "50px",
                                                                cursor: "pointer",
                                                                boxShadow:
                                                                        "0 8px 20px rgba(147, 112, 219, 0.3)",
                                                                transition: "all 0.3s ease",
                                                                animation:
                                                                        "nightButtonGlow 3s ease-in-out infinite alternate",
                                                        }}
                                                        onMouseEnter={(e) => {
                                                                e.target.style.transform =
                                                                        "translateY(-3px) scale(1.05)";
                                                                e.target.style.boxShadow =
                                                                        "0 12px 25px rgba(147, 112, 219, 0.5)";
                                                        }}
                                                        onMouseLeave={(e) => {
                                                                e.target.style.transform =
                                                                        "translateY(0) scale(1)";
                                                                e.target.style.boxShadow =
                                                                        "0 8px 20px rgba(147, 112, 219, 0.3)";
                                                        }}
                                                >
                                                        Sweet Dreams 🌟
                                                </button>
                                        )}
                                </div>
                        </div>
                </>
        );
}

export default MainComponent;

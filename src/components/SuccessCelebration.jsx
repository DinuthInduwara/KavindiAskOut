"use client";
import React from "react";

const SuccessCelebration = ({ isActive }) => {
    if (!isActive) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1000,
            }}
        >
            {[...Array.from({ length: 15 })].map((_, i) => (
                <div
                    key={`bloom-${i}`}
                    style={{
                        position: "absolute",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: `${30 + Math.random() * 40}px`,
                        animation: `bloomEffectCompact 3s ease-out ${i * 0.2}s both`,
                        zIndex: 1001,
                    }}
                >
                    {[("🌸"), ("🌺"), ("🌻"), ("🌷"), ("🌹")][Math.floor(Math.random() * 5)]}
                </div>
            ))}

            {[...Array.from({ length: 30 })].map((_, i) => (
                <div
                    key={`sparkle-${i}`}
                    style={{
                        position: "absolute",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: "20px",
                        animation: `goldenSparkle 4s ease-out ${i * 0.1}s both`,
                        zIndex: 1002,
                    }}
                >
                    ✨
                </div>
            ))}

            {[...Array.from({ length: 12 })].map((_, i) => (
                <div
                    key={`heart-${i}`}
                    style={{
                        position: "absolute",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: "24px",
                        animation: `heartFloatCompact 5s ease-in-out ${i * 0.3}s both`,
                        zIndex: 1003,
                    }}
                >
                    💖
                </div>
            ))}
        </div>
    );
};

export default SuccessCelebration;

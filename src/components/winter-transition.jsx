"use client";
import React from "react";
import { AnimatedOverlay } from "@/components/effects";
import { WINTER_EFFECT } from "@/config/effects";
import { WINTER_ALL } from "@/constants/emojis";

function MainComponent() {
  const handleEnterApp = () => {
    setTimeout(() => {
      window.location.href = "/main";
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 25%, #90caf9 50%, #64b5f6 75%, #42a5f5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        animation: "winterBreeze 10s ease-in-out infinite",
      }}
    >
      <AnimatedOverlay config={WINTER_EFFECT} />

      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
            animation: `winterCelebration ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            zIndex: 1,
          }}
        >
          {WINTER_ALL[Math.floor(Math.random() * WINTER_ALL.length)]}
        </div>
      ))}

      <div
        style={{
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "25px",
          padding: "40px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          zIndex: 10,
          backdropFilter: "blur(10px)",
          transform: "scale(1)",
          transition: "transform 0.3s ease",
          maxWidth: "60%",
          width: "90%",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            animation: "magicalBounce 2.5s ease-in-out infinite",
          }}
        >
          ❄️✨🧚‍♀️
        </div>
        <h1
          style={{
            fontSize: "28px",
            background:
              "linear-gradient(45deg, #1e88e5, #42a5f5, #64b5f6, #90caf9)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "15px",
            fontWeight: "bold",
            animation: "textShimmer 4s ease-in-out infinite",
          }}
        >
          ✨ Stepping into the Winter Wonderland... ❄️ Please hold tight as the
          snowflakes settle.
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(21, 101, 192, 0.8)",
            marginBottom: "20px",
            animation: "fadeInOut 5s ease-in-out infinite",
          }}
        >
          Where dreams freeze into beautiful memories... 🌨️
        </p>

        <div
          style={{
            fontSize: "20px",
            animation: "winterDance 5s ease-in-out infinite",
            marginBottom: "25px",
          }}
        >
          ❄️ ✨ 🧚‍♀️ 💎 ❄️
        </div>
      </div>
    </div>
  );
}

export default MainComponent;

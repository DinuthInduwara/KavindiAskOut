"use client";
import React from "react";
import { AnimatedOverlay } from "@/components/effects";
import { GARDEN_EFFECT } from "@/config/effects";

export default function GardenTransition() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #87CEEB 0%, #98D8E8 25%, #B0E0E6 50%, #E0F6FF 75%, #F0F8FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background 2s ease",
      }}
    >
      <AnimatedOverlay config={GARDEN_EFFECT} />

      <div
        style={{
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.70)",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          border: "3px solid rgba(135, 206, 235, 0.5)",
          zIndex: 10,
          animation: "transitionGlow 2s ease-in-out infinite alternate",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            marginBottom: "20px",
            animation: "bounce 1s ease-in-out infinite",
          }}
        >
          ☁️🦋☁️
        </div>
        <h1
          style={{
            fontSize: "36px",
            background: "linear-gradient(45deg, #87CEEB, #4682B4, #5F9EA0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          The garden is transforming... 🌸
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            marginBottom: "20px",
          }}
        >
          Clouds are gathering, butterflies are dancing... ☁️🦋
        </p>
        <div style={{ fontSize: "24px" }}>🌸 ☁️ 🦋 🌺 ☁️</div>
      </div>
    </div>
  );
}

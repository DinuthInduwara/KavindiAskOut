"use client";
import React from "react";



function MainComponent({ text, fontSize, color, marginBottom, fontFamily }) {
  return (
    <h1
      style={{
        fontSize: fontSize || "32px",
        color: color || "#e91e63",
        marginBottom: marginBottom || "20px",
        fontFamily: fontFamily || "serif",
      }}
    >
      {text || "Yay! I knew it! 💖"}
    </h1>
  );
}

export default function StoryComponent() {
  return (
    <div>
      <MainComponent />
      <MainComponent text="Custom Text Example" fontSize="28px" color="#333" />
    </div>
  );
}
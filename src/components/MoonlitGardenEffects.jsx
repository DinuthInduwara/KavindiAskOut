"use client";
import React from "react";

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
        <div
            style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #fff9c4 0%, #f7dc6f 30%, #f4d03f 100%)",
                boxShadow: "0 0 30px rgba(255, 249, 196, 0.4), 0 0 60px rgba(255, 249, 196, 0.2)",
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

        {[...Array.from({ length: 10 })].map((_, i) => (
            <div
                key={`moonbeam-${i}`}
                style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    width: "2px",
                    height: "200px",
                    background: "linear-gradient(180deg, rgba(255, 249, 196, 0.4), transparent)",
                    transform: `rotate(${i * 36}deg)`,
                    transformOrigin: "50% 0%",
                }}
            />
        ))}

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

export default MoonlitGardenEffects;

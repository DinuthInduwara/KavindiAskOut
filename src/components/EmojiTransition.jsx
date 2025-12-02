"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EMOJIS = ["☁️", "🌿", "🍀", "🍁", "🍂", "🍃", "🌸", "🦋"];

export default function EmojiTransition({ onCovered }) {
    const [mounted, setMounted] = useState(false);
    const [emojis, setEmojis] = useState([]);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setMounted(true);
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // Generate a dense cloud of emojis
        const count = 150;
        const newEmojis = Array.from({ length: count }).map((_, i) => ({
            id: i,
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            // Random position within a wide band that will slide across
            // We want them to form a "curtain"
            top: Math.random() * 100,
            left: Math.random() * 100,
            scale: Math.random() * 2 + 1, // Larger emojis
            rotation: Math.random() * 360,
            floatDuration: Math.random() * 2 + 2,
        }));
        setEmojis(newEmojis);

        console.log("EmojiTransition mounted with", count, "emojis");
    }, []);

    if (!mounted) return null;

    // Use a portal to ensure it sits on top of everything, escaping any overflow:hidden or transforms
    const { createPortal } = require("react-dom");

    return createPortal(
        <motion.div
            className="fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center"
            initial={{ x: "100%" }}
            animate={{ x: "-150%" }} // Move all the way across and off
            transition={{
                duration: 5,
                ease: [0.22, 1, 0.36, 1], // Custom ease for "movie opening" feel
            }}
            onAnimationStart={() => {
                console.log("Animation started");
                // Schedule the navigation trigger
                // Wait a bit longer to ensure the curtain covers the screen
                setTimeout(() => {
                    console.log("Triggering navigation");
                    onCovered && onCovered();
                }, 2000);
            }}
        >
            {/* The Curtain Container */}
            <div className="w-[150vw] h-[120vh] relative bg-pink-100/90 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,182,193,0.8)] border-l-4 border-white/50 transform -skew-x-12 flex flex-wrap content-center justify-center overflow-hidden">
                {/* Add a solid overlay to ensure visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 via-white/60 to-pink-200/80 mix-blend-overlay"></div>

                {emojis.map((item) => (
                    <motion.div
                        key={item.id}
                        className="absolute select-none drop-shadow-md"
                        style={{
                            top: `${item.top}%`,
                            left: `${item.left}%`,
                            fontSize: `${item.scale}rem`,
                            rotate: item.rotation,
                            zIndex: 10,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [item.rotation, item.rotation + 15, item.rotation],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: item.floatDuration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {item.emoji}
                    </motion.div>
                ))}
            </div>
        </motion.div>,
        document.body
    );
}

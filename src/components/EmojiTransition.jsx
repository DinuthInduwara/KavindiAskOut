"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EMOJIS = ["☁️", "🌿", "🍀", "🍁", "🍂", "🍃", "🌸", "🦋"];

// type = 'out' (තිරය වසා දමයි - පිටවීමට)
// type = 'in' (තිරය ඉවත් කරයි - ඇතුළු වීමට)
export default function EmojiTransition({ type = "out", onComplete }) {
    const [mounted, setMounted] = useState(false);
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        setMounted(true);
        const count = 50;
        const newEmojis = Array.from({ length: count }).map((_, i) => ({
            id: i,
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            top: Math.random() * 100,
            left: Math.random() * 100,
            scale: Math.random() * 2 + 1.5,
            rotation: Math.random() * 360,
        }));
        setEmojis(newEmojis);
    }, []);

    if (!mounted) return null;

    const { createPortal } = require("react-dom");

    // Animation Settings based on type
    const variants = {
        out: {
            initial: { x: "100%" },
            animate: { x: "0%" },
            transition: { duration: 4, ease: [0.22, 1, 0.36, 1],delay: 1 }
        },
        in: {
            initial: { x: "0%" },
            animate: { x: "-100%" },
            transition: { duration: 4, ease: [0.22, 1, 0.36, 1], delay: 1 }
        }
    };

    return createPortal(
        <motion.div
            className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center"
            initial={variants[type].initial}
            animate={variants[type].animate}
            transition={variants[type].transition}
            onAnimationComplete={() => {
                if (onComplete) onComplete();
            }}
        >
            <div className="w-[120vw] h-[120vh] relative bg-gradient-to-r from-pink-100 via-white to-pink-100 shadow-2xl flex flex-wrap content-center justify-center overflow-hidden border-l-8 border-white/50">
                
                {/* Emojis Layer */}
                {emojis.map((item) => (
                    <motion.div
                        key={item.id}
                        className="absolute select-none opacity-80"
                        style={{
                            top: `${item.top}%`,
                            left: `${item.left}%`,
                            fontSize: `${item.scale}rem`,
                            rotate: item.rotation,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [item.rotation, item.rotation + 10, item.rotation],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
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
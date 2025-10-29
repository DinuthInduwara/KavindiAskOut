"use client";
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Cinematic lake/pond background
 * - Fullscreen, layered scene
 * - Tailwind CSS + Framer Motion
 * - Subtle parallax, shimmer, fog, and click ripples
 *
 * Layers:
 *  - SkyGradient (gradient + glow + mist + distant silhouettes)
 *  - WaterReflection (mirrored gradient + shimmer + shoreline + ripples)
 *  - LightingEffect (cursor-reactive soft light)
 */

const HORIZON_RATIO = 0.52; // ~52% from top (sky/water divide)
const RIPPLE_DURATION = 1600; // ms

// Color palette (serious, cinematic)
const palette = {
    navyTop: "#0b1021",     // deep navy
    blueDeep: "#131b2f",    // deep blue
    blueMisty: "#273a54",   // misty gray-blue
    duskGold: "#c48a5d",    // gold-orange highlight
    duskAmber: "#b97a54",
    shadow: "#0b0e18",
};

function useViewportSize() {
    const [size, setSize] = useState({ w: 1280, h: 800 });
    useEffect(() => {
        const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return size;
}

function useCursorSpring() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Soft spring for parallax
    const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.6 });
    const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.6 });

    return { x, y, sx, sy };
}

export default function Page() {
    const { w, h } = useViewportSize();
    const { x, y, sx, sy } = useCursorSpring();
    const containerRef = useRef(null);
    const [ripples, setRipples] = useState([]);

    // Horizon Y position in pixels
    const horizonY = useMemo(() => h * HORIZON_RATIO, [h]);

    // Normalized cursor (-1..1)
    const nx = useTransform(sx, (v) => (w ? (v / w) * 2 - 1 : 0));
    const ny = useTransform(sy, (v) => (h ? (v / h) * 2 - 1 : 0));
    const ny0to1 = useTransform(sy, (v) => (h ? v / h : 0)); // 0 at top, 1 at bottom

    // Parallax transforms
    // Sky moves subtly opposite to cursor, slower for depth
    const skyX = useTransform(nx, (v) => v * -20);
    const skyY = useTransform(ny, (v) => v * -12);

    // Water moves slightly with the cursor (a touch faster horizontally)
    const waterX = useTransform(nx, (v) => v * 18);
    const waterY = useTransform(ny, (v) => v * 9);

    // Light intensity increases near water
    const lightStrength = useTransform(ny0to1, (t) => 0.55 + Math.pow(Math.min(Math.max(t, 0, 1)), 1.2) * 0.35);

    // Subtle color balance shift with cursor (simulate temperature changes)
    const glowShift = useTransform(nx, (v) => 0.5 + (v * 0.5 + 0.5) * 0.2); // 0.5..0.7

    const handleMouseMove = useCallback(
        (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        },
        [x, y]
    );

    const handleMouseLeave = useCallback(() => {
        x.set(w / 2);
        y.set(h / 2);
    }, [x, y, w, h]);

    const handleClick = useCallback(
        (e) => {
            // Ripples only in water section
            if (e.clientY < horizonY) return;
            const id = `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
            setRipples((prev) => [
                ...prev,
                {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                },
            ]);
            // Auto-remove after animation
            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== id));
            }, RIPPLE_DURATION + 50);
        },
        [horizonY]
    );

    useEffect(() => {
        // Initialize to center
        x.set(w / 2);
        y.set(h / 2);
    }, [w, h, x, y]);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Sky */}
            <SkyGradient skyX={skyX} skyY={skyY} glowShift={glowShift} horizonY={horizonY} />

            {/* Water + shoreline + shimmer + ripples */}
            <WaterReflection
                waterX={waterX}
                waterY={waterY}
                horizonY={horizonY}
                ripples={ripples}
            />

            {/* Cursor-reactive soft light */}
            <LightingEffect x={sx} y={sy} strength={lightStrength} />

            {/* Optional: a very faint foreground mist for depth */}
            <ForegroundMist />
        </div>
    );
}

/* -------------------------------------------
   Sky: gradient, glow near horizon, mist, silhouettes
-------------------------------------------- */
function SkyGradient({ skyX, skyY, glowShift, horizonY }) {
    // Additional slow color-wash aurora blobs
    const cloudVariants = {
        animate: {
            x: ["-8%", "6%", "-4%", "10%", "-8%"],
            y: ["-4%", "2%", "5%", "-2%", "-4%"],
            transition: { duration: 28, repeat: Infinity, ease: "easeInOut" },
        },
    };

    return (
        <motion.div
            className="absolute inset-0 z-0"
            style={{ x: skyX, y: skyY, willChange: "transform" }}
        >
            {/* Base vertical gradient sky */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        `linear-gradient(180deg, ${palette.navyTop} 0%, ${palette.blueDeep} 35%, ${palette.blueMisty} 65%, ${palette.duskGold} 100%)`,
                }}
            />

            {/* Horizon glow (radial) */}
            <motion.div
                className="absolute -translate-x-1/2 left-1/2"
                style={{
                    top: horizonY - 140,
                    width: "120vw",
                    height: 280,
                    background: `radial-gradient(60% 100% at 50% 50%, rgba(255,204,165,0.18) 0%, rgba(255,204,165,0.12) 30%, rgba(255,204,165,0.06) 55%, transparent 85%)`,
                    opacity: glowShift, // subtle change with cursor x
                    filter: "blur(10px)",
                    pointerEvents: "none",
                }}
            />

            {/* Distant silhouette (mountain/tree line) */}
            <div
                className="absolute left-0 right-0"
                style={{
                    top: horizonY - 28,
                    height: 120,
                    opacity: 0.18,
                    filter: "blur(1px)",
                }}
            >
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 200">
                    <path
                        d="M0,160 C60,145 90,140 130,150 C200,170 230,150 280,160 C340,172 360,148 410,156 C480,168 520,150 560,158 C620,170 640,146 690,154 C760,166 800,150 840,156 C890,164 930,150 1000,160 L1000,200 L0,200 Z"
                        fill={palette.shadow}
                    />
                </svg>
            </div>

            {/* Slow drifting aurora-like color washes */}
            <motion.div
                variants={cloudVariants}
                animate="animate"
                className="absolute pointer-events-none -inset-1"
                style={{
                    background:
                        "radial-gradient(40% 35% at 30% 25%, rgba(150,190,255,0.05) 0%, rgba(120,150,200,0.03) 50%, transparent 80%)",
                    mixBlendMode: "screen",
                }}
            />
            <motion.div
                variants={cloudVariants}
                animate="animate"
                className="absolute pointer-events-none -inset-1"
                style={{
                    background:
                        "radial-gradient(42% 32% at 70% 18%, rgba(255,200,150,0.04) 0%, rgba(255,200,150,0.02) 45%, transparent 75%)",
                    mixBlendMode: "screen",
                }}
            />

            {/* High-altitude faint fog */}
            <FogLayer
                top={0}
                height="44vh"
                opacity={0.06}
                blurPx={2}
                speed={60}
                direction={1}
            />
        </motion.div>
    );
}

/* -------------------------------------------
   Water: mirrored gradient, shimmer, shoreline, ripples
-------------------------------------------- */
function WaterReflection({ waterX, waterY, horizonY, ripples }) {
    // Shimmer animation keyframes
    const shimmerVariants = {
        animate: {
            backgroundPositionX: ["0%", "100%"],
            transition: { duration: 24, repeat: Infinity, ease: "linear" },
        },
    };

    // Gentle vertical drift for the water plane (wave breath)
    const planeVariants = {
        animate: {
            y: [0, -2, 0, 1, 0],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        },
    };

    return (
        <motion.div
            className="absolute left-0 right-0 z-10"
            style={{
                top: horizonY,
                height: `calc(100vh - ${Math.round(horizonY)}px)`,
                willChange: "transform",
            }}
        >
            {/* Thin, darkened shoreline */}
            <div
                className="absolute left-0 right-0 -top-px"
                style={{
                    height: 2,
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.0))",
                    filter: "blur(0.4px)",
                    zIndex: 30,
                }}
            />

            {/* Water plane */}
            <motion.div
                className="absolute inset-0"
                variants={planeVariants}
                animate="animate"
                style={{ x: waterX, y: waterY }}
            >
                {/* Mirrored gradient of the sky */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(180deg, ${palette.duskAmber} 0%, ${palette.blueMisty} 40%, ${palette.blueDeep} 80%, ${palette.navyTop} 100%)`,
                        opacity: 0.9,
                    }}
                />

                {/* Subtle horizon reflection glow */}
                <div
                    className="absolute inset-x-0"
                    style={{
                        top: 0,
                        height: 160,
                        background:
                            "radial-gradient(65% 120% at 50% 0%, rgba(255,210,170,0.18) 0%, rgba(255,210,170,0.09) 35%, transparent 80%)",
                        mixBlendMode: "screen",
                        pointerEvents: "none",
                    }}
                />

                {/* Fine shimmer overlay (soft) */}
                <motion.div
                    variants={shimmerVariants}
                    animate="animate"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.0) 6px, rgba(255,255,255,0.0) 10px)",
                        opacity: 0.14,
                        mixBlendMode: "soft-light",
                        filter: "blur(0.3px)",
                        backgroundSize: "200% 100%",
                    }}
                />

                {/* Gentle wave drift bands */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.02) 20%, rgba(255,255,255,0.01) 60%, rgba(0,0,0,0.08) 100%)",
                        mixBlendMode: "overlay",
                    }}
                    animate={{ skewX: [0.0, 0.3, 0.0, -0.2, 0.0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Click ripples */}
                <div className="absolute inset-0">
                    {ripples.map((r) => (
                        <Ripple key={r.id} x={r.x} y={r.y - horizonY} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

/* -------------------------------------------
   Lighting: cursor-reactive soft radial gradient
-------------------------------------------- */
function LightingEffect({ x, y, strength }) {
    return (
        <motion.div
            className="absolute z-30 pointer-events-none"
            style={{
                left: 0,
                top: 0,
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
                width: "56vmin",
                height: "56vmin",
                borderRadius: "9999px",
                background:
                    "radial-gradient(circle at center, rgba(255,231,195,0.28) 0%, rgba(255,230,190,0.17) 22%, rgba(255,245,225,0.08) 44%, rgba(255,255,255,0.0) 70%)",
                mixBlendMode: "soft-light",
                opacity: strength,
                filter: "blur(1px)",
                willChange: "transform, opacity",
            }}
        />
    );
}

/* -------------------------------------------
   Fog layer (reusable)
-------------------------------------------- */
function FogLayer({ top = 0, height = "30vh", opacity = 0.05, blurPx = 2, speed = 45, direction = 1 }) {
    const variants = {
        animate: {
            x: direction > 0 ? ["-6%", "4%", "-4%"] : ["6%", "-4%", "4%"],
            transition: { duration: speed, repeat: Infinity, ease: "easeInOut" },
        },
    };
    return (
        <motion.div
            className="absolute inset-x-0 pointer-events-none"
            style={{
                top,
                height,
                background:
                    "radial-gradient(60% 120% at 50% 20%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.04) 45%, transparent 80%)",
                opacity,
                filter: `blur(${blurPx}px)`,
            }}
            variants={variants}
            animate="animate"
        />
    );
}

/* -------------------------------------------
   Foreground mist for depth
-------------------------------------------- */
function ForegroundMist() {
    return (
        <>
            <FogLayer top="64vh" height="24vh" opacity={0.045} blurPx={2} speed={55} direction={-1} />
            <FogLayer top="78vh" height="22vh" opacity={0.035} blurPx={2} speed={65} direction={1} />
        </>
    );
}

/* -------------------------------------------
   Ripple element
-------------------------------------------- */
function Ripple({ x, y }) {
    // Center the ripple on (x, y) within water container
    const size = 12; // initial diameter
    return (
        <motion.span
            className="absolute rounded-full"
            initial={{ scale: 0.3, opacity: 0.35 }}
            animate={{ scale: 1.8, opacity: 0.0 }}
            transition={{ duration: RIPPLE_DURATION / 1000, ease: "easeOut" }}
            style={{
                left: x - size / 2,
                top: y - size / 2,
                width: size,
                height: size,
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow:
                    "0 0 0 2px rgba(255,255,255,0.15), inset 0 0 12px rgba(255,255,255,0.12)",
                filter: "blur(0.2px)",
                mixBlendMode: "screen",
            }}
        />
    );
}
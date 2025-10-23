"use client";
import React from "react";
import UniversalPageTransition from "./UniversalPageTransition";
import "@/styles/animations.css";

/**
 * Updated PageTransition Component
 * 
 * Now uses the new UniversalPageTransition system for better
 * animation handling and more animation options.
 * 
 * Maintains backward compatibility with existing usage.
 */

const PageTransition = ({ children, isTransitioning, type = "fade" }) => {
    // Map old type names to new animation names
    const animationMap = {
        "fade": "fade",
        "slide": "slideUp", // Default slide is now slideUp
        "bloom": "bloom"
    };

    const animationType = animationMap[type] || type;

    return (
        <UniversalPageTransition
            animation={animationType}
            isVisible={!isTransitioning}
            duration={type === "bloom" ? 1500 : 1000}
        >
            {children}
        </UniversalPageTransition>
    );
};

export default PageTransition;

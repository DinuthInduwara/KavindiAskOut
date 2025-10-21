"use client";
import React from "react";
import "@/styles/animations.css";

const PageTransition = ({ children, isTransitioning, type = "fade" }) => {
    const getTransitionStyle = () => {
        switch (type) {
            case "bloom":
                return {
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? "scale(0.8)" : "scale(1)",
                    filter: isTransitioning ? "blur(10px)" : "blur(0px)",
                    transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                };
            case "slide":
                return {
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? "translateY(50px)" : "translateY(0)",
                    transition: "all 1s ease-out",
                };
            case "fade":
            default:
                return {
                    opacity: isTransitioning ? 0 : 1,
                    transition: "opacity 1s ease-in-out",
                };
        }
    };

    return <div style={getTransitionStyle()}>{children}</div>;
};

export default PageTransition;

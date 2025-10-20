import React from "react";

export default function SunriseEffect() {
        const beamConfigs = React.useMemo(() => {
                return Array.from({ length: 12 }, (_, i) => ({
                        rotation: i * 30,
                        delay: i * 0.2,
                }));
        }, []);

        return (
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
                        {/* Sun orb with glow */}
                        <div
                                style={{
                                        position: "absolute",
                                        top: "-70px",
                                        right: "-70px",
                                        width: "140px",
                                        height: "140px",
                                        borderRadius: "50%",
                                        background:
                                                "radial-gradient(circle, #FFD966 0%, #FFF2B2 40%, #FFE082 100%)",
                                        boxShadow:
                                                "0 0 40px rgba(255, 217, 102, 0.3), 0 0 70px rgba(255, 217, 102, 0.2), 0 0 100px rgba(255, 217, 102, 0.1)",
                                        animation: "sunrisePulse 4s ease-in-out infinite alternate",
                                        zIndex: -1,
                                        opacity: 0.6,
                                }}
                        >
                                {/* Inner glow */}
                                <div
                                        style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                width: "80%",
                                                height: "80%",
                                                borderRadius: "50%",
                                                background:
                                                        "radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)",
                                                animation: "innerGlow 3s ease-in-out infinite alternate",
                                        }}
                                />
                        </div>

                        {/* Sun beams */}
                        {beamConfigs.map((config, i) => (
                                <div
                                        key={`sunbeam-${i}`}
                                        style={{
                                                position: "absolute",
                                                top: "10px",
                                                right: "10px",
                                                width: "2px",
                                                height: "250px",
                                                background:
                                                        "linear-gradient(180deg, rgba(255, 242, 178, 0.3), rgba(255, 217, 102, 0.2), transparent)",
                                                transform: `rotate(${config.rotation}deg)`,
                                                transformOrigin: "50% 0%",
                                                animation: `sunbeamShine 6s ease-in-out infinite ${config.delay}s`,
                                                filter: "blur(1px)",
                                        }}
                                />
                        ))}

                        {/* Additional rotating beams for depth */}
                        {beamConfigs.slice(0, 8).map((config, i) => (
                                <div
                                        key={`sunbeam-alt-${i}`}
                                        style={{
                                                position: "absolute",
                                                top: "10px",
                                                right: "10px",
                                                width: "3px",
                                                height: "200px",
                                                background:
                                                        "linear-gradient(180deg, rgba(255, 255, 200, 0.25), rgba(255, 242, 178, 0.15), transparent)",
                                                transform: `rotate(${config.rotation + 15}deg)`,
                                                transformOrigin: "50% 0%",
                                                animation: `sunbeamShine 8s ease-in-out infinite ${
                                                        config.delay + 0.5
                                                }s`,
                                                filter: "blur(1.5px)",
                                        }}
                                />
                        ))}

                        {/* Glowing particles around the sun */}
                        {Array.from({ length: 8 }).map((_, i) => {
                                const angle = (i * 360) / 8;
                                const distance = 80 + Math.sin(i) * 20;
                                const x = Math.cos((angle * Math.PI) / 180) * distance;
                                const y = Math.sin((angle * Math.PI) / 180) * distance;

                                return (
                                        <div
                                                key={`particle-${i}`}
                                                style={{
                                                        position: "absolute",
                                                        top: `${10 + y}px`,
                                                        right: `${10 + x}px`,
                                                        width: "4px",
                                                        height: "4px",
                                                        borderRadius: "50%",
                                                        background: "#FFD966",
                                                        boxShadow: "0 0 8px rgba(255, 217, 102, 0.3)",
                                                        opacity: 0.5,
                                                        animation: `sunParticleFloat ${
                                                                3 + (i % 3)
                                                        }s ease-in-out infinite ${i * 0.3}s`,
                                                }}
                                        />
                                );
                        })}
                </div>
        );
}

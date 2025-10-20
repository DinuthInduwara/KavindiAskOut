"use client";
import React from "react";
import { TYPEWRITER_TIMINGS } from "@/constants/animations";

export default function RainText({ fullText, setClickble }) {
    const lines = React.useMemo(() => fullText.split("\n"), [fullText]);

    React.useEffect(() => {
        let totalWords = 0;
        let maxLettersInLastWord = 0;
        for (const line of lines) {
            const words = line.split(/(\s+)/);
            for (const token of words) {
                if (/^\s+$/.test(token)) continue;
                totalWords += 1;
                maxLettersInLastWord = token.length;
            }
        }
        const totalDuration =
            totalWords * TYPEWRITER_TIMINGS.WORD_STAGGER_MS +
            TYPEWRITER_TIMINGS.WORD_FADE_MS +
            maxLettersInLastWord * TYPEWRITER_TIMINGS.LETTER_STAGGER_MS +
            TYPEWRITER_TIMINGS.LETTER_COLOR_MS +
            400;

        const timer = setTimeout(() => {
            if (typeof setClickble === "function") {
                setClickble(true);
            }
        }, totalDuration);
        return () => clearTimeout(timer);
    }, [lines, setClickble]);

    let globalWordIndex = 0;

    return (
        <div className="kavindi-text" style={{ position: "relative" }}>
            {lines.map((line, lineIdx) => {
                const tokens = line.split(/(\s+)/);
                return (
                    <div key={`line-${lineIdx}`} style={{ display: "block" }}>
                        {tokens.map((token, tokenIdx) => {
                            if (/^\s+$/.test(token)) {
                                return (
                                    <span key={`space-${lineIdx}-${tokenIdx}`}>
                                        {token}
                                    </span>
                                );
                            }

                            const thisWordIndex = globalWordIndex++;
                            const wordDelay = thisWordIndex * TYPEWRITER_TIMINGS.WORD_STAGGER_MS;

                            return (
                                <span
                                    key={`word-${lineIdx}-${tokenIdx}`}
                                    style={{
                                        display: "inline-block",
                                        opacity: 0,
                                        animation: `wordFade ${TYPEWRITER_TIMINGS.WORD_FADE_MS}ms ease forwards`,
                                        animationDelay: `${wordDelay}ms`,
                                    }}
                                >
                                    {Array.from(token).map((ch, letterIdx) => {
                                        const letterDelay =
                                            wordDelay + letterIdx * TYPEWRITER_TIMINGS.LETTER_STAGGER_MS;
                                        return (
                                            <span
                                                key={`ch-${lineIdx}-${tokenIdx}-${letterIdx}`}
                                                style={{
                                                    display: "inline-block",
                                                    color: "rgba(255,255,255,0.35)",
                                                    filter: "saturate(0.7)",
                                                    transform: "translateY(2px)",
                                                    animation: `letterColor ${TYPEWRITER_TIMINGS.LETTER_COLOR_MS}ms ease forwards` +
                                                        `, letterCharm ${TYPEWRITER_TIMINGS.LETTER_COLOR_MS}ms ease forwards`,
                                                    animationDelay: `${letterDelay}ms, ${letterDelay}ms`,
                                                }}
                                            >
                                                {ch}
                                            </span>
                                        );
                                    })}
                                </span>
                            );
                        })}
                    </div>
                );
            })}

            <style jsx>{`
                @keyframes wordFade {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes letterColor {
                    0% {
                        color: rgba(255,255,255,0.35);
                        filter: saturate(0.7);
                    }
                    60% {
                        color: #e5e7eb;
                        filter: saturate(1);
                    }
                    100% {
                        color: #eef2ff;
                        filter: saturate(1.05);
                    }
                }
                @keyframes letterCharm {
                    0% { transform: translateY(2px) scale(0.98); text-shadow: none; }
                    60% { transform: translateY(0px) scale(1.02); text-shadow: 0 0 6px rgba(186, 230, 253, 0.25); }
                    100% { transform: translateY(0px) scale(1); text-shadow: 0 0 10px rgba(165, 180, 252, 0.25); }
                }
            `}</style>
        </div>
    );
}

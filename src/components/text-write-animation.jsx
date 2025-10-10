"use client";
import React from "react";

export default function RainText({ fullText, setClickble }) {
    // Animation configuration
    const WORD_FADE_MS = 500; // duration of each word's fade-in
    const WORD_STAGGER_MS = 260; // delay between words (slower for readability)
    const LETTER_COLOR_MS = 420; // duration of each letter color-up
    const LETTER_STAGGER_MS = 50; // delay between letters within a word

    // Split text into lines and words while preserving spaces and line breaks
    const lines = React.useMemo(() => fullText.split("\n"), [fullText]);

    // Compute total duration to trigger setClickble at the end
    React.useEffect(() => {
        let totalWords = 0;
        let maxLettersInLastWord = 0;
        for (const line of lines) {
            const words = line.split(/(\s+)/); // keeps spaces as tokens
            for (const token of words) {
                if (/^\s+$/.test(token)) continue;
                totalWords += 1;
                maxLettersInLastWord = token.length;
            }
        }
        const totalDuration =
            totalWords * WORD_STAGGER_MS +
            WORD_FADE_MS +
            maxLettersInLastWord * LETTER_STAGGER_MS +
            LETTER_COLOR_MS +
            400; // buffer

        const timer = setTimeout(() => {
            if (typeof setClickble === "function") {
                setClickble(true);
            }
        }, totalDuration);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lines]);

    let globalWordIndex = 0;

    return (
        <div className="kavindi-text" style={{ position: "relative" }}>
            {lines.map((line, lineIdx) => {
                const tokens = line.split(/(\s+)/); // words and spaces
                return (
                    <div key={`line-${lineIdx}`} style={{ display: "block" }}>
                        {tokens.map((token, tokenIdx) => {
                            if (/^\s+$/.test(token)) {
                                // Render literal spaces to preserve static layout
                                return (
                                    <span key={`space-${lineIdx}-${tokenIdx}`}>
                                        {token}
                                    </span>
                                );
                            }

                            const thisWordIndex = globalWordIndex++;
                            const wordDelay = thisWordIndex * WORD_STAGGER_MS;

                            return (
                                <span
                                    key={`word-${lineIdx}-${tokenIdx}`}
                                    style={{
                                        display: "inline-block",
                                        opacity: 0,
                                        animation: `wordFade ${WORD_FADE_MS}ms ease forwards`,
                                        animationDelay: `${wordDelay}ms`,
                                    }}
                                >
                                    {Array.from(token).map((ch, letterIdx) => {
                                        const letterDelay =
                                            wordDelay + letterIdx * LETTER_STAGGER_MS;
                                        return (
                                            <span
                                                key={`ch-${lineIdx}-${tokenIdx}-${letterIdx}`}
                                                style={{
                                                    display: "inline-block",
                                                    color: "rgba(255,255,255,0.35)",
                                                    filter: "saturate(0.7)",
                                                    transform: "translateY(2px)",
                                                    animation: `letterColor ${LETTER_COLOR_MS}ms ease forwards` +
                                                        `, letterCharm ${LETTER_COLOR_MS}ms ease forwards`,
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
                        color: #e5e7eb; /* soft white */
                        filter: saturate(1);
                    }
                    100% {
                        color: #eef2ff; /* slightly brighter */
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

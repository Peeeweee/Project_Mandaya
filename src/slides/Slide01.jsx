import React, { useState, useEffect, useRef } from 'react';
import { useSoundSystem } from '../contexts/SoundContext';

const Slide01 = ({ isActive }) => {
    const { playTypeClick, playBoot } = useSoundSystem();
    const [displayedLines, setDisplayedLines] = useState(['', '', '', '', '']);
    const [pulseStarted, setPulseStarted] = useState(false);
    const [restoringVisible, setRestoringVisible] = useState(false);

    const timerRef = useRef(null);

    const lines = [
        { text: "WARNING: Repository scheduled for permanent deletion.", color: "var(--red)" },
        { text: "Last commit:          1946.", color: "var(--red)" },
        { text: 'Reason:               "No longer maintained."', color: "var(--red)" },
        { text: "", color: "transparent" }, // Empty line break
        { text: "33,000 files at risk.", color: "var(--amber)", size: "1.1rem" }
    ];

    useEffect(() => {
        if (!isActive) {
            setDisplayedLines(['', '', '', '', '']);
            setPulseStarted(false);
            setRestoringVisible(false);
            if (timerRef.current) clearTimeout(timerRef.current);
            return;
        }

        let currentLine = 0;
        let currentChar = 0;

        const typeChar = () => {
            if (currentLine >= lines.length) {
                // All lines finished
                timerRef.current = setTimeout(() => {
                    setPulseStarted(true);
                    timerRef.current = setTimeout(() => {
                        setRestoringVisible(true);
                        playBoot();
                    }, 1000);
                }, 800);
                return;
            }

            const targetText = lines[currentLine].text;

            if (targetText === "") {
                // Handle empty line break
                timerRef.current = setTimeout(() => {
                    currentLine++;
                    typeChar();
                }, 400);
                return;
            }

            if (currentChar < targetText.length) {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    newLines[currentLine] = targetText.slice(0, currentChar + 1);
                    return newLines;
                });
                currentChar++;
                playTypeClick();
                timerRef.current = setTimeout(typeChar, 40);
            } else {
                // Line finished
                currentLine++;
                currentChar = 0;
                timerRef.current = setTimeout(typeChar, 600);
            }
        };

        // Initial delay before starting
        timerRef.current = setTimeout(typeChar, 500);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isActive]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#000000] p-4">
            <div
                className={`relative border p-8 md:p-10 transition-all duration-1000 ${pulseStarted ? 'animate-[pulse-red_1.5s_ease-in-out_infinite_alternate]' : ''}`}
                style={{
                    borderColor: 'var(--red-dim)',
                    backgroundColor: 'rgba(239, 68, 68, 0.03)',
                    minWidth: 'min(90vw, 550px)',
                    position: 'relative'
                }}
            >
                {/* Label */}
                <div
                    className="absolute font-mono uppercase tracking-[0.15em] px-2 bg-black"
                    style={{
                        top: '-0.7rem',
                        left: '1.5rem',
                        fontSize: '0.7rem',
                        color: 'var(--red)',
                        fontFamily: "'JetBrains Mono', monospace"
                    }}
                >
                    ⚠ SYSTEM ALERT
                </div>

                {/* Content */}
                <div
                    className="flex flex-col space-y-1"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.95rem',
                        lineHeight: 2,
                        textAlign: 'left'
                    }}
                >
                    {displayedLines.map((text, i) => (
                        <div
                            key={i}
                            style={{
                                color: lines[i].color,
                                fontSize: lines[i].size || 'inherit',
                                minHeight: '1.5rem'
                            }}
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Restoring Text */}
            <div
                className={`mt-12 flex items-center transition-opacity duration-600 ${restoringVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--green)',
                    fontSize: '1.1rem'
                }}
            >
                Restoring...
                <span
                    className="ml-2 inline-block bg-[var(--green)] w-[10px] h-[1.2rem] animate-[blink_1s_step-end_infinite]"
                />
            </div>
        </div>
    );
};

export default Slide01;

import React, { useState, useEffect } from 'react';
import { SlideContent } from '../components/SlideElements';

const Slide21 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);
    const [progress, setProgress] = useState(0);
    const [command, setCommand] = useState("");

    const targetCommand = "$ git checkout manobo-branch";

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 1500), // handoff text reveal
                setTimeout(() => setPhase(2), 2000), // command typing start
                setTimeout(() => setPhase(3), 500)   // tree immediate
            ];

            // Progress bar interval
            const interval = setInterval(() => {
                setProgress(prev => (prev < 40 ? prev + 1 : prev));
            }, 50);

            // Typewriter effect
            let charIdx = 0;
            const typeTimer = setInterval(() => {
                if (phase >= 2 && charIdx <= targetCommand.length) {
                    setCommand(targetCommand.substring(0, charIdx));
                    charIdx++;
                } else if (charIdx > targetCommand.length) {
                    clearInterval(typeTimer);
                }
            }, 60);

            return () => {
                timers.forEach(clearTimeout);
                clearInterval(interval);
                clearInterval(typeTimer);
            };
        } else {
            setPhase(0);
            setProgress(0);
            setCommand("");
        }
    }, [isActive, phase]);

    const progressChars = Math.floor(progress / 10);
    const bar = "█".repeat(progressChars) + "░".repeat(10 - progressChars);

    return (
        <div className="w-full h-full bg-[var(--deep)] flex items-center justify-center overflow-y-auto no-scrollbar">
            <SlideContent className="max-w-[700px]">
                {/* File Tree */}
                <div className="mono border border-[var(--border)] bg-[var(--terminal)] p-10 md:p-12 shadow-2xl relative">
                    <div className="text-[var(--white)] opacity-40 mb-3 text-[0.65rem] tracking-widest uppercase">/caraga-peoples</div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 animate-[fade-in_0.5s_ease-out_forwards_delay-100]">
                            <span className="text-[var(--muted)]">├──</span>
                            <span className="text-2xl">📄</span>
                            <span className="text-[var(--white)] font-bold">mandaya</span>
                            <span className="text-[var(--green)] font-bold text-[0.7rem] ml-auto flex items-center gap-1">
                                ✓ RESTORED
                                <span className="inline-block w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 animate-[fade-in_0.5s_ease-out_forwards_delay-300]">
                            <div className="flex items-center gap-4">
                                <span className="text-[var(--muted)]">├──</span>
                                <span className="text-2xl">📄</span>
                                <span className="text-[var(--white)] font-bold">manobo</span>
                                <span className="text-[var(--amber)] font-bold text-[0.7rem] ml-auto italic">
                                    ← RESTORING NOW...
                                </span>
                            </div>
                            <div className="pl-16 flex items-center gap-4">
                                <span className="text-[var(--amber)] tracking-tighter text-sm opacity-80">{bar}</span>
                                <span className="text-[var(--amber)] mono text-[0.75rem]">{progress}%</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 animate-[fade-in_0.5s_ease-out_forwards_delay-500] opacity-30">
                            <span className="text-[var(--muted)]">└──</span>
                            <span className="text-2xl opacity-50">📄</span>
                            <span className="text-[var(--white)]/50">higaonon</span>
                            <span className="text-[var(--muted)] text-[0.7rem] ml-auto">← QUEUED</span>
                        </div>
                    </div>
                </div>

                {/* Handoff Text */}
                <div className="mt-20 flex flex-col items-center gap-6">
                    <div
                        className={`mono text-[0.82rem] italic text-[var(--muted)] text-center transition-all duration-1000 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        "The Mandaya file has been restored. <br /> Passing to Theo — the Manobo are next."
                    </div>

                    {/* Typing Command */}
                    <div className={`mono text-[var(--white)] text-[0.9rem] flex items-center justify-center gap-2 h-8`}>
                        <span className="opacity-80 font-bold">{command}</span>
                        <span className="w-2 h-5 bg-[var(--green)] animate-[blink-cursor_1s_infinite]" />
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide21;

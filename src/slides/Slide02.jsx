import React, { useState, useEffect, useRef } from 'react';
import { useSoundSystem } from '../contexts/SoundContext';

const Slide02 = ({ isActive }) => {
    const { playFlash, playTypeClick } = useSoundSystem();
    const [step, setStep] = useState(0);
    const [typedCommand, setTypedCommand] = useState('');
    const [flashActive, setFlashActive] = useState(false);
    const timerRefs = useRef([]);

    const addTimer = (callback, delay) => {
        const timer = setTimeout(callback, delay);
        timerRefs.current.push(timer);
        return timer;
    };

    const clearTimers = () => {
        timerRefs.current.forEach(clearTimeout);
        timerRefs.current = [];
    };

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            setTypedCommand('');
            setFlashActive(false);
            clearTimers();
            return;
        }

        // Step 1: Fade + Slide Up
        setStep(1);
        playFlash();

        // Step 2: Lines appear (700ms)
        addTimer(() => setStep(2), 700);

        // Step 3: Horizontal rule (1800ms)
        addTimer(() => setStep(3), 1800);

        // Step 4: README.md — CORRUPTED (2200ms)
        addTimer(() => setStep(4), 2200);

        // Step 5: File rows (3000ms)
        addTimer(() => setStep(5), 3000);

        // Step 6: Horizontal rule (4800ms)
        addTimer(() => setStep(6), 4800);

        // Step 7: Command input (5200ms)
        addTimer(() => {
            setStep(7);
            const commandText = "git restore --all";
            let charIndex = 0;

            const typeInterval = setInterval(() => {
                setTypedCommand(commandText.slice(0, charIndex + 1));
                playTypeClick();
                charIndex++;

                if (charIndex >= commandText.length) {
                    clearInterval(typeInterval);
                    // Flash after typing finishes (500ms pause)
                    addTimer(() => {
                        playFlash();
                        setFlashActive(true);
                        addTimer(() => setFlashActive(false), 300);
                    }, 500);
                }
            }, 60);

            timerRefs.current.push(typeInterval);
        }, 5200);

        return () => clearTimers();
    }, [isActive]);

    return (
        <div className="flex items-center justify-center w-full h-full bg-[var(--deep)] p-4 relative overflow-hidden">
            {/* Full Viewport Flash Overlay */}
            <div
                className={`fixed inset-0 pointer-events-none z-[1000] bg-white transition-opacity ${flashActive ? 'opacity-15 animate-[flash_0.3s_ease-in-out]' : 'opacity-0'}`}
            />

            <div
                className={`w-full max-w-[750px] transition-all duration-600 ease-out ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
            >
                {/* Window Chrome */}
                <div className="bg-[#1a201a] border-t border-l border-r border-[var(--border)] rounded-t-lg overflow-hidden">
                    <div className="flex items-center justify-between p-3 px-5 border-b border-[var(--border)]">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="mono text-[0.78rem] text-[var(--muted)] opacity-80">
                            caraga-peoples / README.md
                        </div>
                        <div className="w-12" /> {/* Spacer */}
                    </div>
                </div>

                {/* Window Body */}
                <div
                    className="bg-[var(--terminal)] border-b border-l border-r border-[var(--border)] p-6 md:p-8 rounded-b-lg shadow-[0_0_60px_rgba(74,222,128,0.05)] mono text-[0.85rem] leading-[2] text-left"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    {/* Step 2 lines */}
                    <div className={`transition-opacity duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-[var(--green)]">📁 caraga-peoples</div>
                        <div className="text-[var(--amber)] transition-opacity duration-300 delay-200" style={{ opacity: step >= 2 ? 1 : 0 }}>
                            ⚠ This repository has not been updated in 78 years.
                        </div>
                        <div className="text-[var(--muted)] transition-opacity duration-300 delay-400" style={{ opacity: step >= 2 ? 1 : 0 }}>
                            &nbsp;&nbsp;&nbsp;Contributors: Unknown.
                        </div>
                        <div className="text-[var(--muted)] transition-opacity duration-300 delay-600" style={{ opacity: step >= 2 ? 1 : 0 }}>
                            &nbsp;&nbsp;&nbsp;Last active: Pre-colonial period.
                        </div>
                    </div>

                    {/* Step 3: Rule */}
                    <div className={`my-4 border-t border-[var(--border)] transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Step 4: Corrupted Title */}
                    <div
                        className={`text-[var(--red)] font-bold mb-4 transition-opacity duration-300 ${step >= 4 ? 'opacity-100 animate-[glitch_0.6s_steps(6),flicker_3s_infinite_0.6s]' : 'opacity-0'}`}
                    >
                        README.md — CORRUPTED
                    </div>

                    {/* Step 5: File Rows */}
                    <div className={`space-y-1 transition-opacity duration-300 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}>
                        {[
                            { name: '📄 /mandaya', status: '404 File Missing' },
                            { name: '📄 /manobo', status: '404 File Missing' },
                            { name: '📄 /higaonon', status: '404 File Missing' }
                        ].map((file, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between transition-opacity duration-400"
                                style={{
                                    opacity: step >= 5 ? 1 : 0,
                                    transitionDelay: `${i * 400}ms`
                                }}
                            >
                                <span>{file.name}</span>
                                <span className="text-[var(--red)]">{file.status}</span>
                            </div>
                        ))}
                    </div>

                    {/* Step 6: Rule */}
                    <div className={`my-4 border-t border-[var(--border)] transition-opacity duration-300 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Step 7: Command */}
                    <div className={`transition-opacity duration-300 ${step >= 7 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-[var(--muted)]">$ </span>
                        <span>{typedCommand}</span>
                        <span className="inline-block w-2 h-4 bg-[var(--green)] ml-1 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide02;

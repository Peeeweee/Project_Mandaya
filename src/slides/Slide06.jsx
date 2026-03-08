import React, { useState, useEffect, useRef } from 'react';
import { useSoundSystem } from '../contexts/SoundContext';

const Slide06 = ({ isActive }) => {
    const { playChime } = useSoundSystem();
    const [step, setStep] = useState(0); // 0: initial, 1: header cmd, 2: dir head, 3: files appear, 4: filling bar, 5: restored, 6: narrate
    const [mandayaProgress, setMandayaProgress] = useState(0);
    const timerRefs = useRef([]);

    const addTimer = (callback, delay) => {
        const timer = setTimeout(callback, delay);
        timerRefs.current.push(timer);
    };

    const clearTimers = () => {
        timerRefs.current.forEach(clearTimeout);
        timerRefs.current = [];
    };

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            setMandayaProgress(0);
            clearTimers();
            return;
        }

        // Step 1: Header CMD (0ms)
        setStep(1);

        // Step 2: Directory Header (400ms)
        addTimer(() => setStep(2), 400);

        // Step 3: Files appear (700ms, staggered 300ms)
        addTimer(() => setStep(3), 700);

        // Step 4: Progress bar starts filling (700ms + 500ms = 1200ms)
        addTimer(() => {
            setStep(4);
            let progress = 0;
            const interval = setInterval(() => {
                progress += 1;
                setMandayaProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    setStep(5);
                    playChime();
                    // Step 6: Narration text (restored + 500ms delay)
                    addTimer(() => setStep(6), 500);
                }
            }, 30); // 3 seconds total (100 steps * 30ms)
            timerRefs.current.push(interval);
        }, 1200);

        return () => clearTimers();
    }, [isActive]);

    const fileRows = [
        { name: "/mandaya", status: step >= 5 ? "✓ RESTORED" : "RECOVERING...", color: step >= 5 ? "var(--green)" : "var(--amber)", hasProgress: true },
        { name: "/manobo", status: "QUEUED", color: "var(--muted)", hasProgress: false },
        { name: "/higaonon", status: "QUEUED", color: "var(--muted)", hasProgress: false }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#060a06] p-4 font-mono overflow-hidden">
            <div className="w-full max-w-[600px] text-left">
                {/* Header CMD */}
                <div
                    className={`text-[var(--green)] text-[0.85rem] mb-4 transition-opacity duration-600 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}
                >
                    $ ls /caraga-peoples
                </div>

                {/* Directory Header */}
                <div
                    className={`text-[var(--green)] mb-6 transition-opacity duration-600 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}
                >
                    /caraga-peoples
                </div>

                {/* File Rows */}
                <div className="flex flex-col space-y-3 mb-10">
                    {fileRows.map((file, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-4 p-5 md:px-6 md:py-5 border transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'}`}
                            style={{
                                borderColor: (i === 0 && step >= 5) ? 'var(--green)' : 'var(--border)',
                                background: 'var(--terminal)',
                                boxShadow: (i === 0 && step >= 5) ? '0 0 15px rgba(74, 222, 128, 0.15)' : 'none',
                                transitionDelay: `${i * 300}ms`,
                                position: 'relative'
                            }}
                        >
                            {/* Green flash for Mandaya restoration */}
                            {i === 0 && step === 5 && (
                                <div className="absolute inset-0 bg-[var(--green)] opacity-5 animate-pulse rounded-sm pointer-events-none" />
                            )}

                            <span className="text-xl">📄</span>
                            <span className={`text-[var(--green)] font-medium ${i === 0 ? '' : 'opacity-70'}`}>
                                {file.name}
                            </span>
                            <div className="flex-1" />
                            <span
                                className={`text-[0.75rem] font-bold tracking-wider transition-colors duration-300`}
                                style={{ color: file.color }}
                            >
                                {file.status}
                            </span>

                            {/* Progress Bar for Mandaya */}
                            {file.hasProgress && (
                                <div className="w-[140px] h-[4px] bg-[var(--border)] rounded-full overflow-hidden ml-2 hidden sm:block">
                                    <div
                                        className="h-full bg-[var(--green)] transition-all duration-300"
                                        style={{
                                            width: `${mandayaProgress}%`,
                                            boxShadow: '0 0 8px var(--green)'
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Narration Text */}
                <div
                    className={`text-[0.82rem] italic text-[var(--muted)] text-center transition-all duration-600 ${step >= 6 ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
                >
                    "Three peoples. Three repositories of knowledge. Today we restore
                    the first."
                </div>
            </div>
        </div>
    );
};

export default Slide06;

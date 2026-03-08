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

        // Step 2: Directory Header (600ms)
        addTimer(() => setStep(2), 600);

        // Step 3: Files appear (1000ms, staggered 200ms)
        addTimer(() => setStep(3), 1000);

        // Step 4: Progress bar starts filling (1000ms + 600ms = 1600ms)
        addTimer(() => {
            setStep(4);
            let progress = 0;
            const interval = setInterval(() => {
                // Ensure it takes exactly 3 seconds
                progress += (100 / (3000 / 30));
                if (progress >= 100) {
                    progress = 100;
                    setMandayaProgress(progress);
                    clearInterval(interval);
                    setStep(5);
                    playChime();
                    // Step 6: Narration text (restored + 800ms delay)
                    addTimer(() => setStep(6), 800);
                } else {
                    setMandayaProgress(progress);
                }
            }, 30);
            timerRefs.current.push(interval);
        }, 1600);

        return () => clearTimers();
    }, [isActive]);

    const fileRows = [
        {
            name: "mandaya_archive.dat",
            perms: "-rwxr-xr-x",
            size: "14.2 GB",
            status: step >= 5 ? "NO CORRUPTION" : "RECOVERING...",
            color: step >= 5 ? "var(--green)" : "var(--amber)",
            hasProgress: true,
            isLocked: false
        },
        {
            name: "manobo_archive.sys",
            perms: "d---------",
            size: "??? GB",
            status: "ENCRYPTED / QUEUED",
            color: "var(--muted)",
            hasProgress: false,
            isLocked: true
        },
        {
            name: "higaonon_archive.sys",
            perms: "d---------",
            size: "??? GB",
            status: "ENCRYPTED / QUEUED",
            color: "var(--muted)",
            hasProgress: false,
            isLocked: true
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-full bg-[#030403] px-4 md:px-8 py-8 overflow-hidden relative">

            {/* Terminal Scanlines Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] shrink-0"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--green) 2px, var(--green) 4px)' }} />

            <div className="w-full max-w-[900px] relative z-10 flex flex-col gap-6">

                {/* Dynamic Header Block */}
                <div className="w-full bg-[#070b07] border-2 border-green-900/60 p-5 shadow-[0_0_20px_rgba(74,222,128,0.05)] flex flex-col gap-2">
                    <div className={`mono text-[var(--green)] text-lg md:text-xl font-bold transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-[var(--white)] mr-3">root@caraga-db:~$</span>
                        ls -la /volumes/indigenous/caraga-peoples --restore
                        {(step === 1 || step === 2) && <span className="inline-block w-3 h-5 bg-[var(--green)] ml-2 animate-pulse align-middle" />}
                    </div>

                    <div className={`mono text-[var(--muted)] text-sm md:text-md uppercase tracking-widest mt-4 transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                        Total 3 archives discovered. Initiating recovery sequence...
                    </div>
                </div>

                {/* File Rows Container */}
                <div className="flex flex-col space-y-4 w-full">
                    {fileRows.map((file, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden border-l-[6px] transition-all duration-[800ms] ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            style={{
                                borderColor: i === 0 && step >= 5 ? 'var(--green)' : file.isLocked ? '#222' : 'var(--amber)',
                                background: file.isLocked ? '#0A0A0A' : '#0B120B',
                                borderTop: '1px solid #111',
                                borderRight: '1px solid #111',
                                borderBottom: '1px solid #111',
                                transitionDelay: `${i * 200}ms`
                            }}
                        >
                            {/* Background Progress Bar (Mandaya only) */}
                            {file.hasProgress && (
                                <div
                                    className="absolute left-0 top-0 bottom-0 bg-green-900/20 transition-all ease-linear"
                                    style={{
                                        width: `${mandayaProgress}%`,
                                        borderRight: step >= 4 && step < 5 ? '2px solid var(--amber)' : 'none'
                                    }}
                                />
                            )}

                            {/* Locked Pattern Overlay */}
                            {file.isLocked && (
                                <div className="absolute inset-0 opacity-10 pointer-events-none"
                                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)' }} />
                            )}

                            {/* Main Content */}
                            <div className="relative z-10 p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

                                {/* Permissions & Name */}
                                <div className="flex flex-col gap-2">
                                    <div className="mono text-[0.7rem] md:text-[0.8rem] text-[var(--muted)] tracking-widest flex gap-4">
                                        <span>{file.perms}</span>
                                        <span>SYSTEM</span>
                                        <span>{file.size}</span>
                                    </div>
                                    <div className={`mono font-bold text-xl md:text-2xl tracking-wide ${file.isLocked ? 'text-[#444]' : 'text-[var(--white)]'}`}>
                                        /{file.name}
                                    </div>
                                </div>

                                {/* Status & Progress Number */}
                                <div className="flex flex-col md:items-end gap-2 shrink-0">
                                    <div
                                        className={`mono text-[0.8rem] md:text-[0.95rem] font-bold tracking-widest px-3 py-1 border ${file.isLocked ? 'border-[#333] text-[#555]' : i === 0 && step >= 5 ? 'border-[var(--green)] bg-green-900/20 text-[var(--green)] shadow-[0_0_10px_var(--green)]' : 'border-[var(--amber)] bg-amber-900/10 text-[var(--amber)] animate-pulse'}`}
                                    >
                                        [{file.status}]
                                    </div>

                                    {/* Numeric Progress Counter */}
                                    {file.hasProgress && (
                                        <div className={`mono text-3xl md:text-4xl font-black tracking-tighter ${step >= 5 ? 'text-[var(--green)]' : 'text-[var(--amber)]'}`}>
                                            {Math.floor(mandayaProgress)}<span className="text-[1.5rem] md:text-[2rem] opacity-50">%</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Flash overlay on complete */}
                            {i === 0 && step === 5 && (
                                <div className="absolute inset-0 bg-[var(--green)] opacity-0 animate-[red-flash_0.5s_ease-out] pointer-events-none mix-blend-overlay" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Dramatic Narration Quote */}
                <div
                    className={`mt-10 mx-auto max-w-[700px] text-center transition-all duration-1000 ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <div className="playfair italic text-2xl md:text-3xl text-[var(--white)] font-bold tracking-wide">
                        "Three peoples. Three repositories of knowledge. <br />
                        <span className="text-[var(--green)] not-italic uppercase tracking-[0.2em] text-lg md:text-xl block mt-6 bg-green-950/20 border-2 border-green-900/30 px-6 py-4 rounded-sm shadow-[0_0_20px_rgba(74,222,128,0.05)] text-center w-full mx-auto">
                            Today we restore the first.
                        </span>"
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slide06;

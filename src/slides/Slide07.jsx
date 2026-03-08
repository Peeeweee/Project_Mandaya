import React, { useState, useEffect, useMemo, useRef } from 'react';

const EmberParticles = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 2,
            left: Math.random() * 80 + 10,
            drift: Math.random() * 80 - 40,
            duration: Math.random() * 5 + 4,
            delay: Math.random() * 6,
            color: ['#f59e0b', '#fbbf24', '#b45309'][Math.floor(Math.random() * 3)]
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" role="presentation" aria-hidden="true">
            {particles.map((p, index) => (
                <div
                    key={p.id}
                    className={`absolute rounded-full ${index >= 10 ? 'hidden md:block' : ''}`}
                    style={{
                        willChange: 'transform',
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        backgroundColor: p.color,
                        boxShadow: `0 0 4px ${p.color}`,
                        '--drift': `${p.drift}px`,
                        animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
                        opacity: 0
                    }}
                />
            ))}
        </div>
    );
};

const Slide07 = ({ isActive }) => {
    const [step, setStep] = useState(0); // 0: initial, 1: eyebrow, 2: title reveal, 3: line, 4: subtitle, 5: status A, 6: status B
    const [glitchActive, setGlitchActive] = useState(false);
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
            setGlitchActive(false);
            clearTimers();
            return;
        }

        // Phase 1: Eyebrow (800ms)
        addTimer(() => setStep(1), 800);

        // Phase 2: Title reveal (1400ms)
        addTimer(() => setStep(2), 1400);

        // Phase 3: Divider Line (2600ms)
        addTimer(() => setStep(3), 2600);

        // Phase 4: Subtitle (3000ms)
        addTimer(() => setStep(4), 3000);

        // Phase 5: Status A (4000ms)
        addTimer(() => setStep(5), 4000);

        // Phase 6: Status B (4600ms)
        addTimer(() => setStep(6), 4600);

        // Chromatic Glitch Every 6s
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 6000);
        timerRefs.current.push(glitchInterval);

        return () => clearTimers();
    }, [isActive]);

    const titleText = "THE MANDAYA";

    return (
        <div
            className={`flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden relative transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
            style={{
                background: 'radial-gradient(ellipse at center, #1a0a02 0%, #0d0600 40%, #050300 70%, #000 100%)'
            }}
        >
            <EmberParticles />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Eyebrow */}
                <div
                    className={`mono text-[var(--ember)] text-[0.68rem] tracking-[0.3em] uppercase transition-opacity duration-600 mb-4 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}
                >
                    PRESENTER: PAULO — MANDAYA SECTION
                </div>

                {/* Title */}
                <div className="relative mb-6">
                    <h1
                        className={`playfair font-black tracking-[-0.02em] leading-[1] text-[var(--white)] flex flex-wrap justify-center ${glitchActive ? 'relative' : ''}`}
                        style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)" }}
                    >
                        {titleText.split("").map((char, i) => (char === " " ? (
                            <span key={i} className="w-[1vw]" />
                        ) : (
                            <span
                                key={i}
                                className={`inline-block transition-all duration-400`}
                                style={{
                                    opacity: step >= 2 ? 1 : 0,
                                    transform: step >= 2 ? 'translateY(0)' : 'translateY(20px)',
                                    transitionDelay: `${i * 80}ms`
                                }}
                            >
                                {char}
                            </span>
                        )))}

                        {/* Aberration Pseudo Layers */}
                        {glitchActive && (
                            <>
                                <div
                                    className="absolute inset-0 text-red-500/50 mix-blend-screen pointer-events-none translate-x-[3px] -translate-y-[2px]"
                                    style={{
                                        clipPath: `inset(${Math.random() * 50}% 0 ${Math.random() * 50}% 0)`,
                                        zIndex: -1
                                    }}
                                >
                                    {titleText}
                                </div>
                                <div
                                    className="absolute inset-0 text-cyan-500/50 mix-blend-screen pointer-events-none -translate-x-[3px] translate-y-[2px]"
                                    style={{
                                        clipPath: `inset(${Math.random() * 50}% 0 ${Math.random() * 50}% 0)`,
                                        zIndex: -1
                                    }}
                                >
                                    {titleText}
                                </div>
                            </>
                        )}
                    </h1>
                </div>

                {/* Divider */}
                <div
                    className="h-[1px] mb-6 transition-all duration-800 ease-out"
                    style={{
                        width: step >= 3 ? '120px' : '0px',
                        background: 'linear-gradient(90deg, transparent, var(--ember), transparent)'
                    }}
                />

                {/* Subtitle */}
                <div
                    className={`mono text-[var(--muted)] text-[0.9rem] tracking-[0.2em] mb-10 transition-opacity duration-1000 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}
                >
                    People of the Upstream
                </div>

                {/* Status Lines */}
                <div className="flex flex-col gap-4">
                    <div
                        className={`mono text-[var(--red)] text-[0.78rem] line-through bg-red-600/10 border border-red-600/20 px-4 py-2 transition-all duration-400 ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${step === 5 ? 'animate-[glitch-short_0.2s_steps(3)]' : ''}`}
                    >
                        STATUS: ✗ DELETED IN 1946
                    </div>

                    <div
                        className={`mono text-[var(--green)] text-[0.78rem] bg-green-600/10 border border-green-600/20 px-4 py-2 transition-all duration-600 shadow-[0_0_20px_rgba(74,222,128,0.15)] ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                    >
                        STATUS: ✓ RESTORED TODAY
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide07;

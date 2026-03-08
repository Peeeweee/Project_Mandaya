import React, { useState, useEffect, useMemo } from 'react';
import { useSoundSystem } from '../contexts/SoundContext';

// Comic Panel Component
const ComicPanel = ({ children, colSpan = "col-span-12", borderColor = "border-white", shadowColor = "#ffffff", bgColor = "bg-[#050505]", delay = 0, phase, reqPhase, extraClasses = "" }) => (
    <div
        className={`${colSpan} border-[3px] md:border-4 flex flex-col justify-center items-center ${borderColor} ${bgColor} p-6 lg:p-8 relative overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform ${phase >= reqPhase ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.95] translate-y-8 absolute pointer-events-none'}`}
        style={{
            boxShadow: phase >= reqPhase ? `10px 10px 0px ${shadowColor}` : `0px 0px 0px ${shadowColor}`,
            transitionDelay: `${delay}ms`
        }}
    >
        {extraClasses && <div className={extraClasses}></div>}
        {children}
    </div>
);

const TypewriterLine = ({ text, delay, isActive, className, onComplete }) => {
    const { playTypeClick } = useSoundSystem();
    const [visibleText, setVisibleText] = useState("");

    useEffect(() => {
        if (!isActive) {
            setVisibleText("");
            return;
        }

        let t;
        const to = setTimeout(() => {
            let i = 0;
            t = setInterval(() => {
                setVisibleText(text.substring(0, i + 1));
                playTypeClick();
                i++;
                if (i >= text.length) {
                    clearInterval(t);
                    if (onComplete) onComplete();
                }
            }, 60);
        }, delay);

        return () => {
            clearTimeout(to);
            clearInterval(t);
        };
    }, [isActive, text, delay, playTypeClick, onComplete]);

    return <div className={`min-h-[1.5em] ${className}`}>{visibleText}</div>;
};

const EmberParticles = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 6}s`,
            animationDelay: `-${Math.random() * 5}s`,
            opacity: 0.1 + Math.random() * 0.9,
            size: `${2 + Math.random() * 6}px`,
            color: Math.random() > 0.5 ? '#f59e0b' : '#ef4444'
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full animate-[floatUp_linear_infinite]"
                    style={{
                        willChange: 'transform',
                        left: p.left,
                        bottom: '-20px',
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        backgroundColor: p.color,
                        animationDuration: p.animationDuration,
                        animationDelay: p.animationDelay,
                        boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes floatUp {
                    0% { transform: translateY(0) scale(1); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { transform: translateY(-100vh) scale(0); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

const SlideFinal = ({ isActive }) => {
    const { playChime } = useSoundSystem();
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 500),   // Show terminal panel
                setTimeout(() => setPhase(2), 5200),  // Typewriter done, map pulse begins
                setTimeout(() => setPhase(3), 5500),  // Quote panel 1 
                setTimeout(() => setPhase(4), 8500),  // Quote panel 2
                setTimeout(() => setPhase(5), 11500), // Attribution & Repos open
            ];

            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#000000] flex flex-col items-center justify-center overflow-y-auto no-scrollbar p-6 md:p-8 lg:p-12 relative">

            {/* The Final Map Fade In Graphic */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-[3000ms] z-10 ${phase >= 2 ? 'opacity-[0.15]' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.4)_0%,transparent_60%)] z-0 mix-blend-screen opacity-50 blur-[50px]"></div>
            </div>

            {/* Ember particles show up late in the sequence to represent 'seeds sprouting from ash' */}
            {phase >= 4 && <EmberParticles />}

            <div className="max-w-[1200px] w-full relative z-20 flex flex-col items-center justify-center my-auto py-8 lg:py-12 gap-8 lg:gap-10">

                {/* --- THE TERMINAL CELL (Always Visible, flows normally) --- */}
                <div
                    className={`w-full max-w-[700px] border-[3px] border-[#28c840] bg-[#050505] relative overflow-hidden transition-all duration-1000 ease-out transform shadow-[8px_8px_0px_#28c840] z-30 flex-shrink-0 ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.95]'}`}
                >
                    <div className="absolute top-0 right-0 bg-[#28c840] text-black mono font-bold text-[0.65rem] px-3 py-1 border-b-[3px] border-l-[3px] border-black tracking-widest z-10">
                        FINAL_EXEC
                    </div>
                    {/* Retro Halftone Overlay inside Terminal */}
                    <div className="absolute inset-0 opacity-[0.1] mix-blend-screen pointer-events-none" style={{
                        backgroundImage: 'radial-gradient(circle, #28c840 2px, transparent 2.5px)',
                        backgroundSize: '12px 12px'
                    }}></div>

                    <div className="bg-black/50 border-b-[3px] border-[#28c840] p-4 flex gap-3 relative z-10">
                        <div className="w-4 h-4 rounded-full bg-[#ff5f57] border-2 border-[#111]" />
                        <div className="w-4 h-4 rounded-full bg-[#febc2e] border-2 border-[#111]" />
                        <div className="w-4 h-4 rounded-full bg-[#28c840] border-2 border-[#111]" />
                    </div>
                    <div className="p-8 md:p-10 mono text-[1rem] leading-[2.2] relative z-10">
                        <TypewriterLine text="$ git status" delay={500} isActive={phase >= 1} className="text-white font-bold" />
                        <div className="h-4 md:h-6" />
                        <TypewriterLine text="3 files restored." delay={2000} isActive={phase >= 1} className="text-white/50" />
                        <TypewriterLine text="0 files deleted." delay={2800} isActive={phase >= 1} className="text-white/50" />
                        <div className="h-4 md:h-6" />
                        <TypewriterLine
                            text="caraga_peoples.repo — FULLY RECOVERED."
                            delay={3600}
                            isActive={phase >= 1}
                            className="text-[#28c840] font-black text-lg md:text-xl drop-shadow-[0_0_8px_rgba(40,200,64,1)] uppercase"
                            onComplete={() => playChime(true)}
                        />
                    </div>
                </div>

                {/* --- THE THEMATIC FINALE CELLS --- */}
                <div className="w-full flex flex-col justify-center items-center gap-8 lg:gap-10">

                    <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-10 min-h-[350px]">
                        {/* First Half of Quote */}
                        <ComicPanel
                            colSpan="flex-1 w-full"
                            borderColor="border-red-600"
                            shadowColor="#dc2626"
                            bgColor="bg-[#0f0000]"
                            phase={phase} reqPhase={3} delay={0}
                        >
                            {/* Halftone red */}
                            <div className="absolute inset-0 opacity-[0.2]" style={{
                                backgroundImage: 'radial-gradient(circle, #dc2626 2px, transparent 2.5px)',
                                backgroundSize: '20px 20px'
                            }}></div>

                            <div className="text-center relative z-10 py-10 px-4 md:py-14 w-full h-full flex flex-col justify-center items-center">
                                <div className="mon text-red-600/50 uppercase tracking-[0.5em] font-bold mb-6 text-[0.8rem]">System Failure</div>
                                <h2 className="playfair text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-black text-white italic drop-shadow-[0_10px_10px_rgba(220,38,38,0.3)] leading-[1.1]">
                                    "They tried to<br /> <span className="text-red-500">bury us.</span>
                                </h2>
                            </div>
                        </ComicPanel>

                        {/* Second Half of Quote */}
                        <ComicPanel
                            colSpan="flex-1 w-full"
                            borderColor="border-amber-500"
                            shadowColor="#f59e0b"
                            bgColor="bg-[#120a00]"
                            phase={phase} reqPhase={4} delay={0}
                        >
                            {/* Halftone gold */}
                            <div className="absolute inset-0 opacity-[0.2]" style={{
                                backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2.5px)',
                                backgroundSize: '20px 20px'
                            }}></div>

                            <div className="absolute bottom-4 right-4 bg-amber-500 text-black px-4 py-2 mono font-bold text-sm border-[3px] border-black rotate-[-5deg] z-20">
                                SEEDS_PLANTED
                            </div>

                            <div className="text-center relative z-10 py-10 px-4 md:py-14 w-full h-full flex flex-col justify-center items-center">
                                <div className="mon text-amber-500/50 uppercase tracking-[0.5em] font-bold mb-6 text-[0.8rem]">System Recovery</div>
                                <h2 className="playfair text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-black text-white italic drop-shadow-[0_10px_10px_rgba(245,158,11,0.3)] leading-[1.1]">
                                    They did not know we were <span className="text-amber-500 underline decoration-[6px] underline-offset-8">seeds."</span>
                                </h2>
                            </div>
                        </ComicPanel>
                    </div>

                    {/* Final Attribution Panel with Bouncy "Push-Up" Physics */}
                    <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.8,0.64,1)] flex justify-center items-start origin-bottom w-full max-w-[800px] ${phase >= 5 ? 'opacity-100 h-[140px] mt-6 lg:mt-10 translate-y-0' : 'opacity-0 h-0 mt-0 translate-y-24 pointer-events-none'}`}>

                        <div className={`border-[3px] border-white p-5 md:p-6 bg-black shadow-[8px_8px_0px_#ffffff] relative overflow-hidden inline-flex flex-col justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.8,0.64,1)] origin-bottom group w-full ${phase >= 5 ? 'scale-100 rotate-0' : 'scale-50 rotate-3'}`}>

                            <div className="absolute top-0 left-0 w-full h-[5px] bg-white opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-500 z-0"></div>

                            <div className="relative z-10 flex flex-col gap-3 md:gap-4 group-hover:text-black transition-colors duration-500 w-full text-center">
                                <div className="mono text-[0.65rem] md:text-[0.75rem] tracking-[0.2em] md:tracking-[0.4em] font-bold uppercase mix-blend-difference text-white">
                                    — PROVERB, ADOPTED BY INDIGENOUS PEOPLES RIGHTS MOVEMENTS WORLDWIDE
                                </div>

                                <div className="h-[2px] w-1/2 mx-auto bg-white/20 group-hover:bg-black/20 my-1 md:my-2"></div>

                                <div className="mono text-[0.75rem] md:text-[0.9rem] text-green-400 font-bold uppercase tracking-[0.3em] font-black mix-blend-difference group-hover:text-white">
                                    &gt; THIS REPOSITORY IS NOW OPEN TO THE PUBLIC.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SlideFinal;

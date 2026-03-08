import React, { useState, useEffect } from 'react';

// Comic Panel Component
const ComicPanel = ({ children, colSpan = "col-span-12", borderColor = "border-white", shadowColor = "#ffffff", bgColor = "bg-[#050505]", delay = 0, phase, reqPhase, extraClasses = "" }) => (
    <div
        className={`${colSpan} border-[3px] md:border-4 ${borderColor} ${bgColor} p-6 lg:p-8 relative overflow-hidden transition-all duration-700 ease-out transform ${phase >= reqPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${extraClasses}`}
        style={{
            boxShadow: phase >= reqPhase ? `8px 8px 0px ${shadowColor}` : `0px 0px 0px ${shadowColor}`,
            transitionDelay: `${delay}ms`
        }}
    >
        {children}
    </div>
);

// Progress / Health Meter for Comic Style
const HealthMeter = ({ label, target, colorHex, isIntact, delay, show }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => setWidth(target), delay + 400);
            return () => clearTimeout(timer);
        } else {
            setWidth(0);
        }
    }, [show, target, delay]);

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="mb-4">
                {isIntact && <div className="mono text-[0.6rem] text-black bg-[#22c55e] px-2 py-0.5 w-fit mb-3 font-bold tracking-widest uppercase animate-pulse">CRITICAL_NODE_SECURE</div>}
                <div className="flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row border-b-2 border-dashed pb-2" style={{ borderColor: `${colorHex}40` }}>
                    <h3 className="playfair text-2xl md:text-3xl font-black uppercase text-white leading-none whitespace-nowrap">
                        {label}
                    </h3>
                    <span className="mono text-2xl md:text-3xl font-bold leading-none" style={{ color: colorHex }}>
                        {width}%
                    </span>
                </div>
            </div>

            {/* The Bar */}
            <div className="w-full h-8 md:h-12 border-[3px] p-1 relative bg-[#020202] mt-auto" style={{ borderColor: colorHex }}>
                <div
                    className="h-full transition-all duration-[2000ms] ease-out flex items-center group relative overflow-hidden"
                    style={{
                        width: `${width}%`,
                        backgroundColor: colorHex
                    }}
                >
                    {/* Comic Halftone inside the bar */}
                    {!isIntact && (
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
                            backgroundSize: '8px 8px'
                        }}></div>
                    )}
                    {/* Scanning line for intact */}
                    {isIntact && (
                        <div className="absolute top-0 left-0 h-full w-[30px] bg-white opacity-50 animate-[scan_1.5s_linear_infinite]"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Slide20 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),   // Show text
                setTimeout(() => setPhase(2), 500),   // Show panels row 1
                setTimeout(() => setPhase(3), 900),   // Show panels row 2
                setTimeout(() => setPhase(4), 1300),  // Show panels row 3
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#0a0f0a] flex justify-center items-center overflow-y-auto overflow-x-hidden p-4 md:p-8 lg:p-12 relative">

            {/* Dark Comic Halftone Background */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #22c55e 2px, transparent 2.5px)',
                backgroundSize: '16px 16px'
            }}></div>

            <div className="max-w-[1400px] w-full grid grid-cols-12 gap-6 md:gap-8 lg:gap-10 relative z-10 my-auto">

                {/* --- ROW 1 --- */}

                {/* Panel 1: Main Title */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-8"
                    borderColor="border-[#22c55e]"
                    shadowColor="#22c55e"
                    bgColor="bg-[#050a05]"
                    phase={phase} reqPhase={2} delay={0}
                >
                    {/* Caption Box */}
                    <div className="absolute top-0 left-0 bg-[#22c55e] text-black mono font-bold text-[0.65rem] px-3 py-1 border-b-2 border-r-2 border-black tracking-widest">
                        NODE // 11
                    </div>
                    {/* Background Graphic */}
                    <div className="absolute -right-10 -bottom-10 text-[15rem] font-black text-[#22c55e] opacity-10 pointer-events-none rotate-12">
                        RST
                    </div>

                    <div className="mt-8 flex flex-col gap-2 relative z-10">
                        <div className="mono text-[#22c55e] text-[0.7rem] md:text-[0.8rem] tracking-[0.4em] uppercase font-bold mb-2">
                            System Rebuild_Protocol
                        </div>
                        <h2 className="playfair text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase text-white tracking-widest leading-[0.85] drop-shadow-[4px_4px_0_rgba(34,197,94,0.3)]">
                            What<br />Remains.
                        </h2>
                        <h2 className="playfair text-3xl md:text-5xl lg:text-[4rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-emerald-300 mt-2">
                            What's Rebuilt.
                        </h2>
                    </div>
                </ComicPanel>

                {/* Panel 2: The Narrator Quote */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-4"
                    borderColor="border-[#f59e0b]"
                    shadowColor="#f59e0b"
                    bgColor="bg-[#120a05]"
                    phase={phase} reqPhase={2} delay={200}
                >
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#f59e0b] rotate-45 border-4 border-[#120a05]"></div>
                    <div className="absolute top-2 right-3 text-black font-black text-2xl z-10">!</div>

                    <div className="h-full flex flex-col justify-center relative z-10">
                        <div className="mono text-[#f59e0b]/50 text-[0.6rem] tracking-[0.3em] font-bold mb-4 uppercase">
                            [ System Observer Note ]
                        </div>
                        <p className="mono text-[0.85rem] md:text-[0.95rem] text-[#f59e0b] leading-[1.8] font-bold uppercase tracking-wide">
                            "The repo isn't fully restored. But it was never fully deleted either. They're still here. Still weaving.
                            <span className="block mt-4 bg-[#f59e0b] text-[#120a05] p-2 inline-block">Still going upstream.</span>"
                        </p>
                    </div>
                </ComicPanel>

                {/* --- ROW 2 --- */}

                <ComicPanel colSpan="col-span-12 md:col-span-6 lg:col-span-3" borderColor="border-amber-500" shadowColor="#f59e0b" phase={phase} reqPhase={3} delay={0}>
                    <HealthMeter label="Land Rights" target={35} colorHex="#f59e0b" show={phase >= 3} delay={0} />
                </ComicPanel>

                <ComicPanel colSpan="col-span-12 md:col-span-6 lg:col-span-3" borderColor="border-emerald-500" shadowColor="#10b981" phase={phase} reqPhase={3} delay={150}>
                    <HealthMeter label="Culture" target={60} colorHex="#10b981" show={phase >= 3} delay={150} />
                </ComicPanel>

                <ComicPanel colSpan="col-span-12 md:col-span-6 lg:col-span-3" borderColor="border-emerald-500" shadowColor="#10b981" phase={phase} reqPhase={3} delay={300}>
                    <HealthMeter label="Language" target={50} colorHex="#10b981" show={phase >= 3} delay={300} />
                </ComicPanel>

                <ComicPanel colSpan="col-span-12 md:col-span-6 lg:col-span-3" borderColor="border-amber-500" shadowColor="#f59e0b" phase={phase} reqPhase={3} delay={450}>
                    <HealthMeter label="Economy" target={40} colorHex="#f59e0b" show={phase >= 3} delay={450} />
                </ComicPanel>

                {/* --- ROW 3 --- */}

                {/* Panel 7: IDENTITY (The huge final intact bar) */}
                <ComicPanel
                    colSpan="col-span-12"
                    borderColor="border-white"
                    shadowColor="#ffffff"
                    bgColor="bg-green-950/20"
                    phase={phase} reqPhase={4} delay={0}
                    extraClasses="border-[4px]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle,#22c55e_1px,transparent_1.5px)] bg-[size:10px_10px] opacity-10"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 h-full">
                        <div className="flex-shrink-0">
                            <h3 className="playfair text-5xl md:text-7xl font-black uppercase text-white tracking-widest drop-shadow-[3px_3px_0_rgba(255,255,255,0.2)]">
                                IDENTITY
                            </h3>
                            <div className="mono text-white/50 tracking-[0.5em] mt-2 font-bold uppercase text-[0.8rem]">
                                Core Directives
                            </div>
                        </div>

                        <div className="w-full h-12 md:h-16 border-[4px] border-white p-1 relative bg-black flex-grow flex items-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                            <div className="h-full bg-white transition-all duration-[3000ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] relative overflow-hidden flex items-center px-4" style={{ width: phase >= 4 ? '100%' : '0%' }}>
                                <span className="mono font-black text-black text-2xl md:text-3xl whitespace-nowrap z-10">100% INTACT</span>
                                <div className="absolute inset-0 bg-[#22c55e] opacity-40 mix-blend-multiply"></div>
                                <div className="absolute top-0 left-0 w-20 h-full bg-white opacity-80 blur-[10px] animate-[scan_1s_linear_infinite]"></div>
                            </div>
                        </div>
                    </div>
                </ComicPanel>

            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateX(-200%); }
                    100% { transform: translateX(1000%); }
                }
            `}</style>

        </div>
    );
};

export default Slide20;

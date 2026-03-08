import React, { useState, useEffect, useRef } from 'react';
import { SlideContent } from '../components/SlideElements';

const Slide04 = ({ isActive }) => {
    const [phase, setPhase] = useState(0); // 0: initial, 1: header, 2-7: cells, 8: badge, 9: transition
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
            setPhase(0);
            clearTimers();
            return;
        }

        setPhase(1);

        for (let i = 0; i < 6; i++) {
            addTimer(() => setPhase(prev => Math.max(prev, i + 2)), 400 + (i * 150));
        }

        addTimer(() => setPhase(8), 1600);
        addTimer(() => setPhase(9), 2300);

        return () => clearTimers();
    }, [isActive]);

    const stats = [
        { label: "AREA", value: "18,846.97", unit: "km²", width: "85%" },
        { label: "FOREST COVER", value: "~71", unit: "%", width: "71%" },
        { label: "PROVINCES", value: "5", unit: "districts", width: "20%" },
        { label: "ESTABLISHED", value: "1995", unit: "(R.A. 7901)", width: "100%" },
        { label: "NAME EXISTED", value: "400+", unit: "years prior", width: "100%", highlight: true },
        { label: "INDIGENOUS GROUPS", value: "3", unit: "primary", width: "40%", highlight: true }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#040604] overflow-hidden relative">

            {/* Background Aesthetic Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(var(--green) 1px, transparent 1px), linear-gradient(90deg, var(--green) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            <SlideContent className="relative z-10 flex flex-col items-center">
                <div className="w-full max-w-[1000px] flex flex-col items-center">

                    {/* Header Bar */}
                    <div
                        className={`w-full flex items-center justify-between border-b-2 border-[var(--green)]/50 pb-3 mb-10 transition-all duration-1000 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-[var(--green)] animate-pulse" />
                            <div className="mono text-[0.9rem] md:text-[1.1rem] tracking-[0.3em] text-[var(--white)] font-bold">
                                // FILE_INSPECTOR
                            </div>
                        </div>
                        <div className="mono text-[0.8rem] md:text-[0.9rem] tracking-widest text-[var(--muted)]">
                            REGION:13_CARAGA
                        </div>
                    </div>

                    {/* Data Container with Tech Corners */}
                    <div className="relative w-full p-[1px] bg-gradient-to-b from-green-900/40 to-transparent mb-10">
                        {/* Sci-fi Corner accents */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--green)] z-10" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--green)] z-10" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--green)] z-10" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--green)] z-10" />

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-green-950/20 overflow-hidden backdrop-blur-sm"
                            style={{ opacity: phase >= 2 ? 1 : 0 }}
                        >
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className={`relative bg-[#070b07] p-6 hover:bg-[#0a100a] transition-all duration-700 overflow-hidden group ${phase >= (i + 2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                >
                                    {/* Subtle background bar graph */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] bg-[var(--green)]/30 transition-all duration-1000 delay-500 ease-out group-hover:bg-[var(--green)] group-hover:h-full group-hover:opacity-10`}
                                        style={{ width: phase >= (i + 2) ? stat.width : '0%' }}
                                    />

                                    <div className="mono text-[0.7rem] md:text-[0.8rem] uppercase tracking-widest text-[var(--muted)] mb-3 flex items-center justify-between">
                                        <span>{stat.label}</span>
                                        <span className="opacity-30 text-[0.9rem]">0{i + 1}</span>
                                    </div>
                                    <div className="flex items-baseline gap-3">
                                        <span
                                            className={`mono font-bold text-4xl md:text-5xl tracking-tight ${stat.highlight ? 'text-[var(--white)]' : 'text-[var(--green)]'}`}
                                            style={{ textShadow: stat.highlight ? '0 0 10px rgba(255,255,255,0.2)' : '0 0 15px rgba(74,222,128,0.2)' }}
                                        >
                                            {stat.value}
                                        </span>
                                        <span className="mono text-[0.8rem] md:text-[1rem] text-[var(--muted)]">
                                            {stat.unit}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Status Console and Quote */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mt-6">

                        {/* Status Console */}
                        <div
                            className={`flex items-center gap-3 px-5 py-3 border border-amber-500/30 bg-amber-500/10 transition-all duration-1000 relative overflow-hidden ${phase >= 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--amber)] animate-pulse" />
                            <div className="mono text-[0.8rem] md:text-[0.95rem] font-bold tracking-widest text-[var(--amber)]">
                                ⚠ STATUS: PARTIALLY RECOVERED
                            </div>
                        </div>

                        {/* Dramatic Transition Line */}
                        <div
                            className={`text-right transition-all duration-[1200ms] ${phase >= 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <div className="inline-block relative">
                                <span className="absolute -left-6 top-0 text-[var(--muted)] playfair text-3xl font-bold opacity-30">"</span>
                                <div className="playfair italic text-2xl md:text-3xl text-[var(--white)] font-bold tracking-wide">
                                    The land is recoverable. <br /><span className="text-[var(--ember-light)]">But what about the people?</span>
                                </div>
                                <span className="absolute -right-6 bottom-0 text-[var(--muted)] playfair text-3xl font-bold opacity-30">"</span>
                            </div>
                        </div>
                    </div>

                </div>
            </SlideContent>
        </div>
    );
};

export default Slide04;

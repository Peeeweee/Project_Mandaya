import React, { useState, useEffect, useRef } from 'react';
import { SlideContent } from '../components/SlideElements';

const Slide04 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);
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
        { label: "AREA", value: "18,846.97", unit: "km²", rotate: "-rotate-1", color: "var(--green)" },
        { label: "FOREST COVER", value: "~71", unit: "%", rotate: "rotate-1", color: "var(--amber)" },
        { label: "PROVINCES", value: "5", unit: "districts", rotate: "-rotate-2", color: "var(--white)" },
        { label: "ESTABLISHED", value: "1995", unit: "(R.A. 7901)", rotate: "rotate-2", color: "var(--green)" },
        { label: "NAME EXISTED", value: "400+", unit: "years prior", rotate: "-rotate-1", color: "var(--amber)" },
        { label: "INDIGENOUS GROUPS", value: "3", unit: "primary", rotate: "rotate-1", color: "var(--white)" }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#080a08] overflow-hidden relative font-sans">

            {/* Artsy Comic Halftone Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.15]"
                style={{
                    backgroundImage: 'radial-gradient(circle, var(--green) 2px, transparent 2.5px)',
                    backgroundSize: '16px 16px',
                }}
            />
            {/* Added overlay to fade edges */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_10%,#080a08_90%)]" />

            <SlideContent className="relative z-10 flex flex-col items-center">
                <div className="w-full max-w-[1050px] flex flex-col items-center gap-10">

                    {/* Header Bar - Comic Title Style */}
                    <div
                        className={`w-full max-w-lg self-start border-[3px] border-white bg-black p-3 uppercase tracking-widest shadow-[6px_6px_0px_var(--green)] transition-all duration-700 -rotate-1 ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'}`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="mono text-[1rem] md:text-[1.1rem] font-black text-white flex items-center gap-3">
                                <span className="w-4 h-4 bg-[var(--green)] inline-block animate-pulse border-2 border-white"></span>
                                // FILE_INSPECTOR
                            </span>
                            <span className="mono text-[0.7rem] md:text-sm bg-white text-black font-bold px-2 py-0.5">
                                REG:13_CARAGA
                            </span>
                        </div>
                    </div>

                    {/* Data Container with Comic Panels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full px-4 md:px-0">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`relative border-[3px] border-white p-6 bg-[#0c100c] transition-all duration-[600ms] ease-out hover:scale-[1.02] group ${stat.rotate} ${phase >= (i + 2) ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-90'}`}
                                style={{
                                    boxShadow: `6px 6px 0px ${stat.color}`
                                }}
                            >
                                {/* Diagonal action lines background */}
                                <div className="absolute inset-0 pointer-events-none opacity-5 transition-opacity duration-300 group-hover:opacity-[0.15]"
                                    style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)' }}
                                />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="mono text-[0.8rem] md:text-[0.9rem] uppercase tracking-widest font-black bg-white text-black px-3 py-1.5 shadow-[3px_3px_0px_#000] transform -skew-x-6">
                                            {stat.label}
                                        </span>
                                        <span className="mono font-black text-4xl opacity-[0.15] text-white transform rotate-6">
                                            0{i + 1}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-3 mt-2">
                                        <span
                                            className="mono font-black text-5xl md:text-6xl tracking-tighter text-white transform group-hover:translate-x-1 transition-transform"
                                            style={{ textShadow: `4px 4px 0px ${stat.color}` }}
                                        >
                                            {stat.value}
                                        </span>
                                        <span className="mono text-[0.9rem] md:text-[1rem] font-bold text-gray-400 mb-2 uppercase">
                                            {stat.unit}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Status Console and Quote */}
                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mt-6 px-4 md:px-0">

                        {/* Status Console - Action Sticker */}
                        <div
                            className={`border-[3px] border-white bg-[var(--amber)] px-6 py-4 transform rotate-3 shadow-[6px_6px_0px_var(--red)] transition-all duration-[800ms] ${phase >= 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                        >
                            <div className="mono text-[1rem] md:text-[1.1rem] font-black tracking-widest text-black uppercase transform -skew-x-6 flex items-center gap-2">
                                <span className="text-xl">⚠</span> STATUS: PARTIALLY RECOVERED
                            </div>
                        </div>

                        {/* Dramatic Quote Narration Box */}
                        <div
                            className={`relative border-[3px] border-white bg-[#0f140f] p-8 md:p-10 max-w-xl text-white shadow-[10px_10px_0px_var(--green)] transition-all duration-[1000ms] ease-out -rotate-1 ${phase >= 9 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                        >
                            {/* Narration Tag */}
                            <div className="absolute -top-4 -left-4 bg-[var(--red)] text-white font-black px-4 py-1.5 border-[3px] border-white text-sm uppercase tracking-widest rotate-6 shadow-[4px_4px_0px_#000]">
                                NARRATION
                            </div>

                            <div className="playfair italic text-2xl md:text-[1.8rem] font-bold leading-relaxed mt-2 text-gray-200">
                                "The land is recoverable. <br />
                                <span className="text-[var(--ember-light)] font-black block mt-4 not-italic text-3xl md:text-[2.5rem] tracking-tight uppercase leading-none" style={{ textShadow: "4px 4px 0px rgba(0,0,0,1)" }}>But what about the people?"</span>
                            </div>
                        </div>
                    </div>

                </div>
            </SlideContent>
        </div>
    );
};

export default Slide04;

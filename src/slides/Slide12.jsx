import React, { useState, useEffect } from 'react';

const Slide12 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 600),
                setTimeout(() => setPhase(3), 900),
                setTimeout(() => setPhase(4), 1100),
                setTimeout(() => setPhase(5), 1300),
                setTimeout(() => setPhase(6), 1500)
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const systems = [
        {
            id: "SYS_01",
            name: "Ligad",
            type: "Side-crop",
            color: "var(--green)",
            desc: "Root crops purposefully planted alongside the main rice/corn fields. Acts as an automatic nutritional fallback during crop failure.",
            parallel: "redundancy pattern",
            code: "if (mainCrop == FAILED) return ligad();"
        },
        {
            id: "SYS_02",
            name: "Pasoot",
            type: "Undercropping",
            color: "var(--amber)",
            desc: "Yam planted directly beneath corn. Achieves double crop yield from a single plot without executing surface area expansion.",
            parallel: "parallel processing",
            code: "await Promise.all([corn(), yam()]);"
        },
        {
            id: "SYS_03",
            name: "Al-luyon",
            type: "Labor Exchange",
            color: "#3b82f6",
            desc: "Two distinct parties trade workforce output. Contracting side automatically provides food and wine as standard protocol compensation.",
            parallel: "API service contract",
            code: "fetch('/labor/trade', { body: 'wine' })"
        },
        {
            id: "SYS_04",
            name: "Bulig",
            type: "Communal",
            color: "#a855f7",
            desc: "Total community dynamically reallocates to work together on massive tasks. Execution always terminates in a localized feast.",
            parallel: "open source contribution",
            code: "npm install @community/harvest --feast"
        }
    ];

    return (
        <div className="w-full min-h-full bg-[var(--deep)] px-8 md:px-16 lg:px-24 py-20 overflow-y-auto no-scrollbar relative flex flex-col justify-center items-center">

            <div className={`w-full max-w-[1600px] flex flex-col xl:flex-row justify-between gap-16 xl:gap-32 relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* LEFT: Title & Quote */}
                <div className={`xl:w-[35%] flex flex-col justify-center transition-all duration-1000 transform ${phase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>

                    <div className="mb-12 lg:mb-16">
                        <span className="mono text-[0.8rem] md:text-[0.9rem] tracking-[0.3em] font-bold text-[var(--green)] uppercase bg-green-950/30 px-4 py-2 border border-green-900/50 shadow-[0_0_15px_rgba(74,222,128,0.05)]">
                            SEC_05 // DISTRIBUTED_SYSTEMS
                        </span>
                    </div>

                    <h2 className="playfair text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] text-[var(--white)] tracking-wide mb-14">
                        Survival <br />
                        <span className="text-[var(--green)] italic text-opacity-90 mt-6 block">Architecture</span>
                    </h2>

                    <div className="relative border-l-4 border-l-[var(--green)] pl-10 py-4 mt-8 lg:mt-16 bg-gradient-to-r from-green-900/10 to-transparent">
                        <span className="absolute -left-6 top-[-15px] text-[var(--green)] font-mono text-6xl opacity-30">"</span>
                        <p className="playfair italic text-[var(--white)] text-3xl md:text-4xl leading-[1.7]">
                            They didn't just farm the land. <br className="hidden md:block" />
                        </p>
                        <p className="playfair text-[var(--green)] font-bold text-2xl md:text-3xl mt-6">
                            They coded a survival system into it.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 mt-20 overflow-hidden opacity-60">
                        <div className="w-20 h-[2px] bg-[var(--green)]"></div>
                        <div className="mono text-[0.75rem] tracking-[0.3em] text-[var(--green)] uppercase font-bold flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)] animate-pulse"></span>
                            Executing Pipeline...
                        </div>
                    </div>

                </div>

                {/* RIGHT: System Logic Blocks */}
                <div className={`xl:w-[58%] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 transition-all duration-1000 transform ${phase >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>

                    {systems.map((sys, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#050605] border border-[var(--border)] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-700 shadow-2xl flex flex-col justify-between ${phase >= (3 + idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        >
                            {/* Accent Edge */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(to bottom, ${sys.color}, ${sys.color}20, transparent)` }}></div>

                            {/* Watermark Number */}
                            <div className="absolute right-[-20px] top-[-30px] text-[10rem] md:text-[14rem] font-black playfair text-white pointer-events-none z-0 tracking-tighter mix-blend-screen opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500">
                                0{idx + 1}
                            </div>

                            <div className="relative z-10 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-6">
                                    <div>
                                        <div className="mono text-[0.65rem] tracking-[0.2em] text-white/40 mb-2">{sys.id}</div>
                                        <h3 className="mono text-3xl md:text-4xl font-bold uppercase tracking-wide" style={{ color: sys.color }}>{sys.name}</h3>
                                    </div>
                                    <div className="mono text-[0.65rem] tracking-[0.2em] text-[var(--muted)] px-3 py-1.5 bg-white/5 border border-white/10 uppercase mb-1">
                                        {sys.type}
                                    </div>
                                </div>

                                <p className="mono text-[0.85rem] md:text-[0.95rem] text-[var(--muted)] leading-[1.8] flex-grow">
                                    {sys.desc}
                                </p>
                            </div>

                            {/* "Code" Implementation Block */}
                            <div className="relative z-10 mt-8">
                                <div className="bg-[#030303] border border-white/10 p-5 rounded-sm relative group-hover:border-white/20 transition-colors shadow-inner">
                                    <div className="mono text-[0.65rem] text-[var(--amber)] mb-3 uppercase tracking-[0.2em] opacity-80 border-b border-white/5 pb-2">
                                        // {sys.parallel}
                                    </div>
                                    <div className="mono text-[0.75rem] md:text-[0.8rem] text-[var(--white)] opacity-80 overflow-x-hidden text-ellipsis whitespace-nowrap">
                                        <span className="text-white/30 mr-3">$&gt;</span>
                                        {sys.code}
                                    </div>
                                    {/* Scanline effect on hover */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-full h-[1px] bg-white/20 absolute top-0 animate-[scan_2s_linear_infinite]" style={{ boxShadow: `0 0 10px ${sys.color}50` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(var(--green) 1px, transparent 1px), linear-gradient(90deg, var(--green) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    5% { opacity: 1; }
                    95% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Slide12;

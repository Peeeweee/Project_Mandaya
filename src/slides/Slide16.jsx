import React, { useState, useEffect } from 'react';

const Slide16 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 800),
                setTimeout(() => setPhase(3), 1300),
                setTimeout(() => setPhase(4), 1800),
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#020202] p-8 lg:p-16 flex overflow-y-auto no-scrollbar relative items-center justify-center">

            {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="w-full max-w-[1300px] flex flex-col gap-6 relative z-10">

                {/* --- TOP ROW --- */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch">

                    {/* PANEL 1: Main Quote (Top Left) */}
                    <div className={`relative w-full lg:w-[65%] border border-green-900/30 bg-[#050806] bg-opacity-80 p-8 lg:p-12 overflow-hidden flex flex-col justify-center transition-all duration-700 transform ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'}`}>
                        {/* Brackets */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-green-500/50"></div>
                        <div className="absolute right-4 bottom-4 w-6 h-6 border-b-2 border-r-2 border-green-500/50"></div>

                        <div className="mb-6 lg:mb-8">
                            <span className="mono text-[0.65rem] md:text-[0.75rem] tracking-[0.3em] font-bold text-green-400 uppercase flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                SEC_09 // PROTOCOL_OVERRIDE
                            </span>
                        </div>

                        <h2 className="playfair text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.2] text-white relative z-10 w-full mb-4">
                            "Anyone in the community can <span className="text-green-400 italic">dream a cure.</span><br />
                            That person becomes the <span className="text-white italic relative inline-block">healer.</span>"
                        </h2>

                        {/* Watermark */}
                        <div className="absolute -right-8 -bottom-16 text-[10rem] md:text-[14rem] font-black playfair text-green-500/5 select-none pointer-events-none">
                            09
                        </div>
                    </div>

                    {/* PANEL 4: Log / Console (Top Right) */}
                    <div className={`relative w-full lg:w-[35%] border border-green-900/30 bg-[#020503] p-8 flex flex-col justify-center transition-all duration-700 transform delay-500 ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="mono text-[0.75rem] md:text-[0.8rem] text-green-500/70 tracking-[0.2em] uppercase leading-[2.5]">
                            <div className="flex flex-col mb-4">
                                <span className="opacity-50">sys.log_</span>
                                <span className="text-white font-bold block mt-1">A crowdsourced medical system.</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="opacity-50">init()_</span>
                                <span className="text-white/80 block mt-1">Open source healing.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="opacity-50">deps___</span>
                                <span className="text-green-400 font-bold border-b border-green-400/30 pb-0.5 w-fit mt-1">No hospital required.</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM ROW --- */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch">

                    {/* PANEL 2: BALYAN (Bottom Left) */}
                    <div className={`relative w-full lg:w-[50%] border border-white/5 bg-[#080808] p-8 lg:p-10 flex flex-col justify-between overflow-hidden group transition-all duration-700 transform delay-200 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {/* Hover scanline */}
                        <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 animate-[scan_2s_linear_infinite]" style={{ backgroundColor: '#22c55e', boxShadow: '0 0 15px #22c55e' }}></div>

                        <div>
                            <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                                <h3 className="playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest uppercase">
                                    BALYAN
                                </h3>
                                <div className="mono text-[0.6rem] md:text-[0.65rem] text-green-500 tracking-[0.2em] uppercase text-right leading-[1.6]">
                                    [ CLASS: COMMUNITY ]<br />
                                    STATUS: ACTIVE
                                </div>
                            </div>

                            <div className="mono text-[0.7rem] md:text-[0.8rem] text-white/50 tracking-[0.2em] uppercase leading-[1.8] mb-8">
                                Direct line to spiritual diagnostic.
                            </div>
                        </div>

                        <div className="flex gap-2 flex-wrap items-center mt-auto">
                            <span className="mono text-[0.6rem] md:text-[0.65rem] bg-green-900/20 text-green-400 border border-green-500/20 px-3 py-1.5 uppercase tracking-widest">Dreams</span>
                            <span className="mono text-[0.6rem] md:text-[0.65rem] bg-green-900/20 text-green-400 border border-green-500/20 px-3 py-1.5 uppercase tracking-widest">Prayer</span>
                            <span className="mono text-[0.6rem] md:text-[0.65rem] bg-green-900/20 text-green-400 border border-green-500/20 px-3 py-1.5 uppercase tracking-widest">Medicine</span>
                        </div>
                    </div>

                    {/* PANEL 3: KALALAYSAN (Bottom Right) */}
                    <div className={`relative w-full lg:w-[50%] border border-white/5 bg-[#0a0505] p-8 lg:p-10 flex flex-col justify-between overflow-hidden group transition-all duration-700 transform delay-300 ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {/* Red danger scanline */}
                        <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 animate-[scan_2s_linear_infinite]" style={{ backgroundColor: '#ef4444', boxShadow: '0 0 15px #ef4444' }}></div>

                        <div>
                            <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                                <h3 className="playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest uppercase">
                                    KALALAYSAN
                                </h3>
                                <div className="mono text-[0.60rem] md:text-[0.65rem] tracking-[0.2em] font-bold text-red-500 border border-red-500/30 bg-red-500/10 px-2 py-1 text-center uppercase">
                                    HIGH-PRIORITY
                                </div>
                            </div>
                            <div className="mono text-[0.75rem] md:text-[0.8rem] text-white/60 tracking-[0.2em] uppercase leading-[1.8]">
                                Highest-Rank Healer
                            </div>
                        </div>

                        <div className="mt-8 bg-red-950/20 border border-red-900/30 p-5 lg:p-6 relative">
                            <div className="absolute -top-3 -right-2 bg-[#0a0505] px-2 mono text-[0.55rem] text-red-500 tracking-[0.3em] uppercase">
                                System Override
                            </div>
                            <div className="mono text-[0.7rem] md:text-[0.8rem] text-red-400 leading-[1.8] uppercase flex items-start gap-3">
                                <span className="text-red-500 mt-0.5">▶</span>
                                <div className="flex flex-col">
                                    <span className="block mb-1">Exclusive capability parameter:</span>
                                    <span className="font-bold text-white border-b border-red-500/50 pb-1 w-fit mt-1 text-[0.8rem] md:text-[0.9rem]">CAN TREAT THE DYING.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

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

export default Slide16;

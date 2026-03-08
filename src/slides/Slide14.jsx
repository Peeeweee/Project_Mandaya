import React, { useState, useEffect } from 'react';

const Slide14 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 600),
                setTimeout(() => setPhase(3), 900),
                setTimeout(() => setPhase(4), 1200)
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const artifacts = [
        {
            id: "TXT_01", type: "TEXTILE", title: "Dagmay Cloth", color: "#d97706",
            desc: "Main physical layer. Handwoven abaca fiber, naturally mud-dyed. High sacred value requirement."
        },
        {
            id: "HDG_02", type: "HEADGEAR", title: "Putong", color: "#eab308",
            desc: "Color-coded rank signaling. Protocol executed visually: [YELLOW: Ruler] [RED: Elder]."
        },
        {
            id: "ACC_03", type: "ACCESSORY", title: "Beads / Brass", color: "#fef08a",
            desc: "Hardware equipped on neck and arms. Actively broadcasts public status, wealth, and identity."
        },
        {
            id: "WPN_04", type: "WEAPONRY", title: "Kris & Kampilan", color: "#ef4444",
            desc: "Bladed armaments. Required equipment loadout for ceremonial conflict rites and active combat."
        },
        {
            id: "ORG_05", type: "ORGANIC", title: "Floral Orns", color: "#22c55e",
            desc: "Temporary biological attachments. Interfaced strictly during culturally significant ritual occasions."
        },
        {
            id: "MOD_06", type: "BODY_MOD", title: "Batok (Tattoo)", color: "#3b82f6",
            desc: "Permanent dermal memory limit. Inscribes rites of passage directly into the biological shell."
        }
    ];

    return (
        <div className="w-full min-h-full bg-[var(--deep)] px-8 md:px-16 lg:px-24 py-20 overflow-y-auto no-scrollbar relative flex flex-col justify-center items-center">

            <div className={`w-full max-w-[1600px] flex flex-col xl:flex-row justify-between gap-16 xl:gap-32 relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* LEFT: Title & Quote */}
                <div className={`xl:w-[35%] flex flex-col justify-center transition-all duration-1000 transform ${phase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>

                    <div className="mb-12 lg:mb-16">
                        <span className="mono text-[0.8rem] md:text-[0.9rem] tracking-[0.3em] font-bold text-[#ef4444] uppercase bg-red-950/30 px-4 py-2 border border-red-900/50 shadow-[0_0_15px_rgba(239,68,68,0.15)] flex items-center w-fit gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
                            SEC_07 // PHYSICAL_INTERFACE
                        </span>
                    </div>

                    <h2 className="playfair text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] text-[var(--white)] tracking-wide mb-8">
                        Identity <br />
                        <span className="text-[#ef4444] italic text-opacity-90 mt-4 block">Loadout.</span>
                    </h2>

                    <div className="mono text-[0.85rem] md:text-[1rem] text-white/60 tracking-[0.3em] uppercase font-bold mb-12 border-b border-white/10 pb-6 w-fit">
                        How They Presented Themselves
                    </div>

                    <div className="relative border-l-4 border-l-[#3b82f6] pl-10 py-4 mt-8 bg-gradient-to-r from-blue-900/10 to-transparent">
                        <span className="absolute -left-6 top-[-15px] text-[#3b82f6] font-mono text-6xl opacity-30">"</span>
                        <p className="playfair italic text-[var(--white)] text-3xl md:text-4xl leading-[1.6]">
                            Even their skin was a record.
                        </p>
                        <p className="playfair text-[#3b82f6] font-bold text-2xl md:text-3xl mt-6 leading-[1.6]">
                            A rite of passage written <br className="hidden xl:block" /> in permanent ink.
                        </p>
                    </div>

                </div>

                {/* RIGHT: Loadout Grid */}
                <div className={`xl:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 transition-all duration-1000 transform ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                    {artifacts.map((artifact, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#050605] border border-white/5 border-l-[6px] p-6 lg:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between shadow-xl ${phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                            style={{ transitionDelay: `${idx * 150}ms`, borderLeftColor: artifact.color }}
                        >
                            {/* Terminal Scanline effect on hover */}
                            <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 animate-[scan_2s_linear_infinite]" style={{ backgroundColor: artifact.color, boxShadow: `0 0 15px ${artifact.color}` }}></div>

                            <div className="flex justify-between items-start mb-10 relative z-10">
                                <div className="mono text-[0.75rem] font-bold uppercase tracking-[0.2em]" style={{ color: artifact.color }}>
                                    {artifact.id}
                                </div>
                                <div className="mono text-[0.6rem] text-white/50 uppercase tracking-[0.3em] border border-white/10 px-3 py-1 bg-white/5">
                                    {artifact.type}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="mono text-2xl lg:text-3xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-amber-100 transition-colors">
                                    {artifact.title}
                                </h3>
                                <p className="mono text-[0.8rem] lg:text-[0.85rem] text-white/40 leading-[1.8] group-hover:text-white/70 transition-colors">
                                    {artifact.desc}
                                </p>
                            </div>

                            {/* Faint Background Watermark Number */}
                            <div className="absolute right-[-10px] bottom-[-20px] text-[8rem] font-black mono text-white pointer-events-none z-0 tracking-tighter mix-blend-screen opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500">
                                {idx + 1}
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            {/* Background Data Grid Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

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

export default Slide14;

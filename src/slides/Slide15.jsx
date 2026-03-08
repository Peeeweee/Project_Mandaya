import React, { useState, useEffect } from 'react';

const Slide15 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 600),
                setTimeout(() => setPhase(3), 900),
                setTimeout(() => setPhase(4), 1200),
                setTimeout(() => setPhase(5), 1500),
                setTimeout(() => setPhase(6), 1800)
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const realms = [
        {
            id: "RLM_01",
            name: "Langit",
            translation: "The Heavens",
            type: "ROOT_PROCESS",
            color: "#3b82f6", // blue
            spirits: [
                { name: "Magbabaya", desc: "The Governor of everything. Highest deity and source of all." },
                { name: "Tagamaling", desc: "Spirit of life and weaver's inspiration." },
                { name: "Ompong", desc: "Advisory spirit assisting in wise decision execution." },
                { name: "Mabusaw", desc: "Dual-state messenger of both good and bad luck." }
            ]
        },
        {
            id: "RLM_02",
            name: "Lupa",
            translation: "The Earth",
            type: "USER_SPACE",
            color: "#22c55e", // green
            spirits: [
                { name: "Apila", desc: "Giants inhabiting high mountains and rocky cliffs." },
                { name: "Tama", desc: "Elves residing deep in the heart of the forest." },
                { name: "Dagaw", desc: "Subterranean dwarves living in complex underground dwellings." },
                { name: "Bingit", desc: "Predatory spirits acting as crying decoys." }
            ]
        },
        {
            id: "RLM_03",
            name: "Ugsuban",
            translation: "The Underworld",
            type: "KERNEL_PANIC",
            color: "#ef4444", // red
            spirits: [
                { name: "Sibu-id", desc: "Gatekeeper daemon guarding the underworld entrance." },
                { name: "Mandangan", desc: "Goddess of war and red-colored atmospheric phenomena." },
                { name: "Tigbanua", desc: "Forest spirits associated with hunters and elite warriors." }
            ]
        }
    ];

    return (
        <div className="w-full min-h-full bg-[var(--deep)] px-8 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 overflow-y-auto no-scrollbar relative flex flex-col justify-center items-center">

            {/* TOP HEADER SECTION (Centered) */}
            <div className={`w-full max-w-[1400px] mx-auto flex flex-col items-center text-center mb-12 lg:mb-16 relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                <div className="mb-6">
                    <span className="mono text-[0.7rem] md:text-[0.8rem] tracking-[0.3em] font-bold text-teal-400 uppercase bg-teal-950/30 px-4 py-2 border border-teal-900/50 shadow-[0_0_15px_rgba(45,212,191,0.15)] flex items-center justify-center gap-3 w-fit mx-auto">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        SEC_08 // SYSTEM_GOVERNANCE
                    </span>
                </div>

                <h2 className="playfair text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] text-[var(--white)] tracking-wide mb-6">
                    Cosmic Architecture.
                </h2>

                <div className="relative border-t border-b border-teal-900/50 py-5 my-4 w-full max-w-[900px]">
                    <span className="absolute left-4 top-[-20px] text-teal-500 font-mono text-5xl opacity-20 hidden md:block">"</span>
                    <span className="absolute right-4 bottom-[-30px] text-teal-500 font-mono text-5xl opacity-20 transform rotate-180 hidden md:block">"</span>
                    <p className="playfair italic text-[var(--white)] text-[1.1rem] md:text-2xl leading-[1.6]">
                        Their God isn't binary — good vs. <span className="text-[#ef4444]">evil</span>. Magbabaya is the <span className="text-teal-400 font-bold not-italic">Governor of everything.</span> The source of both.
                    </p>
                    <p className="mono text-[0.7rem] md:text-[0.8rem] text-teal-200/50 tracking-[0.2em] md:tracking-widest mt-4 uppercase">
                        // Every OS has a root process that runs it all — light and dark.
                    </p>
                </div>

                <div className={`mt-2 transition-all duration-1000 delay-300 transform ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="mono text-[0.7rem] md:text-[0.85rem] leading-[1.8] text-[var(--muted)] max-w-[700px] mx-auto">
                        They explained the universe without a telescope. <span className="text-[var(--white)] font-bold">A serpent eating the heavens causes eclipses.</span> They were right about the awe.
                    </p>
                </div>

            </div>

            {/* THREE PILLARS (Grid layout) */}
            <div className={`w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 transition-all duration-1000 transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                {realms.map((realm, idx) => (
                    <div
                        key={idx}
                        className={`bg-[#050605] border border-white/5 border-t-[6px] relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col h-full ${phase >= (4 + idx) ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
                        style={{ transitionDelay: `${idx * 200}ms`, borderTopColor: realm.color }}
                    >
                        {/* Terminal Scanline effect on hover */}
                        <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 animate-[scan_2s_linear_infinite]" style={{ backgroundColor: realm.color, boxShadow: `0 0 15px ${realm.color}` }}></div>

                        {/* Watermark Number Centered */}
                        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black mono pointer-events-none z-0 tracking-tighter mix-blend-screen opacity-[0.015] group-hover:opacity-[0.03] transition-opacity" style={{ color: realm.color }}>
                            0{idx + 1}
                        </div>

                        {/* Pillar Header (Centered) */}
                        <div className="relative z-10 p-6 lg:p-8 border-b border-white/5 text-center bg-black/40">
                            <div className="mono text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: realm.color }}>
                                {realm.id}
                            </div>
                            <h3 className="playfair text-4xl lg:text-[2.8rem] font-bold text-white mb-2 tracking-widest uppercase">
                                {realm.name}
                            </h3>
                            <div className="mono text-[0.65rem] md:text-[0.7rem] text-white/50 tracking-[0.3em] uppercase mb-6">
                                {realm.translation}
                            </div>
                            <div className="mono text-[0.6rem] px-5 py-2 border border-white/10 bg-white/5 mx-auto w-fit uppercase tracking-[0.2em] shadow-inner font-bold" style={{ color: realm.color, borderColor: `${realm.color}40` }}>
                                {realm.type}
                            </div>
                        </div>

                        {/* Pillar Content / Spirits Vertical List */}
                        <div className="relative z-10 p-6 lg:p-8 flex flex-col gap-6 flex-grow bg-black/20">
                            {realm.spirits.map((spirit, sIdx) => (
                                <div key={sIdx} className="flex flex-col group/spirit relative pl-5">
                                    {/* Indicator Line Left */}
                                    <div className="absolute left-0 top-1 bottom-1 w-[2px] opacity-20 group-hover/spirit:opacity-100 transition-opacity" style={{ backgroundColor: realm.color }}></div>

                                    <div className="mono text-[0.75rem] md:text-[0.8rem] font-bold mb-2 uppercase tracking-widest transition-colors flex items-center justify-between" style={{ color: realm.color }}>
                                        {spirit.name}
                                        <span className="mono text-[0.55rem] opacity-30 tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">[{sIdx + 1}]</span>
                                    </div>
                                    <div className="mono text-[0.7rem] md:text-[0.75rem] text-[var(--muted)] leading-[1.7] group-hover/spirit:text-white/90 transition-colors">
                                        {spirit.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Background Data Grid Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

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

export default Slide15;

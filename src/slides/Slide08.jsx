import React, { useEffect, useState } from 'react';

const Slide08 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 800),
                setTimeout(() => setPhase(3), 1400),
                setTimeout(() => setPhase(4), 2000),
                setTimeout(() => setPhase(5), 2600),
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#030403] px-4 md:px-12 py-12 md:py-24 overflow-y-auto relative flex flex-col justify-center">

            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(var(--green) 1px, transparent 1px), linear-gradient(90deg, var(--green) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className={`w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* Left Column: Etymology */}
                <div className="lg:col-span-7 flex flex-col justify-center relative">
                    {/* Header */}
                    <div className={`mb-12 transition-all duration-1000 transform ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="px-3 py-1 bg-green-950/30 border border-green-900/50 mono text-xs tracking-[0.3em] font-bold text-[var(--green)]">
                                SEC_01 // IDENTITY
                            </div>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-900/50 to-transparent"></div>
                        </div>
                        <h2 className="playfair text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-[var(--white)] tracking-wide">
                            What Does Their <br /><span className="text-amber-500/90 italic">Name Mean?</span>
                        </h2>
                    </div>

                    {/* Word Equation */}
                    <div className="relative pl-6 md:pl-10 border-l-2 border-green-900/30 py-4 flex flex-col gap-6">
                        {/* MAN */}
                        <div className={`flex items-center gap-6 transition-all duration-700 transform ${phase >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-[#060a06] border border-green-900/50 flex items-center justify-center shrink-0 group hover:border-[var(--green)] hover:bg-green-950/20 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--green)] opacity-50"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--green)] opacity-50"></div>
                                <span className="mono text-2xl md:text-4xl text-[var(--white)] font-bold group-hover:text-[var(--green)] transition-colors">MAN</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="mono text-[var(--muted)] text-xs md:text-sm tracking-[0.2em] mb-2">PREFIX_VAL</span>
                                <span className="playfair text-xl md:text-3xl text-[var(--white)] opacity-90">inhabitant of</span>
                            </div>
                        </div>

                        {/* + */}
                        <div className={`w-24 md:w-32 flex justify-center transition-all duration-700 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-[1px] h-8 bg-green-900/50 relative">
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mono text-[var(--muted)] text-xl">+</span>
                            </div>
                        </div>

                        {/* DAYA */}
                        <div className={`flex items-center gap-6 transition-all duration-700 transform ${phase >= 3 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-[#060a06] border border-green-900/50 flex items-center justify-center shrink-0 group hover:border-[var(--green)] hover:bg-green-950/20 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--green)] opacity-50"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--green)] opacity-50"></div>
                                <span className="mono text-2xl md:text-4xl text-[var(--white)] font-bold group-hover:text-[var(--green)] transition-colors">DAYA</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="mono text-[var(--muted)] text-xs md:text-sm tracking-[0.2em] mb-2">ROOT_VAL</span>
                                <span className="playfair text-xl md:text-3xl text-[var(--white)] opacity-90">upstream</span>
                            </div>
                        </div>

                        {/* = */}
                        <div className={`w-24 md:w-32 flex justify-center transition-all duration-700 ${phase >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-[2px] h-12 bg-gradient-to-b from-[var(--amber)] to-[var(--green)] relative"></div>
                        </div>

                        {/* MANDAYA */}
                        <div className={`flex items-center gap-6 transition-all duration-700 transform ${phase >= 4 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            <div className="relative w-36 h-28 md:w-48 md:h-36 bg-green-950/20 border-2 border-[var(--green)] flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(74,222,128,0.15)] overflow-hidden">
                                <div className="absolute inset-0 bg-[var(--green)] opacity-[0.03] animate-pulse"></div>
                                <span className="mono text-2xl md:text-4xl text-[var(--green)] font-black tracking-widest relative z-10" style={{ textShadow: '0 0 10px rgba(74,222,128,0.5)' }}>MANDAYA</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="mono text-[var(--green)] text-xs md:text-sm tracking-[0.2em] mb-2 font-bold bg-green-900/30 px-2 py-1 self-start inline-block border border-green-500/30">SYNTHESIS</span>
                                <span className="playfair text-2xl md:text-4xl text-[var(--white)] font-bold leading-tight">People of the <br />Upstream</span>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className={`mt-12 pl-6 md:pl-10 transition-all duration-1000 delay-500 transform ${phase >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="relative inline-block border-l-4 border-[var(--amber)] pl-6 py-2">
                            <span className="absolute -left-3 -top-2 text-[var(--amber)] font-mono text-3xl opacity-30">"</span>
                            <p className="playfair italic text-[var(--white)] text-xl md:text-2xl leading-relaxed text-amber-500/80">
                                Always going against the current. <br />
                                <span className="text-[var(--muted)] text-lg md:text-xl block mt-2">Resilience built into the name.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quick Facts Terminal */}
                <div className={`lg:col-span-5 flex flex-col justify-center transition-all duration-1000 transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="w-full bg-[#050805] border border-green-900/40 p-6 md:p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">

                        {/* Scanner Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--green)] opacity-[0.15] group-hover:animate-[scan_2s_linear_infinite] shadow-[0_0_10px_var(--green)]"></div>

                        {/* Terminal Header */}
                        <div className="flex items-center justify-between border-b border-green-900/40 pb-4 mb-8">
                            <div className="mono text-[var(--green)] text-sm md:text-base font-bold tracking-[0.2em] flex items-center gap-3">
                                👁‍🗨 TARGET_PROFILE //
                            </div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-green-900/60"></div>
                                <div className="w-2 h-2 bg-green-900/60"></div>
                                <div className="w-2 h-2 bg-[var(--green)] animate-pulse"></div>
                            </div>
                        </div>

                        {/* Facts List */}
                        <div className="flex flex-col gap-8">
                            {[
                                { key: "POP_CENSUS_1988", label: "Population Node", value: "~33,000", hl: true },
                                { key: "GEO_LOC_ANCHOR", label: "Primary Territory", value: "Davao Oriental", hl: false },
                                { key: "ETHNO_CLASS", label: "Classification", value: "Lumad (non-Islamized)", hl: false },
                                { key: "LANG_FAMILY", label: "Lingual Root", value: "Austronesian", hl: false }
                            ].map((fact, idx) => (
                                <div key={idx} className={`flex flex-col transition-all duration-500 transform ${phase >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: `${800 + (idx * 150)}ms` }}>
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="w-1.5 h-1.5 bg-[var(--muted)]/50 rotate-45"></div>
                                        <div className="mono text-[0.65rem] md:text-[0.75rem] text-[var(--muted)] uppercase tracking-widest">{fact.key}</div>
                                    </div>
                                    <div className="flex flex-col ml-4 border-l border-green-900/30 pl-4 py-1">
                                        <div className="mono text-[0.8rem] md:text-[0.9rem] text-white/50 mb-1">{fact.label}</div>
                                        <div className={`mono text-xl md:text-2xl font-bold tracking-tight ${fact.hl ? 'text-[var(--amber)] shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'text-[var(--green)]'}`}>
                                            {fact.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative watermark */}
                        <div className="absolute -bottom-10 -right-6 playfair text-9xl text-green-900/10 font-black pointer-events-none select-none tracking-tighter">
                            01
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; }
                    50% { top: 100%; opacity: 0.5; }
                    51% { opacity: 0; }
                    100% { top: 0; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Slide08;

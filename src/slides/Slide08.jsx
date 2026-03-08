import React, { useEffect, useState } from 'react';

// Comic Panel Component
const ComicPanel = ({ children, colSpan = "col-span-12", borderColor = "border-white", shadowColor = "#ffffff", bgColor = "bg-[#050505]", delay = 0, isVisible }) => (
    <div
        className={`${colSpan} border-[3px] md:border-4 flex flex-col justify-center ${borderColor} ${bgColor} px-5 py-6 md:px-8 md:py-10 relative overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{
            boxShadow: `8px 8px 0px ${shadowColor}`,
            transitionDelay: `${delay}ms`
        }}
    >
        {children}
    </div>
);

const Slide08 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 200),
                setTimeout(() => setPhase(2), 600),
                setTimeout(() => setPhase(3), 1000),
                setTimeout(() => setPhase(4), 1400),
                setTimeout(() => setPhase(5), 1800),
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#050505] p-6 md:p-12 overflow-y-auto no-scrollbar relative flex items-center justify-center">

            {/* Retro Graphic Halftone Background */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-screen pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #28c840 2px, transparent 2.5px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className={`w-full max-w-[1200px] grid grid-cols-12 gap-6 md:gap-8 lg:gap-10 relative z-10 my-auto transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* Left Column: Etymology Breakdown */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 md:gap-8 justify-center">

                    {/* Header Panel */}
                    <ComicPanel
                        colSpan="col-span-1"
                        borderColor="border-[#28c840]"
                        shadowColor="#28c840"
                        bgColor="bg-[#020502]"
                        isVisible={phase >= 1} delay={0}
                    >
                        <div className="absolute top-0 right-0 bg-[#28c840] text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] border-[#28c840] tracking-widest z-10">
                            SEC_01 // IDENTITY
                        </div>
                        {/* Halftone green inside */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{
                            backgroundImage: 'radial-gradient(circle, #28c840 2px, transparent 2.5px)',
                            backgroundSize: '8px 8px'
                        }}></div>

                        <h2 className="playfair text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase leading-[0.9] text-white pt-2 relative z-10 drop-shadow-[4px_4px_0_rgba(40,200,64,0.3)]">
                            What Does Their <br /><span className="text-[#28c840] italic font-bold">Name Mean?</span>
                        </h2>
                    </ComicPanel>

                    {/* Word Equation Grid */}
                    <div className="grid grid-cols-12 gap-4 md:gap-6">

                        {/* MAN */}
                        <ComicPanel
                            colSpan="col-span-12 sm:col-span-6"
                            borderColor="border-yellow-400"
                            shadowColor="#facc15"
                            bgColor="bg-[#120a00]"
                            isVisible={phase >= 2} delay={0}
                        >
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black mono font-bold text-[0.6rem] px-2 py-1 border-b-[2px] border-l-[2px] border-yellow-400 tracking-widest z-10 w-fit">
                                PREFIX_VAL
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10 h-full w-full mt-4">
                                <div className="text-4xl md:text-5xl lg:text-5xl font-black mono text-white">MAN</div>
                                <div className="text-yellow-400 text-xl md:text-2xl lg:text-3xl playfair italic font-bold text-center md:text-left leading-tight w-full uppercase">
                                    inhabitant of
                                </div>
                            </div>
                        </ComicPanel>

                        {/* DAYA */}
                        <ComicPanel
                            colSpan="col-span-12 sm:col-span-6"
                            borderColor="border-[#8b5cf6]"
                            shadowColor="#8b5cf6"
                            bgColor="bg-[#050010]"
                            isVisible={phase >= 3} delay={0}
                        >
                            <div className="absolute top-0 right-0 bg-[#8b5cf6] text-black mono font-bold text-[0.6rem] px-2 py-1 border-b-[2px] border-l-[2px] border-[#8b5cf6] tracking-widest z-10 w-fit">
                                ROOT_VAL
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10 h-full w-full mt-4">
                                <div className="text-4xl md:text-5xl lg:text-5xl font-black mono text-white">DAYA</div>
                                <div className="text-[#8b5cf6] text-xl md:text-2xl lg:text-3xl playfair italic font-bold text-center md:text-left leading-tight w-full uppercase">
                                    upstream
                                </div>
                            </div>
                        </ComicPanel>

                        {/* SYNTHESIS / FINAL */}
                        <ComicPanel
                            colSpan="col-span-12"
                            borderColor="border-white"
                            shadowColor="#ffffff"
                            bgColor="bg-[#111]"
                            isVisible={phase >= 4} delay={0}
                        >
                            <div className="absolute top-0 left-0 bg-white text-black mono font-bold text-[0.65rem] px-4 py-1.5 border-b-[3px] border-r-[3px] border-white tracking-widest z-10">
                                SYNTHESIS
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 border-l-[4px] border-[#28c840] pt-6 md:pt-0 pl-6 w-full relative z-10 mt-6 md:mt-4">
                                <div className="text-4xl md:text-5xl lg:text-[4rem] font-black mono text-[#28c840] drop-shadow-[5px_5px_0_rgba(40,200,64,0.3)] tracking-widest block w-full text-center md:text-left md:w-auto">MANDAYA</div>
                                <div className="text-white text-3xl md:text-4xl lg:text-[2.75rem] playfair font-bold text-center md:text-left leading-[1.1] w-full mt-2 md:mt-0">
                                    People of the <br className="hidden md:block" />Upstream
                                </div>
                            </div>
                        </ComicPanel>

                    </div>

                    {/* Quote */}
                    <div className={`mt-2 transition-all duration-1000 transform ${phase >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="relative inline-block border-l-[4px] border-amber-500 pl-6 py-2 bg-amber-500/5 pr-8">
                            <span className="absolute -left-4 -top-3 text-amber-500 font-mono text-4xl opacity-50 font-black">"</span>
                            <p className="playfair italic text-white text-xl md:text-2xl leading-[1.6]">
                                <span className="text-amber-500 font-bold bg-amber-500/10 px-1 block mb-2 w-fit">Always going against the current.</span>
                                Resilience built into the name.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quick Facts Terminal */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-5 flex-col flex justify-center h-full min-h-[500px]"
                    borderColor="border-red-600"
                    shadowColor="#dc2626"
                    bgColor="bg-[#0f0000]"
                    isVisible={phase >= 3} delay={0}
                >
                    <div className="absolute top-0 right-0 bg-red-600 text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-red-600 tracking-widest z-10">
                        TARGET_PROFILE //
                    </div>
                    {/* Halftone red */}
                    <div className="absolute inset-0 opacity-[0.2]" style={{
                        backgroundImage: 'radial-gradient(circle, #dc2626 2px, transparent 2.5px)',
                        backgroundSize: '16px 16px'
                    }}></div>

                    <div className="w-full relative z-10">
                        {/* Facts List */}
                        <div className="flex flex-col gap-6 md:gap-8 pt-8">
                            {[
                                { key: "POP_CENSUS_1988", label: "Population Node", value: "~33,000", hl: true },
                                { key: "GEO_LOC_ANCHOR", label: "Primary Territory", value: "Davao Oriental", hl: false },
                                { key: "ETHNO_CLASS", label: "Classification", value: "Lumad (non-Islamized)", hl: false },
                                { key: "LANG_FAMILY", label: "Lingual Root", value: "Austronesian", hl: false }
                            ].map((fact, idx) => (
                                <div key={idx} className={`flex flex-col transition-all duration-700 transform px-6 py-4 bg-black/60 border border-red-900/40 shadow-[4px_4px_0_rgba(220,38,38,0.2)] ${phase >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: `${800 + (idx * 200)}ms` }}>

                                    <div className="flex items-center gap-3 mb-2 border-b border-red-900/50 pb-2">
                                        <div className="w-2 h-2 bg-red-600 rotate-45"></div>
                                        <div className="mono text-[0.65rem] md:text-[0.7rem] text-white/50 uppercase tracking-widest">{fact.key}</div>
                                    </div>

                                    <div className="flex flex-col pl-5 border-l-2 border-red-600/30">
                                        <div className="mono text-[0.8rem] md:text-[0.85rem] text-red-500/80 mb-1 font-bold uppercase">{fact.label}</div>
                                        <div className={`mono text-2xl md:text-3xl font-black tracking-tight ${fact.hl ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'text-red-500'}`}>
                                            {fact.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ComicPanel>

            </div>
        </div>
    );
};

export default Slide08;

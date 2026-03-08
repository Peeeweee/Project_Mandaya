import React, { useState, useEffect } from 'react';

const EqBar = ({ height, delay, color }) => (
    <div
        className="w-1.5 md:w-2 rounded-t-sm animate-[eq_1.5s_ease-in-out_infinite_alternate]"
        style={{
            height: `${height}%`,
            animationDelay: `${delay}ms`,
            backgroundColor: color
        }}
    ></div>
);

const Slide17 = ({ isActive }) => {
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
        <div className="w-full min-h-full bg-[#030205] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center overflow-y-auto no-scrollbar relative">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-[30vh] bg-fuchsia-900/10 blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-[1500px] flex flex-col gap-8 lg:gap-12 relative z-10">

                {/* --- HEADER DASHBOARD --- */}
                <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b-2 border-fuchsia-500/30 pb-6 transition-all duration-700 transform ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="mono text-[0.7rem] md:text-[0.8rem] tracking-[0.3em] font-bold text-cyan-400 uppercase">
                                SEC_10 // ARTS _AND_ PERFORMANCE
                            </span>
                        </div>
                        <h2 className="playfair text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-wide">
                            Kinetic & Audio <span className="text-fuchsia-400 italic">Systems.</span>
                        </h2>
                    </div>

                    <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 p-4 md:p-6 max-w-[400px]">
                        <p className="mono text-[0.65rem] md:text-[0.75rem] text-fuchsia-200/80 uppercase leading-[1.8] tracking-[0.1em]">
                            <span className="text-fuchsia-400 font-bold block mb-2">SYSTEM.LOG:</span>
                            "They built a culture so rich it survived colonization. Now let's talk about what colonization did anyway."
                        </p>
                    </div>
                </div>

                {/* --- MAIN SPLIT LAYOUT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* LEFT: KINETIC PROFILES (Dances) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className={`mono text-[0.8rem] tracking-[0.4em] text-white/50 border-l-2 border-fuchsia-500 pl-4 uppercase font-bold transition-opacity duration-700 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                            [01] Kinetic Profiles // Ritual Movements
                        </div>

                        <div className="flex flex-col gap-4">

                            {/* DANCE 1 */}
                            <div className={`bg-[#0a050a] border border-fuchsia-900/40 p-6 md:p-8 flex flex-col sm:flex-row gap-6 justify-between group hover:border-fuchsia-500/60 transition-all duration-500 transform ${phase >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                                <div className="flex flex-col w-full sm:w-[60%]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="mono text-[0.6rem] bg-red-500/20 text-red-400 px-2 py-0.5 tracking-widest border border-red-500/30">WAR_DANCE</div>
                                    </div>
                                    <h3 className="playfair text-3xl font-bold text-white tracking-widest uppercase mb-3 group-hover:text-fuchsia-300 transition-colors">Sampak</h3>
                                    <p className="mono text-[0.7rem] text-white/50 leading-relaxed uppercase tracking-[0.1em]">
                                        Simultaneous mastery of spear, sword, and shield. Combat choreographed into performance.
                                    </p>
                                </div>
                                {/* Radar Graphic */}
                                <div className="hidden sm:flex items-center justify-center w-[100px] h-[100px] border border-fuchsia-500/20 rounded-full relative">
                                    <div className="absolute inset-2 border border-fuchsia-500/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-4 border border-fuchsia-500/30 rounded-full border-t-fuchsia-400 animate-[spin_3s_linear_infinite]"></div>
                                    <div className="mono text-[0.55rem] text-fuchsia-500 text-center font-bold">LETHAL<br />VECTOR</div>
                                </div>
                            </div>

                            {/* DANCE 2 */}
                            <div className={`bg-[#0a050a] border border-cyan-900/40 p-6 md:p-8 flex flex-col sm:flex-row gap-6 justify-between group hover:border-cyan-500/60 transition-all duration-500 transform delay-100 ${phase >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                                <div className="flex flex-col w-full sm:w-[60%]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="mono text-[0.6rem] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 tracking-widest border border-cyan-500/30">COURTSHIP</div>
                                    </div>
                                    <h3 className="playfair text-3xl font-bold text-white tracking-widest uppercase mb-3 group-hover:text-cyan-300 transition-colors">Kinabua</h3>
                                    <p className="mono text-[0.7rem] text-white/50 leading-relaxed uppercase tracking-[0.1em]">
                                        A hawk lures a hen with sweet songs. Metaphor for courtship through cunning.
                                    </p>
                                </div>
                                {/* Radar Graphic */}
                                <div className="hidden sm:flex items-center justify-center w-[100px] h-[100px] border border-cyan-500/20 rounded-full relative">
                                    <div className="absolute inset-2 border border-cyan-500/10 rounded-full border-dashed animate-[spin_8s_linear_infinite_reverse]"></div>
                                    <div className="absolute inset-6 border border-cyan-500/40 rounded-full border-b-cyan-300 animate-[spin_4s_linear_infinite]"></div>
                                    <div className="mono text-[0.55rem] text-cyan-500 text-center font-bold">AVIAN<br />MIMICRY</div>
                                </div>
                            </div>

                            {/* DANCE 3 */}
                            <div className={`bg-[#0a050a] border border-fuchsia-900/40 p-6 md:p-8 flex flex-col sm:flex-row gap-6 justify-between group hover:border-fuchsia-500/60 transition-all duration-500 transform delay-200 ${phase >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                                <div className="flex flex-col w-full sm:w-[60%]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="mono text-[0.6rem] bg-fuchsia-500/20 text-fuchsia-400 px-2 py-0.5 tracking-widest border border-fuchsia-500/30">CEREMONIAL</div>
                                    </div>
                                    <h3 className="playfair text-3xl font-bold text-white tracking-widest uppercase mb-3 group-hover:text-fuchsia-300 transition-colors">Courting Dance</h3>
                                    <p className="mono text-[0.7rem] text-white/50 leading-relaxed uppercase tracking-[0.1em]">
                                        Mimics the mountain hawk in flight. Arms spread like wings. Feet in rapid circles.
                                    </p>
                                </div>
                                {/* Radar Graphic */}
                                <div className="hidden sm:flex items-center justify-center w-[100px] h-[100px] border border-fuchsia-500/20 rounded-full relative">
                                    <div className="absolute inset-1 border border-fuchsia-500/10 rounded-full border-dashed animate-[spin_12s_linear_infinite]"></div>
                                    <div className="absolute inset-5 border border-fuchsia-500/30 rounded-full border-r-fuchsia-400 animate-[spin_5s_linear_infinite_reverse]"></div>
                                    <div className="mono text-[0.55rem] text-fuchsia-500 text-center font-bold">FLIGHT<br />PATTERN</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: AUDIO TELEMETRY (Instruments) */}
                    <div className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-1000 transform ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="mono text-[0.8rem] tracking-[0.4em] text-white/50 border-l-2 border-cyan-500 pl-4 uppercase font-bold">
                            [02] Audio Telemetry
                        </div>

                        <div className="bg-[#020608] border border-cyan-900/30 flex flex-col h-full relative overflow-hidden">
                            {/* Vertical Background Lines */}
                            <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-10">
                                <div className="w-[1px] h-full bg-cyan-500"></div>
                                <div className="w-[1px] h-full bg-cyan-500"></div>
                                <div className="w-[1px] h-full bg-cyan-500"></div>
                                <div className="w-[1px] h-full bg-cyan-500"></div>
                            </div>

                            {/* HUGE FREQUENCY VISUALIZER (Decor) */}
                            <div className="w-full h-[180px] bg-cyan-950/20 border-b border-cyan-900/50 flex items-end justify-between px-6 pb-4 pt-10 gap-1 opacity-80">
                                {[...Array(30)].map((_, i) => (
                                    <EqBar
                                        key={i}
                                        height={Math.random() * 80 + 20}
                                        delay={Math.random() * 1000}
                                        color={i % 3 === 0 ? '#d946ef' : '#06b6d4'}
                                    />
                                ))}
                                {/* Overlay Fade out top */}
                                <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#020608] to-transparent pointer-events-none"></div>
                            </div>

                            {/* Instruments List */}
                            <div className="p-8 lg:p-10 flex flex-col gap-8 relative z-10 flex-grow">

                                <div className="flex flex-col gap-2 border-l-4 border-cyan-500 pl-4 group">
                                    <div className="flex justify-between items-end">
                                        <h4 className="playfair text-2xl font-bold text-white tracking-widest uppercase group-hover:text-cyan-400 transition-colors">Flute</h4>
                                        <span className="mono text-[0.55rem] text-cyan-500/50 tracking-[0.3em] font-bold">CH_01</span>
                                    </div>
                                    <p className="mono text-[0.65rem] text-cyan-200/50 uppercase tracking-[0.1em]">Melodic / Solo Performance</p>
                                    <div className="w-full bg-cyan-950/50 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500 w-[60%]"></div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 border-l-4 border-fuchsia-500 pl-4 group">
                                    <div className="flex justify-between items-end">
                                        <h4 className="playfair text-2xl font-bold text-white tracking-widest uppercase group-hover:text-fuchsia-400 transition-colors">Bamboo Zither</h4>
                                        <span className="mono text-[0.55rem] text-fuchsia-500/50 tracking-[0.3em] font-bold">CH_02</span>
                                    </div>
                                    <p className="mono text-[0.65rem] text-fuchsia-200/50 uppercase tracking-[0.1em]">Polyphonic / Ensemble</p>
                                    <div className="w-full bg-fuchsia-950/50 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="h-full bg-fuchsia-500 w-[85%]"></div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 border-l-4 border-cyan-500 pl-4 group">
                                    <div className="flex justify-between items-end">
                                        <h4 className="playfair text-2xl font-bold text-white tracking-widest uppercase group-hover:text-cyan-400 transition-colors">Gong</h4>
                                        <span className="mono text-[0.55rem] text-cyan-500/50 tracking-[0.3em] font-bold">CH_03</span>
                                    </div>
                                    <p className="mono text-[0.65rem] text-cyan-200/50 uppercase tracking-[0.1em]">Ceremonial / Communal Rhythm</p>
                                    <div className="w-full bg-cyan-950/50 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500 w-[100%] animate-pulse"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <style jsx>{`
                @keyframes eq {
                    0% { transform: scaleY(1); }
                    50% { transform: scaleY(0.4); }
                    100% { transform: scaleY(1.2); }
                }
            `}</style>
        </div>
    );
};

export default Slide17;

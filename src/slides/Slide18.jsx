import React, { useState, useEffect } from 'react';

// Blood drop component
const BloodDrop = ({ delay, left, duration = 3 }) => (
    <div
        className="absolute w-1.5 rounded-full bg-gradient-to-b from-red-800 to-red-500 opacity-80"
        style={{
            left: `${left}%`,
            animation: `bloodDrip ${duration}s ease-in infinite`,
            animationDelay: `${delay}s`
        }}
    ></div>
);

const Slide18 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),  // Center beam & structure
                setTimeout(() => setPhase(2), 800),  // Left 1 / Right 1
                setTimeout(() => setPhase(3), 1300), // Left 2 / Right 2
                setTimeout(() => setPhase(4), 1800), // Left 3 / Right 3
                setTimeout(() => setPhase(5), 2500), // Center quote
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#000000] p-8 lg:p-12 flex justify-center items-center overflow-y-auto no-scrollbar relative">

            {/* The Central Descent Line (The Void) */}
            <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-red-900/30 transition-all duration-[2000ms] ${phase >= 1 ? 'opacity-100 h-full' : 'opacity-0 h-0'} hidden lg:block`}>
                <div className="w-[1px] h-[150px] bg-gradient-to-b from-transparent via-red-500 to-transparent absolute top-0 animate-[scan_4s_linear_infinite]"></div>
            </div>

            {/* Container now has max-width and internal padding to pull it away from edges */}
            <div className="w-full max-w-[1500px] px-4 md:px-8 flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-8 relative z-10 min-h-[600px] lg:my-auto">

                {/* --- LEFT COLUMN: THE VESSEL --- */}
                {/* Dropped width slightly from 32% to 28% to give more breathing room */}
                <div className={`w-full lg:w-[28%] flex flex-col justify-center gap-8 transition-all duration-1000 relative self-center ${phase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

                    {/* Background Blood Drops for Left Column - Adjusted positions so they stay behind boxes */}
                    <BloodDrop left={20} delay={0.5} duration={4} />
                    <BloodDrop left={50} delay={2.1} duration={5} />
                    <BloodDrop left={80} delay={1.3} duration={4.5} />

                    <div className="mono text-[0.65rem] text-red-500/70 tracking-[0.4em] uppercase text-left border-b border-red-900/40 pb-3 mb-2 lg:mb-4 font-bold relative overflow-hidden">
                        [ SYSTEM // THE VESSEL ]
                    </div>

                    <div className={`relative px-5 py-6 border-b border-t border-l-4 border-white/5 border-l-red-800 bg-[#050505] flex justify-between items-start gap-4 text-left group hover:bg-[#0f0404] hover:border-l-red-500 transition-colors duration-500 shadow-[0_5px_15px_rgba(220,38,38,0.05)] ${phase >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="flex flex-col">
                            {/* Adjusted font sizing: playfair text-[1.1rem] instead of 1.5rem */}
                            <div className="mono text-[0.6rem] md:text-[0.65rem] text-red-500 tracking-[0.3em] mb-4 uppercase font-bold">01 // BURIAL VELOCITY</div>
                            <p className="playfair text-[1rem] md:text-[1.1rem] text-white/90 leading-snug">
                                A Mandaya who dies in the morning is <span className="text-white font-bold text-red-100 drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">buried the same afternoon.</span>
                            </p>
                        </div>
                    </div>

                    <div className={`relative px-5 py-6 border-b border-t border-l-4 border-white/5 border-l-red-800 bg-[#050505] flex justify-between items-start gap-4 text-left group hover:bg-[#0f0404] hover:border-l-red-500 transition-colors duration-500 shadow-[0_5px_15px_rgba(220,38,38,0.05)] ${phase >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="flex flex-col">
                            <div className="mono text-[0.6rem] md:text-[0.65rem] text-red-500 tracking-[0.3em] mb-4 uppercase font-bold">02 // SACRED SHROUD</div>
                            <p className="playfair text-[1rem] md:text-[1.1rem] text-white/90 leading-snug">
                                The corpse is wrapped meticulously in <span className="text-red-100 font-bold italic drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">dagmay cloth.</span>
                            </p>
                        </div>
                    </div>

                    <div className={`relative px-5 py-6 border-b border-t border-l-4 border-white/5 border-l-red-800 bg-[#050505] flex justify-between items-start gap-4 text-left group hover:bg-[#0f0404] hover:border-l-red-500 transition-colors duration-500 shadow-[0_5px_15px_rgba(220,38,38,0.05)] ${phase >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="flex flex-col">
                            <div className="mono text-[0.6rem] md:text-[0.65rem] text-red-500 tracking-[0.3em] mb-4 uppercase font-bold">03 // TIMBER SARCOPHAGUS</div>
                            <p className="playfair text-[1rem] md:text-[1.1rem] text-white/90 leading-snug">
                                The coffin: a log cut exactly in two, <span className="text-red-100 drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">hollowed deeply</span> at the center.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- CENTER COLUMN: THE VOID / TITLE --- */}
                {/* Center column expanded slightly to absorb space from smaller outer boxes */}
                <div className={`w-full lg:w-[40%] flex flex-col justify-center items-center text-center relative px-4 transition-all duration-1000 delay-300 order-first lg:order-none mb-8 lg:mb-0 ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.95]'}`}>

                    {/* Background glow behind title */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-red-900/15 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="mono text-[0.65rem] text-red-500 tracking-[0.4em] uppercase mb-8 px-4 py-2 border border-red-500/20 bg-red-950/20 w-fit mx-auto relative z-10">
                        Protocol // END_OF_LIFE
                    </div>

                    <h2 className="playfair text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.95] text-white tracking-widest uppercase mb-12 relative z-10 w-full drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                        Death<br />
                        <span className="text-red-600 italic block mt-2 mb-6 text-3xl md:text-5xl lg:text-5xl font-serif tracking-[0.2em] transform -translate-y-2">with</span>
                        Dignity
                    </h2>

                    <div className={`mono w-full md:w-[85%] text-[0.7rem] md:text-[0.8rem] text-white/50 tracking-[0.3em] leading-[2.5] border-l border-r border-red-900/50 px-4 py-6 bg-black/80 relative z-10 transition-all duration-1000 drop-shadow-[0_10px_20px_rgba(220,38,38,0.1)] ${phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        "Even in death — <span className="text-white">dignity.</span><br />
                        Even in grief — <span className="text-white">ritual.</span><br />
                        Even in silence — <span className="text-red-500 font-bold drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">meaning.</span>"
                    </div>
                </div>

                {/* --- RIGHT COLUMN: THE SPIRIT --- */}
                <div className={`w-full lg:w-[28%] flex flex-col justify-center gap-8 transition-all duration-1000 relative self-center ${phase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>

                    {/* Background Blood Drops for Right Column */}
                    <BloodDrop left={20} delay={1.8} duration={3.5} />
                    <BloodDrop left={50} delay={0.2} duration={4.8} />
                    <BloodDrop left={80} delay={2.5} duration={3.8} />

                    <div className="mono text-[0.65rem] text-red-500/70 tracking-[0.4em] uppercase text-left lg:text-right border-b border-red-900/40 pb-3 mb-2 lg:mb-4 font-bold relative overflow-hidden">
                        [ SYSTEM // THE SPIRIT ]
                    </div>

                    <div className={`relative px-5 py-6 border-b border-t border-l-4 lg:border-l-0 lg:border-r-4 border-white/5 border-l-red-800 lg:border-l-transparent lg:border-r-red-800 bg-[#050505] flex justify-between items-start gap-4 text-left lg:text-right group hover:bg-[#0f0404] hover:border-l-red-500 lg:hover:border-l-transparent lg:hover:border-r-red-500 transition-colors duration-500 shadow-[0_5px_15px_rgba(220,38,38,0.05)] ${phase >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="flex flex-col w-full lg:items-end">
                            <div className="mono text-[0.6rem] md:text-[0.65rem] text-red-500 tracking-[0.3em] mb-4 uppercase font-bold">04 // MOURNING SILENCE</div>
                            <p className="playfair text-[1rem] md:text-[1.1rem] text-white/90 leading-snug">
                                If the husband dies, the wife sings the dawot — <span className="text-red-500 font-bold drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]">and cannot sing again until she remarries.</span>
                            </p>
                        </div>
                    </div>

                    <div className={`relative px-5 py-6 border-b border-t border-l-4 lg:border-l-0 lg:border-r-4 border-white/5 border-l-red-800 lg:border-l-transparent lg:border-r-red-800 bg-[#050505] flex justify-between items-start gap-4 text-left lg:text-right group hover:bg-[#0f0404] hover:border-l-red-500 lg:hover:border-l-transparent lg:hover:border-r-red-500 transition-colors duration-500 shadow-[0_5px_15px_rgba(220,38,38,0.05)] ${phase >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="flex flex-col w-full lg:items-end">
                            <div className="mono text-[0.6rem] md:text-[0.65rem] text-red-500 tracking-[0.3em] mb-4 uppercase font-bold">05 // WARRIOR'S END</div>
                            <p className="playfair text-[1rem] md:text-[1.1rem] text-white/90 leading-snug">
                                A warrior killed in battle is left <span className="italic text-red-100 font-bold drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">reclining in a tree</span> to decompose naturally.
                            </p>
                        </div>
                    </div>

                    <div className={`relative px-5 py-6 border-b border-t border-l-4 lg:border-l-0 lg:border-r-4 border-white/5 border-l-red-800 lg:border-l-transparent lg:border-r-red-800 bg-[#050505] flex justify-between items-start gap-4 text-left lg:text-right group hover:bg-[#0f0404] hover:border-l-red-500 lg:hover:border-l-transparent lg:hover:border-r-red-500 transition-colors duration-500 shadow-[0_5px_15px_rgba(220,38,38,0.05)] ${phase >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="flex flex-col w-full lg:items-end">
                            <div className="mono text-[0.6rem] md:text-[0.65rem] text-red-500 tracking-[0.3em] mb-4 uppercase font-bold">06 // BAGANI ACCEPTANCE</div>
                            <p className="playfair text-[1rem] md:text-[1.1rem] text-white/90 leading-snug">
                                A Bagani who felt death coming <span className="text-red-500 font-bold drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]">walked to his own burial site</span> — and waited.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: -150px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                
                @keyframes bloodDrip {
                    0% { top: -5%; height: 10px; opacity: 0; border-radius: 5px; }
                    10% { opacity: 0.8; height: 30px; border-radius: 50% 50% 0 0; }
                    60% { top: 105%; height: 40px; opacity: 0.5; border-radius: 50% 50% 5px 5px; }
                    100% { top: 110%; height: 5px; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Slide18;

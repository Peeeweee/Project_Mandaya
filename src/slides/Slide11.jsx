import React, { useState, useEffect } from 'react';

const Slide11 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 800),
                setTimeout(() => setPhase(3), 1200),
                setTimeout(() => setPhase(4), 1800),
                setTimeout(() => setPhase(5), 2400)
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const historyTimeline = [
        { period: "Pre-colonial", status: "Active Status", color: "var(--green)", desc: "Unlocked exclusively by combat merit. Held absolute authority over settlements, outranking even spiritual leaders." },
        { period: "Spanish Period", status: "Suppressed", color: "var(--amber)", desc: "Authority limited by colonial presence, but survived due to terrain advantage in interior Mindanao." },
        { period: "American Period", status: "Dismantled", color: "var(--red)", desc: "Class actively hunted and suppressed. Authority completely dismantled by the colonial government." },
        { period: "Current Era", status: "Extinct", color: "var(--muted)", desc: "No longer exists in modern taxonomy." }
    ];

    return (
        <div className="w-full min-h-full bg-[var(--deep)] px-8 md:px-16 lg:px-24 py-20 overflow-y-auto no-scrollbar relative flex flex-col justify-center items-center">

            <div className={`w-full max-w-[1500px] flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* LEFT: Title & Stats */}
                <div className={`lg:w-[45%] flex flex-col justify-center transition-all duration-1000 transform ${phase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>

                    <div className="mb-6 md:mb-8">
                        <span className="mono text-[0.8rem] md:text-[0.9rem] tracking-[0.3em] font-bold text-[var(--red)] uppercase bg-red-950/30 px-4 py-2 border border-red-900/50 shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                            SEC_04 // TACTICAL_CLASS
                        </span>
                    </div>

                    <h2 className="playfair text-6xl md:text-7xl lg:text-[8rem] font-bold leading-tight text-[var(--white)] tracking-wide mb-12">
                        The <span className="text-[var(--red)] italic">Bagani</span>
                    </h2>

                    {/* Massive Stat Container */}
                    <div className={`bg-[#070505] border-y border-r border-y-red-900/30 border-r-red-900/30 border-l-[8px] border-l-[var(--red)] py-10 px-8 md:py-14 md:px-12 mb-10 relative group transition-all duration-700 transform ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

                        <div className="mono text-[0.85rem] md:text-sm text-[var(--muted)] tracking-widest uppercase mb-6 font-bold border-b border-white/5 pb-3">
                            Class Prerequisite
                        </div>

                        <div className="flex items-baseline gap-6 mb-4">
                            <span className="playfair text-[6rem] md:text-[8rem] leading-none font-bold text-[var(--white)]">5</span>
                            <span className="playfair text-4xl md:text-6xl text-[var(--red)] font-light">—</span>
                            <span className="playfair text-[6rem] md:text-[8rem] leading-none font-bold text-[var(--white)]">30</span>
                        </div>

                        <div className="mono text-xl md:text-2xl font-bold text-[var(--red)] tracking-wider mt-4">
                            Kills Required
                        </div>
                    </div>

                    <div className={`border-t border-white/10 pt-8 transition-all duration-1000 transform delay-300 ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="playfair text-2xl md:text-3xl text-[var(--white)] leading-[1.6]">
                            They were the ultimate protectors. <br className="hidden xl:block" />
                            <span className="text-[var(--muted)] italic text-xl md:text-2xl mt-4 block">Earned strictly through combat merit, never by birth.</span>
                        </p>
                    </div>

                </div>

                {/* RIGHT: Clear Timeline */}
                <div className={`lg:w-[50%] flex flex-col justify-center transition-all duration-1000 transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                    <div className="bg-[#050605] border border-[var(--border)] p-10 md:p-14 lg:p-16 shadow-2xl h-full flex flex-col justify-center">

                        <div className="mono text-[0.9rem] md:text-base text-[var(--white)] tracking-widest uppercase mb-10 pb-6 border-b border-white/10 flex items-center gap-4">
                            <div className="w-3 h-3 bg-[var(--amber)]"></div>
                            Historical Status
                        </div>

                        <div className="relative mt-2">
                            {/* Centered vertical line behind circles */}
                            <div className="absolute left-[11px] md:left-[13px] top-4 bottom-8 w-[2px] bg-white/10 z-0"></div>

                            <div className="flex flex-col space-y-14 lg:space-y-16">
                                {historyTimeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative z-10 flex flex-row items-start gap-8 md:gap-12 transition-all duration-700 transform ${phase >= (3 + index * 0.5) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                    >
                                        {/* In-flow Timeline Circle */}
                                        <div className="flex-shrink-0 pt-1">
                                            <div
                                                className="w-6 h-6 md:w-7 md:h-7 rounded-full border-[4px] relative z-20 bg-[#050605]"
                                                style={{ borderColor: item.color }}
                                            ></div>
                                        </div>

                                        {/* Text Content Block */}
                                        <div className="flex flex-col w-full pb-2">
                                            <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6 mb-3">
                                                <h4 className="mono text-2xl md:text-3xl text-[var(--white)] font-bold tracking-wide">
                                                    {item.period}
                                                </h4>
                                                <span
                                                    className="mono text-[0.75rem] md:text-sm tracking-widest uppercase px-3 py-1 inline-block w-fit"
                                                    style={{ color: item.color, backgroundColor: `${item.color}15`, border: `1px solid ${item.color}40` }}
                                                >
                                                    {item.status}
                                                </span>
                                            </div>

                                            <p className="mono text-lg md:text-xl text-[var(--muted)] leading-[1.8] max-w-2xl">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Footer Quote */}
            <div className={`w-full max-w-[1500px] mt-20 md:mt-32 transition-all duration-1000 transform ${phase >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="playfair italic text-[var(--red)] text-2xl md:text-4xl font-bold tracking-wide border-t border-red-900/30 pt-10 text-center lg:text-left">
                    "The last known Bagani disappeared in the 1930s."
                </p>
            </div>

        </div>
    );
};

export default Slide11;

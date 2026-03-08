import React, { useState, useEffect } from 'react';

const Slide09 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 700),
                setTimeout(() => setPhase(3), 1100),
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const branches = [
        { key: "NODE_01", name: "mansaka", note: "mountain clearings" },
        { key: "NODE_02", name: "manwaga", note: "forested mountains" },
        { key: "NODE_03", name: "pagsupan", note: "Tagum & Hijo river banks" },
        { key: "NODE_04", name: "managusan", note: "near water" },
        { key: "NODE_05", name: "divavaogan", note: "Compostela Valley" },
    ];

    return (
        <div className="w-full min-h-full bg-[#030403] px-4 md:px-12 py-12 md:py-24 overflow-y-auto relative flex flex-col justify-center">

            {/* Background Radar / Topo Grid */}
            <div className={`absolute inset-0 border-[1px] border-green-900/10 m-4 md:m-8 pointer-events-none transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.02)_0%,transparent_60%)]" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900/20" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-green-900/20" />

                {/* Decorative map corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-900/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-900/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-900/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-900/50" />
            </div>

            <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">

                {/* Left Column: Description */}
                <div className="lg:col-span-5 flex flex-col justify-center relative">
                    {/* Header */}
                    <div className={`mb-10 transition-all duration-1000 transform ${phase >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="px-3 py-1 bg-green-950/30 border border-green-900/50 mono text-xs tracking-[0.3em] font-bold text-[var(--green)]">
                                SEC_02 // TERRITORY
                            </div>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-900/50 to-transparent" />
                        </div>
                        <h2 className="playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--white)] tracking-wide mb-8">
                            Where They <br /><span className="text-[var(--green)] italic">Live</span>
                        </h2>

                        {/* Text Block */}
                        <div className={`p-6 md:p-8 border-l-4 border-[var(--green)] bg-black/80 shadow-[0_0_30px_rgba(74,222,128,0.05)] relative overflow-hidden transition-all duration-1000 transform ${phase >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                            {/* Subtle scanline behind text */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(74,222,128,0.02)_2px,rgba(74,222,128,0.02)_4px)] pointer-events-none" />

                            <div className="mono text-[0.7rem] text-[var(--green)] tracking-[0.2em] mb-4 uppercase font-bold flex justify-between items-center relative z-10">
                                <span>[ GEO_DATA_EXTRACT ]</span>
                                <span className="opacity-50">10.4°N, 126°E</span>
                            </div>

                            <p className="playfair text-xl md:text-2xl leading-[1.6] text-[var(--white)] relative z-10">
                                Mountain ranges of <span className="text-[var(--green)] font-bold">Davao Oriental</span>, Davao del Norte, and Surigao del Sur.
                            </p>
                            <div className="w-full h-[1px] bg-green-900/30 my-5 relative z-10" />
                            <p className="mono tracking-wide text-[0.85rem] md:text-[0.95rem] leading-[1.8] text-[var(--muted)] relative z-10">
                                Also recorded in Mt. Kampalili — the highlands of eastern Mindanao.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Node Tree */}
                <div className="lg:col-span-7 relative flex items-center">
                    <div className="w-full flex flex-col relative md:pl-8">

                        {/* Root Node Row */}
                        <div className={`flex items-center gap-4 md:gap-6 z-20 relative transition-all duration-700 transform ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            {/* Pulse Dot */}
                            <div className="w-4 h-4 bg-[var(--green)] shadow-[0_0_15px_var(--green)] ring-4 ring-green-900/50 relative z-20 shrink-0" />
                            {/* Value Box */}
                            <div className="flex items-center justify-between border border-[var(--green)] bg-[#040604] px-6 py-4 relative shadow-[0_0_30px_rgba(74,222,128,0.15)] flex-1 md:flex-none md:min-w-[400px]">
                                <span className="mono text-2xl md:text-4xl font-black text-[var(--white)] tracking-wide shrink-0">/mandaya</span>
                                <span className="mono text-[0.6rem] text-[var(--green)] uppercase tracking-[0.2em] px-2 py-1 bg-green-900/40 border border-green-500/30 shrink-0 hidden md:block">
                                    Volume Root
                                </span>
                            </div>
                        </div>

                        {/* Vertical connecting line */}
                        <div className={`absolute top-[60px] md:top-[70px] bottom-[30px] left-[7px] md:left-[39px] w-[2px] bg-gradient-to-b from-green-500/50 to-transparent transition-all duration-1000 origin-top ${phase >= 3 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} />

                        {/* Children Container */}
                        <div className="flex flex-col gap-4 mt-8 md:mt-10">
                            {branches.map((branch, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center relative z-10 w-full transition-all duration-700 transform ${phase >= 3 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                                    style={{ transitionDelay: `${200 + i * 150}ms` }}
                                >

                                    {/* Horizontal connection segment */}
                                    <div className="w-[30px] md:w-[60px] h-[2px] bg-green-900/50 ml-[8px] shrink-0" />

                                    {/* Child Node Box */}
                                    <div className="flex-1 bg-[#090d09] border-y border-r border-green-900/30 border-l-[4px] border-l-green-900 hover:border-l-[var(--green)] hover:bg-[#0c140c] transition-all group flex flex-col xl:flex-row items-start xl:items-center justify-between p-4 md:px-6 relative shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-default">

                                        {/* Inner Content Left */}
                                        <div className="flex items-center gap-3 md:gap-5 mb-3 xl:mb-0 w-full xl:w-auto overflow-hidden">
                                            <div className="mono text-[0.6rem] text-[#555] group-hover:text-[var(--green)] transition-colors w-[50px] tracking-widest shrink-0">
                                                {branch.key}
                                            </div>
                                            <div className="playfair text-xl md:text-2xl font-bold text-[var(--white)] tracking-wide group-hover:text-green-300 truncate">
                                                /{branch.name}
                                            </div>
                                        </div>

                                        {/* Inner Content Right (Notes) */}
                                        <div className="flex items-center w-full xl:w-auto pl-[62px] xl:pl-0 shrink-0">
                                            <span className="mono text-[0.7rem] md:text-[0.85rem] tracking-wider text-[var(--muted)] border border-green-900/30 px-3 py-1.5 bg-black/50 overflow-hidden text-ellipsis w-full xl:w-auto text-center xl:text-left">
                                                {branch.note}
                                            </span>
                                        </div>

                                        {/* Decorative node highlight flash */}
                                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-[var(--green)] opacity-0 group-hover:opacity-[0.03] transition-opacity blur-2xl pointer-events-none" />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slide09;

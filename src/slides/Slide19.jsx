import React, { useState, useEffect } from 'react';

const Slide19 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    const logs = [
        { id: "01", target: "33,000 Ancestral Land Titles", status: "NULLIFIED", color: "text-red-500" },
        { id: "02", target: "Bagani Governance System", status: "ERASED", color: "text-red-500" },
        { id: "03", target: "Communal Hunting Grounds", status: "PRIVATIZED", color: "text-red-500" },
    ];

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),   // Title background
                setTimeout(() => setPhase(2), 1000),  // Log 1
                setTimeout(() => setPhase(3), 1800),  // Log 2
                setTimeout(() => setPhase(4), 2600),  // Log 3
                setTimeout(() => setPhase(5), 4500),  // No swords
                setTimeout(() => setPhase(6), 5500),  // No war
                setTimeout(() => setPhase(7), 7500),  // JUST A PEN
                setTimeout(() => setPhase(8), 8000),  // Massive red pulse
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className={`w-full min-h-full transition-colors duration-2000 flex flex-col items-center justify-center overflow-x-hidden relative p-8 lg:p-12 ${phase >= 8 ? 'bg-[#0a0000]' : 'bg-[#000000]'}`}>

            {/* Background Marquee Text */}
            <div className={`absolute inset-0 flex flex-col justify-around overflow-hidden pointer-events-none transition-opacity duration-[3000ms] ${phase >= 1 ? 'opacity-[0.03]' : 'opacity-0'}`}>
                <div className="playfair font-black text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none whitespace-nowrap text-white animate-[marquee_30s_linear_infinite]">
                    LEGAL PAPERWORK • TAX DECLARATIONS • THE LAND REGISTRATION ACT OF 1902 • LEGAL PAPERWORK • TAX DECLARATIONS • THE LAND REGISTRATION ACT OF 1902 •
                </div>
                <div className="playfair font-black text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none whitespace-nowrap text-red-500 animate-[marquee_40s_linear_infinite_reverse]">
                    SYSTEM OVERWRITE • LEGAL PAPERWORK • TAX DECLARATIONS • SYSTEM OVERWRITE • LEGAL PAPERWORK • TAX DECLARATIONS •
                </div>
                <div className="playfair font-black text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none whitespace-nowrap text-white animate-[marquee_35s_linear_infinite]">
                    LEGAL PAPERWORK • TAX DECLARATIONS • THE LAND REGISTRATION ACT OF 1902 • LEGAL PAPERWORK • TAX DECLARATIONS • THE LAND REGISTRATION ACT OF 1902 •
                </div>
            </div>

            <div className="max-w-[1400px] w-full z-10 relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-end mt-12 mb-12 lg:my-0 lg:h-[600px]">

                {/* LEFT: DELETION LOG */}
                <div className="w-full lg:w-[60%] flex flex-col gap-6">
                    <div className={`border-l-4 border-red-600 pl-6 mb-4 lg:mb-8 transition-all duration-1000 ${phase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="mono text-red-500/80 tracking-[0.4em] uppercase text-[0.7rem] md:text-[0.8rem] mb-3 font-bold">
                            OPERATION // 1946_OVERWRITE
                        </div>
                        <h2 className="playfair text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-[0.9]">
                            System<br />
                            <span className="text-red-500 italic block mt-1">Eradication.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {logs.map((log, i) => (
                            <div
                                key={i}
                                className={`relative bg-[#050000] border border-red-900/30 p-6 md:p-8 flex flex-col xl:flex-row justify-between xl:items-center gap-4 group transition-all duration-700 transform hover:bg-[#100000] hover:border-red-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-default overflow-hidden ${phase >= i + 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            >
                                <div className="flex gap-4 items-center z-10 relative">
                                    <span className="mono text-red-900/50 text-xl font-bold md:pt-1">[{log.id}]</span>
                                    {/* Line-through effect text */}
                                    <span className="playfair text-2xl md:text-[1.8rem] font-bold text-white/90 group-hover:text-red-100 transition-colors duration-500">
                                        {log.target}
                                    </span>
                                </div>
                                <div className={`mono ${log.color} font-bold tracking-[0.2em] text-[0.8rem] md:text-[0.9rem] flex items-center gap-3 z-10 relative`}>
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    [ {log.status} ]
                                </div>
                                {/* Brutal Strike-through animation on hover */}
                                <div className="absolute top-[50%] left-0 h-[3px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)] transition-all duration-[600ms] ease-out z-20 w-0 group-hover:w-full mix-blend-screen pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: THE PEN */}
                <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end text-center lg:text-right">

                    <div className="flex flex-col gap-4 lg:gap-6 mb-12 lg:mb-16">
                        <div className={`playfair italic text-[var(--muted)]/80 text-3xl md:text-4xl transition-all duration-1000 ${phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            "No swords needed."
                        </div>
                        <div className={`playfair italic text-[var(--muted)]/80 text-3xl md:text-4xl transition-all duration-1000 ${phase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            "No war needed."
                        </div>
                    </div>

                    {/* Massive final text */}
                    <div className={`relative transition-all duration-[1500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${phase >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.2]'}`}>

                        {/* Background glow pulse */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-red-600/30 blur-[60px] md:blur-[100px] rounded-full transition-opacity duration-1000 pointer-events-none ${phase >= 8 ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>

                        <div className="mono text-red-500 tracking-[0.4em] uppercase text-[0.7rem] md:text-[0.8rem] mb-6 font-bold text-center lg:text-right relative z-10">
                            [ LETHAL IMPLEMENT DETECTED ]
                        </div>

                        <h2 className="playfair font-black text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[7.5rem] xl:text-[9rem] leading-[0.85] text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] text-center lg:text-right relative z-10">
                            Just a<br />
                            <span className="text-red-600 italic tracking-wider drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]">Pen.</span>
                        </h2>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default Slide19;

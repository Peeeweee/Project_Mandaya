import React, { useState, useEffect } from 'react';

const Slide19 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    const diffItems = [
        "- Removed:    33,000 ancestral land titles",
        "- Deleted:    Bagani governance system",
        "- Overwrote:  Hunting grounds with private lots",
        "- Method:     Tax declarations, legal paperwork"
    ];

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 0),      // commit tag
                setTimeout(() => setPhase(2), 800),    // author
                setTimeout(() => setPhase(3), 1600),   // divider
                setTimeout(() => setPhase(4), 2000),   // diff 1
                setTimeout(() => setPhase(5), 2900),   // diff 2
                setTimeout(() => setPhase(6), 3800),   // diff 3
                setTimeout(() => setPhase(7), 4700),   // diff 4
                setTimeout(() => setPhase(8), 5900),   // divider 2
                setTimeout(() => setPhase(9), 6700),   // note 1
                setTimeout(() => setPhase(10), 7400),  // note 2
                setTimeout(() => setPhase(11), 9400),  // final pause
                setTimeout(() => setPhase(12), 10900), // JUST A PEN (1.5s fade)
                setTimeout(() => setPhase(13), 11900)  // overlay darken
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full bg-[#060404] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Darken Overlay */}
            <div
                className={`absolute inset-0 bg-black z-40 transition-opacity duration-[2000ms] pointer-events-none ${phase >= 13 ? 'opacity-30' : 'opacity-0'}`}
            />

            <div className="max-w-[680px] w-full px-8 flex flex-col items-center text-center relative z-10 transition-all duration-1000">
                <div
                    className={`commit-box bg-[var(--terminal)] border border-red-900/20 p-8 md:p-12 w-full text-left transition-all duration-1000 ${phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}
                >
                    {/* Header Info */}
                    <div className="mb-4">
                        <div className={`mono text-[var(--muted)] text-[0.75rem] transition-opacity duration-300 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                            commit 4f8b10 — 1946
                        </div>
                        <div className={`mono text-white/60 text-[0.75rem] mt-1 transition-opacity duration-300 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                            Author: Unknown Settlers
                        </div>
                    </div>

                    <div className={`h-[1px] bg-red-900/10 w-full my-6 transition-all duration-500 origin-left ${phase >= 3 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

                    {/* Diff Items */}
                    <div className="space-y-3 mb-8">
                        {diffItems.map((item, i) => (
                            <div
                                key={i}
                                className={`mono text-[0.8rem] transition-all duration-500 overflow-hidden ${phase >= (4 + i) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                            >
                                <span className="text-red-500 mr-4">-</span>
                                <span className="text-white/70">{item.substring(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`h-[1px] bg-red-900/10 w-full my-6 transition-all duration-500 origin-left ${phase >= 8 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

                    {/* Notes */}
                    <div className="space-y-4">
                        <div className={`mono text-[var(--amber)] text-[0.75rem] tracking-wider transition-all duration-500 ${phase >= 9 ? 'opacity-100' : 'opacity-0'}`}>
                            ⚠ NOTE: No swords needed.
                        </div>
                        <div className={`mono text-[var(--amber)] text-[0.75rem] tracking-wider transition-all duration-500 ${phase >= 10 ? 'opacity-100' : 'opacity-0'}`}>
                            ⚠ NOTE: No war needed.
                        </div>
                    </div>
                </div>

                {/* Final Line */}
                <div
                    className={`mt-12 transition-all duration-[1500ms] relative z-50 text-center ${phase >= 12 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <div
                        className="playfair font-black text-[var(--red)] leading-tight tracking-tight"
                        style={{
                            fontSize: "clamp(2.2rem, 6vw, 4rem)",
                            textShadow: "0 0 50px rgba(239, 68, 68, 0.4)"
                        }}
                    >
                        ⚠ NOTE: Just a pen.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide19;

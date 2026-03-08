import React, { useState, useEffect } from 'react';

const Slide11 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 1000), // Patch notes reveal
                setTimeout(() => setPhase(2), 1300), // Item 1
                setTimeout(() => setPhase(3), 1600), // Item 2
                setTimeout(() => setPhase(4), 1900), // Item 3
                setTimeout(() => setPhase(5), 2200), // Item 4
                setTimeout(() => setPhase(6), 3500)  // Closing line
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const patchItems = [
        { version: "v1.0", period: "Pre-colonial", status: "ACTIVE", icon: "[+]", color: "var(--green)", desc: ["Unlocked by combat merit, not birth", "Absolute authority over settlement", "Outranks even spiritual leaders (Balyan)"] },
        { version: "v1.1", period: "Spanish Period", status: "SUPPRESSED", icon: "[~]", color: "var(--amber)", desc: ["Limited by colonial presence", "Survived due to terrain advantage (interior Mindanao)"] },
        { version: "v2.0", period: "American Period", status: "DEPRECATED", icon: "[-]", color: "var(--red)", desc: ["Class actively removed and suppressed", "Last known instance: 1930s"] },
        { version: "", period: "Current", status: "CLASS NO LONGER AVAILABLE", icon: "[✗]", color: "var(--red)", desc: [], bold: true }
    ];

    return (
        <div className="w-full h-full bg-[#0a0505] flex flex-col items-center justify-center p-8 overflow-y-auto no-scrollbar">
            <div className="max-w-[700px] w-full flex flex-col items-center text-center">
                {/* Large Stat */}
                <div className="mb-2 animate-[fade-in_1.2s_ease-out_forwards] flex flex-col items-center">
                    <div
                        className="playfair font-black text-[var(--red)] leading-none mb-2"
                        style={{
                            fontSize: "clamp(4.5rem, 12vw, 7.5rem)",
                            textShadow: "0 0 60px rgba(239, 68, 68, 0.4)"
                        }}
                    >
                        5 – 30
                    </div>
                    <div className="mono text-[0.72rem] tracking-[0.25em] text-[var(--muted)]/80 uppercase">
                        Kills Required to Earn Warrior Status
                    </div>
                </div>

                {/* Patch Notes Panel */}
                <div
                    className={`mt-12 w-full max-w-[600px] bg-[var(--terminal)] border border-red-900/40 p-6 md:p-8 rounded-sm text-left transition-all duration-1000 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="mono text-[var(--amber)] text-[0.7rem] tracking-[0.2em] mb-6 border-b border-red-900/20 pb-3 uppercase font-bold">
                        Patch Notes — Bagani Class
                    </div>

                    <div className="space-y-8">
                        {patchItems.map((item, i) => (
                            <div
                                key={i}
                                className={`transition-opacity duration-500 ${phase >= (i + 2) ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="flex items-start gap-4 mb-2">
                                    <span className={`mono font-bold text-lg`} style={{ color: item.color }}>{item.icon}</span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-3">
                                            <span className="mono text-[var(--white)] text-[0.8rem] font-bold">{item.version}</span>
                                            <span className="mono text-[var(--muted)] text-[0.7rem]">{item.period}</span>
                                            <span className={`mono text-[0.7rem] font-bold ${item.bold ? 'text-lg' : ''}`} style={{ color: item.color }}>{item.status}</span>
                                        </div>
                                        <ul className="mt-2 space-y-1">
                                            {item.desc.map((d, di) => (
                                                <li key={di} className="mono text-[var(--muted)] text-[0.8rem] leading-relaxed pl-4 relative before:content-['-'] before:absolute before:left-0 before:opacity-30">
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Line */}
                <div
                    className={`mt-8 transition-all duration-1000 italic text-[var(--red)] text-[0.85rem] ${phase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    "The last known Bagani disappeared in the 1930s. The class was patched out."
                </div>
            </div>
        </div>
    );
};

export default Slide11;

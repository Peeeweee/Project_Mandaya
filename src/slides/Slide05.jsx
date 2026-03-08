import React, { useState, useEffect, useRef } from 'react';

const Slide05 = ({ isActive }) => {
    const [typedHeader, setTypedHeader] = useState('');
    const [phase, setPhase] = useState(0); // 0: header, 1-4: commits, 5: final
    const timerRefs = useRef([]);

    const addTimer = (callback, delay) => {
        const timer = setTimeout(callback, delay);
        timerRefs.current.push(timer);
    };

    const clearTimers = () => {
        timerRefs.current.forEach(clearTimeout);
        timerRefs.current = [];
    };

    useEffect(() => {
        if (!isActive) {
            setTypedHeader('');
            setPhase(0);
            clearTimers();
            return;
        }

        // Step 1: Type out header command (1.5s total)
        const cmd = "root@caraga-db:~$ git log --all --caraga --stat";
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            setTypedHeader(cmd.slice(0, charIndex + 1));
            charIndex++;
            if (charIndex >= cmd.length) {
                clearInterval(typeInterval);
                // Step 2: Commits appear with 600ms stagger
                for (let i = 0; i < 4; i++) {
                    addTimer(() => {
                        setPhase(prev => Math.max(prev, i + 1));
                    }, 500 + (i * 600));
                }
                // Step 5: Final hint
                addTimer(() => setPhase(5), 3500);
            }
        }, 40);

        timerRefs.current.push(typeInterval);

        return () => clearTimers();
    }, [isActive]);

    const commits = [
        {
            hash: "a1f3e9c", date: "Pre-colonial",
            title: "Kingdom of Butuan established. Lumad peoples free.",
            body: "+ Balangay vessels launched.\n+ Indigenous societies intact.",
            status: "STATUS: ✓ SECURE", color: "var(--green)", glow: true, bg: "bg-green-950/10", border: "border-green-900/30 text-[var(--green)]"
        },
        {
            hash: "3b7d211", date: "1609",
            title: "Provincia de Caraga established by force.",
            body: "- Spanish colonial administration begins.\n! Foreign architecture superimposes indigenous layout.",
            status: "STATUS: ⚠ CORRUPTED", color: "var(--amber)", glow: false, bg: "bg-amber-950/20", border: "border-amber-900/40 text-[var(--amber)]"
        },
        {
            hash: "9c2a441", date: "1754",
            title: "The Mandaya fight back. Spanish fort defeated.",
            body: "+ Allied with Maguindanaon forces.\n+ 1,000 warriors mobilized. Victory achieved.",
            status: "STATUS: ✓ RECOVERED", color: "var(--green)", glow: true, bg: "bg-green-950/10", border: "border-green-900/30 text-[var(--green)]"
        },
        {
            hash: "4f8b101", date: "1946_CRITICAL",
            title: "Post-independence. Settlers arrive en masse.",
            body: "- Ancestral domains un-recognized and re-titled.\n- Prime hunting grounds bulldozed for logging.\n! MASSIVE DEMOGRAPHIC SHIFT DETECTED.",
            status: "FATAL: ✗ DATA LOSS — 33,000 AFFECTED", color: "#ef4444", glow: true, bg: "bg-red-950/40", border: "border-red-600 text-red-500", special: true
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-full bg-[#030403] px-4 md:px-8 py-6 md:py-8 overflow-hidden relative">

            {/* Chaotic background for phase 4 */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${phase >= 4 ? 'opacity-[0.05]' : 'opacity-0'}`}
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--green) 2px, var(--green) 4px)'
                }}
            />

            {/* Red flash for special commit */}
            <div
                className={`fixed inset-0 bg-red-600 pointer-events-none z-[1000] mix-blend-overlay ${phase === 4 ? 'animate-[red-flash_0.4s_ease-out]' : 'opacity-0'}`}
            />

            <div className="w-full max-w-[900px] relative z-10">
                {/* Header command line */}
                <div className="mono font-bold text-lg md:text-xl text-[var(--white)] bg-black border-2 border-[var(--green)] p-4 shadow-[0_0_30px_rgba(74,222,128,0.1)] mb-8 min-h-[60px] flex items-center">
                    <span className="text-[var(--green)] mr-4 font-black">❯</span>
                    <span className="tracking-wide break-all">{typedHeader}</span>
                    {phase === 0 && <span className="inline-block w-3 h-5 bg-[var(--green)] ml-3 animate-pulse align-middle" />}
                </div>

                {/* Commits */}
                <div className="flex flex-col w-full relative">
                    {commits.map((commit, i) => (
                        <div
                            key={i}
                            className={`flex w-full mb-4 transition-all duration-[800ms] ${phase >= (i + 1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
                        >
                            {/* Left Column: Timeline Line & Dots */}
                            <div className="w-[40px] md:w-[60px] shrink-0 relative flex flex-col items-center">
                                {/* The continuous line */}
                                {i !== commits.length - 1 && (
                                    <div
                                        className="absolute top-[25px] bottom-[-25px] w-[2px] md:w-[3px] bg-gradient-to-b z-0"
                                        style={{
                                            from: commit.color,
                                            to: commits[i + 1]?.color || commit.color,
                                            background: `linear-gradient(to bottom, ${commit.color}, ${commits[i + 1]?.color || commit.color})`
                                        }}
                                    />
                                )}
                                {/* The node */}
                                <div
                                    className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] rotate-45 z-10 transition-colors duration-500 mt-[8px]"
                                    style={{
                                        backgroundColor: phase >= (i + 1) ? commit.color : '#111',
                                        boxShadow: (commit.glow || commit.special) ? `0 0 15px ${commit.color}` : 'none',
                                        border: `2px solid ${phase >= (i + 1) ? '#000' : '#333'}`
                                    }}
                                />
                            </div>

                            {/* Right Column: Content Box */}
                            <div className="flex-1 min-w-0">
                                <div
                                    className={`w-full p-4 md:p-5 flex flex-col overflow-hidden relative border-l-4 ${commit.bg} ${commit.border}`}
                                    style={{
                                        borderLeftColor: commit.color,
                                        boxShadow: commit.special ? `0 0 30px rgba(255,0,0,0.15)` : 'none'
                                    }}
                                >
                                    {/* Header Data */}
                                    <div className="mono text-[0.7rem] md:text-[0.85rem] mb-3 flex flex-wrap items-center gap-3">
                                        <span
                                            className="font-bold tracking-widest px-2 py-1 bg-[#000] border-b"
                                            style={{ color: commit.color, borderColor: commit.color }}
                                        >
                                            commit [{commit.hash}]
                                        </span>
                                        <span className="text-[var(--white)] tracking-widest uppercase opacity-70">
                                            DATE:// {commit.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <div className={`playfair font-black text-xl md:text-2xl leading-tight mb-3 ${commit.special ? 'text-red-500 uppercase tracking-wide' : 'text-[var(--white)]'}`}>
                                        {commit.title}
                                    </div>

                                    {/* Body Diff */}
                                    <div className="mono text-[0.8rem] md:text-[0.95rem] leading-relaxed mb-4 space-y-1">
                                        {commit.body.split('\n').map((line, idx) => (
                                            <div key={idx} className={`${line.startsWith('+') ? 'text-green-400/90' : line.startsWith('-') ? 'text-amber-500/90' : 'text-red-500 font-bold bg-red-900/20 inline-block px-2'}`}>
                                                {line}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Status Footer */}
                                    <div className="w-full flex">
                                        <div
                                            className={`mono text-[0.85rem] md:text-[1rem] font-bold tracking-widest inline-flex items-center px-3 py-1.5 ${commit.special ? 'bg-red-600 text-white animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]' : 'bg-black/50 border border-current'}`}
                                            style={{ color: !commit.special ? commit.color : 'white' }}
                                        >
                                            {commit.status}
                                        </div>
                                    </div>

                                    {/* Glitch effects on special */}
                                    {commit.special && (
                                        <>
                                            <div className="absolute top-0 right-0 bottom-0 w-[40%] bg-[repeating-linear-gradient(45deg,rgba(255,0,0,0.05),rgba(255,0,0,0.05)_5px,transparent_5px,transparent_10px)] pointer-events-none" />
                                            <div className="absolute top-1/2 right-4 -translate-y-1/2 mono text-6xl md:text-7xl text-red-600/10 font-black rotate-12 pointer-events-none select-none tracking-tighter">
                                                ERR_
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final hint */}
                <div
                    className={`mt-10 mb-4 transition-opacity duration-1000 w-full text-center ${phase >= 5 ? 'opacity-30 hover:opacity-100' : 'opacity-0'}`}
                >
                    <span className="mono text-sm md:text-base uppercase tracking-[0.3em] font-bold text-[var(--red)] border-2 border-red-900/50 px-6 py-3 bg-red-950/20 transition-all cursor-default">
                        [ SYSTEM_PAUSED: awaiting manual override ]
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Slide05;

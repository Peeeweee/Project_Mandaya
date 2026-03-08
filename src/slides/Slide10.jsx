import React, { useState, useEffect } from 'react';

const Node = ({ title, role, desc, color, fact, delay, isRoot = false }) => {
    const [hovered, setHovered] = useState(false);
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setPhase(1), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`relative flex flex-col items-center justify-start group transition-all duration-700 transform ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} w-full max-w-[300px] hover:z-[100]`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={`relative border-l-[4px] bg-[#050805] w-full transition-all duration-300 z-20 ${hovered ? 'bg-[#0a120a] scale-[1.02]' : ''}`}
                style={{
                    borderLeftColor: color,
                    borderTop: `1px solid ${hovered ? color : '#111'}`,
                    borderRight: `1px solid ${hovered ? color : '#111'}`,
                    borderBottom: `1px solid ${hovered ? color : '#111'}`,
                    boxShadow: hovered ? `0 0 30px ${color}33, inset 5px 0 20px ${color}11` : `0 10px 30px rgba(0,0,0,0.5)`,
                }}
            >
                {/* Header Tag */}
                <div
                    className="mono text-[0.6rem] md:text-[0.7rem] uppercase tracking-widest px-4 py-2 border-b border-[#111] border-opacity-50 flex items-center justify-between"
                    style={{ backgroundColor: `${color}15`, color: color }}
                >
                    <span>{title}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${hovered ? 'animate-pulse' : ''}`} style={{ backgroundColor: color }}></div>
                </div>

                {/* Body Details */}
                <div className="p-4 md:p-5 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>

                    {/* ID Watermark for root */}
                    {isRoot && <div className="absolute -right-2 -bottom-4 playfair text-7xl font-black opacity-[0.03] text-white select-none pointer-events-none tracking-tighter">00</div>}

                    <div className={`mono text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${hovered ? 'text-[var(--white)]' : 'text-gray-200'}`}>
                        {role}
                    </div>
                    <div className="mono text-[0.75rem] md:text-[0.8rem] text-[var(--muted)] tracking-wide leading-relaxed">
                        {desc}
                    </div>
                </div>

                {/* Animated Scanner on Hover */}
                {hovered && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full z-10 block">
                        <div className="w-full h-[1px] bg-white opacity-20 absolute top-0 animate-[scan_1.5s_ease-in-out_infinite]" style={{ boxShadow: `0 0 10px ${color}` }}></div>
                    </div>
                )}
            </div>

            {/* Facts Tooltip - Absolute positioned to avoid layout shifts */}
            <div
                className={`absolute top-[100%] left-0 w-full bg-black border-x border-b border-[#222] p-4 transition-all duration-300 origin-top overflow-hidden shadow-2xl ${hovered ? 'opacity-100 scale-y-100 pointer-events-auto z-[90]' : 'opacity-0 scale-y-0 pointer-events-none z-[-1]'}`}
            >
                <div className="flex items-start gap-3">
                    <span className="mono text-xl leading-none" style={{ color: color }}>"</span>
                    <p className="mono text-[0.75rem] md:text-[0.8rem] text-[#aaa] leading-[1.6]">
                        {fact}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Slide10 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 700),
                setTimeout(() => setPhase(3), 1500),
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#030403] px-4 md:px-8 py-10 overflow-y-auto overflow-x-hidden relative flex flex-col items-center justify-center">

            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] min-h-full"
                style={{ backgroundImage: 'linear-gradient(var(--green) 1px, transparent 1px), linear-gradient(90deg, var(--green) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className={`w-full max-w-[1200px] mx-auto flex flex-col items-center relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* Header Section */}
                <div className="w-full flex flex-col items-center text-center mb-8">
                    <div className={`transition-all duration-1000 transform ${phase >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                        <div className="inline-flex items-center gap-4 mb-4 px-6 py-2 bg-[#060a06] border border-green-900/50 shadow-[0_0_15px_rgba(74,222,128,0.05)]">
                            <span className="w-2 h-2 bg-[var(--green)] animate-pulse hidden md:block"></span>
                            <span className="mono text-[0.75rem] tracking-[0.3em] font-bold text-[var(--green)] uppercase">
                                SEC_03 // SYSTEM_ARCHITECTURE
                            </span>
                            <span className="w-2 h-2 bg-[var(--green)] animate-pulse hidden md:block"></span>
                        </div>
                        <h2 className="playfair text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--white)] tracking-wide">
                            How Their Society Was <span className="text-amber-500/90 italic block md:inline mt-2 md:mt-0">Organized</span>
                        </h2>
                    </div>
                </div>

                {/* Flowchart Layout Container */}
                <div className="w-full max-w-[1000px] flex flex-col items-center relative z-20 mt-4 md:mt-8">

                    {/* Level 01: Root */}
                    <div className="w-full flex justify-center z-30 relative px-4">
                        <Node
                            isRoot={true}
                            title="SYS.ROOT // LDR_01"
                            role="Mangkatadong"
                            desc="Executive Authority / Identifier: Yellow cloth"
                            color="var(--green)"
                            fact="The highest executive authority in the community settlement. Governed over multi-family clans."
                            delay={600}
                        />
                    </div>

                    {/* Root Trunk Wire */}
                    <div className={`w-[2px] h-8 md:h-12 bg-gradient-to-b from-[var(--green)] to-[#333] z-10 transition-transform duration-1000 origin-top shadow-[0_0_10px_var(--green)] ${phase >= 2 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

                    {/* Horizontal Wiring & Down Drops */}
                    <div className={`w-full max-w-[800px] flex flex-col items-center z-10 transition-opacity duration-1000 delay-300 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Horizontal spine */}
                        <div className="w-[calc(100%-2rem)] md:w-[70%] lg:w-[66%] flex justify-between relative h-[2px] bg-[#333]">
                            {/* Left drop */}
                            <div className="w-[2px] h-8 md:h-12 bg-[#333] absolute left-0 top-0"></div>
                            {/* Center drop */}
                            <div className="w-[2px] h-8 md:h-12 bg-[#333] absolute left-1/2 -ml-[1px] top-0"></div>
                            {/* Right drop */}
                            <div className="w-[2px] h-8 md:h-12 bg-[#333] absolute right-0 top-0"></div>
                        </div>
                        {/* Spacing to clear the drops */}
                        <div className="w-full h-8 md:h-12"></div>
                    </div>

                    {/* Level 02: Middle Nodes */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 px-4 md:px-0 z-30">
                        <div className="flex flex-col items-center md:items-end lg:items-center relative w-full">
                            <Node
                                title="MOD.01 // GOVERNANCE"
                                role="Bawukan"
                                desc="Council of Elders / Identifier: Red cloth"
                                color="var(--amber)"
                                fact="Deliberative body of wise leaders who advised on customary laws and collective decisions."
                                delay={900}
                            />
                        </div>

                        <div className="flex flex-col items-center w-full relative">
                            <Node
                                title="MOD.02 // TACTICAL"
                                role="Bagani"
                                desc="Warrior-Chief / Combat Authority"
                                color="#ef4444"
                                fact="Earned their position through combat merit. They were the ultimate protectors."
                                delay={1100}
                            />
                            {/* Extension wire down to Engineering (Visible only on md+) */}
                            <div className={`hidden md:block absolute top-[100%] right-1/2 translate-x-1/2 w-[2px] h-[30px] md:h-[60px] bg-[#333] transition-all duration-1000 delay-700 z-10 ${phase >= 3 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 origin-top'}`}></div>
                        </div>

                        <div className="flex flex-col items-center md:items-start lg:items-center w-full">
                            <Node
                                title="MOD.03 // SPIRITUAL"
                                role="Balyan"
                                desc="Shaman / Priestess"
                                color="#a855f7"
                                fact="Communicated with the spirit world. Usually women who held significant social influence."
                                delay={1300}
                            />
                        </div>
                    </div>

                    {/* Level 03: Bottom Node */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 mt-6 md:mt-0 px-4 md:px-0 z-30">
                        <div className="hidden md:block"></div>
                        <div className="flex flex-col items-center relative w-full pt-2 md:pt-[60px]">
                            {/* Mobile connection wire from Tactical */}
                            <div className={`md:hidden absolute top-[-24px] w-[2px] h-[24px] bg-[#333] transition-all duration-1000 delay-700 z-10 ${phase >= 3 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 origin-top'}`}></div>

                            <Node
                                title="AUX // ENGINEERING"
                                role="Panday"
                                desc="Blacksmith / Specialized Craft"
                                color="#3b82f6"
                                fact="Highly skilled metalworkers specialized in blades and tools essential for survival."
                                delay={1600}
                            />
                        </div>
                        <div className="hidden md:block"></div>
                    </div>

                </div>

                {/* Dramatic Footer Quote */}
                <div className={`mt-14 md:mt-16 mx-auto w-full max-w-[800px] text-center px-4 transition-all duration-1000 transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-1000 mb-12`}>
                    <div className="relative inline-block border-l-[4px] border-[var(--green)] pl-6 py-2 text-left w-full md:w-auto">
                        <span className="absolute -left-4 -top-2 text-[var(--green)] font-mono text-4xl md:text-5xl opacity-30">"</span>
                        <p className="playfair italic text-[var(--white)] text-lg md:text-2xl lg:text-3xl leading-[1.6] text-green-500/80 tracking-wide">
                            This wasn't chaos — it was a system. <br className="hidden md:block" />
                            <span className="font-bold text-[var(--green)]">Sophisticated. Functional. Deliberately destroyed.</span>
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 0.3; }
                    90% { opacity: 0.3; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Slide10;

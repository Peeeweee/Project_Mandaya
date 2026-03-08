import React, { useState, useEffect, useRef } from 'react';

// Comic Panel Component
const ComicPanel = ({ children, colSpan = "col-span-12", borderColor = "border-white", shadowColor = "#ffffff", bgColor = "bg-[#050505]", delay = 0, isVisible }) => (
    <div
        className={`${colSpan} border-[3px] md:border-4 flex flex-col justify-center ${borderColor} ${bgColor} px-6 py-8 md:p-10 relative overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{
            boxShadow: `8px 8px 0px ${shadowColor}`,
            transitionDelay: `${delay}ms`
        }}
    >
        {children}
    </div>
);

const Slide03 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);
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
            setPhase(0);
            clearTimers();
            return;
        }

        // Show panels shortly after becoming active
        addTimer(() => setPhase(1), 150);

        // Show map province labels after lines draw
        addTimer(() => setPhase(2), 6000);

        return () => clearTimers();
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[#050505] flex justify-center items-center overflow-y-auto no-scrollbar p-6 md:p-12 relative text-white">

            {/* Retro Graphic Halftone Background */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #28c840 2px, transparent 2.5px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className={`max-w-[1200px] w-full grid grid-cols-12 gap-6 md:gap-8 relative z-10 transition-all duration-1000 ease-out`}>

                {/* Panel 1: Map Panel */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-7"
                    borderColor="border-[#28c840]"
                    shadowColor="#28c840"
                    bgColor="bg-[#020802]"
                    isVisible={phase >= 1} delay={0}
                >
                    <div className="absolute top-0 right-0 bg-[#28c840] text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-[#28c840] tracking-widest z-10">
                        SURVEY_MAP
                    </div>
                    {/* Halftone Overlay specific to map panel */}
                    <div className="absolute inset-0 opacity-[0.05] mix-blend-screen" style={{
                        backgroundImage: 'radial-gradient(circle, #28c840 2px, transparent 2.5px)',
                        backgroundSize: '8px 8px'
                    }}></div>

                    {/* SVG MAP */}
                    <div className="w-full flex items-center justify-center relative z-10 py-4 min-h-[40vh] lg:min-h-[60vh]">
                        <svg
                            viewBox="0 0 400 450"
                            className="w-full max-w-[400px] h-auto drop-shadow-[0_0_15px_rgba(40,200,64,0.15)]"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <g className="province-borders" fill="rgba(40,200,64,0.03)" stroke="#28c840" strokeWidth="1.5" strokeLinejoin="round" filter="drop-shadow(0 0 8px rgba(40,200,64,0.5))">
                                {/* Dinagat Islands */}
                                <path
                                    d="M 135,50 L 140,42 L 148,35 L 152,40 L 150,47 L 155,55 L 158,68 L 162,75 L 165,85 L 162,95 L 155,115 L 150,123 L 145,118 L 140,105 L 142,90 L 138,75 L 133,60 Z"
                                    strokeDasharray="400"
                                    strokeDashoffset="400"
                                    style={{ animation: phase >= 1 ? 'draw 2.5s ease-out forwards 0s' : 'none' }}
                                />
                                {/* Siargao & Bucas Grande */}
                                <path
                                    d="M 215,130 L 220,120 L 230,112 L 240,115 L 245,125 L 240,138 L 225,148 L 210,140 Z M 205,155 L 215,148 L 220,158 L 210,168 Z"
                                    strokeDasharray="200"
                                    strokeDashoffset="200"
                                    style={{ animation: phase >= 1 ? 'draw 2.5s ease-out forwards 0.5s' : 'none' }}
                                />
                                {/* Surigao del Norte */}
                                <path
                                    d="M 145,145 L 152,140 L 160,132 L 170,135 L 180,140 L 195,148 L 198,158 L 190,168 L 180,178 L 165,185 L 155,180 L 140,170 L 135,160 L 140,150 Z"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    style={{ animation: phase >= 1 ? 'draw 2.5s ease-out forwards 1s' : 'none' }}
                                />
                                {/* Surigao del Sur */}
                                <path
                                    d="M 180,178 L 190,168 L 198,158 L 210,165 L 225,175 L 240,190 L 250,205 L 260,215 L 270,230 L 273,248 L 285,265 L 295,285 L 305,300 L 312,315 L 305,335 L 295,355 L 288,380 L 282,405 L 275,420 L 265,422 L 255,405 L 245,375 L 235,355 L 225,335 L 210,315 L 195,290 L 185,260 L 175,230 L 180,210 L 185,195 L 180,178 Z"
                                    strokeDasharray="800"
                                    strokeDashoffset="800"
                                    style={{ animation: phase >= 1 ? 'draw 3s ease-out forwards 1.5s' : 'none' }}
                                />
                                {/* Agusan del Norte */}
                                <path
                                    d="M 140,170 L 155,180 L 165,185 L 180,178 L 185,195 L 180,210 L 175,230 L 185,260 L 160,265 L 135,270 L 125,255 L 120,240 L 130,225 L 135,200 L 125,185 L 135,178 L 140,170 Z"
                                    strokeDasharray="500"
                                    strokeDashoffset="500"
                                    style={{ animation: phase >= 1 ? 'draw 2.5s ease-out forwards 2s' : 'none' }}
                                />
                                {/* Agusan del Sur */}
                                <path
                                    d="M 125,255 L 135,270 L 160,265 L 185,260 L 195,290 L 210,315 L 225,335 L 235,355 L 245,375 L 255,405 L 265,422 L 275,420 L 260,432 L 240,442 L 215,445 L 190,440 L 165,435 L 155,420 L 145,395 L 135,370 L 125,340 L 115,310 L 110,285 L 125,270 L 125,255 Z"
                                    strokeDasharray="800"
                                    strokeDashoffset="800"
                                    style={{ animation: phase >= 1 ? 'draw 3s ease-out forwards 2.5s' : 'none' }}
                                />
                            </g>

                            {/* Province Labels */}
                            <g className="province-labels" style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 1s ease-in' }}>
                                <text x="50" y="70" className="mono text-[0.55rem] font-bold fill-[#28c840] opacity-80 tracking-widest uppercase">Dinagat Islands</text>
                                <text x="35" y="145" className="mono text-[0.55rem] font-bold fill-[#28c840] opacity-80 tracking-widest uppercase">Surigao del Norte</text>
                                <text x="290" y="270" className="mono text-[0.55rem] font-bold fill-[#28c840] opacity-80 tracking-widest uppercase">Surigao del Sur</text>
                                <text x="25" y="240" className="mono text-[0.55rem] font-bold fill-[#28c840] opacity-80 tracking-widest uppercase">Agusan del Norte</text>
                                <text x="135" y="340" className="mono text-[0.55rem] font-bold fill-[#28c840] opacity-80 tracking-widest uppercase">Agusan del Sur</text>
                            </g>

                            {/* Location Town Dots */}
                            <g>
                                <circle
                                    cx="285" cy="380" r="3"
                                    fill="#28c840"
                                    className={phase >= 2 ? "animate-[pulse-map-dot_2s_infinite]" : "opacity-0"}
                                    style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 0.5s' }}
                                />
                                <circle
                                    cx="140" cy="200" r="3"
                                    fill="#28c840"
                                    className={phase >= 2 ? "animate-[pulse-map-dot_2s_infinite]" : "opacity-0"}
                                    style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 0.5s 0.5s' }}
                                />
                                <circle
                                    cx="180" cy="330" r="3"
                                    fill="#28c840"
                                    className={phase >= 2 ? "animate-[pulse-map-dot_2s_infinite]" : "opacity-0"}
                                    style={{ opacity: phase >= 2 ? 1 : 0, transition: 'opacity 0.5s 1s' }}
                                />
                            </g>
                        </svg>
                    </div>
                </ComicPanel>

                {/* Right Column wrapper for Title and Quote */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 md:gap-8">

                    {/* Panel 2: Title / Etymology */}
                    <ComicPanel
                        colSpan="col-span-1 flex-shrink-0"
                        borderColor="border-[#8b5cf6]"
                        shadowColor="#8b5cf6"
                        bgColor="bg-[#050010]"
                        isVisible={phase >= 1} delay={150}
                    >
                        <div className="absolute top-0 right-0 bg-[#8b5cf6] text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-[#8b5cf6] tracking-widest z-10">
                            DATA_ENTRY // 01
                        </div>
                        {/* Inside Halftone */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{
                            backgroundImage: 'radial-gradient(circle, #8b5cf6 2px, transparent 2.5px)',
                            backgroundSize: '12px 12px'
                        }}></div>

                        <div className="relative z-10 pt-4 text-center pb-2">
                            <h2 className="playfair text-6xl md:text-[5rem] lg:text-[6rem] font-black uppercase tracking-wider leading-[1] text-white drop-shadow-[5px_5px_0_rgba(139,92,246,0.5)]">
                                Caraga
                            </h2>
                            <div className="mt-8 bg-[#0a0215] border-[3px] border-[#8b5cf6]/60 p-5 inline-block shadow-[0_0_20px_rgba(139,92,246,0.15)] transform -rotate-2">
                                <p className="mono font-bold tracking-[0.1em] text-[#8b5cf6] text-[0.85rem] md:text-[0.95rem] leading-relaxed">
                                    etymology: <span className="text-white italic bg-[#8b5cf6]/20 px-2 py-1">kalag</span><br />
                                    <span className="text-white/80 uppercase tracking-widest block mt-3">"spirit" / "soul"</span>
                                </p>
                            </div>
                        </div>
                    </ComicPanel>

                    {/* Panel 3: Quote */}
                    <ComicPanel
                        colSpan="col-span-1 h-full flex-grow flex"
                        borderColor="border-yellow-400"
                        shadowColor="#facc15"
                        bgColor="bg-[#120a00]"
                        isVisible={phase >= 1} delay={300}
                    >
                        <div className="absolute top-0 right-0 bg-yellow-400 text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-yellow-400 tracking-widest z-10">
                            LORE_FRAG
                        </div>
                        {/* Halftone inside */}
                        <div className="absolute inset-0 opacity-[0.15]" style={{
                            backgroundImage: 'radial-gradient(circle, #facc15 2px, transparent 2.5px)',
                            backgroundSize: '12px 12px'
                        }}></div>

                        <div className="relative z-10 pt-4 flex flex-col justify-center h-full">
                            <div className="text-yellow-400 text-5xl md:text-6xl font-black playfair italic mb-[-1.5rem] opacity-30 relative z-0">"</div>

                            <p className="mono text-[0.95rem] md:text-[1.1rem] text-white leading-[2] font-medium tracking-wide relative z-10 px-2 lg:px-4">
                                Before the borders. Before the provinces. Before anyone put a name on a map —
                                <span className="block mt-6 bg-yellow-400 text-black p-3 font-bold border-[3px] border-yellow-400 shadow-[6px_6px_0_#000] rotate-1 w-fit">
                                    this land already had a soul.
                                </span>
                            </p>

                            <div className="text-yellow-400 text-5xl md:text-6xl font-black playfair italic mt-[-1rem] text-right opacity-30 relative z-0">"</div>
                        </div>
                    </ComicPanel>
                </div>
            </div>
        </div>
    );
};

export default Slide03;

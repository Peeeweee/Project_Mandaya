import React, { useState, useEffect, useRef } from 'react';

const Slide03 = ({ isActive }) => {
    const [phase, setPhase] = useState(0); // 0: drawing, 1: labels, 2: hint
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

        // Coastline finishes around 6s (3.5s start + 2.5s duration)
        // Label reveal starts at 6s
        addTimer(() => setPhase(1), 6000);
        // Etymology delay 0.8s -> 6.8s

        // Hint at 8s
        addTimer(() => setPhase(2), 8000);

        return () => clearTimers();
    }, [isActive]);

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden relative"
            style={{
                background: 'radial-gradient(ellipse at center, #0a0f0a 0%, #030603 60%, #000 100%)'
            }}
        >
            <div className="relative flex flex-col items-center justify-center w-full max-w-4xl">
                {/* SVG MAP */}
                <svg
                    viewBox="0 0 400 450"
                    className="w-full max-w-[400px] max-h-[50vh] md:max-h-[60vh] h-auto drop-shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                    role="presentation"
                    aria-hidden="true"
                >
                    <g className="province-borders" fill="rgba(74,222,128,0.03)" stroke="var(--green)" strokeWidth="1.2" strokeLinejoin="round" filter="drop-shadow(0 0 6px rgba(74,222,128,0.4))">
                        {/* Dinagat Islands */}
                        <path
                            d="M 135,50 L 140,42 L 148,35 L 152,40 L 150,47 L 155,55 L 158,68 L 162,75 L 165,85 L 162,95 L 155,115 L 150,123 L 145,118 L 140,105 L 142,90 L 138,75 L 133,60 Z"
                            strokeDasharray="400"
                            strokeDashoffset="400"
                            style={{ animation: isActive ? 'draw 2.5s ease-out forwards 0s' : 'none' }}
                        />
                        {/* Siargao & Bucas Grande */}
                        <path
                            d="M 215,130 L 220,120 L 230,112 L 240,115 L 245,125 L 240,138 L 225,148 L 210,140 Z M 205,155 L 215,148 L 220,158 L 210,168 Z"
                            strokeDasharray="200"
                            strokeDashoffset="200"
                            style={{ animation: isActive ? 'draw 2.5s ease-out forwards 0.5s' : 'none' }}
                        />
                        {/* Surigao del Norte */}
                        <path
                            d="M 145,145 L 152,140 L 160,132 L 170,135 L 180,140 L 195,148 L 198,158 L 190,168 L 180,178 L 165,185 L 155,180 L 140,170 L 135,160 L 140,150 Z"
                            strokeDasharray="300"
                            strokeDashoffset="300"
                            style={{ animation: isActive ? 'draw 2.5s ease-out forwards 1s' : 'none' }}
                        />
                        {/* Surigao del Sur */}
                        <path
                            d="M 180,178 L 190,168 L 198,158 L 210,165 L 225,175 L 240,190 L 250,205 L 260,215 L 270,230 L 273,248 L 285,265 L 295,285 L 305,300 L 312,315 L 305,335 L 295,355 L 288,380 L 282,405 L 275,420 L 265,422 L 255,405 L 245,375 L 235,355 L 225,335 L 210,315 L 195,290 L 185,260 L 175,230 L 180,210 L 185,195 L 180,178 Z"
                            strokeDasharray="800"
                            strokeDashoffset="800"
                            style={{ animation: isActive ? 'draw 3s ease-out forwards 1.5s' : 'none' }}
                        />
                        {/* Agusan del Norte */}
                        <path
                            d="M 140,170 L 155,180 L 165,185 L 180,178 L 185,195 L 180,210 L 175,230 L 185,260 L 160,265 L 135,270 L 125,255 L 120,240 L 130,225 L 135,200 L 125,185 L 135,178 L 140,170 Z"
                            strokeDasharray="500"
                            strokeDashoffset="500"
                            style={{ animation: isActive ? 'draw 2.5s ease-out forwards 2s' : 'none' }}
                        />
                        {/* Agusan del Sur */}
                        <path
                            d="M 125,255 L 135,270 L 160,265 L 185,260 L 195,290 L 210,315 L 225,335 L 235,355 L 245,375 L 255,405 L 265,422 L 275,420 L 260,432 L 240,442 L 215,445 L 190,440 L 165,435 L 155,420 L 145,395 L 135,370 L 125,340 L 115,310 L 110,285 L 125,270 L 125,255 Z"
                            strokeDasharray="800"
                            strokeDashoffset="800"
                            style={{ animation: isActive ? 'draw 3s ease-out forwards 2.5s' : 'none' }}
                        />
                    </g>

                    <g className="province-labels" style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 1s ease-in 1.5s' }}>
                        <text x="50" y="70" className="mono text-[0.55rem] font-bold fill-[var(--muted)] tracking-widest uppercase">Dinagat Islands</text>
                        <text x="35" y="145" className="mono text-[0.55rem] font-bold fill-[var(--muted)] tracking-widest uppercase">Surigao del Norte</text>
                        <text x="290" y="270" className="mono text-[0.55rem] font-bold fill-[var(--muted)] tracking-widest uppercase">Surigao del Sur</text>
                        <text x="25" y="240" className="mono text-[0.55rem] font-bold fill-[var(--muted)] tracking-widest uppercase">Agusan del Norte</text>
                        <text x="135" y="340" className="mono text-[0.55rem] font-bold fill-[var(--muted)] tracking-widest uppercase">Agusan del Sur</text>
                    </g>

                    {/* Location Dots (Phase 1.4) */}
                    <g>
                        {/* Mandaya - Davao Oriental/Surigao Sur area (Southeast) */}
                        <circle
                            cx="285" cy="380" r="3"
                            fill="var(--green)"
                            className={isActive ? "animate-[pulse-map-dot_2s_infinite]" : "opacity-0"}
                            style={{ animationDelay: '6s', opacity: isActive ? 1 : 0, transition: 'opacity 0.5s 6s' }}
                        />
                        {/* Higaonon - Agusan Norte area (Northwest) */}
                        <circle
                            cx="140" cy="200" r="3"
                            fill="var(--green)"
                            className={isActive ? "animate-[pulse-map-dot_2s_infinite]" : "opacity-0"}
                            style={{ animationDelay: '6.5s', opacity: isActive ? 1 : 0, transition: 'opacity 0.5s 6.5s' }}
                        />
                        {/* Manobo - Agusan Sur area (Central/South) */}
                        <circle
                            cx="180" cy="330" r="3"
                            fill="var(--green)"
                            className={isActive ? "animate-[pulse-map-dot_2s_infinite]" : "opacity-0"}
                            style={{ animationDelay: '7s', opacity: isActive ? 1 : 0, transition: 'opacity 0.5s 7s' }}
                        />
                    </g>
                </svg>

                {/* Labels (Phase 2) */}
                <div className="mt-12 md:mt-16 text-center min-h-[120px]">
                    <h2
                        className={`font-black tracking-[0.12em] text-[var(--white)] transition-all duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)"
                        }}
                    >
                        CARAGA
                    </h2>
                    <p
                        className={`mono mt-2 tracking-[0.18em] text-[var(--muted)] text-[0.8rem] transition-all duration-800 delay-800 ${phase >= 1 ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        etymology: kalag — "spirit" / "soul"
                    </p>
                </div>

            </div>

            {/* Hint (Phase 3) */}
            <div
                className={`absolute bottom-8 md:bottom-12 w-full px-6 text-center transition-opacity duration-1000 ${phase >= 2 ? 'opacity-35' : 'opacity-0'}`}
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                    maxWidth: "800px"
                }}
            >
                Before the borders. Before the provinces. Before anyone put a name<br className="hidden sm:block" />
                on a map — this land already had a soul.
            </div>
        </div>
    );
};

export default Slide03;

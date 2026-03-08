import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SlideContent } from '../components/SlideElements';
import { useSoundSystem } from '../contexts/SoundContext';

const TypewriterLine = ({ text, delay, isActive, className, onComplete }) => {
    const { playTypeClick } = useSoundSystem();
    const [visibleText, setVisibleText] = useState("");

    useEffect(() => {
        if (!isActive) {
            setVisibleText("");
            return;
        }

        let t;
        const to = setTimeout(() => {
            let i = 0;
            t = setInterval(() => {
                setVisibleText(text.substring(0, i + 1));
                playTypeClick();
                i++;
                if (i >= text.length) {
                    clearInterval(t);
                    if (onComplete) onComplete();
                }
            }, 60);
        }, delay);

        return () => {
            clearTimeout(to);
            clearInterval(t);
        };
    }, [isActive, text, delay, playTypeClick, onComplete]);

    return <div className={`min-h-[1.5em] ${className}`}>{visibleText}</div>;
};

const EmberParticles = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${10 + Math.random() * 80}%`,
            animationDuration: `${20 + Math.random() * 30}s`,
            animationDelay: `-${Math.random() * 20}s`,
            opacity: 0.05 + Math.random() * 0.15,
            size: `${2 + Math.random() * 2}px`
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p, index) => (
                <div
                    key={p.id}
                    className={`absolute rounded-full bg-[var(--amber-light)] animate-[floatUp_linear_infinite] ${index >= 10 ? 'hidden md:block' : ''}`}
                    style={{
                        willChange: 'transform',
                        left: p.left,
                        bottom: '-20px',
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        animationDuration: p.animationDuration,
                        animationDelay: p.animationDelay,
                        boxShadow: `0 0 10px var(--amber)`
                    }}
                />
            ))}
        </div>
    );
};

const SlideFinal = ({ isActive }) => {
    const { playChime } = useSoundSystem();
    const [mapVisible, setMapVisible] = useState(false);
    const [termFaded, setTermFaded] = useState(false);
    const [quote1, setQuote1] = useState(false);
    const [quote2, setQuote2] = useState(false);
    const [attrVisible, setAttrVisible] = useState(false);
    const [ctaVisible, setCtaVisible] = useState(false);
    const [fadeBlack, setFadeBlack] = useState(false);

    useEffect(() => {
        if (isActive) {
            // Timeline based on typing calculations
            const tMap = setTimeout(() => setMapVisible(true), 8940);
            const tTerm = setTimeout(() => setTermFaded(true), 10440);
            const tQ1 = setTimeout(() => setQuote1(true), 10940);
            const tQ2 = setTimeout(() => setQuote2(true), 11540);
            const tAttr = setTimeout(() => setAttrVisible(true), 16540);
            const tCta = setTimeout(() => setCtaVisible(true), 18540);
            const tBlack = setTimeout(() => setFadeBlack(true), 26540);

            return () => {
                clearTimeout(tMap);
                clearTimeout(tTerm);
                clearTimeout(tQ1);
                clearTimeout(tQ2);
                clearTimeout(tAttr);
                clearTimeout(tCta);
                clearTimeout(tBlack);
            };
        } else {
            setMapVisible(false);
            setTermFaded(false);
            setQuote1(false);
            setQuote2(false);
            setAttrVisible(false);
            setCtaVisible(false);
            setFadeBlack(false);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full bg-[#000000] flex items-center justify-center relative overflow-hidden">
            <EmberParticles />

            {/* Fade to Black Overlay */}
            <div
                className={`absolute inset-0 pointer-events-none z-50 bg-[#000000] transition-opacity duration-[3000ms] ease-in-out ${fadeBlack ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* MAP SVG */}
            <div
                className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-[2000ms] z-10 ${mapVisible ? 'opacity-15' : 'opacity-0'}`}
            >
                <svg viewBox="0 0 400 450" className="w-full max-w-[800px] h-auto" role="presentation" aria-hidden="true">
                    {/* Province Borders */}
                    <g className="province-borders" fill="rgba(74,222,128,0.03)" stroke="var(--green)" strokeWidth="1.2" strokeLinejoin="round" opacity="0.6">
                        <path d="M 135,50 L 140,42 L 148,35 L 152,40 L 150,47 L 155,55 L 158,68 L 162,75 L 165,85 L 162,95 L 155,115 L 150,123 L 145,118 L 140,105 L 142,90 L 138,75 L 133,60 Z" />
                        <path d="M 215,130 L 220,120 L 230,112 L 240,115 L 245,125 L 240,138 L 225,148 L 210,140 Z M 205,155 L 215,148 L 220,158 L 210,168 Z" />
                        <path d="M 145,145 L 152,140 L 160,132 L 170,135 L 180,140 L 195,148 L 198,158 L 190,168 L 180,178 L 165,185 L 155,180 L 140,170 L 135,160 L 140,150 Z" />
                        <path d="M 180,178 L 190,168 L 198,158 L 210,165 L 225,175 L 240,190 L 250,205 L 260,215 L 270,230 L 273,248 L 285,265 L 295,285 L 305,300 L 312,315 L 305,335 L 295,355 L 288,380 L 282,405 L 275,420 L 265,422 L 255,405 L 245,375 L 235,355 L 225,335 L 210,315 L 195,290 L 185,260 L 175,230 L 180,210 L 185,195 L 180,178 Z" />
                        <path d="M 140,170 L 155,180 L 165,185 L 180,178 L 185,195 L 180,210 L 175,230 L 185,260 L 160,265 L 135,270 L 125,255 L 120,240 L 130,225 L 135,200 L 125,185 L 135,178 L 140,170 Z" />
                        <path d="M 125,255 L 135,270 L 160,265 L 185,260 L 195,290 L 210,315 L 225,335 L 235,355 L 245,375 L 255,405 L 265,422 L 275,420 L 260,432 L 240,442 L 215,445 L 190,440 L 165,435 L 155,420 L 145,395 L 135,370 L 125,340 L 115,310 L 110,285 L 125,270 L 125,255 Z" />
                    </g>

                    {/* Glowing Dots */}
                    {/* Mandaya - Green */}
                    <circle cx="285" cy="380" r="4" fill="var(--green)" style={{ filter: 'drop-shadow(0 0 10px var(--green))' }} className="animate-[pulse-map-dot_2s_infinite_alternate]" />
                    {/* Manobo - Amber */}
                    <circle cx="180" cy="330" r="4" fill="var(--amber)" style={{ filter: 'drop-shadow(0 0 10px var(--amber))' }} className="animate-[pulse-map-dot_2s_infinite_alternate_delay-500]" />
                    {/* Higaonon - Blue/Purple */}
                    <circle cx="140" cy="200" r="4" fill="#a855f7" style={{ filter: 'drop-shadow(0 0 10px #a855f7)' }} className="animate-[pulse-map-dot_2s_infinite_alternate_delay-1000]" />
                </svg>
            </div>

            <SlideContent className="relative z-20 flex flex-col items-center justify-center">
                {/* TERMINAL */}
                <div
                    className={`w-full max-w-[460px] bg-[var(--terminal)] border border-[var(--border)] shadow-[0_0_60px_rgba(74,222,128,0.05)] transition-all duration-1000 ${termFaded ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}
                    style={{ display: termFaded && 'none' }} // avoid layout shifts if needed, but absolute pos is better. Actually, it's fine.
                >
                    <div className="bg-[#1a201a] border-b border-[var(--border)] p-3 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="p-8 mono text-[0.85rem] leading-[2]">
                        <TypewriterLine text="$ git status" delay={0} isActive={isActive} className="text-[var(--white)]" />
                        <div className="h-6" /> {/* empty line spacer */}
                        <TypewriterLine text="3 files restored." delay={1520} isActive={isActive} className="text-[var(--muted)]" />
                        <TypewriterLine text="0 files deleted." delay={2940} isActive={isActive} className="text-[var(--muted)]" />
                        <div className="h-6" /> {/* empty line spacer */}
                        <TypewriterLine
                            text="caraga-peoples repository — FULLY RECOVERED."
                            delay={4300}
                            isActive={isActive}
                            className="text-[var(--green)] font-medium drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                            onComplete={() => playChime(true)}
                        />
                    </div>
                </div>

                {/* QUOTE AND ENDING */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 w-full px-8 pointer-events-none ${quote1 ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="playfair text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic text-[var(--white)] leading-[1.6] text-center max-w-[600px]">
                        <span className={`block transition-opacity duration-[1500ms] ${quote1 ? 'opacity-100' : 'opacity-0'}`}>
                            "They tried to bury us.
                        </span>
                        <span className={`block transition-opacity duration-[1500ms] ${quote2 ? 'opacity-100' : 'opacity-0'}`}>
                            They did not know we were seeds."
                        </span>
                    </h2>

                    <div
                        className={`mt-10 mono text-[0.68rem] tracking-[0.08em] text-[var(--muted)] text-center transition-opacity duration-[800ms] ${attrVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        — Proverb, adopted by Indigenous Peoples rights movements worldwide
                    </div>

                    <div
                        className={`mt-20 mono text-[0.78rem] tracking-[0.15em] text-[var(--green)] border border-[var(--border)] bg-[#030603]/80 px-6 py-3 transition-opacity duration-1000 ${ctaVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        This repository is now open to the public.
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default SlideFinal;

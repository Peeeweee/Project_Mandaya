import React, { useState, useEffect } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const ProgressRow = ({ label, status, target, fill, delay, show }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => setWidth(target), delay + 300);
            return () => clearTimeout(timer);
        } else {
            setWidth(0);
        }
    }, [show, target, delay]);

    const isIntact = target === 100;

    return (
        <div
            className={`flex items-center gap-6 mb-4 md:mb-6 transition-all duration-700 animate-[fade-up_0.6s_ease-out_forwards] opacity-0`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                <div className="mono text-[0.78rem] text-[var(--white)]/70 w-52 flex-shrink-0 mb-1 md:mb-0">
                    {label}
                </div>

                <div className="flex flex-1 items-center gap-4">
                    <div className="flex-1 h-[6px] bg-white/5 relative rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-[1500ms] ease-out rounded-full`}
                            style={{
                                width: `${width}%`,
                                backgroundColor: fill,
                                boxShadow: isIntact && width === 100 ? '0 0 15px var(--green), 0 0 5px var(--green)' : 'none'
                            }}
                        />
                    </div>
                    <div className="mono text-[0.72rem] text-[var(--muted)] w-12 text-right">
                        {width}%
                    </div>
                </div>

                <div
                    className={`mono text-[0.65rem] md:ml-6 md:w-32 text-right transition-colors duration-1000 ${isIntact && width === 100 ? 'text-[var(--green)] font-bold' : 'text-[var(--muted)]'}`}
                >
                    {status}
                </div>
            </div>
        </div>
    );
};

const Slide20 = ({ isActive }) => {
    const [showBars, setShowBars] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setShowBars(true), 600);
            return () => clearTimeout(timer);
        } else {
            setShowBars(false);
        }
    }, [isActive]);

    const rows = [
        { label: "Land rights", target: 35, fill: "var(--amber)", status: "PARTIAL" },
        { label: "Cultural preservation", target: 60, fill: "var(--green-dim)", status: "IN PROGRESS" },
        { label: "Language documentation", target: 50, fill: "var(--green-dim)", status: "ONGOING" },
        { label: "Economic development", target: 40, fill: "var(--amber)", status: "ONGOING" },
        { label: "Identity", target: 100, fill: "var(--green)", status: "INTACT ✓" }
    ];

    return (
        <div className="w-full h-full bg-[#040a06] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="mb-16 animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                    <SlideTag>11 / RESTORE STATUS</SlideTag>
                    <h2 className="playfair text-[clamp(2.5rem,5vw,4rem)] font-bold text-[var(--white)]">
                        What Remains. What's Being Rebuilt.
                    </h2>
                </div>

                <div className="space-y-4 mb-16 max-w-[800px]">
                    {rows.map((row, i) => (
                        <ProgressRow
                            key={i}
                            {...row}
                            delay={400 + (i * 400)}
                            show={showBars}
                        />
                    ))}
                </div>

                <div className={`border-l-2 border-[var(--green)] pl-8 transition-all duration-1500 delay-[2500ms] ${showBars ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <p className="italic text-[var(--green)] text-[0.9rem] leading-relaxed max-w-2xl font-mono">
                        "The repo isn't fully restored. But it was never fully deleted either. They're still here. Still weaving. Still going upstream."
                    </p>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide20;

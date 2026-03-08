import React, { useState } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Node = ({ title, role, desc, color, fact, delay }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative border-l-[3px] bg-[var(--terminal)] p-5 md:p-6 transition-all duration-300 animate-[fade-up_0.6s_ease-out_forwards] opacity-0`}
            style={{
                borderLeftColor: color,
                animationDelay: `${delay}ms`,
                boxShadow: hovered ? `0 0 20px ${color}33, inset 5px 0 15px ${color}11` : 'none',
                transform: hovered ? 'translateX(5px)' : 'none'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="mono text-[0.62rem] uppercase tracking-widest mb-1" style={{ color: color }}>{title}</div>
            <div className="mono text-[1.1rem] text-[var(--white)] font-bold mb-1">{role}</div>
            <div className="mono text-[0.75rem] text-[var(--muted)]">{desc}</div>

            {/* Tooltip */}
            <div
                className={`absolute left-full top-0 ml-4 w-48 bg-black/90 border border-[var(--border)] p-3 z-50 transition-all duration-300 pointer-events-none ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
            >
                <p className="mono text-[0.65rem] text-[var(--white)] leading-relaxed italic">
                    {fact}
                </p>
            </div>
        </div>
    );
};

const Slide10 = ({ isActive }) => {
    return (
        <div className="w-full h-full bg-[var(--deep)] overflow-y-auto no-scrollbar">
            <SlideContent className="max-w-[800px]">
                <div className="text-center mb-12 animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                    <SlideTag>03 / SYSTEM ARCHITECTURE</SlideTag>
                    <h2 className="playfair text-[clamp(2rem,4vw,3.5rem)] font-bold text-[var(--white)]">
                        How Their Society Was Organized
                    </h2>
                </div>

                <div className="flex flex-col gap-12 relative max-w-[700px] mx-auto">
                    {/* Top Node */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[450px]">
                            <Node
                                title="ROOT ACCESS"
                                role="Mangkatadong"
                                desc="Ruling leader / Yellow head cloth"
                                color="var(--green)"
                                fact="The Mangkatadong was the highest executive authority in the community settlement."
                                delay={400}
                            />
                        </div>
                    </div>

                    {/* Connectors (Simplified CSS) */}
                    <div className="hidden md:flex justify-center h-8 animate-[fade-in_1s_ease-out_forwards_1200ms] opacity-0">
                        <div className="w-1/2 border-r border-t border-[var(--border)] opacity-30" />
                        <div className="w-1/2 border-l border-t border-[var(--border)] opacity-30" />
                    </div>

                    {/* Middle Tier */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Node
                            title="GOVERNANCE"
                            role="Bawukan"
                            desc="Council of Elders / Red cloth"
                            color="var(--amber)"
                            fact="A deliberative body of wise leaders who advised on customary laws and collective decisions."
                            delay={800}
                        />
                        <Node
                            title="MILITARY"
                            role="Bagani"
                            desc="Warrior-chief / High authority"
                            color="var(--red)"
                            fact="Earned their position through combat merit (kills). They were the ultimate protectors."
                            delay={1000}
                        />
                        <Node
                            title="SPIRITUAL"
                            role="Balyan"
                            desc="Shaman / Priestess"
                            color="#a78bfa"
                            fact="Communicated with the spirit world. Usually women who held significant social influence."
                            delay={1200}
                        />
                    </div>

                    {/* Bottom Node */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[300px]">
                            <Node
                                title="CRAFT"
                                role="Panday"
                                desc="Blacksmith / Engineering"
                                color="#60a5fa"
                                fact="Highly skilled metalworkers specialized in blades and tools essential for survival."
                                delay={1600}
                            />
                        </div>
                    </div>

                    {/* Footer Insight */}
                    <div className="mt-8 border-l-2 border-[var(--green)] pl-6 animate-[fade-up_0.8s_ease-out_forwards_2200ms] opacity-0">
                        <p className="italic text-[var(--green)] text-[0.9rem] leading-relaxed">
                            "This wasn't chaos — it was a system. Sophisticated. Functional.
                            Deliberately destroyed."
                        </p>
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide10;

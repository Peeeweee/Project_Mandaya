import React from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const DanceCard = ({ type, name, desc, delay }) => (
    <div
        className="border border-[var(--border)] bg-[var(--terminal)] p-4 md:p-5 transition-all duration-500 animate-[fade-up_0.6s_ease-out_forwards] opacity-0 hover:border-red-500/50 group"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="mono text-[0.62rem] uppercase tracking-widest mb-1 text-red-500 font-bold">{type}</div>
        <div className="mono text-[0.9rem] text-[var(--white)] font-bold mb-2 group-hover:text-red-400 transition-colors">{name}</div>
        <p className="mono text-[0.75rem] text-[var(--muted)] leading-relaxed">{desc}</p>
    </div>
);

const InstrumentRow = ({ name, desc, delay }) => (
    <div
        className="flex flex-col md:flex-row gap-2 md:gap-3 py-3 border-b border-white/5 animate-[fade-up_0.6s_ease-out_forwards] opacity-0"
        style={{ animationDelay: `${delay}ms` }}
    >
        <span className="mono text-[0.85rem] text-[var(--white)] font-bold min-w-[140px]">🎵 {name}</span>
        <span className="mono text-[0.72rem] text-[var(--muted)] opacity-80">— "{desc}"</span>
    </div>
);

const Slide17 = ({ isActive }) => {
    return (
        <div className="w-full h-full bg-[#0a0808] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* LEFT COLUMN - DANCES */}
                    <div className="flex flex-col gap-6 animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                        <SlideTag>09 / ARTS & PERFORMANCE</SlideTag>

                        <DanceCard
                            type="WAR DANCE"
                            name="Sampak"
                            desc="Simultaneous mastery of spear, sword, and shield. Combat choreographed into performance."
                            delay={400}
                        />
                        <DanceCard
                            type="COURTSHIP DANCE"
                            name="Kinabua"
                            desc="A hawk lures a hen with sweet songs. Performed by man and woman. Metaphor for courtship through cunning."
                            delay={600}
                        />
                        <DanceCard
                            type="CEREMONIAL DANCE"
                            name="Courting Dance"
                            desc="Mimics the mountain hawk in flight. Arms spread like wings. Feet in rapid circles."
                            delay={800}
                        />
                    </div>

                    {/* RIGHT COLUMN - INSTRUMENTS */}
                    <div className="bg-[var(--terminal)] border border-[var(--border)] p-8 animate-[fade-up_0.8s_ease-out_forwards_300ms] opacity-0 shadow-2xl">
                        <div className="mono text-[0.65rem] text-[var(--muted)] uppercase tracking-[0.15em] mb-6 border-b border-white/5 pb-4">
                            INSTRUMENTS
                        </div>

                        <div className="space-y-4">
                            <InstrumentRow name="Flute" desc="melodic, solo performance" delay={800} />
                            <InstrumentRow name="Bamboo Zither" desc="polyphonic, ensemble" delay={1000} />
                            <InstrumentRow name="Gong" desc="ceremonial, communal rhythm" delay={1200} />
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center animate-[fade-up_1s_ease-out_forwards_1800ms] opacity-0">
                    <p className="italic text-[var(--muted)] text-[0.85rem] transition-all duration-1000">
                        "They built a culture so rich it survived colonization. Now let's talk about what colonization did anyway."
                    </p>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide17;

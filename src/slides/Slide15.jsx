import React, { useState } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const RealmCard = ({ title, meaning, bg, border, spirits, delay, isActive }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`animate-[fade-up_0.8s_ease-out_forwards] opacity-0 cursor-pointer overflow-hidden transition-all duration-500 rounded-sm mb-4 md:mb-0`}
            style={{
                background: bg,
                borderBottom: border,
                animationDelay: `${delay}ms`
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-8 flex flex-col items-center text-center">
                <h3 className="playfair text-[var(--white)] text-[1.4rem] font-bold mb-2 tracking-wide uppercase">{title}</h3>
                <span className="mono text-[var(--muted)] text-[0.65rem] tracking-[0.2em] font-medium max-w-[150px] leading-relaxed">
                    {meaning}
                </span>
            </div>

            <div
                className={`transition-all duration-700 ease-in-out px-6 md:px-8 pb-8 ${isOpen ? 'max-h-[500px] opacity-100 animate-[slide-down_0.6s_ease-out]' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="space-y-4 pt-4 border-t border-white/5">
                    {spirits.map((spirit, i) => (
                        <div key={i} className="flex flex-col text-left">
                            <span className="mono text-[var(--white)] text-[0.82rem] font-bold mb-1 tracking-wide">{spirit.name}</span>
                            <span className="mono text-[var(--muted)] text-[0.7rem] leading-relaxed opacity-80">
                                {spirit.desc}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Slide15 = ({ isActive }) => {
    const langitSpirits = [
        { name: "Magbabaya", desc: "The Governor of everything. Highest deity." },
        { name: "Tagamaling", desc: "Spirit of life and weaver's inspiration." },
        { name: "Ompong", desc: "Spirit that helps in making wise decisions." },
        { name: "Mabusaw", desc: "Messenger of both good and bad luck." }
    ];

    const lupaSpirits = [
        { name: "Apila", desc: "Giants inhabiting high mountains and rocky cliffs." },
        { name: "Tama", desc: "Elves residing in the heart of the forest." },
        { name: "Dagaw", desc: "Dwarves living in subterranean dwellings." },
        { name: "Bingit", desc: "Spirits that lure victims by sounding like crying babies." }
    ];

    const ugsubanSpirits = [
        { name: "Sibu-id", desc: "Guardian of the entrance to the underworld." },
        { name: "Mandangan", desc: "Goddess of war and red-colored phenomena." },
        { name: "Tigbanua", desc: "Forest spirits associated with the hunt and warriors." }
    ];

    return (
        <div className="w-full h-full bg-[#04060a] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="text-center max-w-[580px] mx-auto mb-16 animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                    <SlideTag>08 / SYSTEM GOVERNANCE</SlideTag>
                    <div className="text-[var(--muted)] text-[0.95rem] leading-[1.8] opacity-90 italic">
                        "Their God isn't binary — good vs. evil. Magbabaya is the Governor of everything. The source of both. Every OS has a root process that runs it all — light and dark."
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <RealmCard
                        title="Langit"
                        meaning="THE HEAVENS"
                        bg="rgba(10, 15, 30, 0.9)"
                        border="2px solid rgba(99, 102, 241, 0.4)"
                        spirits={langitSpirits}
                        delay={800}
                        isActive={isActive}
                    />
                    <RealmCard
                        title="Lupa"
                        meaning="THE EARTH — REALM OF THE LIVING"
                        bg="rgba(10, 20, 12, 0.9)"
                        border="2px solid rgba(74, 222, 128, 0.3)"
                        spirits={lupaSpirits}
                        delay={1000}
                        isActive={isActive}
                    />
                    <RealmCard
                        title="Ugsuban"
                        meaning="THE UNDERWORLD"
                        bg="rgba(20, 8, 8, 0.9)"
                        border="2px solid rgba(239, 68, 68, 0.3)"
                        spirits={ugsubanSpirits}
                        delay={1200}
                        isActive={isActive}
                    />
                </div>

                <div className="border-l-2 border-[var(--amber)] pl-6 animate-[fade-up_0.8s_ease-out_forwards_2000ms] opacity-0 max-w-lg">
                    <p className="italic text-[var(--amber)]/90 text-[0.88rem] leading-relaxed">
                        "They explained the universe without a telescope. A serpent eating the heavens causes eclipses. They were right about the awe."
                    </p>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide15;

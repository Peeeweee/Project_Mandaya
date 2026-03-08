import React from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Slide14 = ({ isActive }) => {
    const items = [
        { icon: "🧣", title: "Dagmay Cloth", desc: "Main textile. Abaca fiber. Mud-dyed. Sacred." },
        { icon: "🪖", title: "Putong (Head Cloth)", desc: "Color signals rank. Yellow = ruler. Red = elder." },
        { icon: "📿", title: "Beads & Brass", desc: "Necklaces and arm rings. Status markers." },
        { icon: "🗡️", title: "Kris / Kampilan", desc: "Bladed weapons. Ceremonial and combat use." },
        { icon: "🌺", title: "Floral Ornaments", desc: "Worn during ritual occasions and ceremonies." },
        { icon: "🔵", title: "Batok (Tattoo)", desc: "Permanent. Rite of passage. Story written in skin." }
    ];

    return (
        <div className="w-full h-full bg-[var(--deep)] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="text-center mb-12 animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                    <SlideTag>07 / INTERFACE DESIGN</SlideTag>
                    <h2 className="playfair text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[var(--white)] leading-tight">
                        How They Presented Themselves to the World
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)] shadow-2xl mb-12">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[var(--terminal)] p-8 flex flex-col items-center text-center transition-all duration-500 animate-[fade-up_0.6s_ease-out_forwards] opacity-0 group hover:bg-[var(--deep)]/50"
                            style={{ animationDelay: `${400 + (i * 150)}ms` }}
                        >
                            <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                                {item.icon}
                            </div>
                            <h3 className="mono text-[var(--white)] text-[1rem] font-bold mb-3 tracking-wide">{item.title}</h3>
                            <p className="mono text-[var(--muted)] text-[0.82rem] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center italic text-[var(--amber)] opacity-80 animate-[fade-up_1s_ease-out_forwards_1600ms] opacity-0">
                    <p className="mono text-[0.9rem] leading-relaxed">
                        "Even their skin was a record. A rite of passage written in permanent ink."
                    </p>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide14;

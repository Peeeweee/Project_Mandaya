import React from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Card = ({ name, type, desc, parallel, delay }) => (
    <div
        className="bg-[var(--terminal)] p-6 flex flex-col border border-[var(--border)] transition-all duration-500 animate-[fade-up_0.6s_ease-out_forwards] opacity-0 group hover:border-[var(--green)] hover:shadow-[0_0_20px_rgba(74,222,128,0.05)]"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex items-center justify-between mb-3">
            <h3 className="mono text-[1rem] font-bold text-[var(--green)]">{name}</h3>
            <span className="mono text-[0.6rem] text-[var(--muted)] tracking-widest uppercase">{type}</span>
        </div>
        <p className="mono text-[0.82rem] text-[var(--muted)]/80 leading-relaxed mb-6">
            {desc}
        </p>
        <div className="mt-auto mono text-[var(--amber)] text-[0.7rem] opacity-70 group-hover:opacity-100 transition-opacity">
            {parallel}
        </div>
    </div>
);

const Slide12 = ({ isActive }) => {
    const cards = [
        {
            name: "Ligad",
            type: "Side-crop farming",
            desc: "Root crops planted alongside main rice/corn field as a nutritional fallback.",
            parallel: "// redundancy pattern"
        },
        {
            name: "Pasoot",
            type: "Undercropping",
            desc: "Yam planted beneath corn. Two crops from one plot of land.",
            parallel: "// parallel processing"
        },
        {
            name: "Al-luyon",
            type: "Labor exchange",
            desc: "Two parties trade work. Contracting side provides food and wine.",
            parallel: "// API contract / service exchange"
        },
        {
            name: "Bulig",
            type: "Communal labor",
            desc: "Whole community works together. Ends in a shared feast.",
            parallel: "// open source contribution"
        }
    ];

    return (
        <div className="w-full h-full bg-[var(--deep)] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="mb-12 animate-[fade-up_0.8s_ease-out_forwards_100ms] opacity-0">
                    <SlideTag>05 / DISTRIBUTED SYSTEMS</SlideTag>
                    <h2 className="playfair text-[clamp(2rem,4vw,3.5rem)] font-bold text-[var(--white)]">
                        How They Survived and Thrived
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[var(--border)] border border-[var(--border)] shadow-2xl mb-12">
                    {cards.map((card, i) => (
                        <Card key={i} {...card} delay={400 + (i * 300)} />
                    ))}
                </div>

                <div className="border-l-2 border-[var(--green)] pl-6 animate-[fade-up_0.8s_ease-out_forwards_1800ms] opacity-0">
                    <p className="italic text-[var(--green)] text-[0.95rem]">
                        "They didn't just farm the land. They coded a survival system into it."
                    </p>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide12;

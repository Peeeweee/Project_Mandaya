import React from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Slide09 = ({ isActive }) => {
    const branches = [
        { name: "/mansaka", note: "mountain clearings" },
        { name: "/manwaga", note: "forested mountains" },
        { name: "/pagsupan", note: "Tagum & Hijo river banks" },
        { name: "/managusan", note: "near water" },
        { name: "/divavaogan", note: "Compostela Valley" },
    ];

    return (
        <div className="w-full h-full bg-[var(--deep)] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN */}
                    <div className="animate-[fade-up_0.8s_ease-out_forwards_100ms] opacity-0">
                        <SlideTag>02 / TERRITORY</SlideTag>
                        <h2 className="playfair text-[clamp(2rem,4vw,3rem)] font-bold mb-6 text-[var(--white)]">
                            Where They Live
                        </h2>
                        <p className="text-[0.92rem] leading-[1.8] text-[var(--muted)] max-w-md">
                            Mountain ranges of Davao Oriental, Davao del Norte, and
                            Surigao del Sur. Also recorded in Mt. Kampalili — the highlands
                            of eastern Mindanao.
                        </p>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="animate-[fade-up_0.8s_ease-out_forwards_400ms] opacity-0">
                        <div className="mono border border-[var(--border)] bg-[var(--terminal)] p-8 rounded-sm shadow-xl">
                            <div className="text-[var(--green)] font-bold mb-2">/mandaya</div>
                            <div className="flex flex-col">
                                {branches.map((branch, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 animate-[fade-up_0.5s_ease-out_forwards] opacity-0"
                                        style={{ animationDelay: `${800 + (i * 300)}ms` }}
                                    >
                                        <span className="text-[var(--muted)]">
                                            {i === branches.length - 1 ? '└──' : '├──'}
                                        </span>
                                        <span className="text-[var(--white)]">{branch.name}</span>
                                        <span className="text-[var(--muted)] text-[0.75rem] ml-4">{branch.note}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide09;

import React, { useState, useEffect } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Slide18 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    const items = [
        "A Mandaya who dies in the morning is buried the same afternoon.",
        "The corpse is wrapped in dagmay cloth.",
        "The coffin: a log cut in two, hollowed at center.",
        "If the husband dies, the wife sings the dawot — and <span class='text-[var(--white)] font-bold'>cannot sing again until she remarries.</span>",
        "A warrior killed in battle is left reclining in a tree to decompose naturally.",
        "A Bagani who felt death coming walked to his own burial site — and waited."
    ];

    useEffect(() => {
        if (isActive) {
            const timers = items.map((_, i) => setTimeout(() => setPhase(i + 1), 700 * (i + 1)));
            const closingTimer = setTimeout(() => setPhase(items.length + 1), 700 * items.length + 1000);

            return () => {
                timers.forEach(clearTimeout);
                clearTimeout(closingTimer);
            };
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full bg-[#050505] overflow-y-auto no-scrollbar">
            <SlideContent className="max-w-[750px]">
                <div className="text-center mb-16 animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                    <SlideTag>10 / END OF LIFE PROTOCOL</SlideTag>
                    <h2 className="playfair text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[var(--white)]">
                        Death With Dignity
                    </h2>
                </div>

                <div className="space-y-8 mb-20 max-w-[600px] mx-auto">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-start gap-4 transition-all duration-700 ${phase >= (i + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <span className="mono text-[var(--muted)] text-[0.7rem] w-8 flex-shrink-0 pt-1.5">{i + 1}.</span>
                            <p
                                className="dm-sans text-[0.92rem] text-[var(--muted)]/90 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        </div>
                    ))}
                </div>

                <div
                    className={`text-center italic playfair text-[var(--muted)]/60 text-[clamp(1rem,2vw,1.4rem)] transition-all duration-1500 py-10 border-t border-white/5 ${phase > items.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    "Even in death — dignity. <br />Even in grief — ritual. <br />Even in silence — meaning."
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide18;

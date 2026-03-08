import React, { useEffect, useState } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Slide08 = ({ isActive }) => {
    const [showConnectors, setShowConnectors] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setShowConnectors(true), 1500);
            return () => clearTimeout(timer);
        } else {
            setShowConnectors(false);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full bg-[var(--deep)] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN */}
                    <div className="animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                        <SlideTag>01 / IDENTITY</SlideTag>
                        <h2 className="playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-12 text-[var(--white)]">
                            What Does Their Name Mean?
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <div className="flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--terminal)] p-4 w-32 h-32 animate-[fade-up_0.6s_ease-out_forwards_400ms] opacity-0">
                                <span className="mono text-[var(--white)] font-bold">MAN</span>
                                <span className="mono text-[0.6rem] text-[var(--muted)] text-center mt-2">inhabitant of</span>
                            </div>

                            <div className={`mono text-2xl text-[var(--muted)] transition-opacity duration-500 ${showConnectors ? 'opacity-100' : 'opacity-0'}`}>+</div>

                            <div className="flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--terminal)] p-4 w-32 h-32 animate-[fade-up_0.6s_ease-out_forwards_700ms] opacity-0">
                                <span className="mono text-[var(--white)] font-bold">DAYA</span>
                                <span className="mono text-[0.6rem] text-[var(--muted)] text-center mt-2">upstream</span>
                            </div>

                            <div className={`mono text-2xl text-[var(--muted)] transition-opacity duration-500 ${showConnectors ? 'opacity-100' : 'opacity-0'}`}>=</div>

                            <div className="flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--terminal)] p-4 w-44 h-32 animate-[fade-up_0.6s_ease-out_forwards_1000ms] opacity-0 text-center">
                                <span className="mono text-[var(--green)] font-bold tracking-widest text-lg">MANDAYA</span>
                                <span className="mono text-[0.6rem] text-[var(--muted)] mt-2">People of the Upstream</span>
                            </div>
                        </div>

                        <p className="italic text-[var(--muted)] text-[0.85rem] animate-[fade-up_0.8s_ease-out_forwards_1600ms] opacity-0">
                            "Always going against the current. Resilience built into the name."
                        </p>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="animate-[fade-up_0.8s_ease-out_forwards_300ms] opacity-0">
                        <SlideTag>QUICK FACTS</SlideTag>
                        <div className="grid grid-cols-2 gap-[1px] bg-[var(--border)] border border-[var(--border)]">
                            {[
                                { label: "Population", value: "~33,000 (1988 census)" },
                                { label: "Primary territory", value: "Davao Oriental" },
                                { label: "Classification", value: "Lumad (non-Islamized)" },
                                { label: "Language family", value: "Austronesian" }
                            ].map((fact, i) => (
                                <div key={i} className={`bg-[var(--terminal)] p-6 transition-all duration-700 animate-[fade-up_0.6s_ease-out_forwards]`} style={{ animationDelay: `${600 + (i * 150)}ms`, opacity: 0 }}>
                                    <div className="mono text-[0.62rem] text-[var(--muted)] uppercase tracking-wider mb-2">{fact.label}</div>
                                    <div className="mono text-[1rem] text-[var(--green)]">{fact.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide08;

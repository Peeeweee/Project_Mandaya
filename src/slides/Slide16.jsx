import React, { useState, useEffect } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const Slide16 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 1500), // Quote reveal
                setTimeout(() => setPhase(2), 4500), // Secondary text reveal (1.5s delay after quote)
                setTimeout(() => setPhase(3), 6500)  // Role cards reveal (2s delay after secondary)
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full bg-[#04050a] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 pointer-events-none" />

            <SlideContent className="relative z-10 flex flex-col items-center justify-center min-h-[500px]">
                {/* Central Quote */}
                <div className="relative mb-16 animate-[fade-in_2s_ease-out_forwards] opacity-0" style={{ animationDelay: '1.5s' }}>
                    <div
                        className="absolute -top-12 -left-4 playfair text-[10rem] text-[var(--green)] opacity-[0.04] select-none pointer-events-none"
                    >
                        "
                    </div>
                    <h2 className={`playfair font-bold text-[clamp(1.4rem,3.5vw,2.2rem)] italic text-[var(--white)] max-width-[680px] text-center leading-[1.5] transition-all duration-2000 ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                        "Anyone in the community can dream a cure.<br />That person becomes the healer."
                    </h2>
                </div>

                {/* Secondary Text */}
                <div
                    className={`mono text-[var(--muted)] text-[0.82rem] italic max-w-[500px] text-center leading-[1.7] transition-all duration-1500 mb-16 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    "A crowdsourced medical system. Open source healing. No hospital required."
                </div>

                {/* Role Cards */}
                <div className={`flex flex-col sm:flex-row gap-8 transition-all duration-1500 ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-[var(--terminal)] border border-[var(--border)] p-6 md:px-8 md:py-6 text-center shadow-2xl rounded-sm hover:border-[var(--green)]/30 transition-colors duration-500">
                        <h3 className="mono text-[var(--green)] text-[0.88rem] font-bold mb-2 tracking-widest uppercase">Balyan</h3>
                        <p className="mono text-[var(--muted)] text-[0.75rem] leading-relaxed max-w-[180px]">
                            Community healer via dreams + prayer + medicine.
                        </p>
                    </div>
                    <div className="bg-[var(--terminal)] border border-[var(--border)] p-6 md:px-8 md:py-6 text-center shadow-2xl rounded-sm hover:border-[var(--green)]/30 transition-colors duration-500">
                        <h3 className="mono text-[var(--green)] text-[0.88rem] font-bold mb-2 tracking-widest uppercase">Kalalaysan</h3>
                        <p className="mono text-[var(--muted)] text-[0.75rem] leading-relaxed max-w-[180px]">
                            Highest-rank healer. Can treat the dying.
                        </p>
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide16;

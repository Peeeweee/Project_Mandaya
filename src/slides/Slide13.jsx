import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SlideTag, SlideContent } from '../components/SlideElements';

const DagmayCanvas = ({ motif }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const drawPattern = useCallback((ctx, motifType) => {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const colors = ['#8B2500', '#c45c00', '#f59e0b', '#1a0d00', '#2d1500'];

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#0d0a07';
        ctx.fillRect(0, 0, width, height);

        let row = 0;
        const startTime = performance.now();
        const duration = 1500;

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentRow = Math.floor(progress * height);

            while (row <= currentRow) {
                ctx.lineWidth = 1;
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.strokeStyle = color;
                ctx.beginPath();

                if (motifType === 'Diamond') {
                    const size = 40;
                    for (let x = 0; x <= width; x += size) {
                        const centerX = x + (row % (size * 2) === 0 ? 0 : size / 2);
                        ctx.strokeRect(centerX - size / 4, row - size / 4, size / 2, size / 2);
                        ctx.strokeRect(centerX - size / 8, row - size / 8, size / 4, size / 4);
                    }
                } else if (motifType === 'Crocodile') {
                    const size = 30;
                    for (let x = 0; x <= width; x += size) {
                        ctx.moveTo(x, row);
                        ctx.lineTo(x + size / 2, row - size / 2);
                        ctx.lineTo(x + size, row);
                    }
                } else if (motifType === 'Cross') {
                    const size = 50;
                    if (row % size === 0) {
                        for (let x = 0; x <= width; x += size) {
                            ctx.moveTo(x + size / 2, row);
                            ctx.lineTo(x + size / 2, row + size);
                            ctx.moveTo(x, row + size / 2);
                            ctx.lineTo(x + size, row + size / 2);
                        }
                    }
                } else if (motifType === 'Trellis') {
                    const size = 40;
                    for (let x = -width; x <= width * 2; x += size) {
                        ctx.moveTo(x, row);
                        ctx.lineTo(x + row, row); // Just filling space for the effect
                        ctx.moveTo(x, row);
                        ctx.lineTo(x + size, row + size);
                        ctx.moveTo(x + size, row);
                        ctx.lineTo(x, row + size);
                    }
                } else if (motifType === 'Curvilinear') {
                    const size = 60;
                    for (let x = 0; x <= width; x += size) {
                        const offset = Math.sin((row + x) / 20) * 10;
                        ctx.moveTo(x + offset, row);
                        ctx.lineTo(x + size / 2 + offset, row + 2);
                    }
                }

                ctx.stroke();
                row++;
            }

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Scale for responsiveness
        const size = canvas.parentElement.offsetWidth;
        canvas.width = size;
        canvas.height = size;

        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        drawPattern(ctx, motif);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [motif, drawPattern]);

    return (
        <div className="relative w-full aspect-square border border-red-900/20 shadow-2xl overflow-hidden bg-[#0d0a07]">
            <div className="absolute top-2 left-3 z-10 mono text-[0.6rem] text-[var(--ember)] tracking-[0.15em] opacity-50 uppercase pointer-events-none">
                Live Pattern Generator
            </div>
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};

const Slide13 = ({ isActive }) => {
    const [motif, setMotif] = useState('Diamond');
    const motifs = ['Diamond', 'Crocodile', 'Cross', 'Trellis', 'Curvilinear'];

    return (
        <div className="w-full h-full bg-[#070508] overflow-y-auto no-scrollbar">
            <SlideContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN */}
                    <div className="animate-[fade-up_0.8s_ease-out_forwards_delay-100]">
                        <SlideTag>06 / SACRED TECHNOLOGY</SlideTag>
                        <h2 className="playfair text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[var(--white)] mb-1">
                            Dagmay
                        </h2>
                        <div className="mono text-[var(--muted)] text-[0.8rem] mb-10 tracking-widest uppercase opacity-70">
                            The cloth that ended wars.
                        </div>

                        <div className="space-y-8 mb-10">
                            <div className="animate-[fade-up_0.6s_ease-out_forwards_400ms] opacity-0 text-[var(--muted)] leading-relaxed text-[0.9rem]">
                                <strong className="block text-[var(--white)] mono text-[0.7rem] uppercase tracking-wider mb-2">Production</strong>
                                Handwoven from abaca fiber. Tannin-dyed yarn submerged in iron-rich mud for days, then boiled. No two dagmay are the same.
                            </div>
                            <div className="animate-[fade-up_0.6s_ease-out_forwards_600ms] opacity-0 text-[var(--muted)] leading-relaxed text-[0.9rem]">
                                <strong className="block text-[var(--white)] mono text-[0.7rem] uppercase tracking-wider mb-2">Sacred origin</strong>
                                Given through a dream by Tagamaling, spirit of life. A maiden dreamed the technique. Weaving became sacred — prayer before every thread.
                            </div>
                            <div className="animate-[fade-up_0.6s_ease-out_forwards_800ms] opacity-0 text-[var(--muted)] leading-relaxed text-[0.9rem]">
                                <strong className="block text-[var(--white)] mono text-[0.7rem] uppercase tracking-wider mb-2">Peace protocol</strong>
                                Each family's dagmay is unique. Used to resolve conflicts between communities. Datu Banugan called it: the cloth of peace.
                            </div>
                        </div>

                        <div className="border-l-2 border-[var(--ember)] pl-6 animate-[fade-up_0.8s_ease-out_forwards_1200ms] opacity-0">
                            <p className="italic text-[var(--ember)]/90 text-[0.9rem] leading-relaxed">
                                "Cutting the design destroys its sacredness. The patterns must remain whole."
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="animate-[fade-up_0.8s_ease-out_forwards_400ms] opacity-0 flex flex-col gap-6">
                        <DagmayCanvas motif={motif} />

                        <div className="flex flex-wrap gap-2 justify-center">
                            {motifs.map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMotif(m)}
                                    className={`px-4 py-2 border mono text-[0.7rem] transition-all duration-300 ${motif === m
                                            ? 'dagmay-button-active border-[var(--ember)] text-[var(--white)] bg-[var(--ember)]/20'
                                            : 'border-amber-900/40 text-[var(--ember-light)] hover:bg-amber-900/10'
                                        }`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </SlideContent>
        </div>
    );
};

export default Slide13;

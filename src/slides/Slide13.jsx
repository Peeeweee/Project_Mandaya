import React, { useState, useEffect, useRef, useCallback } from 'react';

const DagmayCanvas = ({ motif }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const drawPattern = useCallback((ctx, motifType) => {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const colors = ['#d97706', '#b45309', '#92400e', '#78350f', '#451a03']; // Rich amber/orange palette

        ctx.clearRect(0, 0, width, height);
        // Deep background
        ctx.fillStyle = '#050403';
        ctx.fillRect(0, 0, width, height);

        // Draw faint background grid
        ctx.strokeStyle = '#ffffff05';
        ctx.lineWidth = 1;
        for (let i = 0; i <= width; i += 20) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke();
        }

        let row = 0;
        const startTime = performance.now();
        const duration = 2000; // slightly slower for dramatic effect

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentRow = Math.floor(easeProgress * height);

            while (row <= currentRow) {
                ctx.lineWidth = 1.5;
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
                        if (row % 10 === 0) {
                            ctx.moveTo(x, row);
                            ctx.lineTo(x + size, row + size);
                            ctx.moveTo(x + size, row);
                            ctx.lineTo(x, row + size);
                        }
                    }
                } else if (motifType === 'Curvilinear') {
                    const size = 60;
                    for (let x = 0; x <= width; x += size) {
                        const offset = Math.sin((row + x) / 20) * 15;
                        ctx.moveTo(x + offset, row);
                        ctx.lineTo(x + size / 2 + offset, row + 3);
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
        <div className="relative w-full aspect-square bg-[#050403] border-2 border-amber-900/30 overflow-hidden shadow-[0_0_40px_rgba(217,119,6,0.05)] group">
            {/* Corner Bracket Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-600/50 z-20"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-600/50 z-20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-600/50 z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-600/50 z-20"></div>

            <div className="absolute top-4 left-5 z-20 mono text-[0.65rem] md:text-sm text-amber-500 tracking-[0.2em] font-bold uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Pattern_Gen // {motif}
            </div>

            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none z-30 opacity-20 group-hover:opacity-40 transition-opacity flex flex-col justify-between">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="w-full h-[1px] bg-amber-500/30"></div>
                ))}
            </div>
        </div>
    );
};

const Slide13 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);
    const [motif, setMotif] = useState('Diamond');
    const motifs = ['Diamond', 'Crocodile', 'Cross', 'Trellis', 'Curvilinear'];

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 600),
                setTimeout(() => setPhase(3), 900),
                setTimeout(() => setPhase(4), 1200)
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    return (
        <div className="w-full min-h-full bg-[var(--deep)] px-8 md:px-16 lg:px-24 py-20 overflow-y-auto no-scrollbar relative flex flex-col justify-center items-center">

            <div className={`w-full max-w-[1600px] flex flex-col xl:flex-row justify-between gap-16 xl:gap-32 relative z-10 transition-opacity duration-1000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>

                {/* LEFT: Text & Narrative */}
                <div className={`xl:w-[45%] flex flex-col justify-center transition-all duration-1000 transform ${phase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>

                    <div className="mb-10 lg:mb-14">
                        <span className="mono text-[0.8rem] md:text-[0.9rem] tracking-[0.3em] font-bold text-amber-500 uppercase bg-amber-950/30 px-4 py-2 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                            SEC_06 // SACRED_TECHNOLOGY
                        </span>
                    </div>

                    <h2 className="playfair text-6xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.05] text-[var(--white)] tracking-wide mb-6">
                        Dagmay
                    </h2>

                    <div className="mono text-[1rem] md:text-xl text-amber-500/80 tracking-[0.4em] uppercase font-bold mb-12 lg:mb-16 border-b border-white/10 pb-6 w-fit">
                        The Cloth That Ended Wars
                    </div>

                    {/* Data Blocks */}
                    <div className={`flex flex-col gap-6 lg:gap-8 transition-all duration-1000 transform ${phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                        <div className="bg-[#050605] border border-white/5 p-6 md:p-8 hover:border-amber-900/50 transition-colors border-l-4 border-l-amber-700">
                            <strong className="flex items-center gap-3 text-amber-400 mono text-sm md:text-base uppercase tracking-widest mb-3">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-none"></span>
                                Production Protocol
                            </strong>
                            <p className="mono text-[0.9rem] md:text-[1rem] text-[var(--muted)] leading-[1.8]">
                                Handwoven from abaca fiber. Tannin-dyed yarn submerged in iron-rich mud for days, then boiled. No two dagmay are structurally identical.
                            </p>
                        </div>

                        <div className="bg-[#050605] border border-white/5 p-6 md:p-8 hover:border-amber-900/50 transition-colors border-l-4 border-l-amber-600">
                            <strong className="flex items-center gap-3 text-amber-400 mono text-sm md:text-base uppercase tracking-widest mb-3">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-none"></span>
                                Sacred Origin
                            </strong>
                            <p className="mono text-[0.9rem] md:text-[1rem] text-[var(--muted)] leading-[1.8]">
                                Blueprint transmitted through a dream by Tagamaling, spirit of life. Weaving acts as sacred compilation — prayer executed before every thread.
                            </p>
                        </div>

                        <div className="bg-[#050605] border border-white/5 p-6 md:p-8 hover:border-amber-900/50 transition-colors border-l-4 border-l-amber-500">
                            <strong className="flex items-center gap-3 text-amber-400 mono text-sm md:text-base uppercase tracking-widest mb-3">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-none"></span>
                                Peace Resolution
                            </strong>
                            <p className="mono text-[0.9rem] md:text-[1rem] text-[var(--muted)] leading-[1.8]">
                                Functionally used to resolve conflicts between communities. Datu Banugan classified it officially: the universal cloth of peace.
                            </p>
                        </div>

                    </div>

                    {/* Footer Quote */}
                    <div className={`relative border-l-4 border-l-amber-600 pl-8 lg:pl-10 py-2 mt-12 lg:mt-16 transition-all duration-1000 delay-300 transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className="absolute -left-6 top-[-10px] text-amber-600 font-mono text-5xl opacity-40">"</span>
                        <p className="playfair italic text-[var(--white)] text-2xl md:text-3xl leading-[1.6]">
                            Cutting the design destroys its sacredness. <br className="hidden lg:block" />
                            <span className="text-amber-500 font-bold mt-4 block not-italic playfair">The patterns must remain whole.</span>
                        </p>
                    </div>

                </div>

                {/* RIGHT: Generator Graphics */}
                <div className={`xl:w-[50%] flex flex-col justify-center gap-4 lg:gap-6 transition-all duration-1000 transform ${phase >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                    <DagmayCanvas motif={motif} />

                    {/* Hardware Buttons */}
                    <div className="bg-[#050605] border border-white/10 p-3 md:p-4 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8">
                        <div className="mono text-[0.6rem] md:text-[0.65rem] text-white/40 tracking-[0.2em] uppercase whitespace-nowrap shrink-0 xl:border-r border-white/5 xl:pr-8">
                            Execute Modifier
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {motifs.map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMotif(m)}
                                    className={`relative px-4 py-2 md:px-5 md:py-2.5 mono text-[0.7rem] md:text-[0.75rem] font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden group ${motif === m
                                        ? 'text-[#050403] bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                                        : 'text-amber-500/70 border border-amber-900/50 hover:border-amber-500/80 hover:bg-amber-900/20'
                                        }`}
                                >
                                    <span className="relative z-10">{m}</span>
                                    {motif !== m && (
                                        <div className="absolute inset-0 bg-amber-500/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(var(--amber-500) 1px, transparent 1px), linear-gradient(90deg, var(--amber-500) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        </div>
    );
};

export default Slide13;

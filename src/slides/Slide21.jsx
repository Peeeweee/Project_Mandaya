import React, { useState, useEffect } from 'react';

// Comic Panel Component - clean grid structure, comic aesthetic
const ComicPanel = ({ children, colSpan = "col-span-12", borderColor = "border-white", shadowColor = "#ffffff", bgColor = "bg-[#050505]", delay = 0, isVisible }) => (
    <div
        className={`${colSpan} border-[3px] md:border-4 flex flex-col justify-center ${borderColor} ${bgColor} px-6 py-8 md:p-10 relative overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{
            boxShadow: `8px 8px 0px ${shadowColor}`,
            transitionDelay: `${delay}ms`
        }}
    >
        {children}
    </div>
);

const Slide21 = ({ isActive }) => {
    const [progress, setProgress] = useState(0);
    const [command, setCommand] = useState("");
    const [showContent, setShowContent] = useState(false);

    const targetCommand = "$ git checkout branch_manobo --force";

    useEffect(() => {
        if (isActive) {
            const t = setTimeout(() => setShowContent(true), 150);

            // Progress bar interval for Manobo
            const interval = setInterval(() => {
                setProgress(prev => (prev < 42 ? prev + 1 : prev));
            }, 60);

            // Typewriter effect for git checkout starts a bit later
            let charIdx = 0;
            const typeTimer = setTimeout(() => {
                const typing = setInterval(() => {
                    if (charIdx <= targetCommand.length) {
                        setCommand(targetCommand.substring(0, charIdx));
                        charIdx++;
                    } else {
                        clearInterval(typing);
                    }
                }, 50);
                return () => clearInterval(typing);
            }, 1000);

            return () => {
                clearTimeout(t);
                clearTimeout(typeTimer);
                clearInterval(interval);
            };
        } else {
            setShowContent(false);
            setProgress(0);
            setCommand("");
        }
    }, [isActive]);

    // Construct ASCII progress bar
    const progressChars = Math.floor(progress / 5);
    const bar = "█".repeat(progressChars) + "░".repeat(8 - progressChars);

    return (
        <div className="w-full min-h-full bg-[#050505] flex justify-center items-center overflow-y-auto no-scrollbar p-6 md:p-12 relative text-white">

            {/* Retro Graphic Halftone Background */}
            <div className="absolute inset-0 opacity-[0.2] mix-blend-screen pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #8b5cf6 2px, transparent 2.5px)',
                backgroundSize: '16px 16px'
            }}></div>

            <div className={`max-w-[1200px] w-full grid grid-cols-12 gap-6 lg:gap-8 relative z-10 transition-all duration-1000 ease-out`}>

                {/* Panel 1: Main Title */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-7"
                    borderColor="border-[#8b5cf6]"
                    shadowColor="#8b5cf6"
                    bgColor="bg-[#050010]"
                    isVisible={showContent} delay={0}
                >
                    {/* Halftone Overlay specific to panel */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: 'radial-gradient(circle, #8b5cf6 2px, transparent 2.5px)',
                        backgroundSize: '8px 8px'
                    }}></div>

                    <div className="absolute top-0 right-0 bg-[#8b5cf6] text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-[#8b5cf6] tracking-widest z-10">
                        SEQUENCE_END // INITIATED
                    </div>

                    <div className="relative z-10 pt-4">
                        <h2 className="playfair text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black uppercase tracking-wider leading-[0.85] text-white drop-shadow-[3px_3px_0_rgba(139,92,246,0.3)]">
                            Mandaya
                        </h2>
                        <h2 className="playfair text-4xl md:text-[4.5rem] lg:text-[5rem] font-bold italic text-[#8b5cf6] mt-2">
                            Saved.
                        </h2>
                    </div>
                </ComicPanel>

                {/* Panel 2: Observer Note */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-5"
                    borderColor="border-yellow-400"
                    shadowColor="#facc15"
                    bgColor="bg-[#100c00]"
                    isVisible={showContent} delay={100}
                >
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-yellow-400 tracking-widest z-10">
                        OBSERVER_NOTE
                    </div>

                    <div className="relative z-10 pt-4">
                        <p className="mono text-[0.9rem] md:text-[1rem] text-yellow-400 leading-[2] font-bold uppercase tracking-wide">
                            "The Mandaya file has been successfully written to the main branch.
                            <span className="block mt-4 bg-yellow-400 text-black p-2 w-fit border-2 border-yellow-400">Passing control to you, Theo.</span>"
                        </p>
                    </div>
                </ComicPanel>

                {/* Panel 3: Repo Tree */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-7"
                    borderColor="border-white"
                    shadowColor="#ffffff"
                    bgColor="bg-[#050505]"
                    isVisible={showContent} delay={200}
                >
                    <div className="absolute top-0 left-0 bg-white text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-r-[3px] lg:border-b-4 lg:border-r-4 border-white tracking-widest z-10">
                        ROOT_DIR // CARAGA
                    </div>

                    <div className="relative z-10 pt-8 flex flex-col gap-6 mono pl-0 md:pl-4">
                        {/* Directory Header */}
                        <div className="text-white/40 tracking-widest uppercase text-[0.75rem] font-bold mb-2 flex items-center md:-ml-8">
                            <span className="text-2xl mr-3">📁</span> /caraga-peoples/
                        </div>

                        {/* File 1: Mandaya */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 group">
                            <div className="flex items-center gap-4">
                                <span className="text-white/30 text-xl font-light">├──</span>
                                <span className="text-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">📄</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-wider">mandaya.db</span>
                            </div>
                            <div className="ml-12 sm:ml-auto bg-green-500/10 border border-green-500 text-green-500 px-3 py-1.5 text-[0.7rem] md:text-[0.75rem] tracking-widest flex items-center gap-2 font-bold shadow-[0_0_10px_rgba(34,197,94,0.2)] w-fit">
                                COMPILED <span className="w-2 h-2 rounded-full bg-green-500 inline-block shadow-[0_0_5px_rgba(34,197,94,1)] animate-pulse"></span>
                            </div>
                        </div>

                        {/* File 2: Manobo */}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 group">
                                <div className="flex items-center gap-4">
                                    <span className="text-white/30 text-xl font-light">├──</span>
                                    <span className="text-3xl drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">📄</span>
                                    <span className="text-white font-bold text-lg md:text-xl tracking-wider">manobo.db</span>
                                </div>
                                <div className="ml-12 sm:ml-auto border border-[#8b5cf6] text-[#8b5cf6] px-3 py-1.5 text-[0.7rem] md:text-[0.75rem] tracking-widest font-bold bg-[#8b5cf6]/10 w-fit">
                                    DOWNLOADING_FILES...
                                </div>
                            </div>
                            {/* Inner progress bar for Manobo */}
                            <div className="pl-12 sm:pl-16 flex items-center gap-4 mt-1">
                                <span className="text-[#8b5cf6] tracking-[0.2em] text-sm md:text-base opacity-90">{bar}</span>
                                <span className="text-[#8b5cf6] font-bold text-[0.85rem] md:text-[0.95rem]">{progress}%</span>
                            </div>
                        </div>

                        {/* File 3: Higaonon */}
                        <div className="flex items-center gap-4 opacity-30 mt-4">
                            <span className="text-white/30 text-xl font-light">└──</span>
                            <span className="text-3xl">📄</span>
                            <span className="text-white font-bold text-lg md:text-xl tracking-wider">higaonon.db</span>
                            <span className="ml-auto text-white/50 text-[0.7rem] md:text-[0.75rem] tracking-widest font-bold hidden sm:block">
                                QUEUED
                            </span>
                        </div>
                    </div>
                </ComicPanel>

                {/* Panel 4: Bash Command Input */}
                <ComicPanel
                    colSpan="col-span-12 lg:col-span-5"
                    borderColor="border-red-500"
                    shadowColor="#ef4444"
                    bgColor="bg-[#120000]"
                    isVisible={showContent} delay={300}
                >
                    <div className="absolute top-0 right-0 bg-red-500 text-black mono font-bold text-[0.65rem] md:text-[0.75rem] px-4 py-1.5 border-b-[3px] border-l-[3px] lg:border-b-4 lg:border-l-4 border-red-500 tracking-widest z-10">
                        EXECUTION_REQ
                    </div>
                    {/* Inside Halftone red */}
                    <div className="absolute inset-0 opacity-[0.2]" style={{
                        backgroundImage: 'radial-gradient(circle, #ef4444 2px, transparent 2.5px)',
                        backgroundSize: '12px 12px'
                    }}></div>

                    <div className="relative z-10 pt-10 h-full flex flex-col justify-end">
                        <div className={`mono text-white text-[1rem] md:text-[1.1rem] flex flex-wrap items-center gap-2 bg-black border-[3px] border-red-500 p-5 md:p-6 shadow-[0_0_20px_rgba(239,68,68,0.2)]`}>
                            <span className="text-red-500 font-black block w-full mb-2">root@mandaya:~#</span>
                            <div className="flex items-center gap-2 break-all w-full leading-relaxed">
                                <span className="opacity-90 font-bold">{command}</span>
                                <span className="w-3 h-5 bg-red-500 animate-[blink-cursor_1s_infinite]" />
                            </div>
                        </div>
                    </div>
                </ComicPanel>

            </div>
        </div>
    );
};

export default Slide21;

import React, { useState, useEffect } from 'react';

const Slide09 = ({ isActive }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (isActive) {
            const timers = [
                setTimeout(() => setPhase(1), 300),
                setTimeout(() => setPhase(2), 700),
                setTimeout(() => setPhase(3), 1100),
            ];
            return () => timers.forEach(clearTimeout);
        } else {
            setPhase(0);
        }
    }, [isActive]);

    const branches = [
        { key: "NODE_01", name: "mansaka", note: "mountain clearings", color: "var(--amber)" },
        { key: "NODE_02", name: "manwaga", note: "forested mountains", color: "var(--green)" },
        { key: "NODE_03", name: "pagsupan", note: "Tagum & Hijo river banks", color: "var(--red)" },
        { key: "NODE_04", name: "managusan", note: "near water", color: "var(--amber)" },
        { key: "NODE_05", name: "divavaogan", note: "Compostela Valley", color: "var(--green)" },
    ];

    return (
        <div className="w-full min-h-full bg-[#080a08] px-4 md:px-12 py-12 md:py-24 overflow-y-auto relative flex flex-col justify-center items-center font-sans">

            {/* Artsy Comic Halftone Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.1]"
                style={{
                    backgroundImage: 'radial-gradient(circle, var(--green) 2px, transparent 2.5px)',
                    backgroundSize: '16px 16px',
                }}
            />
            {/* Center darkening overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#080a08_90%)]" />

            <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center gap-12 lg:gap-16 relative z-10">

                {/* Top Section: Description */}
                <div className="w-full flex flex-col items-center text-center justify-center relative">
                    <div className={`mb-4 md:mb-8 flex flex-col items-center transition-all duration-1000 transform ${phase >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>

                        {/* Status Label */}
                        <div className="inline-block bg-[var(--amber)] text-black border-[3px] border-white px-4 py-1.5 font-black uppercase tracking-widest shadow-[4px_4px_0px_#000] rotate-2 mb-8 transform hover:-rotate-1 transition-transform">
                            SEC_02 // TERRITORY
                        </div>

                        {/* Huge Comic Title */}
                        <h2 className="playfair text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.9] text-white tracking-tighter mb-10 transform -rotate-2" style={{ textShadow: "6px 6px 0px var(--green), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff" }}>
                            WHERE THEY <br />
                            <span className="text-black inline-block mt-4 bg-white px-6 italic transform rotate-1 relative z-10">LIVE</span>
                        </h2>

                        {/* Text Block - Comic Panel */}
                        <div className={`p-6 md:p-8 max-w-3xl border-[4px] border-white bg-black shadow-[10px_10px_0px_var(--red)] relative overflow-hidden transition-all duration-[800ms] ease-out transform rotate-1 hover:-rotate-1 ${phase >= 2 ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'}`}>

                            {/* Action Lines Background */}
                            <div className="absolute inset-0 pointer-events-none opacity-10"
                                style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)' }}
                            />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="mono text-[0.8rem] font-black tracking-widest bg-white text-black px-3 py-1.5 transform -skew-x-6 shadow-[2px_2px_0px_var(--green)]">
                                    [ GEO_DATA_EXTRACT ]
                                </div>
                                <div className="mono font-black text-[var(--muted)] opacity-60 text-xs transform rotate-3 border-2 border-[var(--muted)] px-2 py-1 bg-black shadow-[2px_2px_0px_var(--muted)]">
                                    10.4°N, 126°E
                                </div>
                            </div>

                            <p className="playfair italic text-2xl md:text-3xl lg:text-4xl leading-tight text-white relative z-10 font-bold mb-4">
                                Mountain ranges of <span className="text-[var(--green)] not-italic inline-block mx-2 mt-1 font-black uppercase tracking-tighter" style={{ textShadow: "3px 3px 0px #000" }}>Davao Oriental</span>, <br className="hidden md:block" /> Davao del Norte, and Surigao del Sur.
                            </p>

                            <div className="w-1/3 h-[4px] bg-white my-6 mx-auto relative z-10 transform -rotate-1" />

                            <p className="mono font-bold tracking-wide text-[0.9rem] md:text-[1rem] leading-relaxed text-gray-300 relative z-10 px-4 md:px-8">
                                Also recorded in Mt. Kampalili &mdash; the highlands of eastern Mindanao.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Node Tree as Comic Panels (Centered Spine Design) */}
                <div className="w-full relative flex flex-col items-center">
                    <div className="w-full max-w-4xl flex flex-col relative py-8 items-center">

                        {/* Thick central vertical connecting line (Spine) */}
                        <div className={`absolute top-[60px] bottom-[40px] left-1/2 -ml-[3px] w-[6px] bg-white border-x-2 border-black transition-all duration-1000 origin-top z-10 ${phase >= 3 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} />

                        {/* Root Node Box */}
                        <div className={`flex flex-col items-center gap-4 z-20 relative transition-all duration-[600ms] transform ${phase >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90'}`}>

                            <div className="flex flex-col md:flex-row items-center justify-center border-[4px] border-white bg-[var(--green)] text-black px-10 py-5 relative shadow-[8px_8px_0px_#000] min-w-[320px] md:min-w-[460px] transform -rotate-1 hover:scale-105 transition-transform cursor-pointer">
                                <span className="mono text-4xl md:text-[3rem] font-black tracking-tighter flex items-center gap-2">
                                    <span className="text-white opacity-90 drop-shadow-md">/</span> mandaya
                                </span>
                                <span className="absolute -top-4 -right-2 md:-right-6 mono text-[0.75rem] uppercase font-black tracking-widest px-3 py-1.5 bg-black text-white transform rotate-6 shadow-[3px_3px_0px_#fff]">
                                    Volume Root
                                </span>
                            </div>

                            {/* Origin dot connecting to the spine */}
                            <div className="w-6 h-6 bg-white border-[3px] border-black shadow-[4px_4px_0px_var(--green)] z-30 transform rotate-45" />
                        </div>

                        {/* Children Container */}
                        <div className="flex flex-col gap-8 mt-10 w-full max-w-3xl items-center relative z-20">
                            {branches.map((branch, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center justify-center relative z-30 w-full transition-all duration-[500ms] ease-out transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                                >
                                    {/* Child Node Box */}
                                    <div className={`w-[90%] md:w-[85%] border-[4px] border-white bg-[#0c100c] hover:bg-[#151c15] transition-all group flex flex-col md:flex-row items-center justify-between p-5 md:px-8 relative cursor-default ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:scale-105 hover:z-40`}
                                        style={{ boxShadow: `8px 8px 0px ${branch.color}` }}>

                                        {/* Inner Content Left */}
                                        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
                                            <div className="mono text-[0.85rem] font-black text-black bg-white px-2 py-1 transform -skew-x-6 tracking-widest shadow-[2px_2px_0px_#000] inline-block">
                                                {branch.key}
                                            </div>
                                            <div className="mono text-3xl md:text-4xl font-black tracking-tighter text-white truncate flex items-center justify-center gap-2 group-hover:px-2 transition-all">
                                                <span className="text-[var(--muted)] opacity-80">/</span>
                                                <span style={{ textShadow: `2px 2px 0px ${branch.color}` }}>{branch.name}</span>
                                            </div>
                                        </div>

                                        {/* Inner Content Right (Notes) */}
                                        <div className="flex items-center justify-center w-full md:w-auto mt-2 md:mt-0">
                                            <span className="mono text-[0.8rem] font-black tracking-widest uppercase text-black bg-white px-4 py-2 w-full md:w-auto text-center shadow-[4px_4px_0px_#000] transform skew-x-3 group-hover:skew-x-0 transition-transform">
                                                {branch.note}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slide09;

import React from 'react';

export const SlideTag = ({ children, className = "" }) => (
    <div
        className={`mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--green)] mb-3 animate-[fade-in_0.8s_ease-out_forwards] ${className}`}
    >
        {children}
    </div>
);

export const SlideContent = ({ children, className = "" }) => (
    <div className={`slide-container w-full max-w-[900px] mx-auto py-16 px-8 md:px-12 ${className}`}>
        {children}
    </div>
);

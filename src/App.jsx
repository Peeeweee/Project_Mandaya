import React, { useState, useEffect, useCallback } from 'react';
import SlideShell from './components/SlideShell';
import NavDots from './components/NavDots';
import ProgressBar from './components/ProgressBar';
import CustomCursor from './components/CustomCursor';
import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';
import Slide18 from './slides/Slide18';
import Slide19 from './slides/Slide19';
import Slide20 from './slides/Slide20';
import Slide21 from './slides/Slide21';
import SlideFinal from './slides/SlideFinal';
import { SoundProvider, useSoundSystem } from './contexts/SoundContext';

const TOTAL_SLIDES = 22;

function AppContent() {
  const { isMuted, toggleMute } = useSoundSystem();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if focus is an input (just in case)
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => console.error(err));
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleMute();
          break;
        case 'Home':
          e.preventDefault();
          setSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setSlide(TOTAL_SLIDES - 1);
          break;
        default:
          if (e.key >= '1' && e.key <= '9') {
            e.preventDefault();
            let num = parseInt(e.key, 10);
            if (num - 1 < TOTAL_SLIDES) {
              setSlide(num - 1);
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <main className="relative w-full h-full bg-[var(--black)] overflow-hidden">
      <CustomCursor />

      {/* FIXED MUTE BUTTON */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute sound" : "Mute sound"}
        className="fixed top-4 right-4 z-[700] mono text-[0.72rem] bg-black/60 border border-[var(--border)] text-[var(--muted)] px-3 py-1.5 cursor-pointer hover:bg-white/10 transition-colors flex items-center gap-2"
      >
        {isMuted ? '🔇 MUTED' : '🔊 SOUND'}
      </button>

      {/* KEYBOARD SHORTCUTS HINT */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-[700] mono text-[0.68rem] text-[var(--muted)]/60 pointer-events-none transition-opacity duration-1000 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
        ← → navigate  |  F fullscreen  |  M mute  |  Space advance  |  1-9 jump
      </div>

      <ProgressBar currentSlide={currentSlide} totalSlides={TOTAL_SLIDES} />
      <NavDots
        totalSlides={TOTAL_SLIDES}
        currentSlide={currentSlide}
        onSetSlide={setSlide}
      />

      {Array.from({ length: TOTAL_SLIDES }).map((_, index) => {
        const isActive = currentSlide === index;

        return (
          <SlideShell
            key={index}
            id={`slide-${index}`}
            isActive={isActive}
          >
            {index === 0 ? (
              <Slide01 isActive={isActive} />
            ) : index === 1 ? (
              <Slide02 isActive={isActive} />
            ) : index === 2 ? (
              <Slide03 isActive={isActive} />
            ) : index === 3 ? (
              <Slide04 isActive={isActive} />
            ) : index === 4 ? (
              <Slide05 isActive={isActive} />
            ) : index === 5 ? (
              <Slide06 isActive={isActive} />
            ) : index === 6 ? (
              <Slide07 isActive={isActive} />
            ) : index === 7 ? (
              <Slide08 isActive={isActive} />
            ) : index === 8 ? (
              <Slide09 isActive={isActive} />
            ) : index === 9 ? (
              <Slide10 isActive={isActive} />
            ) : index === 10 ? (
              <Slide11 isActive={isActive} />
            ) : index === 11 ? (
              <Slide12 isActive={isActive} />
            ) : index === 12 ? (
              <Slide13 isActive={isActive} />
            ) : index === 13 ? (
              <Slide14 isActive={isActive} />
            ) : index === 14 ? (
              <Slide15 isActive={isActive} />
            ) : index === 15 ? (
              <Slide16 isActive={isActive} />
            ) : index === 16 ? (
              <Slide17 isActive={isActive} />
            ) : index === 17 ? (
              <Slide18 isActive={isActive} />
            ) : index === 18 ? (
              <Slide19 isActive={isActive} />
            ) : index === 19 ? (
              <Slide20 isActive={isActive} />
            ) : index === 20 ? (
              <Slide21 isActive={isActive} />
            ) : index === 21 ? (
              <SlideFinal isActive={isActive} />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                <h1 className="text-4xl md:text-6xl text-[var(--green)] mono font-bold tracking-tighter uppercase">
                  SLIDE {String(index + 1).padStart(2, '0')}
                </h1>
                <p className="mt-4 text-[var(--muted)] mono uppercase tracking-widest text-sm">
                  LOGGED OUT — CARAGA Repository
                </p>
              </div>
            )}
          </SlideShell>
        );
      })}
    </main>
  );
}

export default function App() {
  return (
    <SoundProvider>
      <AppContent />
    </SoundProvider>
  );
}

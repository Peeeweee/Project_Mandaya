import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const SoundContext = createContext();

export const useSoundSystem = () => {
    return useContext(SoundContext);
};

export const SoundProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(true);
    const audioCtxRef = useRef(null);

    const initAudio = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
    };

    const playTone = useCallback((type, startFreq, endFreq, durationSec, maxGain, isNoise = false) => {
        if (isMuted) return;
        initAudio();
        const ctx = audioCtxRef.current;
        if (!ctx) return;

        const gainNode = ctx.createGain();
        gainNode.connect(ctx.destination);

        let source;
        if (isNoise) {
            const bufferSize = ctx.sampleRate * durationSec;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            source = ctx.createBufferSource();
            source.buffer = buffer;
        } else {
            source = ctx.createOscillator();
            source.type = type;
            source.frequency.setValueAtTime(startFreq, ctx.currentTime);
            if (endFreq && endFreq !== startFreq) {
                source.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + durationSec);
            }
        }

        source.connect(gainNode);

        // Amplitude envelope
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + durationSec * 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec);

        source.start();
        source.stop(ctx.currentTime + durationSec);
    }, [isMuted]);

    const playTypeClick = useCallback(() => {
        playTone('square', 800, null, 0.02, 0.05);
    }, [playTone]);

    const playChime = useCallback((loud = false) => {
        playTone('sine', 880, 1100, 0.3, loud ? 0.3 : 0.15);
    }, [playTone]);

    const playBoot = useCallback(() => {
        if (isMuted) return;
        initAudio();
        const ctx = audioCtxRef.current;
        const durationSec = 2;
        const maxGain = 0.08;

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, ctx.currentTime);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + 0.5); // slow fade in
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + durationSec); // slow fade out

        osc.start();
        osc.stop(ctx.currentTime + durationSec);
    }, [isMuted]);

    const playFlash = useCallback(() => {
        playTone(null, 0, null, 0.1, 0.1, true); // White noise
    }, [playTone]);

    const playWarning = useCallback(() => {
        if (isMuted) return;
        initAudio();
        const ctx = audioCtxRef.current;

        const playSquare = (freq, time, dur) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, time);
            osc.connect(gain);
            gain.connect(ctx.destination);
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.12, time + 0.05);
            gain.gain.linearRampToValueAtTime(0, time + dur);
            osc.start(time);
            osc.stop(time + dur);
        };

        const now = ctx.currentTime;
        playSquare(440, now, 0.2);
        playSquare(330, now + 0.2, 0.2);
    }, [isMuted]);

    const toggleMute = () => {
        if (isMuted) initAudio(); // attempt init on user interaction to unlock audio content
        setIsMuted(prev => !prev);
    };

    return (
        <SoundContext.Provider value={{
            isMuted,
            toggleMute,
            playTypeClick,
            playChime,
            playBoot,
            playFlash,
            playWarning
        }}>
            {children}
        </SoundContext.Provider>
    );
};

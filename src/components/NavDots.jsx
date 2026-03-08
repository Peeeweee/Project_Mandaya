import React from 'react';

const NavDots = ({ totalSlides, currentSlide, onSetSlide }) => {
    return (
        <div className="nav-dots" role="navigation" aria-label="Slide Navigation">
            {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                    key={i}
                    className="nav-dot"
                    onClick={() => onSetSlide(i)}
                    style={{
                        borderRadius: '50%',
                        backgroundColor: currentSlide === i ? 'var(--green)' : 'var(--muted)',
                        border: 'none',
                        padding: 0,
                        cursor: 'none',
                        transition: 'all 0.3s ease',
                        transform: currentSlide === i ? 'scale(1.6)' : 'scale(1)',
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={currentSlide === i ? "true" : "false"}
                />
            ))}
        </div>
    );
};

export default NavDots;

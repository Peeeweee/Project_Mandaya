import React from 'react';

const ProgressBar = ({ currentSlide, totalSlides }) => {
    const width = ((currentSlide + 1) / totalSlides) * 100 + '%';

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '2px',
                width: width,
                background: 'linear-gradient(90deg, var(--green), var(--amber))',
                boxShadow: '0 0 8px var(--green)',
                transition: 'width 0.4s ease',
                zIndex: 10000
            }}
        />
    );
};

export default ProgressBar;

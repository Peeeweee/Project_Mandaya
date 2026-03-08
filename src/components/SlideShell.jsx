import React from 'react';

const SlideShell = ({ id, isActive, children }) => {
    return (
        <div
            id={id}
            aria-hidden={!isActive}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'var(--black)',
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'all' : 'none',
                transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                zIndex: isActive ? 100 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default SlideShell;

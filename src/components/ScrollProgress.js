import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{
            width: `${scrollProgress}%`,
            height: '5px',
            backgroundColor: '#007bff',
            position: 'fixed',
            top: 0,
            left: 0,
            transition: 'width 0.2s ease',
            zIndex: 1000,
        }} />
    );
};

export default ScrollProgress;

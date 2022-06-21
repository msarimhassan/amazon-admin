import React from 'react';
import Lottie from 'lottie-react';
import circleloader from './circleloader.json';

export default function Loader() {
    const mainDivStyles = {
        opacity: 0.6,
        height: '60vh',
        display: 'flex',
        zIndex: 9999999,
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <div style={mainDivStyles}>
            <Lottie animationData={circleloader} style={{ width: '300px', height: '300px' }} autoplay loop />
        </div>
    );
}

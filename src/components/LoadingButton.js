import React from 'react';
import circleloader from '../assets/animations/circleloader.json';


const Loader = () => {
    const mainDivStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: circleloader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div style={mainDivStyles}>
            <Lottie options={defaultOptions} style={{ width: '50px', height: '50px' }} />
        </div>
    );
};




export default function LoadingButton({ loading, text, type }) {
    return (
        <button type={type}>
            {loading ? <Loader /> : text}
        </button>
    );
}

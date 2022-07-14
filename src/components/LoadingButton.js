import React from 'react';
import circleloader from '../assets/animations/circleloader.json';
import Lottie from 'lottie-react';

const Loader = () => {
    const mainDivStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    };
   
    return (
        <div style={mainDivStyles}>
            <Lottie
                animationData={circleloader}
                autoplay
                loop
                style={{ width: '120px', height: '100px' }}
            />
        </div>
    );
};




export default function LoadingButton({ loading, text, type }) {
    return (
        <button type={type} className={loading? 'loadingButton' :'txt-btn'}>
            {loading ? <Loader /> : text}
        </button>
    );
}

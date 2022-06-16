import React from 'react';
import Lottie from 'lottie-react';
import circleloader from './circleloader.json';

export default function Loader() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                zIndex: 1,
                position: 'absolute',
                backgroundColor: 'red',
                opacity: '0.8',
            }}
        >
            <Lottie animationData={circleloader} loop width={200} height={200} />
        </div>
    );
}

import React from 'react';
import "../styles/PageWrapper.css"
export default function PageWrapper({ children }) {
    return <div className='wrapper'>{children}</div>;
}

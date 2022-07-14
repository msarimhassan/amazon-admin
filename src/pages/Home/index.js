import React, { useEffect } from 'react';
import Stats from './Stats';
import RevenueReport from './RevenueReport';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
export default function HomePage() {
    const {token } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <Stats />
            <RevenueReport />
        </>
    );
}

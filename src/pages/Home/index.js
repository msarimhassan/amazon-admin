import React, { useEffect } from 'react';
import Stats from './Stats';
import RevenueReport from './RevenueReport';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import OneSignalReact from 'react-onesignal';
export default function HomePage() {
    const {token } = useAuth();
    const navigate = useNavigate();
     useEffect(() => {
         OneSignalReact.init({
             appId: '78320a06-9037-4f58-acfc-227f3f07f141',
         });
     }, []);
    return (
        <>
            <Stats />
            <RevenueReport />
        </>
    );
}

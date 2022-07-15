import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './common/AppRoutes';

export default function AdminApp() {
    return (
        <>
            {AppRoutes.map((obj) => {
                return <Route key={obj.path} path={obj.path} element={obj.element} />;
            })}
        </>
    );
}

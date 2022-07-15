import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ShopRoutes from './common/ShopRoutes';

export default function ShopApp({token}) {
  console.log('shopApp');
    return (
        <>
            {ShopRoutes.map((obj) => {
                return <Route key={obj.path} path={obj.path} element={!token ? <Navigate to='/login'/> :obj.element} />;
            })}
        </>
    );
}

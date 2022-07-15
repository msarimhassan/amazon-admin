import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthRoutes from './common/AuthRoutes';
export default function AuthApp() {
  console.log('authapp')
    return (
        <React.Fragment>
            {AuthRoutes.map((obj) => {
                return <Route key={obj.path} path={obj.path} element={obj.element} />;
            })}
        </React.Fragment>
    );
}

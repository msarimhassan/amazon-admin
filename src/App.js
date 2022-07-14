import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import AppRoutes from './common/AppRoutes';
import { TogglerContext, AuthContext, UserContext } from './context';
import Overlay from './components/Overlay';
import PageWrapper from './components/PageWrapper';
import AuthRoutes from './common/AuthRoutes';
import './index.css';
import { client } from './config';
import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer } from 'react-toastify';

export default function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [token, setToken] = useState();
    console.log('statte token', token);
    const [userData, setUserData] = useState();


    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(window.localStorage.getItem('userData'));
            setToken(token);
            setUserData(user);
        }
    }, []);
    client.addMonitor((res) => {
        console.log({ res });
    });
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ userData, setUserData }}>
                <ToastContainer/>
                {token ? (
                    <Router>
                        <TogglerContext.Provider value={{ showSidebar, setShowSidebar }}>
                            <Overlay />
                            <Header />
                            <PageWrapper>
                                <Sidebar />
                                <Layout>
                                    <Routes>
                                        {AppRoutes.map((route) => {
                                            return (
                                                <Route
                                                    key={route.path}
                                                    path={route.path}
                                                    element={route.element}
                                                />
                                            );
                                        })}
                                    </Routes>
                                </Layout>
                            </PageWrapper>
                        </TogglerContext.Provider>
                    </Router>
                ) : (
                    <Router>
                        <Routes>
                            {AuthRoutes.map((route) => {
                                return (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={route.element}
                                    />
                                );
                            })}
                        </Routes>
                    </Router>
                )}
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

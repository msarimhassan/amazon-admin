import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import AppRoutes from './common/AppRoutes';
import { TogglerContext,AuthContext } from './context';
import Overlay from './components/Overlay';
import PageWrapper from './components/PageWrapper';
import AuthRoutes from './common/AuthRoutes';

import './index.css';

export default function App() {
    const [showSidebar,setShowSidebar]=useState(false);
   const [token,setToken]=useState(false);
    return (
        <AuthContext.Provider value={{token,setToken}}>
        {  token ? <Router>
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
            </Router>  : <Router>
                <Routes>
                    {AuthRoutes.map((route) => {
                        return <Route key={route.path} path={route.path} element={route.element}/>
                    })}
                </Routes>

            </Router>}

            
        </AuthContext.Provider>
    );
}

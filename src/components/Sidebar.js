import React, { useState } from 'react';
import { superAdmin } from '../common/NavData';
import { shop } from '../common/ShopNav';
import '../styles/Sidebar.css';
import { NavLink } from 'react-router-dom';
import useTogglerContext from '../hooks/useTogglerContext';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
    const { showSidebar } = useTogglerContext();
    const [selected, setSelected] = useState(null);
    const user= JSON.parse(localStorage.getItem('userData'));
    const { name } = user.role;
    const { t } = useTranslation();
  console.log(name);
    const Row = ({ icon, title, link }) => {
        return (
            <NavLink
                className={
                    window.location.pathname === link
                        ? 'Sidebar-list-item-active'
                        : 'Sidebar-list-item'
                }
                to={link}
                onClick={() => setSelected(link)}
            >
                <div
                    className={
                        window.location.pathname === link
                            ? 'icons text-white'
                            : 'icons text-black'
                    }
                >
                    {icon}
                </div>
                <div
                    className={
                        window.location.pathname === link
                            ? 'title w-100 text-white'
                            : 'title w-100 text-black'
                    }
                >
                    <div>{t(title)}</div>
                </div>
            </NavLink>
        );
    };

    return (
        <div className='Sidebar'>

          {name === 'Super admin' ? 
            <div className='Sidebar-list'>
                {superAdmin.map((item, key) => {
                    return (
                        <Row
                            key={key}
                            icon={item.icon}
                            title={item.title}
                            link={item.link}
                            selected={item.link == window.location.pathname}
                        />
                    );
                })}
            </div> :  <div className='Sidebar-list'>
                {shop.map((item, key) => {
                    return (
                        <Row
                            key={key}
                            icon={item.icon}
                            title={item.title}
                            link={item.link}
                            selected={item.link == window.location.pathname}
                        />
                    );
                })}
            </div> }
        </div>
    );
}

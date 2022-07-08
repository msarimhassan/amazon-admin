import React from 'react'
import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,Button } from 'reactstrap';
import Logo from '../assets/images/logo.png';
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap'
import '../styles/App.css';
import useTogglerContext  from '../hooks/useTogglerContext';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth" 
import { client } from "../config"
import UsaFlag from '../assets/usa-flag.svg';
import FrenchFlag from '../assets/french-flag.svg';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
export default function Header() {
     const{Logout}=useAuth();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const {showSidebar,setSidebar} =  useTogglerContext();

    console.log(showSidebar);
    const handleLogout=()=>{
        Logout();
        navigate('/login');
    }

    client.addMonitor(res=>{
        if(res.status==='401')
        {
            handleLogout();
        }
    })

        const handleLanguage = (e) => {
             i18next.changeLanguage(e.target.value);
             window.location.reload();
         };
    

  return (
      <div>
          <Navbar color='light' light fixed='top'>
              <NavbarBrand className='me-auto' href='/'>
                  <img src={Logo} style={{ width: '150px' }} />
              </NavbarBrand>
              <NavbarToggler className='me-2 Toggler' onClick={() => setSidebar(!showSidebar)} />
              <Collapse navbar>
                  <Nav navbar>
                      <NavItem>
                          <NavLink href='/components/'>Components</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
              <UncontrolledDropdown>
                  <DropdownToggle nav caret style={{ color: 'white' }}>
                      {i18next.language == 'en-US' ? (
                          <img src={UsaFlag} width='30px' height='25px' />
                      ) : (
                          <img src={FrenchFlag} width='30px' height='25px' />
                      )}
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem value='en-US' onClick={(e) => handleLanguage(e)}>
                          English
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem value='fr' onClick={(e) => handleLanguage(e)}>
                          French
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <Button onClick={() => handleLogout()}>{t('logout')}</Button>
          </Navbar>
      </div>
  );
}

import React from 'react'
import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,Button } from 'reactstrap';
import Logo from '../assets/images/logo.png';
import '../styles/App.css';
import useTogglerContext  from '../hooks/useTogglerContext';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth" 
import {client} from "../config"
export default function Header() {
     const{Logout}=useAuth();
     let navigate=useNavigate();
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

  return (
      <div>
          <Navbar color='light' light fixed='top'>
              <NavbarBrand className='me-auto' href='/'>
                  <img src={Logo} style={{ width: '150px' }} />
              </NavbarBrand>
              <NavbarToggler className='me-2 Toggler' onClick={()=>setSidebar(!showSidebar)} />
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
              <Button onClick={()=>handleLogout()}>Logout</Button>
          </Navbar>
      </div>
  );
}

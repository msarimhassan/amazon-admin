import React from 'react'
import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,Button } from 'reactstrap';
import Logo from '../assets/images/logo.png';
import '../styles/App.css';
import useTogglerContext  from '../hooks/useTogglerContext';
import useAuth from "../hooks/useAuth" 
export default function Header() {
     const{Logout}=useAuth();
    const {showSidebar,setSidebar} = useTogglerContext();

    console.log(showSidebar);
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
              <Button onClick={Logout}>Logout</Button>
          </Navbar>
      </div>
  );
}

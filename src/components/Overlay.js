import React from 'react'
import "../styles/Overlay.css";
import useTogglerContext from '../hooks/useTogglerContext';
import { Icons } from '../common';
export default function Overlay() {
    const{showSidebar,setSidebar}=useTogglerContext();
    const {AI} = Icons;
  return (
      <div className='overlay' style={{ display: showSidebar ? 'block' : 'none' }}>
          <AI.AiOutlineClose
          size={40}
              style={{ position:'absolute' ,right:0,padding:'5px' }}
              onClick={() => {
                  setSidebar(!showSidebar);
              }}
          />
          <ul className='overlay-list'>
              <li className='overlay-list-item'>Home</li>
              <li className='overlay-list-item'>Products</li>
              <li className='overlay-list-item'>Category</li>
              <li className='overlay-list-item'>Orders</li>
              <li className='overlay-list-item'>Shops</li>
              <li className='overlay-list-item'>Profile</li>
              <li className='overlay-list-item'>Roles</li>
          </ul>
      </div>
  );
}

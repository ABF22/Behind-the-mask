import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const NavBar = () => {

  return (
    <div className='header'>
      <nav> 
        <img className='logo' src='../../../batmanMask.png'></img>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/about" > About </NavLink>
        <NavLink to="/random" > Random </NavLink>
        {/* <NavLink to="/superJobs" > SuperJobs </NavLink> */}
        <NavLink to="/search" > Search </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const NavBar = () => {

  return (
    <div className='header'>
      <img className='logo' src='../../../public/batmanMask.png'></img>
      <nav>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/about" > About </NavLink>
        <NavLink to="/superRandom" > Random </NavLink>
        <NavLink to="/superJobs" > SuperJobs </NavLink>
        <NavLink to="/search" > Search </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar

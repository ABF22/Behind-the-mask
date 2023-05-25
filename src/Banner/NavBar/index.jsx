import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
      <nav>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/about" > About </NavLink>
        <NavLink to="/superRandom" > Random </NavLink>
        <NavLink to="/superJobs" > SuperJobs </NavLink>
        <NavLink to="/search" > Search </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar

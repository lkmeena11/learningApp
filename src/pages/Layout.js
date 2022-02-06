import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { NavBar, PageTitle, Menu, MenuItem } from '../utils/StyledCompLib';

const Layout = () => {
  return (
    <>
      <NavBar>
      <PageTitle>Endpoint Manager</PageTitle>
        <Menu>
            <MenuItem><NavLink to="/">Home</NavLink></MenuItem>
            <MenuItem><NavLink to="/logs">Logs</NavLink></MenuItem>
        </Menu>
      </NavBar>

      <Outlet />
    </>
  )
};

export default Layout;
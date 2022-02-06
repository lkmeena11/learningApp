import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="navbar">
        <div className="title">Endpoint Manager</div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/logs">Logs</NavLink></li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
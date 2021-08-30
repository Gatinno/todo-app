import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../style';

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavLink to="/" exact>All</NavLink>
      <NavLink to="/active">Active</NavLink>
      <NavLink to="/completed">Completed</NavLink>
    </Navbar>
  );
}

export default NavbarComponent;
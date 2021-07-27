import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          React crud
        </Link>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                View User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/users/add">
              Add User
              </NavLink>
            </li>
          </ul>
        </div>


     
    </nav>
  );
};

export default Navbar;

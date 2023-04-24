import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillBookmarkPlusFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="h-20 w-screen bg-secondary text-accent pt-4 md:flex hidden fixed top-0 z-40">
      <NavLink to="/">
        <h1 className="text-4xl ml-4">ZEDD's</h1>
      </NavLink>

      <div className="ml-auto mr-6 mt-2">
        <ul className="flex gap-x-6 text-primary">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-accent text-secondary" : ""
            }
          >
            <div className="h-auto w-auto px-2 py-1 rounded">
              <li>Home</li>
            </div>
          </NavLink>
          <NavLink
            to="/sales"
            className={({ isActive }) =>
              isActive ? "bg-accent text-secondary" : ""
            }
          >
            <div className="h-auto w-auto px-2 py-1 rounded">
              <li>Sales</li>
            </div>
          </NavLink>
          <NavLink
            to="/repairs"
            className={({ isActive }) =>
              isActive ? "bg-accent text-secondary" : ""
            }
          >
            <div className="h-auto w-auto px-2 py-1 rounded">
              <li>Repairs</li>
            </div>
          </NavLink>
          <NavLink to='/saved' className={({ isActive }) =>
              isActive ? "text-accent" : "text-primary"
            }>
            <div>
              <BsFillBookmarkPlusFill className="text-3xl "/>
            </div>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

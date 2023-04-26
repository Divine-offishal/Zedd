import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { ImHome3 } from 'react-icons/im'
import { BsCurrencyExchange, BsFillGearFill } from 'react-icons/bs'
import { useAnimate, stagger, motion } from "framer-motion";
import useMenuAnimation from "../Animations/useMenuAnimation";
import { NavLink } from "react-router-dom";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

//

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const scope = useMenuAnimation(open);

  interface nav {
    name: string;
    path: string;
    icon: React.ReactNode
  }

  const navItems: nav[] = [
    {
      name: "Home",
      path: "/",
      icon: <ImHome3/>
    },
    {
      name: "Sales",
      path: "/sales",
      icon: <BsCurrencyExchange/>
    },
    {
      name: "Repairs",
      path: "/repairs",
      icon: <BsFillGearFill/>
    },
  ];

  return (
    <>
      <div className="h-20 w-screen bg-secondary  pt-4 md:hidden flex fixed top-0 z-20">
        <NavLink to="/">
          <h1 className="text-4xl ml-4 text-accent">ZEDD's</h1>
        </NavLink>

        <span className="text-5xl ml-auto flex text-primary">
          <NavLink to='/saved'className={({ isActive }) =>
                  isActive ? "text-accent" : ""
                }>
            <BsFillBookmarkPlusFill className="text-3xl mt-2 mr-4"/>
          </NavLink>
          <HiMenu onClick={() => setOpen(true)} />
        </span>
      </div>


{/* These are the nav contents */}
      <nav
        ref={scope}
        className={`fixed top-0 transition-all duration-500 ease-in-out h-screen w-7/12 bg-accent z-30 md:hidden ${
          open ? "right-0" : "right-[-400px]"
        }`}
      >
        <ul className=" space-y-20 space-x-10">
          <HiX
            className="text-5xl ml-auto mt-6"
            onClick={() => setOpen(false)}
          />
          {navItems.map((item, index) => (
            <li key={index} onClick={() => setOpen(!open)} >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "bg-gradient-to-r from-secondary/95 to-secondary/20 h-auto w-auto rounded-l block text-accent" : ""
                }
              >
                <div className="h-auto w-auto px-2 py-1 flex">
                  <span className="mr-4">
                    {item.icon}
                  </span>
                  {item.name}
                </div>
              </NavLink>
            </li>
            
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;

import React from "react";
import { NavLink } from "react-router-dom";

const EmptyPage = () => {
  return (
    <div className="h-screen w=screen text-secondary text-center">
      <h1 className="text-4xl ">Hey name, your cart is empty</h1>
      <NavLink to="/">
        <span className=" grid justify-items-center mt-10">
          <div className="w-56 p-2 text-accent bg-secondary rounded-md hover:bg-accent hover:text-secondary">
            <h1 className="text-2xl">Go back home</h1>
          </div>
        </span>
      </NavLink>
    </div>
  );
};

export default EmptyPage;

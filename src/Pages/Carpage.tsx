import React from "react";
import { Images } from "../assets/Images/Images";

const Carpage = () => {
  return (
    <div className="h-screen w-screen mt-32">
      <span className="grid justify-items-center">
        <img src={Images.Sales} alt="" className="w-96 h-96" />
      </span>

      <h1 className="text-center text-3xl font-semi-bold mt-7">Car name</h1>
      <p className="text-center mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit in earum distinctio voluptas aperiam impedit! Animi accusamus illo maiores?</p>
    </div>
  );
};

export default Carpage;

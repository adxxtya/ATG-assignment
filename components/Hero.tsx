"use client";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useToggle } from "./ToggleContext";

const Hero = () => {
  const { isToggled } = useToggle();
  return (
    <div
      className="relative w-full h-[236px] lg:h-[440px] mt-12 md:mt-20 flex flex-col justify-center  items-center"
      style={{
        backgroundImage: "url('/Rectangle 2.png')",
        backgroundSize: "contain",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>
      <div className="text-white relative z-10 flex justify-between px-4 w-full items-center md:hidden">
        <div className="">
          <IoMdArrowBack color="white" size={30} />
        </div>
        <div className="p-2 text-sm font-medium border-[1px] border-white rounded-md">
          {!isToggled ? "Join Group" : "Leave Group"}
        </div>
      </div>
      <div className="container h-4/6  text-white flex items-end relative z-10">
        <div className="pl-4">
          <h1 className="text-xl lg:text-4xl font-semibold">
            Computer Engineering
          </h1>
          <h3 className="text-sm lg:text-lg">
            142,765 Computer Engineers follow this
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;

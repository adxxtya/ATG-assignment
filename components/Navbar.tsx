"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFacebook, BsFillCaretDownFill, BsGoogle } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { useToggle } from "./ToggleContext";
import { MdModeEditOutline } from "react-icons/md";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const { isToggled, toggleHandler } = useToggle();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="fixed z-20 top-0 w-full h-12 md:h-20 bg-white border-b-neutral-500 border flex justify-center items-center">
        <div className="container h-full flex justify-between items-center">
          <div className="w-full hidden lg:block">
            <Image
              src="/whole.png"
              width={200}
              height={200}
              className=""
              alt="logo"
            />
          </div>
          <div className="hidden lg:flex justify-center items-center w-full">
            <div className="w-full bg-[#F2F2F2] rounded-3xl flex items-center p-2 pl-4 space-x-4 text-lg h-full">
              <div>
                <AiOutlineSearch size={30} color="rgb(122,122,122)" />
              </div>
              <input
                type="text"
                className="text-[#5C5C5C] bg-inherit whitespace-nowrap w-full h-full"
                placeholder="Search for your favourite groups in ATG"
              />
            </div>
          </div>
          {isToggled ? (
            <div className="hidden lg:flex gap-3 text-base justify-center items-center w-full font-semibold">
              <Image
                height={1000}
                width={1000}
                className="h-11 mr-2 w-11 object-cover object-center rounded-full"
                src="https://picsum.photos/id/91/200"
                alt="Product Image"
              />
              <p className="ml-2 text-base whitespace-nowrap">Aditya Maurya</p>
              <BsFillCaretDownFill />
            </div>
          ) : (
            <div className="hidden lg:flex gap-2 text-base justify-center items-center w-full font-semibold">
              Create Account.
              <span
                className="text-[#2F6CE5] hover:underline hover:cursor-pointer"
                onClick={toggleModal}
              >
                It&apos;s free
              </span>
            </div>
          )}
          <div className="flex justify-end w-full lg:hidden mr-4">
            <Image
              src="/whole.png"
              width={200}
              height={200}
              className=""
              alt="logo"
            />
          </div>
          <div className="flex items-center mr-1">
            <button
              onClick={toggleHandler}
              className={`w-16 h-8 rounded-full p-1 ${
                isToggled ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full transition-transform transform ${
                  isToggled ? "translate-x-8" : ""
                } bg-white shadow-md`}
              ></div>
            </button>
            <p className="ml-2 whitespace-nowrap">
              {isToggled ? "Logged In" : "Logged Out"}
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-end md:items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-70"></div>
          <div className="bg-white rounded-lg shadow-lg relative">
            <h2 className="hidden md:block text-lg bg-[#EFFFF4] font-semibold rounded-t-lg p-4 px-8 text-[#008A45] w-full h-full">
              Lets learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </h2>
            <button
              className="absolute -right-0 md:-right-4 -top-16 flex p-1 hover:cursor-pointer mt-2"
              onClick={toggleModal}
            >
              <IoMdCloseCircle size={30} color="white" />
            </button>
            <div className="w-full flex flex-col md:flex-row">
              {!signIn ? (
                <>
                  <div className="w-full md:w-1/2 p-6">
                    <div>
                      <h1 className="text-2xl font-bold">Create Account</h1>
                    </div>
                    <div>
                      <form className="w-full max-w-lg">
                        <div className="relative mt-5">
                          <div className="flex flex-col items-stretch">
                            <div className="flex">
                              <input
                                type="text"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-tl border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] focus:bg-white focus:border-gray-500 text-neutral-700  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                placeholder="FirstName"
                                aria-label="FirstName"
                              />
                              <input
                                type="text"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-tr border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                placeholder="LastName"
                                aria-label="LastName"
                              />
                            </div>
                            <div className="flex">
                              <input
                                type="text"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] focus:bg-white focus:border-gray-500 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                placeholder="Email"
                                aria-label="Email"
                              />
                            </div>
                            <div className="flex">
                              <input
                                type="password"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] focus:bg-white focus:border-gray-500 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                placeholder="Password"
                                aria-label="Password"
                              />
                            </div>
                            <div className="flex">
                              <input
                                type="password"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] focus:bg-white focus:border-gray-500 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                placeholder="Confirm Password"
                                aria-label="Confirm Password"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="bg-[#2F6CE5] text-white rounded-3xl w-full p-3 mt-6">
                          Create Account
                        </button>
                        <div className="flex flex-col gap-2 mt-8">
                          <div className="flex justify-center items-center gap-2 border rounded-md w-full p-2">
                            <BsFacebook size={25} /> Sign up with Facebook
                          </div>
                          <div className="flex justify-center items-center gap-2 border rounded-md w-full p-2">
                            <BsGoogle size={25} /> Sign up with Google
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="w-full flex justify-center md:justify-end gap-2 px-4 mt-4 mb-4 text-center md:text-end">
                      <div>
                        Already have an account?
                        <span
                          onClick={() => setSignIn(!signIn)}
                          className="text-[#2F6CE5] hover:underline cursor-pointer ml-1"
                        >
                          Sign In
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      <Image
                        src="/Group 3(1).png"
                        alt="vector-art"
                        height={1000}
                        width={1000}
                        className="w-full"
                      />
                    </div>
                    <div className="text-neutral-500 p-2 text-xs text-center">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-1/2 p-6">
                    <div>
                      <h1 className="text-2xl font-bold">Sign In</h1>
                    </div>
                    <form className="w-full max-w-lg">
                      <div className="relative mt-5">
                        <div className="flex flex-col items-stretch">
                          <div className="flex">
                            <input
                              type="text"
                              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] focus:bg-white focus:border-gray-500 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                              placeholder="Email"
                              aria-label="Email"
                            />
                          </div>
                          <div className="flex">
                            <input
                              type="password"
                              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid bg-[#F7F8FA] border-[#D9D9DB] bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] focus:bg-white focus:border-gray-500 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                              placeholder="Password"
                              aria-label="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="bg-[#2F6CE5] text-white rounded-3xl w-full p-3 mt-6">
                        Sign In
                      </button>
                      <div className="flex flex-col gap-2 mt-8">
                        <div className="flex justify-center items-center gap-2 border rounded-md w-full p-2">
                          <BsFacebook size={25} /> Sign up with Facebook
                        </div>
                        <div className="flex justify-center items-center gap-2 border rounded-md w-full p-2">
                          <BsGoogle size={25} /> Sign up with Google
                        </div>
                      </div>
                      <div className="text-neutral-800 font-semibold p-2 mt-4 text-sm text-center">
                        Forgot password?
                      </div>
                    </form>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="w-full flex justify-center md:justify-end gap-2 px-4 mt-4 mb-4 text-center md:text-end">
                      <div>
                        Don’t have an account yet?
                        <span
                          onClick={() => setSignIn(!signIn)}
                          className="text-[#2F6CE5] hover:underline cursor-pointer ml-1"
                        >
                          Create new for free!
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      <Image
                        src="/Group 3(1).png"
                        alt="vector-art"
                        height={1000}
                        width={1000}
                        className="w-full"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {isToggled ? (
        <div className="fixed z-50 bottom-6 right-6 cursor-pointer hover:scale-105 p-4 h-20 w-20 md:hidden flex justify-center items-center  bg-[#FF5C5C] rounded-full">
          <MdModeEditOutline size={40} color="white" />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

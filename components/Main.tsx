"use client";
import React, { useState } from "react";
import Card from "./Card";
import data from "@/controllers/posts.json";
import { SlLocationPin } from "react-icons/sl";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCaretDownFill, BsPeopleFill } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { useToggle } from "./ToggleContext";
import Image from "next/image";
import { BiExit } from "react-icons/bi";
import recommendedGroups from "../controllers/recommendedGroups.json";

const initialButtonState = recommendedGroups.map(() => false);

const Main = () => {
  const { isToggled } = useToggle();
  console.log("main", isToggled);

  const [buttonStates, setButtonStates] = useState(initialButtonState);

  const handleButtonClick = (index: any) => {
    // Create a copy of the buttonStates array
    const newButtonStates = [...buttonStates];

    // Toggle the state of the clicked button at the given index
    newButtonStates[index] = !newButtonStates[index];

    // Update the button states
    setButtonStates(newButtonStates);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="flex justify-between items-center md:hidden w-11/12 p-2 mt-2">
        <div className="font-semibold text-lg">Posts(368)</div>
        <div className="text-lg">
          <select className="p-2 ml-4 rounded-md">
            <option value="all">Filter: All</option>
            <option value="specific">Filter: Specific</option>
            <option value="none">Filter: None</option>
          </select>
        </div>
      </div>
      <div className="container flex flex-col justify-between">
        <div className="border-b-2 relative border-neutral-200 md:flex justify-between items-center hidden w-full p-2 mt-6">
          <div className="flex gap-6">
            <div className="relative">
              All Posts(32)
              <div className="absolute border-b-2 mt-3 w-full border-neutral-700" />
            </div>
            <div className="text-neutral-400">Article</div>
            <div className="text-neutral-400">Event</div>
            <div className="text-neutral-400">Education</div>
            <div className="text-neutral-400">Job</div>
          </div>
          <div className="flex gap-4">
            <button className="bg-neutral-200 whitespace-nowrap flex items-center justify-center gap-2 text-black rounded-md w-full px-3 py-1">
              Write a post <BsFillCaretDownFill />
            </button>
            {!isToggled ? (
              <button className="bg-[#2F6CE5] flex items-center justify-center gap-2 text-white rounded-md w-full px-3 py-1">
                <BsPeopleFill /> Join Group
              </button>
            ) : (
              <button className="border flex items-center justify-center gap-2 text-black truncate rounded-md w-full px-3 py-1">
                <BiExit size={25} /> Leave Group
              </button>
            )}
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-full md:w-4/6">
            <div className="mb-4 max-h-[110vh] md:max-h-[90vh] overflow-y-auto">
              {data.map((item) => (
                <div key={item.id}>
                  <Card
                    post_image={item.post_image}
                    post_type={item.post_type}
                    post_title={item.post_title}
                    post_description={item.post_description}
                    author_image={item.author_image}
                    author_name={item.author_name}
                    post_views={item.post_views}
                    date={item.date}
                    location={item.location}
                    redirect_link={item.redirect_link}
                    job_type={item.job_type}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4 mt-14 p-4 hidden md:block">
            <div className="p-1 flex justify-between border-b border-neutral-400">
              <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                {" "}
                <SlLocationPin /> Noida, India
              </div>
              <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                <MdModeEditOutline />
              </div>
            </div>
            <div className="flex items-start text-neutral-500 mt-6 gap-2">
              <AiOutlineInfoCircle size={40} />
              Your location will help us serve better and extend a personalised
              experience.
            </div>
            {isToggled ? (
              <div className="mt-12 w-full">
                <div className="flex flex-col gap-4 text-lg font-medium">
                  <div className="w-full flex items-center gap-4">
                    <FaRegThumbsUp size={30} />
                    <p>RECOMMENDED GROUPS</p>
                  </div>
                  <div className="space-y-4 mt-4">
                    {recommendedGroups.map((group, index) => (
                      <div
                        key={group.name}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={group.image}
                            alt={group.name}
                            height={150}
                            width={150}
                            className="rounded-full h-11 w-11"
                          />
                          <p className="text-sm">{group.name}</p>
                        </div>
                        <button
                          className={`rounded-full text-xs py-2 px-4 ${
                            buttonStates[index]
                              ? "bg-black text-white"
                              : "bg-neutral-100"
                          }`}
                          onClick={() => handleButtonClick(index)}
                        >
                          {buttonStates[index] ? "Followed" : "Follow"}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4 text-[#2F6CE5] text-sm cursor-pointer hover:underline">
                    See More...
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

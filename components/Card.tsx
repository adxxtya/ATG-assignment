import Image from "next/image";
import React from "react";
import { BsCalendarEvent, BsThreeDots } from "react-icons/bs";
import { BiSolidShareAlt, BiBriefcase } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

interface Post {
  post_type: string;
  post_image: string;
  post_title: string;
  post_description: string;
  author_image: string;
  author_name: string;
  post_views: string;
  date: string | null;
  location: string | null;
  redirect_link: string | null;
  job_type: string | null | undefined;
}

const Card = ({
  post_image,
  post_type,
  post_title,
  post_description,
  author_image,
  author_name,
  post_views,
  date,
  location,
  redirect_link,
  job_type,
}: any) => {
  return (
    <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white border shadow-md duration-300  hover:shadow-lg">
      {post_image ? (
        <Image
          height={1000}
          width={1000}
          className="h-64 w-full object-cover object-center"
          src={post_image}
          alt="Product Image"
        />
      ) : null}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-medium">{post_type}</h3>
        <div className="flex justify-between">
          <h2 className="mb-2 text-2xl font-medium w-10/12">{post_title}</h2>
          <div>
            <BsThreeDots size={30} />
          </div>
        </div>
        {post_description && (
          <p className="mb-2 text-xl text-neutral-500">{post_description}</p>
        )}
        {date && (
          <div className="flex font-semibold items-center gap-6 mt-2 ml-1">
            <p className="mb-2 text-sm md:text-base flex items-center gap-2">
              <BsCalendarEvent size={21} />
              <p className="truncate w-[120px] md:w-auto">{date}</p>
            </p>
            <p className="mb-2 text-sm md:text-base flex items-center gap-1">
              <SlLocationPin size={22} />
              <p className="truncate w-[120px] md:w-auto">{location}</p>
            </p>
          </div>
        )}
        {job_type && (
          <div className="flex font-semibold items-center gap-6 mt-2 ml-1">
            <p className="mb-2 text-sm md:text-base flex items-center gap-2">
              <BiBriefcase size={22} />
              <p className="truncate w-[120px] md:w-auto">{job_type}</p>
            </p>
            <p className="mb-2 text-sm md:text-base flex items-center gap-1">
              <SlLocationPin size={22} />
              <p className="truncate w-[120px] md:w-auto">{location}</p>
            </p>
          </div>
        )}
        {redirect_link && (
          <button className="w-full p-2 border rounded-lg mt-2 text-[#E56135] border-neutral-300 hover:bg-[#E56135] hover:text-white">
            Visit Website
          </button>
        )}
        {job_type && (
          <button className="w-full p-2 border rounded-lg mt-2 text-[#02B875] border-neutral-300 hover:bg-[#02B875] hover:text-white">
            Apply on TimesJobs
          </button>
        )}
        <div className="flex pt-4 items-center">
          <p className="mr-2 text-lg font-semibold">
            <Image
              height={1000}
              width={1000}
              className="h-12 mr-2 w-full object-cover object-center rounded-full"
              src={author_image}
              alt="Product Image"
            />
          </p>
          <div className="flex flex-col w-full">
            <p className="font-medium ml-2 text-xl">{author_name}</p>
            <div className="md:ml-auto md:hidden ml-3 text-sm text-neutral-500 md:text-neutral-300 md:mr-6 flex items-center md:gap-2 font-medium">
              <div className="hidden md:block">
                <AiOutlineEye size={25} />
              </div>
              {post_views} views
            </div>
          </div>
          <p className="md:ml-auto hidden md:flex text-base text-neutral-500 mr-6 whitespace-nowrap items-center gap-2 font-medium">
            <AiOutlineEye size={25} />
            {post_views} views
          </p>
          <p className="p-2 rounded-md ml-4 text-base items-center gap-2 flex font-normal bg-slate-200">
            <BiSolidShareAlt size={22} />{" "}
            <span className="block md:hidden text-sm">Share</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="flex-col flex md:flex-row pt-4 md:items-center">
  <div className="flex items-center">
    <p className="mr-2 text-lg font-semibold">
      <Image
        height={1000}
        width={1000}
        className="h-12 mr-2 w-full object-cover object-center rounded-full"
        src={author_image}
        alt="Product Image"
      />
    </p>
    <div className="flex flex-col justify-between w-full items-center">
      <p className="font-medium ml-2 text-xl">{author_name}</p>
      <div className="md:ml-auto text-base text-black md:text-neutral-500 md:mr-6 flex items-center md:gap-2 font-medium">
        <div className="hidden md:block">
          <AiOutlineEye size={25} />
        </div>
        {post_views} views
      </div>
    </div>
  </div>
  <p className="p-2 rounded-md ml-4 text-base font-medium bg-slate-200">
    <BiSolidShareAlt size={25} />
  </p>
</div>; */
}

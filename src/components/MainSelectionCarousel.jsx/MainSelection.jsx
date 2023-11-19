import React, { useEffect, useState } from "react";
import bussinesssmall from "/assets/images/bussinesssmall.png";
import communitybig from "/assets/images/communitybig.png";
import bussinessbig from "/assets/images/bussinessbig.png";
import socialbig from "/assets/images/socialbig.png";
import socialsmall from "/assets/images/socialsmall.png";
import communitysmall from "/assets/images/communitysmall.png";
import communityIcon from "/assets/images/communityIcon.png";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Transition } from "@headlessui/react";

const MainSelection = () => {
  const [centerContent, setCenterContent] = useState({
    title: "Social",
    smallimage: socialsmall,
    bigimage: socialbig,
    to: "/select/events/#main",
    smalldesc:
      "Birthdays, Weddings, Anniversaries, Holidays and Office Parties  ",
    icon: "",
  });
  const [righContent, setRightContent] = useState({
    title: "Bussiness",
    smallimage: bussinesssmall,
    to: "/select/bussiness/#main",
    bigimage: bussinessbig,
    smalldesc:
      "Product Launches, Conferences, Workshops, Networking, and Team Building",
    icon: "",
  });
  const [leftContent, setLeftContent] = useState({
    title: "Community",
    to: "/select/community/#main",
    smallimage: communitysmall,
    bigimage: communitybig,
    smalldesc:
      "Festivals, Fairs, Parades, Farmers Market/popup, and Fundraising Events ",
    icon: "",
  });

  const [scrolled, setScrolled] = useState(true);

  const goToRight = () => {
    setScrolled((scrolled) => !scrolled);
    setTimeout(function () {
      setScrolled((scrolled) => !scrolled);
    }, 180);

    const gateKeeper = centerContent;
    setCenterContent(righContent);
    setRightContent(leftContent);
    setLeftContent(gateKeeper);
  };
  // console.log(scrolled);
  const goToLeft = () => {
    setScrolled((scrolled) => !scrolled);
    setTimeout(function () {
      setScrolled((scrolled) => !scrolled);
    }, 180);

    const gateKeeper = centerContent;
    setCenterContent(leftContent);
    setLeftContent(righContent);
    setRightContent(gateKeeper);
  };
  return (
    <div>
      {/* carousel control arrow starts here */}
      <div className="grid grid-cols-5 md:relative  md:top-[30rem] lg:top-[25rem]">
        <div className="col-span-1 pl-5 pt-5 xl:pl-56 md:pl-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
            onClick={goToLeft}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="col-span-3 text-center">
          <h2 className="font-avenirblack text-xl md:text-white md:text-3xl">
            {centerContent.title} Events
          </h2>
          <p className="font-avenirnormal text-xs md:text-white xl:text-base xl:px-52 md:text-sm md:px-28">
            {centerContent.smalldesc}
          </p>
        </div>
        <div className="col-span-1 pl-5 pt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
            onClick={goToRight}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* carousel arrow ends here */}
      <div className="overflow-hidden lg:-mt-[28rem]">
        <div className="flex justify-between relative top-10  lg:top-72">
          {/* single carousel element */}
          <Link to={leftContent.to} className="">
            <img
              src={leftContent.smallimage}
              alt="Image"
              className="h-[5.813rem] md:h-[19.5rem] md:w-[19.5rem] w-[5.813rem]"
            />
            <p className="text-[10px] font-avenirheavy text-white relative bottom-8 left-6 md:text-2xl md:left-24 md:bottom-24 ">
              {leftContent.title}
            </p>
            <div className="bg-white rounded-full w-[4.5rem] h-[4.5rem] hidden lg:flex justify-center items-center shadow-lg relative bottom-24 left-48">
              <img src={communityIcon} alt="community icon" />
            </div>
          </Link>
          <Link to={righContent.to} className="">
            <img
              src={righContent.smallimage}
              alt="Image"
              className="h-[5.813rem] w-[5.813rem] md:h-[19.5rem] md:w-[19.5rem]"
            />
            <p className="text-[10px] font-avenirheavy text-white relative bottom-8 left-6 md:text-2xl md:left-24 md:bottom-24">
              {righContent.title}
            </p>
            <div className="bg-white rounded-full w-[4.5rem] h-[4.5rem] hidden lg:flex justify-center items-center shadow-lg relative bottom-24 left-5">
              <img src={communityIcon} alt="community icon" />
            </div>
          </Link>
        </div>
        <Transition
          show={scrolled}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Link to={centerContent.to} className="flex justify-center ">
            <img
              src={centerContent.bigimage}
              alt="Image"
              className="lg:w-[40rem] w-[23.625rem] "
            />
          </Link>
        </Transition>
      </div>
    </div>
  );
};

export default MainSelection;

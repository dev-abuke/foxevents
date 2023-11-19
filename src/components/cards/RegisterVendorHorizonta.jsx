import React from "react";
import "./IntroCard.css";

const RegisterVendorHorizonta = ({ data }) => {
  return (
    <div className="flex">
      <div className="box">
        <div className="xl:w-[17rem] lg:w-[12rem] lg:h-[11rem] bg-white left-box xl:h-[14.2rem] rounded-l-2xl flex justify-center items-center ">
          <img
            src={data.image}
            alt="small image"
            className="rounded-xl xl:h-40 lg:h-32 lg:w-40 xl:w-52"
          />
        </div>
      </div>

      {/* <div className="border-dashed border-gray-200 border-r bg-transparent my-7"></div> */}
      <div className="line3"></div>
      <div className="box1">
        <div className="xl:w-[20rem] md:w-[15rem] right-box xl:h-[14.2rem] sm:h-[11rem] bg-white rounded-r-2xl px-4 xl:pt-8 lg:pt-4 lg:pl-4">
          <p className="font-avenirblack text-xl lg:text-sm xl:text-xl">
            {data.mainTitle}
          </p>
          <div className="">
            <p className="font-avenirnormal text-base lg:text-xs lg:mt-2 xl:text-base">
              {data.subTitle}
            </p>
          </div>
          <div className="">
            <p className="font-avenirnormal xl:text-xs xl:mt-2 lg:mt-2 lg:text-[10px]">
              {data.smallDes}
            </p>
          </div>

          <a
            href={data.link}
            target="_blank"
            className="bg-[#FFF952] flex xl:justify-center lg:justify-center xl:space-x-3 lg:space-x-2 xl:py-2 lg:py-1 rounded-full items-center xl:mt-6 lg:mt-2 xl:px-6  lg:w-52 xl:w-64 xl:ml-5"
          >
            <p className="font-avenirheavy lg:text-sm">{data.buttonLabel}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* <div className="bg-blue-900 w-20 shadow-md shadow-black"></div> */}
    </div>
  );
};

export default RegisterVendorHorizonta;

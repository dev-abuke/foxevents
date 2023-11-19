import React from "react";
import "./VerticalSocialCards.css";

const VerticalSocialCards = ({ data }) => {
  return (
    <div className="">
      <div className="box">
        <div className="sm:h-[21.7rem] h-48 sm:w-[17.5rem] w-40 bg-white top-box rounded-t-xl flex justify-center">
          <img
            src={data.image}
            alt="small image"
            className="rounded-2xl sm:h-80 h-44 sm:w-64 w-36 pt-3"
          />
        </div>
      </div>
      <div className="line4"></div>
      {/* the lower box */}
      <div className="box1">
        <div className="h-48 lg:h-52 sm:w-[17.5rem] w-40 bg-white bottom-box rounded-b-2xl flex flex-col items-center pt-2">
          <p className="font-avenirblack sm:text-xl text-xs mt-4 text-center ">
            {data.mainTitle}
          </p>
          <div className="h-5">
            <p className="font-avenirnormal sm:text-base text-[10px] text-center">
              {data.subTitle}
            </p>
          </div>

          <div className="h-14">
            <p className="font-avenirnormal sm:text-xs text-[10px] sm:mt-5 mt-3 text-center sm:w-64 w-40">
              {data.smallDes}
            </p>
          </div>

          <a
            href={data.link}
            target="_blank"
            className="bg-[#FFF952] flex py-2 rounded-full justify-center sm:w-64 sm:mt-4 mt-4 w-36 text-xs"
          >
            <p className="font-avenirheavy text-xs">{data.buttonLabel}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerticalSocialCards;

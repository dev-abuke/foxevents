import React from "react";
import MainSelection from "../components/MainSelectionCarousel.jsx/MainSelection";

const SelectionPage = () => {
  return (
    <div className="">
      <div className="pt-32 text-center">
        <h2 className="font-avenirblack text-4xl">How can we Help?</h2>
        <div>
          <h2 className="text-[#4B5563] text-lg font-avenirblack mt-3">
            Pick Your Choice Of Category 😀
          </h2>
        </div>

        <p className="font-avenirnormal text-base px-4">
          Select your persona and we’ll personalize the web experience just for
          you. What kind of event do you have in mind?
        </p>
        <div className="flex justify-center">
          <a
            href="guide.jpg"
            target="_blank"
            className="flex items-center space-x-3 border border-black rounded-full py-2 px-4 mt-4"
          >
            <p className="font-avenirheavy">Guide Me</p>
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
      <div className="mt-[2.5rem] md:mt-[5rem]">
        <MainSelection />
      </div>
    </div>
  );
};

export default SelectionPage;

import React from "react";
import Map from "./map";

const VisitUs = () => {
  return (
    <div className="bg-[#FFF952] flex flex-col sm:flex-row sm:gap-10 h-80">
      <div className="w-full">
        <h2 className="font-avenirblack text-2xl mt-10 ml-5 lg:ml-28 sm:ml-16">
          Visit our Office!!
        </h2>
        <div className="text-sm font-avenirnormal ml-5 space-y-1 mt-4 sm:ml-16 lg:ml-28">
          <p>Addis Ababa, Ethiopia </p>
          <p>customer.service@foxeventss.com</p>
          <p>+251 967 30 82 44</p>
        </div>
      </div>
      <div className="mt-3 sm:mt-0 w-full">
        <Map />
      </div>
    </div>
  );
};

export default VisitUs;

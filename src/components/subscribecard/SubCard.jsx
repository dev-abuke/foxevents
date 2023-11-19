import React from "react";
import SubscribeForm from "../forms/SubscribeForm";

const SubCard = () => {
  return (
    <div className="bg-[#FFF952] h-[26rem] md:pt-16 pt-8">
      <h2 className="font-avenirblack sm:text-4xl text-2xl text-center">
        What are you waiting for?!
      </h2>
      <div className="flex justify-center w-full">
        <p className="text-center md:mt-8 mt-4 font-avenirnormal text-base w-96">
          Create Amazing Experiences With Us. Send Us a Note and We Will Get
          Back To You!
        </p>
      </div>
      <div className="md:px-28 px-10 lg:mt-14 ">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubCard;

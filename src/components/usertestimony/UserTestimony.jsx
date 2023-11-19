import React from "react";
import AddisPower from "/assets/companyicons/addispower.png";
import awsugn from "/assets/companyicons/awsugn.png";
import adnan from "/assets/companyicons/adnan.png";
import Carousel from "react-elastic-carousel";
import "./carouselstyle.css";
import qoute from "/assets/images/qoute.png";

const breakPoints = [
  { width: 1 },
  { width: 550 },
  { width: 768 },
  { width: 1200 },
];

const UserTestimony = () => {
  return (
    <div className="bg-[#4BD6E4] px-5 md:px-0 pt-11 md:pt-[6rem] md:pl-10 pb-10">
      <div className="">
        <h2 className="font-avenirblack text-3xl md:text-5xl md:w-[35rem]">
          Real Stories from Real Partners
        </h2>
        <p className="font-avenirnormal text-lg mt-2">
          See what companies are saying!
        </p>
      </div>

      {/* carousel item starts here */}
      <div className="md:hidden pb-10 mt-10">
        <Carousel breakPoints={breakPoints} itemsToShow={1}>
          <div>
            <img src={adnan} alt="user headshot" className="h-16" />
            <div className="mt-6">
              <img src={qoute} alt="qoute icon" />
              <p className="font-avenirblack text-lg mt-6 lg:pr-10 sm:pr-0 sm:w-64 lg:w-[26rem]">
                Working with Fox Events has been an absolute pleasure. As a
                company that specializes in events and promotions, we've had the
                opportunity to work with many clients over the years, but Fox
                Events stands out as one of the most delightful. We were
                impressed by their attention to detail and their willingness to
                collaborate with us to ensure that every aspect of the event was
                executed flawlessly. We highly recommend Fox Events to anyone
                looking for a professional and enjoyable event planning
                experience.
              </p>
              <p className="font-avenirblack text-base text-white mt-6">
                Adane Firde
              </p>
              <p className="font-avenirnormal text-xs">Youthopians</p>
            </div>
          </div>
          <div>
            <img src={AddisPower} alt="user headshot" className="h-16" />
            <div className="mt-6">
              <img src={qoute} alt="qoute icon" />
              <p className="font-avenirblack text-lg mt-6 lg:pr-10 sm:pr-0 sm:w-64 lg:w-[26rem]">
                The team's level of professionalism and creativity is spot on.
                We can’t thank these guys enough. We would recommend them
                without hesitation to any organization searching for effective
                event management.'
              </p>
              <p className="font-avenirblack text-base text-white mt-6">
                Hanna Lemma
              </p>
              <p className="font-avenirnormal text-xs">Addis Power House</p>
            </div>
          </div>
          <div>
            <img src={awsugn} alt="user headshot" className="h-16" />
            <div className="mt-6">
              <img src={qoute} alt="qoute icon" />
              <p className="font-avenirblack text-lg mt-6 lg:pr-10 sm:pr-0 sm:w-64 lg:w-[26rem] ">
                I personally got important event insights that were crucial in
                growing our startup. I am sure, we as a startup company, will
                continue to work with FOX events because of their dedication and
                commitment to providing the right platform for startups to
                thrive in.
              </p>
              <p className="font-avenirblack text-base text-white mt-6">
                Amanuel Desalegn
              </p>
              <p className="font-avenirnormal text-xs">AWUSUGN</p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="md:grid md:grid-cols-3 gap-x-10 hidden">
        {/* single card item */}
        <div className="mt-16 md:w-[25rem] col-span-1">
          <img src={AddisPower} alt="user headshot" className="h-16" />
          <div className="mt-6">
            <img src={qoute} alt="qoute icon" />
            <p className="font-avenirblack text-lg mt-6 lg:pr-10 sm:pr-0 sm:w-64 lg:w-[26rem]">
              The team's level of professionalism and creativity is spot on. We
              can’t thank these guys enough. We would recommend them without
              hesitation to any organization searching for effective event
              management.'
            </p>
            <p className="font-avenirblack text-base text-white mt-6">
              Hanna Lemma
            </p>
            <p className="font-avenirnormal text-xs">Addis Power House</p>
          </div>
        </div>

        {/* single card item */}
        <div className="mt-16 md:w-[26rem] col-span-1 hidden md:block">
          <img src={awsugn} alt="user headshot" className="h-16" />
          <div className="mt-6">
            <img src={qoute} alt="qoute icon" />
            <p className="font-avenirblack text-lg mt-6 lg:pr-10 sm:pr-0 sm:w-64 lg:w-[26rem] ">
              I personally got important event insights that were crucial in
              growing our startup. I am sure, we as a startup company, will
              continue to work with FOX events because of their dedication and
              commitment to providing the right platform for startups to thrive
              in.
            </p>
            <p className="font-avenirblack text-base text-white mt-6">
              Amanuel Desalegn
            </p>
            <p className="font-avenirnormal text-xs">AWUSUGN</p>
          </div>
        </div>

        <div className="mt-16 md:w-[26rem] col-span-1 hidden md:block">
          <img src={adnan} alt="user headshot" className="h-16" />
          <div className="mt-6">
            <img src={qoute} alt="qoute icon" />
            <p className="font-avenirblack text-lg mt-6 lg:pr-10 sm:pr-0 sm:w-64 lg:w-[26rem] ">
              Working with Fox Events has been an absolute pleasure. As a
              company that specializes in events and promotions, we've had the
              opportunity to work with many clients over the years, but Fox
              Events stands out as one of the most delightful. We were impressed
              by their attention to detail and their willingness to collaborate
              with us to ensure that every aspect of the event was executed
              flawlessly. We highly recommend Fox Events to anyone looking for a
              professional and enjoyable event planning experience.
            </p>
            <p className="font-avenirblack text-base text-white mt-6">
              Adane Firde
            </p>
            <p className="font-avenirnormal text-xs">Youthopians</p>
          </div>
        </div>

        {/* the third single card item */}
        {/* <div className="mt-0 col-span-1 hidden md:block relative bottom-32 sm:bottom-20 overflow-hidden">
          <div className="">
            <p className="font-avenirblack text-base text-white"></p>
            <p className="font-avenirnormal text-xs"></p>
            <div className="flex gap-x-3 mt-7">
              <img src={qoute} alt="qoute icon" className="h-4" />
              <p className="font-avenirblack text-lg md:w-[26rem]"></p>
            </div>
          </div>
          <div className="mt-10 relative left-20">
            <img
              src={adnan}
              alt="user headshot"
              className="md:h-72 md:w-72 sm:h-52 sm:w-52 rounded-full"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserTestimony;

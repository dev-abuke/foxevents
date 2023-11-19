import React from "react";
import AddisPower from "/assets/companyicons/addispower.png";
import Awaqi from "/assets/companyicons/awaqi.png";
import A from "/assets/companyicons/A+.jpg";
import Cospace from "/assets/companyicons/CoSpace.png";
import awsugn from "/assets/companyicons/awsugn.png";
import omnia from "/assets/companyicons/Omnia.png";
import lssya from "/assets/companyicons/LSSYA.png";
import abro from "/assets/companyicons/abro.png";
import yh from "/assets/companyicons/YH.png";
import idonated from "/assets/companyicons/Idonated.jpg";
import deshet from "/assets/companyicons/Deshet.svg";
import adnan from "/assets/companyicons/adnan.png";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1 },
  { width: 550 },
  { width: 768 },
  { width: 1200 },
];

const CompaniesSmall = () => {
  return (
    <div className="h-81 bg-white md:bg-transparent">
      <h2 className="font-avenirblack text-2xl text-center px-11 pt-14">
        Companies who have worked with us
      </h2>
      <div className="bg-white mt-8 h-[10rem]  pt-4">
        <hr className="hidden md:block md:pt-4 mx-[10%]" />
        <div className="flex flex-wrap items-center gap-5 lg:gap-16 sm:gap-10 lg:mt-7 sm:mt-4 pb-10 px-2 md:px-5 sm:hidden">
          <Carousel breakPoints={breakPoints} itemsToShow={1}>
            <img src={deshet} alt="" className="h-14" />
            <img src={AddisPower} alt="" className="h-14" />
            <img src={Awaqi} alt="" className="h-14" />
            <img src={idonated} alt="" className="h-14" />
            <img src={adnan} alt="" className="h-14" />
            <img src={Cospace} alt="" className="h-32 relative bottom-10" />
            <img src={A} alt="" className="h-20" />
            <img src={awsugn} alt="" className="h-20" />
            <img src={omnia} alt="" className="h-32 relative bottom-8" />
            <img src={lssya} alt="" className="h-20" />
            <img src={abro} alt="" className="h-14" />
            <img src={yh} alt="" className="h-20" />
          </Carousel>
        </div>
        <div className="sm:flex flex-wrap items-center gap-5 lg:gap-16 sm:gap-10 lg:mt-7 sm:mt-4 pb-10 px-2 md:px-5 hidden">
          <Carousel
            breakPoints={breakPoints}
            itemsToShow={4}
            className="flex items-center"
          >
            <img src={deshet} alt="" className="h-14" />
            <img src={AddisPower} alt="" className="h-14" />
            <img src={Awaqi} alt="" className="h-14" />
            <img src={idonated} alt="" className="h-14" />
            <img src={adnan} alt="" className="h-14" />
            <img src={Cospace} alt="" className="h-32 relative bottom-10" />
            <img src={A} alt="" className="h-20" />
            <img src={awsugn} alt="" className="h-20" />
            <img src={omnia} alt="" className="h-32 relative bottom-8" />
            <img src={lssya} alt="" className="h-20" />
            <img src={abro} alt="" className="h-14" />
            <img src={yh} alt="" className="h-20" />
          </Carousel>
        </div>
        <hr className="hidden md:block md:pt-4 mx-[10%] mt-2" />
      </div>
    </div>
  );
};

export default CompaniesSmall;

import React from "react";

const StatusCircles = ({ data }) => {
  return (
    <div className="">
      <div className="relative sm:top-16 sm:pl-28 pl-0 mt-12">
        <div className="h-[104px] w-[104px] rounded-full bg-[#FFF952] absolute" />
        <div className="relative left-8 top-5  sm:w-[30.5rem] w-80">
          <h1 className="sm:text-5xl text-4xl font-avenirblack">
            What Stat Says About US!
          </h1>
          <p className="pt-2 sm:text-lg text-base font-avenirnormal">
            Look at what the numbers have to say about our work! Experience Made
            Easy!
          </p>
        </div>
      </div>
      <div className="grid md:h-[60rem] pb-16 sm:grid-cols-12 overflow-hidden mt-10">
        {/* first circle starts here */}
        <div className="sm:self-center col-span-4">
          <div className="sm:ml-3 sm:w-[29.313rem] sm:h-[29.313rem] w-[18.75rem] h-[18.75rem] bg-[#4BD6E4] flex flex-col sm:pt-[8.063rem] pt-16 ml-0 mt-10 sm:pl-[6.25rem] pl-14 rounded-full">
            <h2 className="font-avenirblack text-black sm:text-9xl text-7xl">
              {data.circle1.number}
            </h2>
            <p className="text-xl font-avenirblack">{data.circle1.headline}</p>
            <p className="text-xs w-56">{data.circle1.sub}</p>
          </div>
          <div className="relative left-16 top-12 h-[104px] w-[104px] bg-[#4BD6E4] rounded-full hidden sm:block" />
        </div>

        {/* second(biggest) circle starts here */}

        <div className="text-black relative md:top-[60%] top-[190%] sm:h-96 sm:w-96 h-[19rem] w-[19rem] bg-[#4BD6E4] rounded-full sm:pl-0 pl-10 sm:pt-[5.875rem] pt-14 col-span-3">
          <h2 className="font-bold  sm:text-8xl text-6xl lg:pl-14">
            {data.circle2.number}
          </h2>
          <p className="sm:text-xl text-base font-avenirblack lg:pl-14">
            {data.circle2.headline}
          </p>
          <p className="text-base font-avenirblack lg:pl-14">
            {data.circle2.subheadline}
          </p>
          <p className="font-avenirnormal text-xs sm:text-xs sm:w-80 lg:pl-14">
            {data.circle2.sub}
          </p>
        </div>

        {/* final circle starts here */}
        <div className="col-span-5">
          <div className="relative left-72 sm:left-0 bottom-56 sm:bottom-0 sm:top-72 h-[104px] w-[104px] md:w-40 md:h-40 bg-[#FFF952] rounded-full" />
          <div className="sm:w-[43.43rem] sm:h-[43.43rem] w-96 h-96 bg-[#4BD6E4] flex flex-col md:pl-[6rem] pl-16 pt-20 rounded-full relative bottom-[18rem] sm:bottom-0 left-[15%]">
            <div className="sm:h-[9.5rem] hidden sm:block sm:w-[9.5rem] rounded-full bg-[#4BD6E4] relative  top-[26%] right-[50%] -z-50" />
            <div className="lg:space-y-10">
              <h2 className="font-avenirblack text-black md:text-[6rem] text-4xl">
                {data.circle3.number}
              </h2>
              <h2 className="font-avenirblack text-black md:text-[5rem] text-4xl">
                {data.circle3.headline}
              </h2>
              <div>
                <p className="text-sm w-[15rem] lg:w-[20rem] font-avenirnormal">
                  {data.circle3.sub}
                </p>
              </div>
            </div>
          </div>
          <div className="relative bottom-[60%] h-20 w-20 bg-[#FFF952] rounded-full sm:hidden right-8" />
          <div className="sm:pl-[11rem] pl-5 mt-16 lg:mt-4  space-y-2">
            <h2 className="text-xl font-bold">Made for you</h2>
            <p className="w-80">
              It’s all about your experience and creating your most memorable
              experiences
            </p>
          </div>
        </div>
        <div className="relative left-80 bottom-16 h-[104px] w-[104px] bg-[#4BD6E4] rounded-full sm:hidden" />
      </div>
    </div>
  );
};

export default StatusCircles;

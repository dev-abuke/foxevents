import React from "react";
import rahel from "/assets/images/rahel.png";
import nati from "/assets/images/nati.jpg";
import dagi from "/assets/images/dagmawi.png";
import yanet from "/assets/images/yanet.jpg";
import foxyellow from "/assets/images/logoasprofileyello.jpg";
import foxblue from "/assets/images/foxblue.png";

import SubCard from "../components/subscribecard/SubCard";
// import StatusCircles from "../components/statuscircles/StatusCircles";

const AboutUsPage = () => {
  const team = [
    {
      name: " Rahel W/selasssie",
      title: "Founder / CEO",
      img: rahel,
    },
    {
      name: "Natnael Demelash",
      title: "Software Developer",
      img: nati,
    },
    {
      name: "Dagmawi Meshesha",
      title: "Graphic Designer",
      img: dagi,
    },
    { name: "Yanet Samson", title: "Customer Service Intern", img: yanet },
    {
      name: "Mekdes Amare",
      title: "Strategic Advisor",
      img: foxyellow,
    },
    {
      name: "Rekik Dereje",
      title: "Digital Marketing Intern",
      img: foxyellow,
    },

    {
      name: "Tsion Mamo",
      title: "Digital Marketing Intern",
      img: foxyellow,
    },
  ];
  return (
    <div className="bg-[#F9FAFB] pt-10">
      {/* <div className="bg-aboutusmain h-[27rem] bg-no-repeat bg-center bg-cover text-white font-avenirblack flex flex-col pt-72 pl-5 lg:pl-28 sm:pl-16  md:pt-48">
        <h2 className="sm:text-5xl text-3xl">Greetings from</h2>
        <h2 className="md:text-7xl sm:text-5xl text-4xl">Fox events & Media</h2>
      </div> */}
      <div className="md:pl-28 pl-2 py-20 space-y-10 bg-[#F9FAFB]">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img src={foxblue} alt="fox logo" className="h-20" />
          </div>
          <div className="col-span-7 space-y-3">
            <p className="font-avenirblack text-2xl">WE are FOX</p>
            <p className="font-avenirnormal text-sm text-[#4B5563]">
              We are F.o.x events, and the initials F.O.X, stand for Fun,
              Original, and Xperience. We are a full-service, professional
              event-management company specializing in authentic event
              experiences.
            </p>
            <p className="font-avenirnormal text-sm pt-3 text-[#4B5563]">
              We are introducing the country's first vendor booking e-commerce
              platform for events. In event planning, vendor booking is an
              extremely important factor that can make or break the success of
              an event. It requires careful planning and coordination with
              multiple vendors to ensure that all aspects of the event come
              together smoothly.
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img src={foxblue} alt="fox logo" className="h-20" />
          </div>
          <div className="col-span-7 space-y-3">
            <p className="font-avenirblack text-2xl">How does it work?</p>
            <p className="font-avenirnormal text-sm text-[#4B5563]">
              With Fox, users can hire vendors in the following 5 categories:
              venues, DJ/Band, photographer/video, caterer and equipment rental,
              and decor services. In accordance with our criteria, we have
              currently onboarded 100 vendors in mentioned categories. In order
              to verify the service delivery, we checked experiences, referrals
              online evaluations, and referrals when identifying suitable
              providers. As soon as we have a list of potential vendors, we
              examine and assess each one's capabilities for delivering the
              requested service.
            </p>
            <p className="font-avenirnormal text-sm pt-3 text-[#4B5563]">
              A consumer will have the opportunity to book one or more vendors
              based on the chosen event type and the budget set out, and our
              company will take over the process of contracting with various
              vendors to offer the requested services that guarantee the success
              of the event.
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img src={foxblue} alt="fox logo" className="h-20" />
          </div>
          <div className="col-span-7 space-y-3">
            <p className="font-avenirblack text-2xl">What are we offering</p>
            <p className="font-avenirnormal text-sm text-[#4B5563]">
              We provide a vendor matching process so users can access
              information and pick from a wide range of vendors in the mentioned
              categories above at a reasonable rate, with the best alternatives,
              and with the least amount of hassle.
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-28 bg-[#F9FAFB] px-5">
        <p className="font-avenirblack text-2xl">MEET THE TEAM</p>
        <div className="sm:grid sm:grid-cols-4 flex flex-col items-center">
          {team.map((team) => (
            <div className="sm:col-span-1 mt-12" key={team}>
              <div className="flex justify-center">
                <img
                  src={team.img}
                  alt="profile"
                  className="h-40 rounded-full"
                />
              </div>
              <div className="text-center mt-5">
                <p className="font-avenirheavy text-base">{team.name}</p>
                <p className="font-avenirnormal text-sm">{team.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <StatusCircles /> */}
      <div className="pt-32">
        <SubCard />
      </div>
    </div>
  );
};

export default AboutUsPage;

import React from "react";
import VerticalSocialCards from "../components/cards/VerticalSocialCards";
import IntroCard from "../components/cards/IntroCard";
import StatusCircles from "../components/statuscircles/StatusCircles";
import CompaniesSmall from "../components/companies/CompaniesSmall";
import UserTestimony from "../components/usertestimony/UserTestimony";
import four from "/assets/cardpics/1-04.jpg";
import five from "/assets/cardpics/1-05.jpg";

const CommunityPage = () => {
  const card1 = {
    mainTitle: "Community Events",
    subTitle: "Lets CoCreate Memories!",
    smallDes: "To create your event, simply click and complete the form below.",
    buttonLabel: "Fill A Form",
    link: "https://q6ghzksk9ht.typeform.com/to/rVj2i2HP",
    image: four,
  };
  const card2 = {
    mainTitle: "Do you have Questions?",
    subTitle: "Feel free to ask, we’re ready to help.",
    smallDes: " ",
    buttonLabel: "Get In Touch",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdFe6p3xiqcCnQWtTIt53yR0W2JMOWwOKPbrtExbX0-yehhjQ/viewform",
    image: five,
  };
  const data = {
    circle1: {
      number: "10+",
      headline: "Engaging Event Experiences",
      sub: "We take full responsibility for ensuring that every event is executed professionally from start to finish.",
    },
    circle2: {
      number: "8766",
      headline: "Hours",
      subheadline: "Event planning and organization",
      sub: "We are here to organize, coordinate, and design the event while making sure of the details.",
    },
    circle3: {
      number: "100+",
      headline: "Vendors",
      sub: "We have onboarded 100 vendors in categories of (venues, DJ/Band, photographer/video, caterer and equipment rental, and decor services.), taking into account their experiences, online evaluations, and referrals to ensure the highest quality service delivery.",
    },
  };

  return (
    <div>
      <div className="bg-[#F9FAFB] pt-32" id="main">
        {/* <div className="bg-communitymain bg-no-repeat bg-cover bg-center lg:h-[50.625rem] h-[42.625rem]"></div> */}
        <header>
          <div className="flex sm:space-x-32 space-x-5 lg:hidden justify-center">
            <div>
              <VerticalSocialCards data={card1} />
            </div>
            <div>
              <VerticalSocialCards data={card2} />
            </div>
          </div>
          <div className="lg:flex justify-center lg:gap-10 gap-5 md:px-20 hidden relative bottom-8">
            <div>
              <IntroCard data={card1} />
            </div>
            <div>
              <IntroCard data={card2} />
            </div>
          </div>
        </header>

        {/* status circes start here */}
        <div>
          <StatusCircles data={data} />
        </div>
        {/* companies section is added here */}
        <div>
          <CompaniesSmall />
        </div>
        {/* Users testimony goes here */}
        <div>
          <UserTestimony />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

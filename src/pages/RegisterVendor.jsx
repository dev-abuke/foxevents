import React from "react";
import VerticalSocialCards from "../components/cards/VerticalSocialCards";
import StatusCirclesYello from "../components/statuscircles/StatusCirclesYello";
import CompaniesSmall from "../components/companies/CompaniesSmall";
import UserTestimonyYello from "../components/usertestimony/UserTestimonyYello";
import RegisterVendorHorizonta from "../components/cards/RegisterVendorHorizonta";
import three from "/assets/cardpics/1-03.jpg";
import eight from "/assets/cardpics/1-08.jpg";

const RegisterVendor = () => {
  const card1 = {
    mainTitle: "Signup and work with us!",
    subTitle: "Let’s create great experiences.",
    smallDes:
      "Do you have a business in this category (venues, DJ/Band, photographer/video, caterer and equipment rental, and decor services) Join Us!",
    buttonLabel: "REGISTER AS A VENDOR",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdFe6p3xiqcCnQWtTIt53yR0W2JMOWwOKPbrtExbX0-yehhjQ/viewform",
    image: three,
  };
  const card2 = {
    mainTitle: "Do you have questions?",
    subTitle: "Feel free to ask, we’re ready to help!",
    smallDes:
      "With FOX, you can now promote your company and offer direct service to your customer. Join 100 vendors and earn extra money.",
    buttonLabel: "GET IN TOUCH",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyiLe1oQ-M-8zM1zjmyzhU8p4dGHuuH0Uh3rolWCu5L7zt4g/viewform",
    image: eight,
  };
  const circles = {
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
    <div className="bg-[#F9FAFB] pt-32">
      {/* <div className="bg-registervendormain bg-no-repeat bg-cover bg-center lg:h-[50.625rem] h-[42.625rem]"></div> */}
      {/* the ticket cards start here */}
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
            <RegisterVendorHorizonta data={card1} />
          </div>
          <div>
            <RegisterVendorHorizonta data={card2} />
          </div>
        </div>
      </header>

      {/* status circes start here */}
      <div>
        <StatusCirclesYello data={circles} />
      </div>
      {/* companies section is added here */}
      <div>
        <CompaniesSmall />
      </div>
      {/* Users testimony goes here */}
      <div>
        <UserTestimonyYello />
      </div>
    </div>
  );
};

export default RegisterVendor;

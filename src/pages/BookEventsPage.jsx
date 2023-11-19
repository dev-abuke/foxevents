import React from "react";
import StatusCirclesYello from "../components/statuscircles/StatusCirclesYello";
import CompaniesSmall from "../components/companies/CompaniesSmall";
import UserTestimonyYello from "../components/usertestimony/UserTestimonyYello";
import PackageCards from "../components/cards/PackageCards";
import two from "/assets/cardpics/pngcards-04.png";
import one from "/assets/cardpics/product.png";
import eight from "/assets/cardpics/birthday.png";
import three from "/assets/cardpics/question.png";

const BookEventsPage = () => {
  const data = [
    {
      mainTitle: "Easter Package Special offer ",

      smallDes:
        "Our special holiday offer is here, contact us today to learn more about our all-inclusive package and start planning your experience!",
      buttonLabel: "BOOK A PACKAGE",

      image: two,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSce6BYQ_LDnxJLlT5Vw6Su3XDvtoaPi18WcDgDed2GIY7BlRw/viewform",
    },
    {
      mainTitle: "Product Launch ",

      smallDes:
        "Congratulation on your product launch, contact us today to learn more about our all-inclusive package and start planning your experience!",
      buttonLabel: "BOOK A PACKAGE",

      image: one,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSce6BYQ_LDnxJLlT5Vw6Su3XDvtoaPi18WcDgDed2GIY7BlRw/viewform",
    },
    {
      mainTitle: "Birthday Package  ",
      smallDes:
        "Contact us today to learn more about our all-inclusive package and start planning your experience!",
      buttonLabel: "BOOK A PACKAGE",

      image: eight,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSce6BYQ_LDnxJLlT5Vw6Su3XDvtoaPi18WcDgDed2GIY7BlRw/viewform",
    },
    {
      mainTitle: "Having Questions?",

      smallDes: "Feel free to reach out to us.",
      buttonLabel: "CONTACT US",

      image: three,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdFe6p3xiqcCnQWtTIt53yR0W2JMOWwOKPbrtExbX0-yehhjQ/viewform",
    },
  ];
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
    <div>
      <div className="bg-[#F9FAFB] pt-24" id="main">
        {/* <div className="bg-registervendormain bg-no-repeat bg-cover bg-center lg:h-[50.625rem] h-[42.625rem]"></div> */}
        {/* the ticket cards start here */}
        <header className="flex sm:space-x-8 space-x-5 sm:justify-center pl-2 overflow-x-scroll xl:overflow-hidden pb-10">
          {data.map((t) => (
            <div key={t}>
              <PackageCards data={t} />
            </div>
          ))}
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
    </div>
  );
};

export default BookEventsPage;

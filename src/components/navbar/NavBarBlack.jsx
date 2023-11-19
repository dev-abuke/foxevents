import React from "react";
import Logo from "/assets/Logo.png";
import { Link } from "react-router-dom";

const NavBarBlack = () => {
  return (
    <div className="absolute w-full border-b pb-3 sm:border-b-0">
      <div className="flex justify-between mt-6 bg-transparent text-black">
        <div className="lg:ml-28 sm:ml-16 ml-5 ">
          <Link to="/">
            <img src={Logo} alt="main-logo" className="md:h-10 h-8" />
          </Link>
        </div>
        <div className="sm:flex hidden items-center space-x-5 lg:mr-28 sm:mr-16">
          <ul className="flex items-center space-x-5 text-sm font-avenirnormal">
            <Link to="/about">
              <li>ABOUT US</li>
            </Link>
            <Link to="/contact">
              <li>CONTACT US</li>
            </Link>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFe6p3xiqcCnQWtTIt53yR0W2JMOWwOKPbrtExbX0-yehhjQ/viewform"
            target="_blank"
            className="border border-black px-4 py-2 rounded-full text-sm"
          >
            GET IN TOUCH
          </a>
        </div>
        <div className="sm:hidden mr-5 flex items-center space-x-3">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFe6p3xiqcCnQWtTIt53yR0W2JMOWwOKPbrtExbX0-yehhjQ/viewform"
            target="_blank"
            className="text-xs font-avenirheavy text-[#E5AF22]"
          >
            GET IN TOUCH
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#E5AF22]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBarBlack;

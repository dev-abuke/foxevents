import emoji from "/assets/images/emoji.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-landing h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center sm:pt-72 pt-60">
      <div className="text-white text-center">
        <p className="font-avenirnormal sm:text-3xl text-2xl">F.O.X Events</p>
        <div className="sm:flex items-center justify-center space-x-3 mt-5 hidden">
          <h1 className="font-avenirblack text-5xl">Fun Original Experience</h1>
          <img src={emoji} alt="emoji" className="h-12 sm:block" />
        </div>
        <div className=" mt-3 sm:hidden block">
          <div className="flex items-center justify-center">
            <h1 className="font-avenirblack text-5xl">Fun</h1>
            <div className="h-2 w-14 bg-white"></div>
            <p className="font-avenirblack text-5xl">Original</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <p className="font-avenirblack text-5xl">Experience</p>
            <img src={emoji} alt="emoji" className="h-9 sm:block" />
          </div>
        </div>
        <p className="font-avenirnormal sm:text-lg text-sm mt-3 mx-2 md:px-52 tracking-wide">
          Greetings And Welcome To Fox Events Vendor Booking Platform!
        </p>
      </div>
      <div className="sm:space-x-8 sm:space-y-0 mt-8 sm:flex-row text-xs space-x-4">
        <Link
          to="/select"
          className="bg-[#FFF952] py-3 sm:px-6 px-4 rounded-full font-avenirheavy"
        >
          <span>BOOK A VENDOR</span>
        </Link>
        <Link
          to="/register"
          className="bg-[#FFF952] py-3 sm:px-5 px-4 rounded-full font-avenirheavy"
        >
          <span>REGISTER AS VENDOR</span>
        </Link>
      </div>
      <div className="mt-40 flex space-x-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#595959]"></div>
        <div className="w-7 rounded-full h-2.5 bg-white"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#595959]"></div>
      </div>
    </div>
  );
};

export default LandingPage;

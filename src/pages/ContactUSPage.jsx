import React from "react";
import ContactUsForm from "../components/forms/ContactUsForm";
import VisitUs from "../components/visitus/VisitUs";

const ContactUSPage = () => {
  return (
    <div className="bg-[#F9FAFB] pt-10">
      {/* <div className="bg-contactusmain h-[27rem] bg-no-repeat bg-center bg-cover text-white font-avenirblack flex flex-col pt-72 pl-5 lg:pl-28 sm:pl-16  md:pt-48">
        <h2 className="sm:text-7xl text-5xl ">Contact Us</h2>
        <p className="font-avenirnormal md:w-[43.2rem] w-auto md:text-lg text-base">
          If you get incredibly excited about having a fun and original
          experience, we’re just a click away, 7 days a week, 9am–6pm.
        </p>
      </div> */}
      <ContactUsForm />
      <div className="mt-16">
        <VisitUs />
      </div>
    </div>
  );
};

export default ContactUSPage;

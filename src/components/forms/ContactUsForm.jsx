import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    company: "",
    phonenumber: "",
    location: "",
    howtheyheard: "",
    message: "",
  });

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vopk55e",
        "template_b6v1pei",
        form.current,
        "IwSusaS3DP9JFml2C"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("We have recieved you message");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInputValue({
      name: "",
      email: "",
      company: "",
      phonenumber: "",
      location: "",
      howtheyheard: "",
      message: "",
    });
  };
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="lg:px-28 sm:px-16 px-5 sm:mt-20 mt-10">
      <p className="font-avenirblack text-2xl">Let's have a talk!</p>
      <form action="" className="mt-5" ref={form} onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-3 w-auto xl:w-[63rem]">
          <input
            type="text"
            name="name"
            className="col-span-1 bg-[#F3F4F6] h-14  rounded-full pl-5 placeholder:font-avenirmedium placeholder:text-[#1F2937]"
            placeholder="Full Name*"
            value={inputValue.name}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="company"
            className="col-span-1 bg-[#F3F4F6] h-14  rounded-full pl-5 placeholder:font-avenirmedium placeholder:text-[#1F2937]"
            placeholder="Company or Organization"
            value={inputValue.company}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            className="col-span-1 bg-[#F3F4F6] h-14  rounded-full pl-5 placeholder:font-avenirmedium placeholder:text-[#1F2937]"
            placeholder="Email*"
            value={inputValue.email}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="phonenumber"
            className="col-span-1 bg-[#F3F4F6] h-14  rounded-full pl-5 placeholder:font-avenirmedium placeholder:text-[#1F2937]"
            placeholder="Phone Number*"
            value={inputValue.phonenumber}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="location"
            className="col-span-1 bg-[#F3F4F6] h-14  rounded-full pl-5 placeholder:font-avenirmedium placeholder:text-[#1F2937]"
            placeholder="Location"
            value={inputValue.location}
            onChange={onChange}
            required
          />
          <select
            name="howtheyheard"
            className="col-span-1 bg-[#F3F4F6] h-14 pl-5 rounded-3xl placeholder:font-avenirmedium placeholder:text-[#1F2937]"
            placeholder=" How did you hear about us?"
          >
            <option value="" disabled selected hidden>
              How did you hear about us?
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Digital Media">Digital Media</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            type="text"
            name="message"
            value={inputValue.message}
            onChange={onChange}
            className="col-span-2 bg-[#F3F4F6] h-40 rounded-3xl placeholder:font-avenirmedium placeholder:text-[#1F2937] pt-5 pl-5"
            placeholder="Please tell us about the event, timeline and budget"
          />
        </div>
        <div className="pt-8">
          <button
            type="submit"
            className="bg-[#FFF952] flex space-x-3 py-2 rounded-full items-center mt-7 px-10"
          >
            <p className="font-avenirheavy">Submit</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </form>
      <hr className="mt-16 h-10" />
    </div>
  );
};

export default ContactUsForm;

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SubscribeForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
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
          alert("We have recieved you email");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInputValue({
      name: "",
      email: "",
    });
  };
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        ref={form}
        className="grid lg:grid-cols-4 grid-rows-4 lg:space-x-5 space-y-2"
      >
        <p className="font-avenirblack 2xl:text-2xl text-xl py-2 lg:col-span-1 md:row-span-1 text-center">
          Let’s Talk Business!
        </p>
        <input
          type="text"
          name="name"
          placeholder="Company’s Name*"
          className="bg-[#F3F4F6] h-12 rounded-full placeholder:pl-5  placeholder:text-sm placeholder:font-avenirmedium lg:col-span-1 md:row-span-1"
          required
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Register your email address*"
          className="bg-[#F3F4F6] h-12 rounded-full placeholder:pl-5   placeholder:text-sm placeholder:font-avenirmedium lg:col-span-1 md:row-span-1"
          required
          onChange={onChange}
        />
        <button
          type="submit"
          className="font-avenirheavy h-12 placeholder:pl-5  text-white bg-[#062941] rounded-full lg:col-span-1 md:row-span-1"
        >
          REGISTER TO OUR LIST
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;

// import me from "../../assets/images/comingsoonhome";
import logo from "/assets/Logo.png";
import { getRemainingTimeUntilMsTimestamp } from "./CountDown";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const ComingHome = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
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
          alert("We have recieved you mail");
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="md:bg-comoingsoonback bg-comingmobile h-screen bg-no-repeat bg-cover bg-center pl-5 lg:pl-10 xl:pl-24">
      <div className="pt-8 flex space-x-7 xl:space-x-96 md:space-x-32 lg:space-x-60 items-center">
        <img src={logo} alt="Logo" className="h-6 md:h-10" />
        <h1 className=" text-sm md:text-4xl font-avenirheavy text-[#0A4063]">
          <span className="bg-[#FFC10D] lg:px-4 lg:py-1 px-2 py-0.5 rounded-full">
            Experiences
          </span>{" "}
          Made Easy
        </h1>
      </div>
      <div className="text-[#0A4063] font-avenirblack lg:font-avenirheavy mt-36 md:mt-60 xl:mt-80">
        <div className="block md:flex gap-3">
          <p className="text-5xl md:text-8xl">Get</p>
          <p className="text-7xl md:text-8xl">Ready...</p>
        </div>
        <div>
          <p className="font-avenirmedium w-72 md:w-auto">
            Our Website is under construction get{" "}
            <span className="bg-[#FFC10D] rounded-full">notified</span> when we
            launch, <span className="font-avenirblack">Subscribe!</span>
          </p>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={onSubmit}
        className="flex flex-col md:flex-row gap-3.5 mt-6"
      >
        <input
          type="text"
          className="bg-transparent border border-[#0A4063] w-44 pl-3 p-2 rounded-full placeholder:text-[#0A4063] placeholder:text-opacity-60"
          placeholder="Name"
          name="name"
          onChange={onChange}
          value={inputValue.name}
          required
        />
        <input
          type="email"
          className="bg-transparent border border-[#0A4063] w-44 pl-3 p-2 rounded-full placeholder:text-[#0A4063] placeholder:text-opacity-60"
          placeholder="Enter email address"
          name="email"
          onChange={onChange}
          value={inputValue.email}
          required
        />
        <button
          type="submit"
          className="bg-[#0A4063] text-[#FFC10D] font-avenirblack w-44 py-2 rounded-full text-base"
        >
          GET UPDATES
        </button>
      </form>
      <div className="mt-7">
        <ul className="flex space-x-3 text-sm text-[#0A4063]">
          <li className="md:text-center text-start">
            <p className="md:text-5xl">{remainingTime.days}</p>
            <span className="font-avenirheavy text-xs">Days</span>
          </li>
          <li className="text-center">
            <p className="md:text-5xl">{remainingTime.hours}</p>
            <span className="font-avenirheavy text-xs">Hours</span>
          </li>
          <li className="text-center">
            <p className="md:text-5xl"> {remainingTime.minutes}</p>
            <span className="font-avenirheavy text-xs">minutes</span>
          </li>
          <li className="text-center">
            <p className="md:text-5xl">{remainingTime.seconds}</p>
            <span className="font-avenirheavy text-xs">Seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingHome;

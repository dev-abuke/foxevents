import Insta from "/assets/socialmediaicons/insta.png";
import facebook from "/assets/socialmediaicons/facebook.png";
import LinkedIn from "/assets/socialmediaicons/linckedin.png";
import Twitter from "/assets/socialmediaicons/twitter.png";
import Youtube from "/assets/socialmediaicons/youtube.png";
import Telegram from "/assets/socialmediaicons/telegram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black h-48 sm:h-40 flex flex-col">
      <div className="text-white flex flex-col mt-5 pl-5 space-y-4 sm:hidden">
        <ul className="text-base font-avenirnormal">
          <Link to="/about">
            <li>About us</li>
          </Link>

          <Link to="/contact">
            <li>Contacat us</li>
          </Link>
        </ul>
        <ul className="text-base font-avenirnormal">
          <li>+251 967 30 82 44</li>

          <li>customer.service@foxeventss.com</li>
        </ul>
      </div>
      <div className="flex sm:justify-between items-center mt-5 gap-x-5 ml-5 lg:mr-28 sm:mr-16">
        <div className="text-white font-avenirmedium lg:ml-28 sm:ml-16 ml-5 hidden md:block text-sm">
          <p>Contact us</p>
          <p>Addis Ababa, Ethiopia </p>
          <p>Haya-Hulet, Tigat Building, 2nd Floor</p>
          <p>customer.service@foxeventss.com</p>
          <p>+251 967 30 82 44</p>
        </div>
        <p className="text-white sm:text-sm text-xs font-avenirnormal">
          © 2023 Fox Events and Media
        </p>
        <ul className="flex space-x-3">
          <li className="flex justify-center items-center">
            <a href="https://www.instagram.com/fox_events_/" target="_blank">
              <img src={Insta} alt="Instagram" className="sm:h-6 h-4" />
            </a>
          </li>
          <li className=" flex justify-center items-center">
            <a
              href="https://www.facebook.com/F_o_x_E_v_e_n_t_s-105288225234966"
              target="_blank"
            >
              <img src={facebook} alt="Instagram" className="sm:h-6 h-4" />
            </a>
          </li>
          <li className=" flex justify-center items-center">
            <a href="https://twitter.com/F_o_x_E_v_e_n_t" target="_blank">
              <img src={Twitter} alt="Instagram" className="sm:h-6 h-4" />
            </a>
          </li>
          <li className=" flex justify-center items-center">
            <a
              href="https://www.youtube.com/channel/UCLvUFM9dGzcgNAfDDpOovSA"
              target="_blank"
            >
              <img src={Youtube} alt="Instagram" className="sm:h-6 h-4" />
            </a>
          </li>
          <li className=" flex justify-center items-center">
            <a
              href="https://www.linkedin.com/company/fox-eventss/"
              target="_blank"
            >
              <img src={LinkedIn} alt="Instagram" className="sm:h-6 h-4" />
            </a>
          </li>
          <li className=" flex justify-center items-center">
            <a href="https://t.me/fox_events" target="_blank">
              <img src={Telegram} alt="Instagram" className="sm:h-6 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

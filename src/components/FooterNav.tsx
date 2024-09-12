import { BiPhone } from "react-icons/bi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <>
      <div className="footer-section grid gap-5 bg-gray-700 p-5">
        <nav className="grid grid-flow-col items-center">
          <div>
            <img src="/img/logo3.png" alt="" className="w-[250px]" />
          </div>
          <div>
            <ul className="grid grid-flow-col text-gray-300">
              <li className="rounded-full px-4 py-2 transition-all hover:font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="rounded-full px-4 py-2 transition-all hover:font-bold">
                <Link to="/services">Services</Link>
              </li>
              <li className="rounded-full px-4 py-2 transition-all hover:font-bold">
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="grid grid-cols-2 border-t-2 border-t-gray-600 px-3 py-4">
          <div className="flex gap-3 text-base text-gray-200">
            <Link
              to="/"
              className="rounded-full bg-gray-600 p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="/"
              className="rounded-full bg-gray-600 p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <BsTwitterX />
            </Link>
            <Link
              to="/"
              className="rounded-full bg-gray-600 p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <RiInstagramFill />
            </Link>
            <Link
              to="/"
              className="rounded-full bg-gray-600 p-2 hover:bg-gray-200 hover:text-gray-700"
            >
              <BsYoutube />
            </Link>
          </div>
          <div className="text-ye flex place-content-end gap-5 text-[0.8em] text-gray-200">
            <div className="flex items-center gap-1">
              <SlLocationPin className="text-base text-green-600" />
              243 Clark Avenue - Bagumbayan Quezon City, PH 1105
            </div>
            <div className="flex items-center gap-1">
              <BiPhone className="text-sm text-green-800" /> (02)995995
            </div>
            <div className="flex items-center gap-1">
              <FiClock className="text-sm text-green-800" /> 9:00 AM - 6:00 PM
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default FooterNav;

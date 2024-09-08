import { BiPhone } from "react-icons/bi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="grid grid-cols-2 border-b-2 px-3 py-4">
          <div className="flex gap-3 text-xs text-gray-500">
            <Link
              to="/"
              className="rounded-full bg-gray-100 p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="/"
              className="rounded-full bg-gray-100 p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <BsTwitterX />
            </Link>
            <Link
              to="/"
              className="rounded-full bg-gray-100 p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <RiInstagramFill />
            </Link>
            <Link
              to="/"
              className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 hover:text-gray-700"
            >
              <BsYoutube />
            </Link>
          </div>
          <div className="flex place-content-end gap-5 text-[0.74em]">
            <div className="flex items-center gap-1">
              <SlLocationPin className="text-sm text-green-800" />
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
        <nav className="grid grid-cols-3 items-center py-4">
          <div className="flex gap-2">
            <img src="/img/logo3.png" alt="" className="w-[250px]" />
          </div>
          <div className="items-center text-[0.95em]">
            <ul className="flex flex-row gap-8">
              <li className="rounded-full px-4 py-2 transition-all hover:bg-slate-100">
                <Link to="/">Home</Link>
              </li>
              <li className="rounded-full px-4 py-2 transition-all hover:bg-slate-100">
                <Link to="/services">Services</Link>
              </li>
              <li className="rounded-full px-4 py-2 transition-all hover:bg-slate-100">
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
          <div className="grid justify-end">
            <button className="rounded-lg bg-green-700 px-5 py-4 text-sm text-white transition-all hover:bg-green-600">
              Book Appointment
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

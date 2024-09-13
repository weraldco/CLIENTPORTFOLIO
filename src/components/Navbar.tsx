import { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenuOn = () => {
    setIsMenu(!isMenu);
  };
  console.log(isMenu);
  return (
    <>
      <header className="">
        <nav className="grid grid-flow-row border-b-2 px-3 py-4 md:grid-cols-2">
          <div className="flex place-content-center gap-3 text-xs text-gray-500 md:place-content-start">
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
          <div className="grid gap-5 text-[0.74em] md:grid-flow-col md:place-content-end">
            <div className="flex items-center justify-center gap-1 md:justify-normal">
              <SlLocationPin className="text-sm text-green-800" />
              243 Clark Avenue - Bagumbayan Quezon City, PH 1105
            </div>
            <div className="flex items-center justify-center gap-1 md:justify-normal">
              <BiPhone className="text-sm text-green-800" /> (02)995995
            </div>
            <div className="flex items-center justify-center gap-1 md:justify-normal">
              <FiClock className="text-sm text-green-800" /> 9:00 AM - 6:00 PM
            </div>
          </div>
        </nav>
        <nav className="relative grid grid-flow-col items-center px-2 py-3 md:grid-cols-3">
          {/* Logo */}
          <div className="flex gap-2">
            <img src="/img/logo4.png" alt="" className="w-[250px]" />
          </div>

          {/* Menu */}
          <div className="navbar-menu fixed top-[260px] z-50 hidden w-full items-center bg-white py-10 text-center text-[0.95em] duration-300 ease-in-out md:static md:block md:translate-x-[0]">
            <ul className="bottom-0 top-10 grid gap-8 md:grid-flow-col">
              <li className="rounded-none px-4 py-2 transition-all hover:bg-slate-100 md:rounded-full">
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
            <button className="hidden rounded-lg bg-green-700 px-5 py-4 text-sm text-white transition-all hover:bg-green-600 md:block">
              Book Appointment
            </button>
            {isMenu ? (
              <IoClose
                size={40}
                onClick={handleMenuOn}
                className="block cursor-pointer md:hidden"
              />
            ) : (
              <IoMenu
                size={40}
                onClick={handleMenuOn}
                className="block cursor-pointer md:hidden"
              />
            )}
          </div>
        </nav>
        {isMenu && (
          <nav className="flex items-center justify-center py-10">
            <ul className="grid w-full">
              <li
                className="rounded-none px-4 py-6 transition-all hover:bg-slate-200 md:rounded-full"
                onClick={handleMenuOn}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className="rounded-none px-4 py-6 transition-all hover:bg-slate-200 md:rounded-full"
                onClick={handleMenuOn}
              >
                <Link to="/services">Services</Link>
              </li>
              <li
                className="rounded-none px-4 py-6 transition-all hover:bg-slate-200 md:rounded-full"
                onClick={handleMenuOn}
              >
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;

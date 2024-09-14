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
      <div className="grid lg:place-content-center">
        <header className="w-full bg-white xl:w-[1280px]">
          <nav className="grid grid-flow-row border-b-2 px-3 py-2 lg:grid-cols-2">
            <div className="flex place-content-center gap-3 text-xs text-gray-500 lg:place-content-start">
              <SocialBtn>
                <FaFacebookF />
              </SocialBtn>
              <SocialBtn>
                <BsTwitterX />
              </SocialBtn>
              <SocialBtn>
                <RiInstagramFill />
              </SocialBtn>
              <SocialBtn>
                <BsYoutube />
              </SocialBtn>
            </div>
            <div className="grid gap-5 text-[0.74em] lg:grid-flow-col lg:place-content-end">
              <div className="flex items-center justify-center gap-1 lg:justify-normal">
                <SlLocationPin className="text-sm text-[#00715D]" />
                243 Clark Avenue - Bagumbayan Quezon City, PH 1105
              </div>
              <div className="flex items-center justify-center gap-1 lg:justify-normal">
                <BiPhone className="text-sm text-[#00715D]" /> (02)995995
              </div>
              <div className="flex items-center justify-center gap-1 lg:justify-normal">
                <FiClock className="text-sm text-[#00715D]" /> 9:00 AM - 6:00 PM
              </div>
            </div>
          </nav>
          <nav className="relative grid grid-flow-col items-center px-2 py-2 lg:grid-cols-3">
            {/* Logo */}
            <div className="flex gap-2">
              <Link to="/">
                <img src="/img/logo4.png" alt="" className="w-[250px]" />
              </Link>
            </div>

            {/* Menu */}
            <div className="navbar-menu fixed top-[260px] z-50 hidden w-full items-center bg-white py-10 text-center text-[0.95em] duration-300 ease-in-out lg:static lg:block lg:translate-x-[0]">
              <ul className="bottom-0 top-10 grid gap-8 lg:grid-flow-col">
                <Link to="/">
                  <li className="rounded-none px-4 py-2 transition-all hover:bg-slate-100 lg:rounded-full">
                    Home
                  </li>
                </Link>
                <Link to="/services">
                  <li className="rounded-full px-4 py-2 transition-all hover:bg-slate-100">
                    Services
                  </li>
                </Link>
                <Link to="/about">
                  <li className="rounded-full px-4 py-2 transition-all hover:bg-slate-100">
                    About us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="grid justify-end">
              <button className="hidden rounded-lg bg-[#00715D] px-5 py-4 text-sm text-white transition-all hover:bg-[#018f75] active:bg-[#017761] lg:block">
                Book Appointment
              </button>
              {isMenu ? (
                <IoClose
                  size={40}
                  onClick={handleMenuOn}
                  className="block cursor-pointer lg:hidden"
                />
              ) : (
                <IoMenu
                  size={40}
                  onClick={handleMenuOn}
                  className="block cursor-pointer lg:hidden"
                />
              )}
            </div>
          </nav>
          {isMenu && (
            <nav className="flex items-center justify-center py-10">
              <ul className="grid w-full">
                <li
                  className="rounded-none px-4 py-6 transition-all hover:bg-slate-200 lg:rounded-full"
                  onClick={handleMenuOn}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="rounded-none px-4 py-6 transition-all hover:bg-slate-200 lg:rounded-full"
                  onClick={handleMenuOn}
                >
                  <Link to="/services">Services</Link>
                </li>
                <li
                  className="rounded-none px-4 py-6 transition-all hover:bg-slate-200 lg:rounded-full"
                  onClick={handleMenuOn}
                >
                  <Link to="/about">About us</Link>
                </li>
              </ul>
            </nav>
          )}
        </header>{" "}
      </div>
    </>
  );
};

export default Navbar;

const SocialBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Link
        to="/"
        className="rounded-full bg-[#F6f6f6] p-2 transition-all hover:bg-gray-200 hover:text-gray-700"
      >
        {children}
      </Link>
    </>
  );
};

import { BiPhone } from 'react-icons/bi';
import {
	BsClock,
	BsFacebook,
	BsInstagram,
	BsTwitterX,
	BsYoutube,
} from 'react-icons/bs';
import { CiClock1, CiLocationOn } from 'react-icons/ci';
import { FaClock } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
const Navbar = () => {
	return (
		<>
			<header>
				<nav className="grid grid-cols-2 px-2 py-1">
					<div className="flex gap-3 text-gray-700">
						<BsFacebook />
						<BsTwitterX />
						<BsInstagram />
						<BsYoutube />
					</div>
					<div className="flex gap-5 text-[0.8em] place-content-end">
						<div className="flex items-center gap-1">
							<SlLocationPin className="text-green-800" />
							243 Clark Avenue - Bagumbayan Quezon City, PH 1105
						</div>
						<div className="flex items-center gap-1">
							<BiPhone className="text-green-800" /> (02)995995
						</div>
						<div className="flex items-center gap-1">
							<FiClock className="text-green-800" /> 9:00 AM - 6:00 AM
						</div>
					</div>
				</nav>
				<nav className="grid grid-cols-3  items-center p-2">
					<div className="flex gap-2">
						<img src="/img/logo.png" alt="" className="w-[70px]" />
						<span className="font-bold">
							Financial <br />
							Growth
						</span>
					</div>
					<div className="items-center">
						<ul className="flex flex-row gap-8 text-sm">
							<li className="hover:bg-slate-100 px-4 py-2 rounded-full transition-all">
								Home
							</li>
							<li className="hover:bg-slate-100 px-4 py-2 rounded-full transition-all">
								Services
							</li>
							<li className="hover:bg-slate-100 px-4 py-2 rounded-full transition-all">
								About us
							</li>
						</ul>
					</div>
					<div className="grid justify-end">
						<button className="bg-green-700 text-white px-5 py-4 rounded-lg text-sm hover:bg-green-600 transition-all">
							Book Appointment
						</button>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

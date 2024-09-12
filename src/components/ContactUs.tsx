import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ContentHeader from "./ContentHeader";

const ContactUs = () => {
  return (
    <>
      <div className="grid gap-10 bg-gray-100 p-10 md:p-20">
        <ContentHeader
          className="grid text-center md:w-[700px]"
          subTitle="CONTACT US"
          title="We Love To Hear your Insights"
          content=""
        />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="grid gap-5 px-5">
            <div>
              <img
                src="/img/companygrouppic2.png"
                alt=""
                className="h-[220px] w-full rounded-xl object-cover"
              />
            </div>
            <div className="grid gap-3">
              <span className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                sed tenetur atque dolorem esse officiis amet repellat dolore
                vero minus, perferendis maxime sequi illo, vel ex doloremque,
                ratione enim et.
              </span>
              <div className="grid grid-flow-col place-content-start gap-5">
                <div className="rounded-full border-2 p-4 text-lg text-gray-400">
                  <BsTelephone className="border-gray-400" />
                </div>
                <div className="grid">
                  <span className="text-base font-bold">Phone</span>
                  <span className="text-sm text-gray-400">+1 (02) 995 995</span>
                </div>
              </div>
              <div className="grid grid-flow-col place-content-start gap-5">
                <div className="rounded-full border-2 p-4 text-lg text-gray-400">
                  <HiOutlineLocationMarker className="border-gray-400" />
                </div>
                <div className="grid">
                  <span className="text-base font-bold">Address</span>
                  <span className="text-sm text-gray-400">
                    243 Clark Avenue - Bagumbayan Quezon City, PH 1105
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-xl bg-white p-10">
            <input
              type="text"
              placeholder="Name"
              className="placeholder-sm w-full rounded-lg bg-gray-100 p-4"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full rounded-lg bg-gray-100 p-4"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-lg bg-gray-100 p-4"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="w-full resize-none rounded-lg bg-gray-100 p-4"
            />
            <button className="rounded-lg bg-yellow-400 py-5 text-sm transition-all hover:bg-yellow-300">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;

import { BsPiggyBank } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { PiGraduationCap, PiGrains, PiHandCoins } from "react-icons/pi";
import ServicesItem from "./ServicesItem";

const ServicesSections = () => {
  return (
    <>
      <div className="bg-slate-50 p-24 pt-[125px]">
        <div className="grid gap-6 text-center">
          <h3 className="text-lg font-bold text-gray-600">OUR SERVICES</h3>
          <h1 className="text-5xl font-bold text-black">
            We Are Here To Help You
          </h1>
          <span className="text-md text-gray-600">
            At FinanceUp Services, let us help you solve problems so that you
            can focus on your goals. <br /> We support your dream to come true.
          </span>
        </div>
        <div className="grid grid-flow-col items-center justify-center gap-5">
          <ServicesItem
            logo={<FaMoneyBillWheat />}
            title="Investment Management"
            content="We help people to develop solutions for Financial Problems. Giving
            you a chance to have a freedom in your Investment."
          />
          <ServicesItem
            logo={<BsPiggyBank />}
            title="Financial Planning"
            content="Assisting with tracking income and expenses to improve savings and spending habits."
          />
          <ServicesItem
            logo={<PiGraduationCap />}
            title="Retirement Planning"
            content="Helping you choose the right retirement accounts and contribution levels to meet your retirement goals."
          />
          <ServicesItem
            logo={<PiGrains />}
            title="Retirement Planning"
            content="Helping you choose the right retirement accounts and contribution levels to meet your retirement goals."
          />{" "}
          <ServicesItem
            logo={<PiHandCoins />}
            title="Retirement Planning"
            content="Helping you choose the right retirement accounts and contribution levels to meet your retirement goals."
          />
        </div>
      </div>
    </>
  );
};

export default ServicesSections;

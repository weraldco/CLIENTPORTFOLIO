import { BsPiggyBank } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { PiGraduationCap, PiGrains, PiHandCoins } from "react-icons/pi";
import ContentHeader from "./ContentHeader";
import ServicesItem from "./ServicesItem";

const ServicesSections = () => {
  return (
    <>
      <div className="grid gap-10 bg-slate-50 py-24">
        <div className="grid place-content-center">
          <ContentHeader
            className="grid w-[550px] text-center"
            subTitle="OUR SERVICES"
            title="We Are Here To Help You"
            content="At FinanceUp Services, let us help you solve problems so that you can
          focus on your goals. We support your dream to come true."
          />
        </div>
        <div className="grid grid-flow-col items-center justify-center gap-5">
          <ServicesItem
            logo={<FaMoneyBillWheat />}
            title="Investment Planning"
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

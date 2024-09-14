import { BsPiggyBank } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { PiGraduationCap, PiGrains, PiHandCoins } from "react-icons/pi";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const ServicesSections = () => {
  return (
    <>
      <WrapperDiv className="bg-slate-50">
        <div className="grid gap-10 p-10">
          <div className="grid place-content-center">
            <ContentHeader
              className="grid text-center md:w-[550px]"
              subTitle="OUR SERVICES"
              title="We Are Here To Help You"
              content="At FinanceUp Services, let us help you solve problems so that you can
          focus on your goals. We support your dream to come true."
            />
          </div>
          <div className="grid items-center justify-center gap-5 md:grid-flow-col">
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
      </WrapperDiv>
    </>
  );
};

export default ServicesSections;

type ServicesItemProps = {
  logo: any;
  title: string;
  content: string;
};

const ServicesItem = ({ logo, title, content }: ServicesItemProps) => {
  return (
    <>
      <div className="group grid w-full items-center justify-center gap-10 rounded-xl bg-white p-5 text-gray-600 shadow-md duration-300 ease-in-out hover:scale-110 md:w-[225px]">
        <div className="grid justify-center text-7xl text-[#00715D] group-hover:text-[#018f75]">
          {logo}
        </div>
        <div className="grid h-[150px]">
          <h1 className="text-center text-lg font-bold text-black group-hover:text-[#018f75]">
            {title}
          </h1>
          <span className="text-sm text-gray-600">{content}</span>
        </div>
      </div>
    </>
  );
};

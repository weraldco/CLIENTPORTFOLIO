import { GiRoundStar } from "react-icons/gi";
import ContentHeader from "./ContentHeader";

const WhyChooseUs = () => {
  return (
    <>
      <div className="grid place-content-center bg-orange-50">
        <div className="grid w-full grid-flow-col gap-10 p-10 text-gray-500 xl:w-[1280px] 2xl:w-[1536px]">
          <div className="grid gap-10">
            <div className="grid place-content-start">
              <ContentHeader
                className="grid text-left text-black"
                subTitle="WHY CHOOSE US"
                title="Come And Join With Us for A Better Life and Future"
                content=""
              />
            </div>
            <span className="grid gap-5">
              Join us and discover our mission and vission, we help you
              assestment for all the. To offer comprehensive financial planning
              and investment management services that address all aspects of our
              clients' financial lives. To build lasting relationships with our
              clients through transparency, integrity, and a dedication to their
              best interests.
              <ul className="grid gap-5">
                <li className="grid grid-flow-col gap-5">
                  <HireItem
                    title="Our Mission"
                    content="To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests."
                  />
                </li>
                <li className="grid grid-flow-col gap-5">
                  <HireItem
                    title="Our Vision"
                    content="To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests."
                  />
                </li>
                <li className="grid grid-flow-col gap-5">
                  <HireItem
                    title="Our Mission"
                    content="To offer comprehensive financial planning and investment management
          services that address all aspects of our clients' financial lives. To
          build lasting relationships with our clients through transparency,
          integrity, and a dedication to their best interests."
                  />
                </li>
              </ul>
            </span>
          </div>
          <div className="hidden place-content-center md:grid">
            <img src="/img/heart.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

const HireItem = ({ title, content }) => {
  return (
    <>
      <div className="grid items-center text-5xl">
        <GiRoundStar className="text-[#FDD65B]" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-black">{title}</h1>
        <span>{content}</span>
      </div>
    </>
  );
};

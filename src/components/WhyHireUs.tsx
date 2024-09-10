import { GiRoundStar } from "react-icons/gi";
import ContentHeader from "./ContentHeader";

const WhyHireUs = () => {
  return (
    <>
      <div className="grid grid-flow-col gap-10 bg-orange-50 p-20 text-gray-500">
        <div className="grid gap-10">
          <div className="grid place-content-start">
            <ContentHeader
              className="grid w-[700px] text-left"
              subTitle="WHY CHOOSE US"
              title="Come And Join With Us for A Better Life and Future"
              content=""
            />
          </div>
          <span className="grid gap-5">
            Join us and discover our mission and vission, we help you assestment
            for all the. To offer comprehensive financial planning and
            investment management services that address all aspects of our
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
        <div className="grid place-content-center">
          <img src="/img/heart.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default WhyHireUs;

const HireItem = ({ title, content }) => {
  return (
    <>
      <div className="grid items-center text-5xl">
        <GiRoundStar className="text-yellow-400" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-black">{title}</h1>
        <span>{content}</span>
      </div>
    </>
  );
};

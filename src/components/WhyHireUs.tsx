import { GiRoundStar } from "react-icons/gi";

const WhyHireUs = () => {
  return (
    <>
      <div className="grid grid-flow-col gap-10 bg-orange-50 p-20 text-gray-500">
        <div className="grid gap-10">
          <h1 className="text-base font-bold">WHY CHOOSE US</h1>
          <span className="text-5xl font-bold text-black">
            Come And Join With Us for <br /> A Better Life and Future
          </span>
          <span className="grid gap-5">
            Join us and discover our mission and vission, we help you assestment
            for all the. To offer comprehensive financial planning and
            investment management services that address all aspects of our
            clients' financial lives. To build lasting relationships with our
            clients through transparency, integrity, and a dedication to their
            best interests.
            <ul className="grid gap-5">
              <li className="grid grid-flow-col gap-5">
                <div className="grid items-center text-5xl">
                  <GiRoundStar className="text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-black">Our Mission</h1>
                  <span>
                    To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests.
                  </span>
                </div>
              </li>
              <li className="grid grid-flow-col gap-5">
                <div className="`items-center grid text-5xl">
                  <GiRoundStar className="text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-black">Our Vision</h1>
                  <span>
                    To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests.
                  </span>
                </div>
              </li>
              <li className="grid grid-flow-col gap-5">
                <div className="grid items-center text-5xl">
                  <GiRoundStar className="text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-black">Our Mission</h1>
                  <span>
                    To offer comprehensive financial planning and investment
                    management services that address all aspects of our clients'
                    financial lives. To build lasting relationships with our
                    clients through transparency, integrity, and a dedication to
                    their best interests.
                  </span>
                </div>
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

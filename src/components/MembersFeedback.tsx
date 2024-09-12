import { BiSolidQuoteLeft } from "react-icons/bi";
import ContentHeader from "./ContentHeader";

const MembersFeedback = () => {
  return (
    <>
      <div className="grid place-items-center py-20">
        <ContentHeader
          className="grid text-center md:w-[700px]"
          subTitle="FEEDBACK FROM OUR MEMBERS"
          title="Our Goal is To Satisfied Our Member By Helping Them"
          content="At FinanceUp Services, we identify all the cause of not having a
            financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
        />

        <div className="grid gap-10 py-10 md:grid-flow-col">
          <FeedbackItem />
          <FeedbackItem />
        </div>
      </div>
    </>
  );
};

export default MembersFeedback;

const FeedbackItem = () => {
  return (
    <>
      <div className="items-centerrounded-lg w-[400px] justify-start rounded-lg bg-gray-50 p-6 shadow-md">
        <span>
          <BiSolidQuoteLeft />
          We like the services of FinanceUp, it secure my future in different
          level. Thanks to this services
        </span>
        <div className="grid grid-flow-col place-content-end gap-3">
          <div className="grid place-content-center">
            <img
              src="/img/member/member1.jpg"
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold">Alodia Fine</h3>
            <span className="text-sm text-gray-600">Member</span>
          </div>
        </div>
      </div>
    </>
  );
};

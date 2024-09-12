import { FaUser } from "react-icons/fa";
import ContentHeader from "./ContentHeader";

const MemberCount = () => {
  return (
    <>
      <div className="grid gap-10 bg-slate-50 p-20 md:grid-cols-2">
        <div className="grid gap-10 py-10 text-center md:place-content-start">
          <ContentHeader
            className="grid md:w-[700px] md:text-left"
            subTitle="RECENTLY ASKED QUESTION"
            title="Frequently Asked Question"
            content=" At FinanceUp Services, we identify all the cause of not having a financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
          />
        </div>
        <div className="grid grid-cols-2 gap-20 p-10">
          <div className="mt-20 grid gap-10 px-20">
            <CardMember />
            <CardMember />
          </div>
          <div className="grid gap-10 pb-20">
            <CardMember />
            <CardMember />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCount;

const CardMember = () => {
  return (
    <>
      <div className="grid w-[175px] justify-center rounded-lg bg-white py-5 text-center shadow-md">
        <div className="grid place-content-center py-5">
          <FaUser className="text-4xl text-green-700" />
        </div>
        <h1 className="text-3xl font-bold">2568</h1>
        <h3 className="text-base">Members</h3>
      </div>
    </>
  );
};

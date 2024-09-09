import { FaUser } from "react-icons/fa";

const MemberCount = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 bg-slate-50 p-20">
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
        <div className="grid place-content-start gap-10 py-10">
          <h3 className="text-base font-bold text-gray-500">
            RECENTLY ASKED QUESTION
          </h3>
          <h1 className="text-5xl font-bold text-black">
            Frequently Asked Question
          </h1>
          <span className="text-md text-gray-600">
            At FinanceUp Services, we identify all the cause of not having a
            financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true.
          </span>
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

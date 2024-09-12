import { ComponentElement } from "react";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiHealthBookFill } from "react-icons/ri";
import ContentHeader from "./ContentHeader";

const FrequetlyAskedQuestion = () => {
  return (
    <>
      <div className="grid gap-10 bg-slate-50 p-10 md:grid-cols-2">
        <div className="grid gap-10 py-10 text-center md:place-content-start">
          <ContentHeader
            className="grid md:w-[700px] md:text-left"
            subTitle="RECENTLY ASKED QUESTION"
            title="Frequently Asked Question"
            content=" At FinanceUp Services, we identify all the cause of not having a financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
          />
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <div className="mt-20 grid gap-10">
            <CardMember count="2568" label="Enrolled Members">
              <FaUser />
            </CardMember>
            <CardMember count="1547" label="Studied">
              <PiStudentFill />
            </CardMember>
          </div>
          <div className="grid gap-10 pb-20">
            <CardMember count="3440" label="Insured Members">
              <RiHealthBookFill />
            </CardMember>
            <CardMember count="1330" label="Housing Loans">
              <BsFillHouseCheckFill />
            </CardMember>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequetlyAskedQuestion;

type CardMemberProps = {
  count: string | number;
  label: string;
  children: any;
};
const CardMember = ({ count, label, children }: CardMemberProps) => {
  return (
    <>
      <div className="grid w-[175px] justify-center rounded-lg bg-white py-5 text-center shadow-md">
        <div className="grid place-content-center py-5 text-4xl text-green-700">
          {children}
        </div>
        <h1 className="text-3xl font-bold">{count}</h1>
        <h3 className="text-sm text-gray-500">{label}</h3>
      </div>
    </>
  );
};

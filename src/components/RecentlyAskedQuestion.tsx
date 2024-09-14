import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiHealthBookFill } from "react-icons/ri";
import ContentHeader from "./ContentHeader";
import WrapperDiv from "./WrapperDiv";

const FrequetlyAskedQuestion = () => {
  return (
    <>
      <WrapperDiv className="bg-slate-50">
        <div className="grid md:grid-cols-2">
          <div className="grid gap-10 px-5 py-10 text-center">
            <ContentHeader
              className="grid text-center md:text-left"
              subTitle="RECENTLY ASKED QUESTION"
              title="Frequently Asked Question"
              content=" At FinanceUp Services, we identify all the cause of not having a financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true."
            />
          </div>
          <div className="grid place-items-center gap-10 md:grid-cols-2 md:gap-0 md:py-10">
            <div className="mt-10 grid gap-10">
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
      </WrapperDiv>
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
      <div className="grid h-[275px] w-[275px] justify-center rounded-lg bg-white py-5 text-center shadow-md duration-300 ease-in-out hover:scale-110">
        <div className="grid place-content-center py-5 text-5xl text-[#00715D]">
          {children}
        </div>
        <h1 className="text-5xl font-bold">{count}</h1>
        <h3 className="text-sm text-gray-500">{label}</h3>
      </div>
    </>
  );
};

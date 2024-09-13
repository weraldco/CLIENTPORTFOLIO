import ContentHeader from "./ContentHeader";

const OurTeam = () => {
  return (
    <>
      <div className="grid place-content-center">
        <div className="grid w-full gap-10 pb-20 pt-10 xl:w-[1280px] 2xl:w-[1536px]">
          <div className="grid items-center md:grid-flow-col">
            <ContentHeader
              className="grid text-center md:w-[700px] md:text-left"
              subTitle="OUR EXPERT TEAM"
              title="Meet The Team Behind Their Success Story"
              content=""
            />
            <div className="grid place-content-center md:place-content-end">
              <button className="grid rounded-lg bg-[#FDD65B] px-6 py-4 text-sm font-bold transition-all hover:bg-yellow-300 active:bg-[#fdd85e]">
                View All Members
              </button>
            </div>
          </div>

          <div className="grid place-items-center gap-x-5 gap-y-20 md:grid-flow-col">
            <Advisor
              img_url="/img/advisor/advisor1.png"
              name="Alexander Great"
              job="Professional Adviser"
            />
            <Advisor
              img_url="/img/advisor/advisor2.png"
              name="Sophia Andres"
              job="Professional Adviser"
            />
            <Advisor
              img_url="/img/advisor/advisor4.png"
              name="Keith Martin"
              job="Professional Adviser"
            />
            <Advisor
              img_url="/img/advisor/advisor5.png"
              name="Lylia Cortes"
              job="Professional Adviser"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OurTeam;

type AdvisorProps = {
  img_url: string;
  name: string;
  job: string;
};
const Advisor = ({ img_url, name, job }: AdvisorProps) => {
  return (
    <>
      <div className="group relative w-80 duration-300 ease-in-out hover:scale-105">
        <img
          src={img_url}
          className="h-[420px] w-[320px] rounded-xl object-cover"
          alt=""
        />
        <div className="absolute -bottom-10 left-5 right-5 grid rounded-lg bg-[#F7F7F7] py-4 text-center group-hover:bg-[#00715D]">
          <span className="font-bold group-hover:text-yellow-400">{name}</span>
          <span className="text-sm group-hover:text-white">{job}</span>
        </div>
      </div>
    </>
  );
};

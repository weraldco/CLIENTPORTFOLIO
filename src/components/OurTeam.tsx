const OurTeam = () => {
  return (
    <>
      <div className="grid gap-10 py-20">
        <div className="grid gap-8">
          <h3 className="text-base font-bold text-gray-500">OUR EXPERT TEAM</h3>
          <div className="grid grid-flow-col">
            <h1 className="text-5xl font-bold text-black">
              Meet The Team Behind <br /> Their Success Story
            </h1>
            <div className="grid place-content-end">
              <button className="grid w-64 items-center self-end rounded-lg bg-yellow-400 px-4 py-4 text-sm transition-all hover:bg-yellow-300">
                View All Members
              </button>
            </div>
          </div>
        </div>
        <div className="grid place-items-center gap-x-10 gap-y-20 md:grid-flow-col">
          <Advisor
            img_url="/img/advisor/advisor1.png"
            name="Alexander Great"
            job="Professiional Adviser"
          />
          <Advisor
            img_url="/img/advisor/advisor2.png"
            name="Sophia Andres"
            job="Professiional Adviser"
          />
          <Advisor
            img_url="/img/advisor/advisor4.png"
            name="Keith Martin"
            job="Professiional Adviser"
          />
          <Advisor
            img_url="/img/advisor/advisor5.png"
            name="Lylia Cortes"
            job="Professiional Adviser"
          />
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
        <div className="absolute -bottom-10 left-5 right-5 grid rounded-lg bg-slate-100 py-4 text-center group-hover:bg-green-700">
          <span className="font-bold group-hover:text-yellow-400">{name}</span>
          <span className="text-sm group-hover:text-white">{job}</span>
        </div>
      </div>
    </>
  );
};

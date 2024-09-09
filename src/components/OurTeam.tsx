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
        <div className="grid grid-cols-4 place-items-center">
          <Advisor />
          <Advisor />
          <Advisor />
          <Advisor />
        </div>
      </div>
    </>
  );
};
export default OurTeam;

const Advisor = () => {
  return (
    <>
      <div className="group relative w-80 duration-300 ease-in-out hover:scale-105">
        <img src="/img/advisor/advisor2.png" className="rounded-xl" alt="" />
        <div className="absolute -bottom-10 left-5 right-5 grid rounded-lg bg-slate-100 py-4 text-center group-hover:bg-green-700">
          <span className="font-bold group-hover:text-yellow-400">
            Sophia Andres
          </span>
          <span className="text-sm group-hover:text-white">
            Professional Adviser
          </span>
        </div>
      </div>
    </>
  );
};

const Banner = () => {
  return (
    <>
      <div className="relative grid grid-cols-2 gap-10 items-center justify-center py-[100px] p-24">
        <div className="">
          <img
          src="/img/plantvest2.png"
         
          alt=""
        />
          </div>
        <div className="grid gap-8">
          <h3 className="text-base font-bold text-gray-500">
            WELCOME TO FINANCEUP, YOUR FINANCIAL ADVISOR
          </h3>
          <h1 className="text-5xl font-bold text-black">
            Helping Each Other Can Make World Better.
          </h1>
          <span className="text-md text-gray-600">
            We help people manage and grow investment portfolio, including
            stocks, bonds, and mutual funds. We also create strategies to ensure
            you have enough savings and investments to retire comfortably,
            including managing retirement accounts
          </span>
          <ul className="text-md grid list-disc gap-3 pl-5 text-gray-600">
            <li>Investment Management</li>
            <li>Retirement Planning</li>
            <li>Insurance Planning</li>
            <li>Debt Management</li>
          </ul>
          <div>
            <button className="mt-4 rounded-lg bg-green-700 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-green-600">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

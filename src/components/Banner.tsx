const Banner = () => {
  return (
    <>
      <div className="relative grid h-[750px] items-center justify-center py-[100px]">
        <img
          src="/img/plantvest2.png"
          className="absolute left-[150px] top-[70px] w-[900px]"
          alt=""
        />
        <div className="absolute right-[200px] top-[100px] grid w-[600px] gap-3">
          <span className="text-md font-bold uppercase text-gray-600">
            Welcome to FinanceUp, your Financial Advisor
          </span>
          <span className="text-5xl font-bold text-black">
            Helping Each Other Can Make World Better.
          </span>
          <span className="text-md mt-4 text-gray-600">
            We help people manage and grow investment portfolio, including
            stocks, bonds, and mutual funds. We also create strategies to ensure
            you have enough savings and investments to retire comfortably,
            including managing retirement accounts
          </span>
          <ul className="text-md mt-4 grid list-disc gap-3 pl-5 text-gray-600">
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

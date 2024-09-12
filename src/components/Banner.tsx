import ContentHeader from "./ContentHeader";

const Banner = () => {
  return (
    <>
      {/* <div className="relative grid grid-cols-2 items-center justify-center gap-10 p-24 py-[100px]"> */}
      <div className="grid gap-10 md:grid-cols-2">
        <div className="grid gap-8">
          <ContentHeader
            className="grid text-center md:w-[700px] md:text-left"
            subTitle="WELCOME TO FINANCEUP, YOUR FINANCIAL ADVISOR"
            title="Helping Each Other Can Make World Better."
            content=" We help people manage and grow investment portfolio, including
            stocks, bonds, and mutual funds. We also create strategies to ensure
            you have enough savings and investments to retire comfortably,
            including managing retirement accounts"
          />

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
        <div className="">
          <img src="/img/plantvest2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;

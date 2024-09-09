const PopularCause = () => {
  return (
    <>
      <div className="grid justify-center gap-10 p-20">
        <div className="grid place-content-center gap-5 text-center">
          <h3 className="text-lg font-bold text-gray-600">
            CAUSES WE WANT TO ACHIEVE
          </h3>
          <h1 className="text-5xl font-bold text-black">
            Find The Popular Cause <br /> and Help You
          </h1>
          <span className="text-md w-[700px] text-gray-600">
            At FinanceUp Services, we identify all the cause of not having a
            financial freedom so let us help you solve problems so that you can
            focus on your goals. We support your dream to come true.
          </span>
        </div>

        <div className="grid grid-flow-col gap-10">
          <CauseItem
            imgUrl="/img/cause/cause3.png"
            label="Investement"
            title="You see the result of Investment"
            content="To offer comprehensive financial planning and investment management
            services that address all aspects of our clients' financial lives.
            To build lasting relationships with our clients through
            transparency, integrity, and a dedication to their best interests."
            percentage="52%"
            amount="24,280"
            total="40,000"
            type="invested"
            extraLabel="people invested"
          />
          <CauseItem
            imgUrl="/img/cause/cause2.png"
            label="Education"
            title="You let your child go to School"
            content="To offer comprehensive financial planning and investment management
            services that address all aspects of our clients' financial lives.
            To build lasting relationships with our clients through
            transparency, integrity, and a dedication to their best interests."
            percentage="52%"
            amount="24,280"
            total="40,000"
            type="studied"
            extraLabel="people studied"
          />
          <CauseItem
            imgUrl="/img/cause/cause1.png"
            label="Food"
            title="Able to buy food for your everyday life"
            content="To offer comprehensive financial planning and investment management
            services that address all aspects of our clients' financial lives.
            To build lasting relationships with our clients through
            transparency, integrity, and a dedication to their best interests."
            percentage="52%"
            amount="24,280"
            total="40,000"
            type="buy food"
            extraLabel="people can buy food"
          />
        </div>
      </div>
    </>
  );
};

export default PopularCause;

const CauseItem = ({
  imgUrl,
  label,
  title,
  content,
  type,
  percentage,
  amount,
  total,
  extraLabel,
}) => {
  return (
    <>
      <div className="grid w-[450px] gap-5">
        <div className="relative border-b-[7px] border-green-700">
          <img
            src={imgUrl}
            alt=""
            className="h-[300px] w-full rounded-t-2xl object-cover"
          />
          <span className="absolute bottom-0 left-10 rounded-t-lg bg-green-700 px-3 py-1 text-white">
            {label}
          </span>
        </div>
        <div className="grid gap-5 px-5 text-gray-600">
          <h1 className="text-xl font-bold text-green-700">{title}</h1>
          <span className="text-md">{content}</span>
          <div>
            <span className="grid justify-center text-sm">
              {percentage} {extraLabel}
            </span>
            <div className="h-[8px] w-full rounded-lg bg-slate-300">
              <div className="h-full w-[52%] bg-yellow-400"></div>
            </div>
            <div className="grid grid-cols-2 justify-evenly">
              <div className="grid w-[125px] grid-flow-col items-center">
                <span className="text-lg font-bold">{amount}</span>
                <span className="text-sm">{type}</span>
              </div>
              <span className="text-right text-lg font-bold">{total}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

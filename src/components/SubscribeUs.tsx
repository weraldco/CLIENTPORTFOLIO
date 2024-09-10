const SubscribeUs = () => {
  return (
    <>
      <div className="grid gap-10 bg-slate-100 p-20">
        <div className="grid place-items-center gap-5">
          <h1 className="text-base font-bold text-gray-500">SUBSCRIBE TO US</h1>
          <span className="text-5xl font-bold text-black">
            Subscribe for Newsletter
          </span>
          <span className="grid w-[700px] gap-5 text-center">
            Join us and discover our mission and vission, we help you assestment
            for all the. To offer comprehensive financial planning and
            investment management services that address all aspects of our
            clients' financial lives.
          </span>
        </div>
        <div className="grid grid-flow-col place-content-center gap-4">
          <input
            type="text"
            placeholder="Email address"
            className="w-[300px] rounded-lg p-4"
          />
          <button className="rounded-lg bg-yellow-400 px-10 py-4 text-sm transition-all hover:bg-yellow-300">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default SubscribeUs;

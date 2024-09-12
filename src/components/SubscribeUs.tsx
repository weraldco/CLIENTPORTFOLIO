import ContentHeader from "./ContentHeader";

const SubscribeUs = () => {
  return (
    <>
      <div className="subscriber-section grid gap-10 bg-slate-100 p-20">
        <div className="grid place-content-center">
          <ContentHeader
            className="grid w-[700px] text-center text-gray-50"
            subTitle="SUBSCRIBE TO US"
            title="Subscribe for Newsletter"
            content="Join us and discover our mission and vission, we help you assestment
            for all the. To offer comprehensive financial planning and
            investment management services that address all aspects of our
            clients' financial lives."
          />
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

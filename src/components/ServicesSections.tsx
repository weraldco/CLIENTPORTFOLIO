import ServicesItem from "./ServicesItem";

const ServicesSections = () => {
  return (
    <>
      <div className="bg-slate-50 pt-[125px]">
        <div className="grid gap-6 text-center">
          <span className="text-,d font-bold text-gray-600">OUR SERVICES</span>
          <span className="text-5xl font-bold text-black">
            We Are Here To Help You
          </span>
          <span className="text-md text-gray-600">
            At FinanceUp Services, let us help you solve problems so that you
            can focus on your goals. <br /> We support your dream to come true.
          </span>
        </div>
        <div>
          <ServicesItem />
        </div>
      </div>
    </>
  );
};

export default ServicesSections;

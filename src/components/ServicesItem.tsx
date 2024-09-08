import { FaMoneyBillWheat } from "react-icons/fa6";

const ServicesItem = () => {
  return (
    <>
      <div className="w-[300px] rounded-lg border-2 border-gray-300 p-8">
        <FaMoneyBillWheat className="text-6xl" />
        <h1 className="text-xl font-bold">Investment Management</h1>
        <span>
          We help people to develop solutions for Financial Problems. Giving you
          a chance to have a freedom in your Investment.
        </span>
      </div>
    </>
  );
};
export default ServicesItem;

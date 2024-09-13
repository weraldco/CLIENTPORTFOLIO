type ServicesItemProps = {
  logo: any;
  title: string;
  content: string;
};

const ServicesItem = ({ logo, title, content }: ServicesItemProps) => {
  return (
    <>
      <div className="grid w-full items-center justify-center gap-10 rounded-xl bg-white p-5 text-gray-600 shadow-md duration-300 ease-in-out hover:scale-110 md:w-[225px]">
        <div className="grid justify-center text-7xl text-green-700">
          {logo}
        </div>
        <div className="grid h-[150px]">
          <h1 className="text-center text-lg font-bold text-black">{title}</h1>
          <span className="text-sm text-gray-600">{content}</span>
        </div>
      </div>
    </>
  );
};
export default ServicesItem;

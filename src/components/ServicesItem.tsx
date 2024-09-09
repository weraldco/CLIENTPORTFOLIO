type ServicesItemProps = {
  logo: any;
  title: string;
  content: string;
};

const ServicesItem = ({ logo, title, content }: ServicesItemProps) => {
  return (
    <>
      <div className="grid w-[250px] items-center justify-center gap-10 rounded-xl bg-white p-5 shadow-md text-gray-600">
        <div className="grid justify-center text-7xl text-green-700">
          {logo}
        </div>
        <div className="h-[150px]">
          <h1 className="text-lg font-bold text-black">{title}</h1>
          <span className="text-base text-gray-700">{content}</span>
        </div>
      </div>
    </>
  );
};
export default ServicesItem;

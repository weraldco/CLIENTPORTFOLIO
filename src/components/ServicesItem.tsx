type ServicesItemProps = {
  logo: any;
  title: string;
  content: string;
};

const ServicesItem = ({ logo, title, content }: ServicesItemProps) => {
  return (
    <>
      <div className="grid h-[350px] w-[300px] items-center justify-center gap-10 rounded-xl bg-white p-8 shadow-lg">
        <div className="grid h-[100px] justify-center text-center text-7xl text-green-700">
          {logo}
        </div>
        <div className="h-[150px]">
          <h1 className="text-lg font-bold">{title}</h1>
          <span className="text-base text-gray-700">{content}</span>
        </div>
      </div>
    </>
  );
};
export default ServicesItem;

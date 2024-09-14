type WrapperDivProps = {
  children: React.ReactNode;
  className?: string;
};
const WrapperDiv = ({ children, className }: WrapperDivProps) => {
  return (
    <div className={`grid place-content-center ${className}`}>
      <div className="w-full py-6 xl:w-[1280px]">{children}</div>
    </div>
  );
};
export default WrapperDiv;

type WrapperDivProps = {
  children: React.ReactNode;
  className?: string;
};
const WrapperDiv = ({ children, className }: WrapperDivProps) => {
  return (
    <div className={`grid place-content-center ${className}`}>
      <div className="w-full xl:w-[1280px] 2xl:w-[1536px]">{children}</div>
    </div>
  );
};
export default WrapperDiv;

import { ComponentClass } from "react";

type ContentHeaderProps = {
  className: ComponentClass;
  subTitle: string;
  title: string;
  content: string;
};

const ContentHeader = ({
  className,
  subTitle,
  title,
  content,
}: ContentHeaderProps) => {
  return (
    <>
      <div className={`${className}`}>
        <h3 className="mb-5 text-base font-bold text-gray-500">{subTitle}</h3>
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <span className="text-md text-gray-600">{content}</span>
      </div>
    </>
  );
};

export default ContentHeader;

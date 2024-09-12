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
        <h3 className="mb-5 text-sm font-bold text-gray-500 md:text-base">
          {subTitle}
        </h3>
        <h1 className="mb-5 text-3xl font-bold md:text-5xl">{title}</h1>
        <span className="text-sm text-gray-600 md:text-base">{content}</span>
      </div>
    </>
  );
};

export default ContentHeader;

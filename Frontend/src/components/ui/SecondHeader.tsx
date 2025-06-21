import React from "react";

const SecondHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <h2 className="flex flex-col w-fit mx-auto mb-[10vh] z-0">
      <span className="text-[7vw] md:text-[10vw] leading-none text-dark dark:text-light font-sub_font -translate-x-[10%]">
        {title}
      </span>
      <span className="text-[7vw] md:text-[10vw] leading-none text-primary dark:text-primaryDark font-mont font-extrabold self-end translate-x-[10%]">
        {subtitle}
      </span>
    </h2>
  );
};

export default SecondHeader;
